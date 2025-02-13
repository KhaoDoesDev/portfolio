"use client";
import { motion } from "framer-motion";

export function WavingText({ text }: { text: string }) {
  return (
    <motion.span
      className="inline-block w-fit"
      animate={{
        rotate: [0, 20, 0],
        transition: {
          duration: 0.5,
          repeatDelay: 2,
          repeat: Infinity,
        },
      }}
    >
      {text}
    </motion.span>
  );
}