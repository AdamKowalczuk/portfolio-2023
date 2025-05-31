import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Skills } from "@/components/sections/skills/Skills";
import { Projects } from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto w-full px-4 md:px-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
