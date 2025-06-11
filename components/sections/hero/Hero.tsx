"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-10 lg:mx-auto lg:max-w-6xl"
        >
          <div className="flex w-full flex-col items-center md:w-1/2 md:items-center lg:items-start">
            <span className="mb-4 inline-block rounded-2xl bg-[#2d1856] px-5 py-2 text-base font-semibold text-[#e0d7ff] md:text-lg">
              {t("badge")}
            </span>
            <h1 className="text-foreground mb-2 text-center text-4xl font-bold md:text-left md:text-5xl lg:text-6xl">
              {t("greeting")} <span className="text-primary">{t("title")}</span>
            </h1>
            <p className="text-muted-foreground mt-4 mb-4 text-center text-lg md:max-w-lg md:text-left md:text-xl">
              {t("description")}
            </p>
            <div className="mt-2 flex w-full justify-center gap-4 md:w-auto md:justify-start">
              <Button
                size="lg"
                aria-label={t("seeProjects")}
                tabIndex={0}
                onClick={() => scrollIntoView("projects")}
              >
                {t("seeProjects")}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                aria-label={t("downloadCv")}
                tabIndex={0}
              >
                <a href="/CV_AdamKowalczuk.pdf" target="_blank" rel="noopener noreferrer">
                  {t("downloadCv")}
                </a>
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center md:w-1/2 md:justify-center">
            <Image
              src="/assets/images/avatar.png"
              alt={t("title")}
              width={500}
              height={400}
              className="border-border w-auto max-w-[90%] rounded-xl border object-cover shadow-lg md:max-w-full"
              aria-label={t("title")}
              tabIndex={0}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
