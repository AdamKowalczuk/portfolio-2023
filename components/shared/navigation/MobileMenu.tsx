import { cn } from "@/lib/utils";
import Link from "next/link";

const navigationLinks = [
  { href: "#hero", label: "Strona główna" },
  { href: "#about", label: "O mnie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#projects", label: "Projekty" },
] as const;

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white/80 backdrop-blur-md md:hidden dark:bg-gray-900/80",
        isOpen ? "block" : "hidden"
      )}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="hover:text-primary text-lg font-medium transition-colors"
              aria-label={`Przejdź do sekcji ${link.label}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
