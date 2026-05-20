import "./lib/error-capture";

import { appendFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: string;
};

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const messagesFilePath = resolve(dirname(fileURLToPath(import.meta.url)), "../messages.txt");

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);

    if (url.pathname === "/api/messages") {
      if (request.method === "POST") {
        try {
          const body = await request.json();
          const { name, email, subject, message } = body as Record<string, string>;

          if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Missing required fields." }), {
              status: 400,
              headers: { "content-type": "application/json" },
            });
          }

          const newMessage: ContactMessage = {
            name,
            email,
            subject,
            message,
            sentAt: new Date().toISOString(),
          };

          const formattedMessage = `SentAt: ${newMessage.sentAt}\nName: ${newMessage.name}\nEmail: ${newMessage.email}\nSubject: ${newMessage.subject || "(none)"}\nMessage:\n${newMessage.message}\n${"-".repeat(60)}\n`;
          await appendFile(messagesFilePath, formattedMessage, "utf8");

          return new Response(JSON.stringify(newMessage), {
            status: 201,
            headers: { "content-type": "application/json" },
          });
        } catch (error) {
          console.error(error);
          return new Response(JSON.stringify({ error: "Invalid request payload." }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }
      }

      return new Response(null, { status: 405 });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
