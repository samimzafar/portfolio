import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import WorkEnvironment from "../components/WorkEnvironment";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkEnvironment />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
