/*
 * Y-Clean Navbar
 * Design: Swiss Precision — clean horizontal nav with teal accents
 * Features: EN/FR language toggle
 */
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/contexts/LanguageContext";

const LOGO_URL = "/manus-storage/swiss-sparkle-logo_e7afe035.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.households"), href: "#services" },
    { label: t("nav.companies"), href: "#commercial" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.about"), href: "#why-us" },
  ];

  const toggleLang = () => {
    setLang(lang === "en" ? "fr" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img
            src={LOGO_URL}
            alt="Swiss Sparkle Logo"
            className="h-14 md:h-16 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Language Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/40 transition-all"
            aria-label="Toggle language"
          >
            <Globe size={15} />
            <span>{lang === "en" ? "FR" : "EN"}</span>
          </button>

          <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            {t("nav.login")}
          </a>
          <Button asChild className="bg-primary hover:bg-teal-700 text-white rounded-full px-6">
            <a href="#booking">{t("nav.book")}</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border/60 text-xs font-medium text-foreground/70 hover:text-primary transition-all"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            <span>{lang === "en" ? "FR" : "EN"}</span>
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border" />
            <a href="#contact" className="text-sm font-medium text-foreground/70 py-2">{t("nav.login")}</a>
            <Button asChild className="bg-primary hover:bg-teal-700 text-white rounded-full w-full">
              <a href="#booking">{t("nav.book")}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
