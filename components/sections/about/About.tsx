"use client";

import { useTranslations } from "next-intl";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-foreground mb-8 text-center text-3xl font-bold">{t("title")}</h2>

          <div className="prose prose-lg dark:prose-invert mx-auto space-y-6">
            <p className="text-muted-foreground">{t("description")}</p>

            <p className="text-muted-foreground">{t("interests")}</p>

            <ul className="text-muted-foreground">
              <li>{t("interestsList.tech")}</li>
              <li>{t("interestsList.design")}</li>
              <li>{t("interestsList.photo")}</li>
              <li>{t("interestsList.travel")}</li>
            </ul>

            <p className="text-muted-foreground">{t("contact")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
