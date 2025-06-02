import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Skills } from "@/components/sections/skills/Skills";
import { Projects } from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
