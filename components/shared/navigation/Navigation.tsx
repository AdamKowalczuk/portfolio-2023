"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/shared/language-switcher/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/shared/theme-switcher/ThemeSwitcher";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { href: "#hero", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
] as const;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

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
          <Link href="#hero" className="flex items-center" aria-label={t("home")} tabIndex={0}>
            <Image
              src="/assets/images/AK.svg"
              alt="Logo"
              width={61}
              height={28}
              className="h-8 w-auto"
              aria-label="Logo"
              tabIndex={0}
              priority
            />
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
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
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
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
