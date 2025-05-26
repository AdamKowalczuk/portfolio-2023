"use client";

import { NextIntlClientProvider } from "next-intl";
import { Navigation } from "@/components/shared/navigation/Navigation";
import { Footer } from "@/components/shared/footer/Footer";
import { useEffect, useState } from "react";

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return (await import(`../../messages/pl.json`)).default;
  }
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("pl");
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    // Pobierz zapisany język z localStorage lub użyj domyślnego
    const savedLocale = localStorage.getItem("preferredLocale") || "pl";
    setLocale(savedLocale);

    // Załaduj tłumaczenia dla wybranego języka
    getMessages(savedLocale).then((msgs) => {
      setMessages(msgs);
    });

    // Nasłuchuj na zmiany w localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "preferredLocale" && e.newValue) {
        setLocale(e.newValue);
        getMessages(e.newValue).then((msgs) => {
          setMessages(msgs);
        });
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!messages) {
    return null; // lub komponent ładowania
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
