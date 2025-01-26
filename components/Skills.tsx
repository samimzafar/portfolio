import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "JavaScript",
    "ES6",
    "TypeScript",
    "React",
    "React Native",
    "React Hooks",
    "Redux",
    "Context API",
    "NPM Libraries",
    "CSS Flexbox",
    "API Integrations",
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Strengths
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white px-6 py-3 rounded-full shadow-lg text-green-700 font-semibold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

