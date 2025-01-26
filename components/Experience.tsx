"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "React Native Engineer",
      company: "DPL",
      location: "Islamabad, PK",
      period: "Jul 2023 - Present",
      description:
        "Working as a React Native Software Engineer with a focus on UI and functionality. Leading developers and working with cross-functional teams to deliver high-quality software solutions. Production skills in the Mobile deployment process using Google Console/AppleStoreConnect and TestFlight.",
    },
    {
      title: "React Developer",
      company: "NOVA TECH",
      location: "Islamabad, PK",
      period: "Mar 2021 - Jun 2023",
      description:
        "Worked as a React || React Native Developer on the VidiVet App and FindMeResource. Developed robust applications using advanced technologies to ensure high performance and reliability. Leveraged a tech stack that included JavaScript, React, React Native, Redux, and Git to build and enhance app functionality.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-blue-600">{exp.title}</h3>
              <p className="text-gray-600 mt-2">
                {exp.company} - {exp.location}
              </p>
              <p className="text-gray-500 mt-1">{exp.period}</p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
