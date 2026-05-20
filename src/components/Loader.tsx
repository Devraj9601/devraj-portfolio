import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto rounded-full border-2 border-neon/20 border-t-neon"
              style={{ boxShadow: "0 0 30px oklch(0.85 0.2 200 / 0.4)" }}
            />
            <div className="mt-6 font-mono text-sm text-neon tracking-[0.3em]">
              INITIALIZING<span className="animate-blink">_</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
