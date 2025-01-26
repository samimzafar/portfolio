"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-orange-600">
              Get in Touch
            </h3>
            <p className="mb-6 text-gray-700">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-orange-500" />
                <a
                  href="mailto:camim.xafar500@gmail.com"
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                >
                  camim.xafar500@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-orange-500" />
                <a
                  href="tel:+923068099788"
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                >
                  +92 306 8099788
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="w-6 h-6 mr-3 text-orange-500" />
                <a
                  href="https://www.linkedin.com/in/samim-zafar-b99a41214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                >
                  Samim Zafar
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-orange-500" />
                <span className="text-gray-700">Islamabad, Pakistan</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-orange-600">
              Send a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
