"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          I'm a passionate React Native Mobile Engineer with a knack for
          creating seamless user experiences. My journey in tech has been driven
          by a desire to build applications that not only function flawlessly
          but also delight users with their intuitive design and smooth
          performance.
        </motion.p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Languages
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>Urdu - Native</li>
              <li>English - Professional working proficiency</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-purple-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-800">
              Hobbies
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>Book Reading - Expanding knowledge and imagination</li>
              <li>
                Podcasts - Staying updated with tech trends and innovations
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
