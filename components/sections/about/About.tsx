"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, easeInOut } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Highlighter } from "@/components/magicui/highlighter";

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

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("About");
  const locale = useLocale();

  useEffect(() => {
    const cleanupHighlighter = () => {
      const elements = document.querySelectorAll("[data-rough-notation]");
      elements.forEach((element) => {
        const annotations = (
          element as HTMLElement & { _roughNotation?: Array<{ remove: () => void }> }
        )._roughNotation;
        if (annotations) {
          annotations.forEach((annotation) => {
            if (annotation && typeof annotation.remove === "function") {
              annotation.remove();
            }
          });
        }
      });
    };

    cleanupHighlighter();

    return () => {
      cleanupHighlighter();
    };
  }, [locale]);

  return (
    <section id="about" className="py-16 md:py-24" aria-labelledby="about-title">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="mb-12 md:mb-16"
        >
          <h4 className="text-primary mb-3 text-center text-lg font-medium" id="about-subtitle">
            {t("subtitle")}
          </h4>
          <h2
            className="text-foreground text-center text-3xl font-bold md:text-4xl lg:text-5xl"
            id="about-title"
          >
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="relative w-full"
        >
          <div className="bg-primary/0 absolute inset-0 rounded-2xl md:rounded-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          </div>
          <div className="relative px-4 py-8 md:px-8 md:py-12">
            <div className="prose prose-invert max-w-none text-center">
              <p className="text-foreground space-x-2 text-left text-lg leading-relaxed tracking-wide">
                {(
                  t.raw("description") as Array<{ text: string; type: string; color?: string }>
                ).map((part, index) => {
                  if (part.type === "highlight") {
                    return (
                      <Highlighter
                        key={`${locale}-${index}`}
                        action="highlight"
                        color="oklch(.541 .281 293.009)"
                        padding={6}
                      >
                        <span className="text-white">{part.text}</span>
                      </Highlighter>
                    );
                  }
                  if (part.type === "break") {
                    return <span key={`${locale}-${index}`} className="block h-4" />;
                  }
                  return part.text;
                })}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
