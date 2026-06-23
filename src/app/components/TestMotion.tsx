"use client";

import { motion } from "motion/react";

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl bg-ppm-blue p-8 text-white"
    >
      Animacja działa.
    </motion.div>
  );
}
