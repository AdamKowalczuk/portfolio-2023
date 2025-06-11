"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/shared/language-switcher/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/shared/theme-switcher/ThemeSwitcher";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigationLinks = [
  { href: "#hero", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
] as const;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const t = useTranslations("Navigation");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMenu();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";

      const elementTop = element.offsetTop;

      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center transition-transform hover:scale-105"
            aria-label={t("home")}
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
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
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative px-2 py-1 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground",
                  activeSection === link.href.substring(1) && "text-foreground"
                )}
                aria-label={t(link.label)}
                aria-current={activeSection === link.href.substring(1) ? "page" : undefined}
              >
                {t(link.label)}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="bg-primary absolute bottom-0 left-0 h-0.5 w-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
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
            className="h-10 w-10 md:hidden"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-background/95 border-t backdrop-blur md:hidden"
            >
              <motion.div
                className="space-y-1 px-2 pt-2 pb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium transition-colors",
                      "text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md",
                      activeSection === link.href.substring(1) && "text-foreground bg-accent"
                    )}
                    aria-label={t(link.label)}
                    aria-current={activeSection === link.href.substring(1) ? "page" : undefined}
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    {t(link.label)}
                  </Link>
                ))}
                <div className="flex items-center gap-2 px-3 py-2">
                  <ThemeSwitcher />
                  <LanguageSwitcher />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
