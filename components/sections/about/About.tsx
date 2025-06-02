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
    <section id="about" className="py-20">
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
          className="relative w-full"
        >
          <div className="from-primary/90 via-primary/80 to-primary/60 absolute inset-0 rounded-[2rem] bg-gradient-to-br">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          </div>
          <div className="relative px-8 py-12">
            <div dangerouslySetInnerHTML={{ __html: formatDescription(description) }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
