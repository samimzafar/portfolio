import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Sameem Khan - ReactJS || React Native || MERN Stack Engineer",
  description:
    "Portfolio of Sameem Khan, experienced in ReactJS, React Native, and MERN Stack development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.className} bg-gradient-to-b from-gray-50 to-gray-100`}
      >
        <Header />
        <main className="container mx-0 px-0 py-0 sm:px-0 sm:py-0 sm:mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
