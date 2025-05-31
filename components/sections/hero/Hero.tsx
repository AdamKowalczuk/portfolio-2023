"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const badge = "Frontend Developer";
const name = "Adam";
const shortDesc =
  "I create modern, intuitive and responsive web interfaces using React and Next.js.";

const sectionVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.5 } },
};

const scrollIntoView = (id: string) => {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;
  const yOffset = -90;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const Hero = () => {
  return (
    <section id="hero" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-10"
        >
          <div className="flex w-full flex-col items-center md:w-1/2 md:items-start">
            <span className="mb-4 inline-block rounded-2xl bg-[#2d1856] px-5 py-2 text-base font-semibold text-[#e0d7ff]">
              {badge}
            </span>
            <h1 className="text-foreground mb-2 text-4xl font-bold">
              Hi, I am <span className="text-primary">{name}</span>
            </h1>
            <p className="text-muted-foreground mt-4 mb-4 text-center text-left text-lg md:max-w-lg md:text-left">
              {shortDesc}
            </p>
            <div className="mt-2 flex w-full justify-center gap-4 md:w-auto md:justify-start">
              <Button
                size="lg"
                aria-label="See projects"
                tabIndex={0}
                onClick={() => scrollIntoView("projects")}
              >
                See projects
              </Button>
              <Button size="lg" variant="secondary" asChild aria-label="Download CV" tabIndex={0}>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center md:w-1/2">
            <Image
              src="/assets/images/avatar.png"
              alt="Avatar representing Adam, a React Frontend Developer"
              width={500}
              height={400}
              className="border-border w-auto rounded-xl border object-cover shadow-lg"
              aria-label="Avatar"
              tabIndex={0}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
