"use client";

import { useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion";
import { GithubIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ProjectSlider } from "./ProjectSlider";
import { GooglePlayIcon } from "@/components/icons/GooglePlayIcon";

const projectsData = [
  {
    key: "notes44",
    images: [
      {
        src: "/assets/projects-images/notes44-1.png",
        alt: "Notes44 - główny edytor tekstu z obsługą Markdown",
      },
      {
        src: "/assets/projects-images/notes44-2.png",
        alt: "Notes44 - system zarządzania plikami i vaults",
      },
      {
        src: "/assets/projects-images/notes44-3.png",
        alt: "Notes44 - synchronizacja z Google Drive",
      },
      {
        src: "/assets/projects-images/notes44-4.png",
        alt: "Notes44 - synchronizacja z Google Drive",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tauri",
      "React Native",
      "Expo",
      "Zustand",
      "Markdown",
      "Google Drive API",
    ],
  },
  // {
  //   key: "planHarmony",
  //   images: [
  //     {
  //       src: "/assets/projects-images/project2.png",
  //       alt: "Plan Harmony - główny dashboard aplikacji",
  //     },
  //   ],
  //   technologies: ["React", "Framer motion", "Redux"],
  //   reverse: true,
  // },
  {
    key: "netflixClone",
    images: [
      {
        src: "/assets/projects-images/project3.png",
        alt: "Netflix clone - strona główna z filmami",
      },
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Prisma", "MongoDB"],
  },
  {
    key: "webfront",
    images: [
      {
        src: "/assets/projects-images/project1.png",
        alt: "WebFront - główny widok platformy edukacyjnej",
      },
    ],
    technologies: ["React", "MongoDB", "Redux", "Node.js", "PWA", "Express.js"],
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
  const tProjects = useTranslations("Projects.projects");

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
              const key = project.key;
              return (
                <motion.div
                  key={key}
                  className={`flex flex-col-reverse md:flex-row ${isReverse ? "md:flex-row-reverse" : ""} w-full items-center gap-8 md:gap-16`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={projectVariants}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                >
                  {/* Slider projektu */}
                  <div className="flex w-full justify-center md:w-1/2">
                    <div className="relative h-[400px] w-full max-w-[550px] md:h-[500px]">
                      <ProjectSlider
                        images={project.images}
                        projectTitle={tProjects(`${key}.name`)}
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                  {/* Opis projektu */}
                  <div className="bg-card/50 border-border/50 flex w-full flex-col items-start rounded-xl border p-6 shadow-lg md:w-1/2 md:p-8">
                    <h3
                      className="text-foreground mb-4 text-2xl font-semibold md:text-3xl"
                      id={`project-${idx}-title`}
                    >
                      {tProjects(`${key}.name`)}
                    </h3>
                    <p
                      className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg"
                      aria-labelledby={`project-${idx}-title`}
                    >
                      {tProjects(`${key}.description`)}
                    </p>
                    <div
                      className="mb-8 flex flex-wrap gap-2"
                      role="list"
                      aria-label={`Technologies used in ${tProjects(`${key}.name`)}`}
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
                    {/* Przycisk uniwersalny */}
                    <a
                      href={tProjects(`${key}.button.url`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={tProjects(`${key}.button.label`)}
                      tabIndex={0}
                      className="w-full"
                    >
                      <Button size="large" className="w-full gap-2" asChild>
                        <div className="flex items-center justify-center">
                          {tProjects(`${key}.button.icon`) === "github" && (
                            <GithubIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                          {tProjects(`${key}.button.icon`) === "googleplay" && <GooglePlayIcon />}
                          <span>{tProjects(`${key}.button.label`)}</span>
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
