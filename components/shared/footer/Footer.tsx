"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

const currentYear = new Date().getFullYear();

const socialLinks = [
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
    href: "/cv.pdf",
    label: "CV",
    icon: FileText,
  },
] as const;

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">{t("copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};
