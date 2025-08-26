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
        src: "/assets/projects-images/notes44/notes44-1.png",
        alt: "Notes44 - główny edytor tekstu z obsługą Markdown",
      },
      {
        src: "/assets/projects-images/notes44/notes44-2.png",
        alt: "Notes44 - system zarządzania plikami i vaults",
      },
      {
        src: "/assets/projects-images/notes44/notes44-3.png",
        alt: "Notes44 - synchronizacja z Google Drive",
      },
      {
        src: "/assets/projects-images/notes44/notes44-4.png",
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
    key: "lingrow",
    images: [
      {
        src: "/assets/projects-images/lingrow/homepage.png",
        alt: "Lingrow - strona główna platformy do nauki języków",
      },
      {
        src: "/assets/projects-images/lingrow/learn-page.png",
        alt: "Lingrow - strona nauki z interaktywnymi lekcjami",
      },
      {
        src: "/assets/projects-images/lingrow/lesson-page.png",
        alt: "Lingrow - interaktywna lekcja z pytaniami",
      },
      {
        src: "/assets/projects-images/lingrow/quests-page.png",
        alt: "Lingrow - system questów i wyzwań",
      },
      {
        src: "/assets/projects-images/lingrow/leaderboard-page.png",
        alt: "Lingrow - tablica wyników i ranking",
      },
      {
        src: "/assets/projects-images/lingrow/shop-page.png",
        alt: "Lingrow - sklep z systemem punktów",
      },
      {
        src: "/assets/projects-images/lingrow/admin-panel.png",
        alt: "Lingrow - panel administracyjny React Admin",
      },
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Stripe",
      "Zustand",
      "React Admin",
      "next-intl",
    ],
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
              const key = project.key;
              const isEven = idx % 2 === 0; // Parzyste indeksy = zdjęcie z lewej
              return (
                <motion.div
                  key={key}
                  className="w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={projectVariants}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                >
                  {/* Projekt w jednym boxie */}
                  <div
                    className={`bg-card/50 border-border/50 flex w-full flex-col rounded-xl border p-6 shadow-lg md:flex-row md:gap-8 md:p-8 ${!isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Carousel ze zdjęciami */}
                    <div className="mb-6 md:mb-0 md:w-1/2">
                      <div className="relative h-[300px] w-full md:h-[400px]">
                        <ProjectSlider
                          images={project.images}
                          projectTitle={tProjects(`${key}.name`)}
                          priority={idx === 0}
                        />
                      </div>
                    </div>

                    {/* Treść projektu */}
                    <div className="flex w-full flex-col justify-between md:w-1/2">
                      {/* Górna część - Tytuł, opis, technologie */}
                      <div>
                        {/* Tytuł projektu */}
                        <h3
                          className="text-foreground mb-4 text-2xl font-semibold md:text-3xl"
                          id={`project-${idx}-title`}
                        >
                          {tProjects(`${key}.name`)}
                        </h3>

                        {/* Opis projektu */}
                        <p
                          className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg"
                          aria-labelledby={`project-${idx}-title`}
                        >
                          {tProjects(`${key}.description`)}
                        </p>

                        {/* Technologie */}
                        <div
                          className="flex flex-wrap gap-2"
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
                      </div>

                      {/* Przycisk - wyrównany do dołu */}
                      <div className="mt-8">
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
                              {tProjects(`${key}.button.icon`) === "googleplay" && (
                                <GooglePlayIcon />
                              )}
                              <span>{tProjects(`${key}.button.label`)}</span>
                            </div>
                          </Button>
                        </a>
                      </div>
                    </div>
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
