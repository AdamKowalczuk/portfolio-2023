"use client";

import { useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const skills = [
  {
    section: "Frontend",
    items: [
      { name: "HTML", img: "/assets/skills-icons/html-icon.svg" },
      { name: "JavaScript", img: "/assets/skills-icons/js-icon.svg" },
      { name: "TypeScript", img: "/assets/skills-icons/typescript-icon.svg" },
      { name: "React", img: "/assets/skills-icons/react-icon.svg" },
      { name: "React Hook Form", img: "/assets/skills-icons/react-hook-form-icon.svg" },
      { name: "Redux", img: "/assets/skills-icons/redux-icon.svg" },
      { name: "GraphQL", img: "/assets/skills-icons/graphql-icon.svg" },
      { name: "Next.js", img: "/assets/skills-icons/nextjs-icon.svg" },
      { name: "TanStack Query", img: "/assets/skills-icons/react-query-icon.svg" },
      { name: "Zustand", img: "/assets/skills-icons/zustand-icon.svg" },
      { name: "Zod", img: "/assets/skills-icons/zod-icon.svg" },
    ],
  },
  {
    section: "Styling",
    items: [
      { name: "CSS", img: "/assets/skills-icons/css-icon.svg" },
      { name: "SASS", img: "/assets/skills-icons/sass-icon.svg" },
      { name: "Tailwind CSS", img: "/assets/skills-icons/tailwind-icon.svg" },
      { name: "Chakra UI", img: "/assets/skills-icons/chakra-ui-icon.png" },
      { name: "Material UI", img: "/assets/skills-icons/material-ui-icon.png" },
      { name: "Shadcn/UI", img: "/assets/skills-icons/shadcn.png" },
      { name: "Radix UI", img: "/assets/skills-icons/radix-ui-icon.svg" },
      { name: "Framer Motion", img: "/assets/skills-icons/framer-motion-icon.svg" },
    ],
  },
  {
    section: "Backend",
    items: [
      { name: "Node.js", img: "/assets/skills-icons/nodejs-icon.svg" },
      { name: "MongoDB", img: "/assets/skills-icons/mongodb-icon.svg" },
      { name: "Strapi", img: "/assets/skills-icons/strapi-icon.svg" },
      { name: "REST API", img: "/assets/skills-icons/rest-api-icon.svg" },
      { name: "WebSocket", img: "/assets/skills-icons/websocket-icon.svg" },
    ],
  },
  {
    section: "Tools",
    items: [
      { name: "Git", img: "/assets/skills-icons/git-icon.svg" },
      { name: "VSCode", img: "/assets/skills-icons/vs-icon.svg" },
      { name: "Figma", img: "/assets/skills-icons/figma-icon.svg" },
      { name: "Adobe XD", img: "/assets/skills-icons/adobexd-icon.svg" },
      { name: "Postman", img: "/assets/skills-icons/postman-icon.svg" },
      { name: "Cursor AI", img: "/assets/skills-icons/cursor-icon.svg" },
    ],
  },
  {
    section: "Testing",
    items: [
      { name: "Jest", img: "/assets/skills-icons/jest-icon.svg" },
      { name: "React Testing Library", img: "/assets/skills-icons/react-testing-library-icon.svg" },
      { name: "Cypress", img: "/assets/skills-icons/cypress-icon.svg" },
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

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="bg-background py-20" aria-labelledby="skills-title">
      <style jsx global>{`
        /* Style dla ikon w trybie jasnym i ciemnym */
        .radix-icon,
        .rest-api-icon,
        .websocket-icon,
        .nextjs-icon {
          /* Wymuszamy czarny kolor w jasnym motywie */
          filter: brightness(0);
        }

        /* Białe w ciemnym motywie */
        :global(.dark) .radix-icon,
        :global(.dark) .rest-api-icon,
        :global(.dark) .websocket-icon,
        :global(.dark) .nextjs-icon {
          filter: brightness(0) invert(1);
        }
      `}</style>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mb-16"
        >
          <h4 className="text-primary mb-2 text-center text-lg font-medium" id="skills-subtitle">
            {t("subtitle")}
          </h4>
          <h2 className="text-foreground text-center text-4xl font-bold" id="skills-title">
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="flex flex-col space-y-12" role="list" aria-label={t("title")}>
            {skills.map((category) => (
              <div key={category.section} className="flex flex-col space-y-6" role="listitem">
                <h3
                  className="text-foreground text-2xl font-semibold"
                  id={`skills-${category.section.toLowerCase()}`}
                >
                  {t(`categories.${category.section.toLowerCase()}`)}
                </h3>
                <div
                  className="flex flex-wrap gap-8"
                  role="list"
                  aria-labelledby={`skills-${category.section.toLowerCase()}`}
                >
                  {category.items.map((item) => {
                    const getIconClass = (name: string) => {
                      switch (name) {
                        case "Radix UI":
                          return "radix-icon";
                        case "REST API":
                          return "rest-api-icon";
                        case "WebSocket":
                          return "websocket-icon";
                        case "Next.js":
                          return "nextjs-icon";
                        default:
                          return "";
                      }
                    };

                    return (
                      <motion.div
                        key={item.name}
                        className="group relative flex flex-col items-center gap-2"
                        variants={iconVariants}
                        whileHover="hover"
                        tabIndex={0}
                        role="listitem"
                        aria-label={`${item.name} skill`}
                      >
                        <div
                          className="bg-primary/15 hover:bg-primary/25 dark:bg-primary/15 dark:hover:bg-primary/25 flex h-16 w-16 items-center justify-center rounded-xl p-3 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:h-20 md:w-20 md:p-4 dark:group-hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)]"
                          aria-hidden="true"
                        >
                          <div className="relative h-10 w-10 md:h-12 md:w-12">
                            <Image
                              src={item.img}
                              alt=""
                              fill
                              sizes="(max-width: 768px) 40px, 48px"
                              className={`object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 ${getIconClass(item.name)}`}
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <p
                          className="text-foreground/80 group-hover:text-foreground mt-1 text-center text-xs font-medium transition-colors duration-300 md:text-sm"
                          aria-hidden="true"
                        >
                          {item.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
