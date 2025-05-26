"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, FileText } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="bg-background flex min-h-[calc(100vh-4rem)] items-center py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <h2 className="text-muted-foreground mb-6 text-xl sm:text-2xl">{t("subtitle")}</h2>
          <p className="text-muted-foreground mb-8 text-lg">{t("description")}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="default">
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                {t("downloadCv")}
              </Link>
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://github.com/AdamKowalczuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/adamkowalczuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
