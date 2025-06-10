"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const LanguageSwitcher = () => {
  const t = useTranslations("LanguageSwitcher");
  const [currentLocale, setCurrentLocale] = useState<string>("pl");

  useEffect(() => {
    // Pobierz zapisany język z localStorage lub użyj domyślnego
    const savedLocale = localStorage.getItem("preferredLocale") || "pl";
    setCurrentLocale(savedLocale);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    // Zapisz wybrany język w localStorage
    localStorage.setItem("preferredLocale", newLocale);
    // Wyślij event do innych zakładek
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "preferredLocale",
        newValue: newLocale,
        storageArea: localStorage,
      })
    );
    // Zaktualizuj stan lokalny
    setCurrentLocale(newLocale);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={currentLocale === "pl" ? "default" : "outline"}
        size="icon"
        onClick={() => handleLanguageChange("pl")}
        aria-label={t("switchToPolish")}
        className="h-9 w-9"
      >
        <span className="text-sm font-medium">PL</span>
      </Button>
      <Button
        variant={currentLocale === "en" ? "default" : "outline"}
        size="icon"
        onClick={() => handleLanguageChange("en")}
        aria-label={t("switchToEnglish")}
        className="h-9 w-9"
      >
        <span className="text-sm font-medium">EN</span>
      </Button>
    </div>
  );
};
