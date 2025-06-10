"use client";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("preferredLocale") || "pl";
    setLocale(savedLocale);

    getMessages(savedLocale).then((msgs) => {
      setMessages(msgs);
      setMounted(true);
    });

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

  if (!mounted || !messages) {
    return null;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="container flex h-16 items-center justify-between">
              <Navigation />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
