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
    <section id="skills" className="bg-background py-20">
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
          <h4 className="text-primary mb-2 text-center text-lg font-medium">{t("subtitle")}</h4>
          <h2 className="text-foreground text-center text-4xl font-bold">{t("title")}</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="flex flex-col space-y-12">
            {skills.map((category) => (
              <div key={category.section} className="flex flex-col space-y-6">
                <h3 className="text-foreground text-2xl font-semibold">{category.section}</h3>
                <div className="flex flex-wrap gap-8">
                  {category.items.map((item) => {
                    // Określamy klasę dla konkretnej ikony
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
                        aria-label={item.name}
                      >
                        <div className="bg-primary/10 hover:bg-primary/20 dark:bg-primary/5 dark:hover:bg-primary/10 flex h-20 w-20 items-center justify-center rounded-xl p-4 transition-all duration-300 ease-in-out group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:group-hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)]">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={48}
                            height={48}
                            className={`object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 ${getIconClass(item.name)}`}
                            aria-label={item.name}
                            tabIndex={0}
                          />
                        </div>
                        <p className="text-foreground/80 group-hover:text-foreground mt-1 text-center text-sm font-medium transition-colors duration-300">
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
