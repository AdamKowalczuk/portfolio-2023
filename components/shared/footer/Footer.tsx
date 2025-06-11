"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  openInNewTab?: boolean;
};

const currentYear = new Date().getFullYear();

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/AdamKowalczuk",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://www.linkedin.com/in/adamkowalczuk",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: "/CV_AdamKowalczuk.pdf",
    label: "CV",
    icon: FileText,
    openInNewTab: true,
  },
];

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-background/95 supports-[backdrop-filter]:bg-background/60 w-full border-t backdrop-blur">
      <div className="container mx-auto px-4 py-6 md:px-6 md:py-8 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-muted-foreground/80 text-center text-sm sm:text-left">
            {t("copyright", { year: currentYear })}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.href}
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-border/40 hover:border-border hover:bg-accent/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Link
                    href={link.href}
                    target={
                      link.href.startsWith("http") || link.openInNewTab ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http") || link.openInNewTab
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
