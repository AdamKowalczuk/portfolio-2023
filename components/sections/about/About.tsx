"use client";

import { useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion";
import { useTranslations } from "next-intl";

const aboutDesc = `I am a passionate <b>frontend developer</b> with 3 years of experience, specializing in <b>React</b> and <b>Next.js</b>. I create modern, intuitive and fully responsive <b>web interfaces</b> that focus on user experience and aesthetics. I pay great attention to detail and always strive for clean, maintainable code.<br /><br />Outside of programming, I enjoy <b>running</b>, <b>reading</b> and discovering new <b>board games</b>.<br /><br />Feel free to check out my <b>portfolio</b> and contact me if you want to collaborate or just say hi!`;

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
            <p className="text-lg text-[#e0d7ff]" dangerouslySetInnerHTML={{ __html: aboutDesc }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
