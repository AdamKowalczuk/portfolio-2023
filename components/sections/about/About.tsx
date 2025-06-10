"use client";

import { useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion";
import { useTranslations } from "next-intl";

const formatDescription = (text: string) => `
<div class="space-y-8">
  <p class="text-lg text-[#e0d7ff] leading-relaxed">
    ${text}
  </p>
</div>`;

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

  const description = t
    .raw("description")
    .replace(
      /<b>(.*?)<\/b>/g,
      '<b class="text-primary font-semibold bg-white px-2 py-0.5 rounded-md inline-block mx-0.5 shadow-md">$1</b>'
    );

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
          <div className="from-primary/90 via-primary/80 to-primary/60 absolute inset-0 rounded-2xl bg-gradient-to-br md:rounded-[2rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          </div>
          <div className="relative px-4 py-8 md:px-8 md:py-12">
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
              aria-labelledby="about-subtitle"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
