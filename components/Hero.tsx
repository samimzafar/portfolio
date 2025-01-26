"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          Sameem Khan
        </motion.h1>
        <motion.h2
          className="text-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          ReactJS || React Native || MERN Stack Engineer
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Mobile and Web Engineer with over 3 years of experience in building
          robust and user-friendly applications. Proficient in developing
          cross-platform solutions with React Native, creating responsive web
          applications with ReactJS, and building full-stack applications using
          the MERN (MongoDB, Express, React, Node.js) stack.
        </motion.p>
      </motion.div>
    </section>
  );
}
