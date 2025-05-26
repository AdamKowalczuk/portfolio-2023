"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/shared/language-switcher/LanguageSwitcher";

const navigationLinks = [
  { href: "#hero", label: "Navigation.home" },
  { href: "#about", label: "Navigation.about" },
  { href: "#skills", label: "Navigation.skills" },
  { href: "#projects", label: "Navigation.projects" },
] as const;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMenu();
    }
  };

  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="text-foreground text-xl font-bold"
            aria-label={t("Navigation.home")}
          >
            AK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t(link.label)}
              >
                {t(link.label)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground md:hidden"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn("md:hidden", isMenuOpen ? "block" : "hidden", "bg-background border-t")}
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label={t(link.label)}
              >
                {t(link.label)}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
