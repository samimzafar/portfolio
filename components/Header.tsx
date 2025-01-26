"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white container mx-auto px-4">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Sameem Khan
        </Link>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#skills">Skills</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:camim.xafar500@gmail.com"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">camim.xafar500@gmail.com</span>
            </a>
            <a
              href="tel:+923068099788"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+92 306 8099788</span>
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            <li>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-center space-y-4 px-4 py-4">
            <a
              href="mailto:camim.xafar500@gmail.com"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">camim.xafar500@gmail.com</span>
            </a>
            <a
              href="tel:+923068099788"
              className="flex items-center hover:text-gray-300 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+92 306 8099788</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
