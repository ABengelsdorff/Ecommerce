import About from "./components/about";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "@/app/components/projects";
import Contact from "./components/contact";


const page = () => {
  return (
    // <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
    <main className="relative z-10 min-h-screen bg-transparent">

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default page;
