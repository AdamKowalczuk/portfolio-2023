"use client";

import { useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "WebFront",
    image: "/assets/projects-images/project1.png",
    alt: "WebFront project screenshot",
    description:
      "Interactive learning platform built with MERN stack, featuring JWT authentication and comprehensive HTML, CSS, and JavaScript tutorials.",
    github: "https://github.com/AdamKowalczuk/praca-inzynierska-client",
    technologies: ["React", "MongoDB", "Redux", "Node.js", "PWA", "Express.js"],
  },
  {
    title: "Plan Harmony",
    image: "/assets/projects-images/project2.png",
    alt: "Plan Harmony project screenshot",
    description:
      "Modern task management application with activity tracking and analytics, built with React and enhanced by smooth animations.",
    github: "https://github.com/AdamKowalczuk/plan-harmony",
    technologies: ["React", "Framer motion", "Redux"],
    reverse: true,
  },
  {
    title: "Netflix clone",
    image: "/assets/projects-images/project3.png",
    alt: "Netflix clone project screenshot",
    description:
      "Full-stack Netflix clone featuring authentication, video streaming, and responsive design, built with Next.js and TypeScript.",
    github: "https://github.com/AdamKowalczuk/netflix-clone",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Prisma", "MongoDB"],
  },
  {
    title: "Nerd Shop",
    image: "/assets/projects-images/project4.png",
    alt: "Nerd Shop project screenshot",
    description:
      "E-commerce platform with PayPal integration, featuring product catalog, cart management, and secure checkout process.",
    github: "https://github.com/AdamKowalczuk/e-commerce-react",
    technologies: ["React", "PayPal sandbox", "React router"],
    reverse: true,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeInOut,
      delay: 0.5,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="bg-background py-16 md:py-24"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mb-12 md:mb-16"
        >
          <h4 className="text-primary mb-3 text-center text-lg font-medium" id="projects-subtitle">
            {t("subtitle")}
          </h4>
          <h2
            className="text-foreground text-center text-3xl font-bold md:text-4xl lg:text-5xl"
            id="projects-title"
          >
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="flex flex-col gap-16 md:gap-20">
            {projectsData.map((project, idx) => {
              const isReverse = project.reverse;
              return (
                <motion.div
                  key={project.title}
                  className={`flex flex-col-reverse md:flex-row ${isReverse ? "md:flex-row-reverse" : ""} w-full items-center gap-8 md:gap-16`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={projectVariants}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                >
                  {/* Obraz projektu */}
                  <div className="flex w-full justify-center md:w-1/2">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={550}
                        height={550}
                        className="rounded-xl object-cover"
                        aria-label={project.alt}
                        tabIndex={0}
                        priority={idx === 0}
                        loading={idx === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {/* Opis projektu */}
                  <div className="bg-card/50 border-border/50 flex w-full flex-col items-start rounded-xl border p-6 shadow-lg md:w-1/2 md:p-8">
                    <h3
                      className="text-foreground mb-4 text-2xl font-semibold md:text-3xl"
                      id={`project-${idx}-title`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg"
                      aria-labelledby={`project-${idx}-title`}
                    >
                      {project.description}
                    </p>
                    <div
                      className="mb-8 flex flex-wrap gap-2"
                      role="list"
                      aria-label={`Technologies used in ${project.title}`}
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/10 inline-block rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                          role="listitem"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      tabIndex={0}
                      className="w-full"
                    >
                      <Button size="large" className="w-full gap-2" asChild>
                        <div className="flex items-center justify-center">
                          <GithubIcon className="h-5 w-5" aria-hidden="true" />
                          <span>{t("viewOnGithub")}</span>
                        </div>
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
