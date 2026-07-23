/*
 * Y-Clean — Footer
 * Design: Dark footer with columns of links, contact info, social media
 */
import { Mail, Clock, CreditCard, Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL = "/manus-storage/swiss-sparkle-logo_e7afe035.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white/80 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Contact & Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">{t("footer.contact_title")}</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:info@swisssparkle.ch" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary shrink-0" />
                info@swisssparkle.ch
              </a>
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-primary shrink-0" />
                {t("footer.payment")}
              </div>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest text-white mt-8 mb-3">{t("footer.social_title")}</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">{t("footer.hours_title")}</h4>
            <div className="flex items-start gap-2 text-sm">
              <Clock size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p>{t("footer.hours")}</p>
                <p>{t("footer.hours_time")}</p>
              </div>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest text-white mt-8 mb-3">{t("footer.resources")}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-primary transition-colors">{t("footer.checklists")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">{t("footer.quick_title")}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#services" className="hover:text-primary transition-colors">{t("footer.our_services")}</a>
              <a href="#commercial" className="hover:text-primary transition-colors">{t("footer.office_cleaning")}</a>
              <a href="#booking" className="hover:text-primary transition-colors">{t("footer.quote")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.jobs")}</a>
              <a href="#contact" className="hover:text-primary transition-colors">{t("footer.contact_us")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.blog")}</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">{t("footer.legal_title")}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-primary transition-colors">{t("footer.legal_notice")}</a>
              <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest text-white mt-8 mb-3">{t("footer.available_title")}</h4>
            <p className="text-sm">{t("footer.available_area")}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Swiss Sparkle" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
