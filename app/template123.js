"use client";
import { motion } from "framer-motion";
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
      }}
      className="h-screen min-h-max w-screen min-w-max bg-gradient-to-b from-base-300 to-white "
    >
      {children}
    </motion.div>
  );
}
