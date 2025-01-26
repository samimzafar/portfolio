"use client";
import { motion } from "framer-motion";
import {
  Kanban,
  Users,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Bug,
} from "lucide-react";

export default function WorkEnvironment() {
  const environments = [
    {
      icon: <Kanban />,
      title: "Agile Methodologies",
      description: "Experienced in Scrum and Kanban frameworks",
    },
    {
      icon: <Users />,
      title: "Cross-functional Collaboration",
      description:
        "Worked with Scrum Masters, QA, Backend Developers, and Product Owners",
    },
    {
      icon: <GitBranch />,
      title: "Version Control",
      description: "Proficient in Git workflows and branching strategies",
    },
    {
      icon: <GitCommit />,
      title: "Continuous Integration",
      description:
        "Implemented CI/CD pipelines for automated testing and deployment",
    },
    {
      icon: <GitMerge />,
      title: "Code Reviews",
      description: "Participated in and conducted thorough code reviews",
    },
    {
      icon: <GitPullRequest />,
      title: "Feature Development",
      description: "Managed feature branches and pull requests",
    },
    {
      icon: <Bug />,
      title: "Bug Tracking",
      description: "Experience with issue tracking and bug resolution",
    },
  ];

  return (
    <section
      id="work-environment"
      className="py-20 bg-gradient-to-r from-teal-400 to-green-500 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Environment
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {environments.map((env, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-teal-500 mr-4">{env.icon}</div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  {env.title}
                </h3>
                <p className="text-gray-600">{env.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
