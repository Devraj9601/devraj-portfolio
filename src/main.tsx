import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Index } from "./routes/index";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);
