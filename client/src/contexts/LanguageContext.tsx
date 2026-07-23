import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.households": "Households",
    "nav.companies": "Companies",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.login": "Log in",
    "nav.book": "Book online",

    // Hero
    "hero.title_italic": "Premium Housekeeping in Geneva:",
    "hero.title_rest": "Your cleanliness, our priority",
    "hero.desc_prefix": "Swiss Sparkle is a premium housekeeping company in Geneva offering its",
    "hero.desc_services": "services",
    "hero.desc_to": "to",
    "hero.desc_individuals": "individuals",
    "hero.desc_and": "and",
    "hero.desc_professionals": "professionals",
    "hero.desc_suffix": "throughout the canton of Geneva.",
    "hero.book_title": "Book your cleaning",
    "hero.postcode": "Postcode",
    "hero.continue": "Continue",
    "hero.badge1": "Book online easily",
    "hero.badge2": "Dedicated house cleaner",
    "hero.badge3": "0% administrative work",

    // Why Choose Us
    "why.subtitle": "#1 Premium Housekeeping in Geneva",
    "why.title": "Why choose us?",
    "why.desc": "We combine efficiency, flexibility and discretion to offer you a reliable and local cleaning service in Geneva.",
    "why.f1_title": "Book online easily",
    "why.f1_desc": "Book your service online, choose your extra services and receive instant booking confirmation.",
    "why.f2_title": "0% administrative work",
    "why.f2_desc": "We declare all our cleaners. This way you are free of any administrative burden.",
    "why.f3_title": "Optimal satisfaction",
    "why.f3_desc": "We collect feedback on our employees to ensure that they meet your highest standards.",
    "why.f4_title": "A lasting relationship",
    "why.f4_desc": "Our agents and clients develop a relationship of trust and proximity, going beyond a simple working relationship.",

    // Pricing
    "pricing.title": "Our Cleaning Rates",
    "pricing.desc": "Make your home shine with Swiss Sparkle. Book and pay online and receive an",
    "pricing.desc_bold": "immediate confirmation",
    "pricing.how_many": "How many hours should I book?",
    "pricing.estimate": "Use the table below to estimate the duration of the household according to the surface area.",
    "pricing.kitchen": "Kitchen",
    "pricing.bedroom": "Bedroom",
    "pricing.bathrooms": "Bathrooms",
    "pricing.rate": "Rate (per week)",

    // Trust
    "trust.title": "Your trusted cleaning services company",
    "trust.p1": "Our company, Swiss Sparkle, specializes in",
    "trust.p1_link1": "house cleaning and maintenance",
    "trust.p1_mid": "as well as",
    "trust.p1_link2": "commercial premises cleaning",
    "trust.p1_end": ". We work efficiently to save you time and money while providing a perfectly clean environment.",
    "trust.p2": "We are your cleanliness partner for all your housekeeping needs, apartment or house cleaning,",
    "trust.p2_link": "end-of-lease cleaning",
    "trust.p2_end": ", and office maintenance in Geneva and throughout French-speaking Switzerland. We offer you our",
    "trust.p2_bold": "expertise",
    "trust.p2_final": "in the cleaning and housekeeping sector while caring for the environment by using eco-friendly products for all our services.",
    "trust.faq_title": "How does your service work?",
    "trust.faq1_q": "Do you bring your own cleaning products?",
    "trust.faq1_a": "Yes, our cleaning teams bring all necessary cleaning products and equipment. We use eco-friendly, professional-grade products that are safe for your home and the environment. If you have specific product preferences, please let us know when booking.",
    "trust.faq2_q": "What cleaning services can I book online?",
    "trust.faq2_a": "You can book regular house cleaning, deep cleaning, end-of-tenancy cleaning, office cleaning, window cleaning, and Airbnb cleaning directly through our online platform. Simply select your service, choose your preferred date and time, and confirm your booking.",
    "trust.faq3_q": "Who employs your agents?",
    "trust.faq3_a": "All our cleaning agents are directly employed by Swiss Sparkle. We handle all administrative aspects including social security declarations, insurance, and payroll. This means zero administrative burden for you.",
    "trust.faq4_q": "What are the different types of cleaning?",
    "trust.faq4_a": "We offer regular maintenance cleaning, deep cleaning for thorough sanitization, end-of-lease cleaning to meet landlord standards, office and commercial cleaning, window cleaning, and specialized Airbnb turnover cleaning.",
    "trust.faq5_q": "How much will a cleaning service in Geneva cost me?",
    "trust.faq5_a": "Our rates start from CHF 138 for a 3-hour session. The cost depends on the size of your property and the type of cleaning required. You can get an instant quote by using our online booking system or contacting us directly.",

    // Services
    "services.title": "Our Cleaning Services in Geneva",
    "services.desc": "From regular housekeeping to end-of-lease cleaning, discover our services tailored to all your needs in Geneva.",
    "services.s1_title": "House cleaning",
    "services.s1_desc": "Swiss Sparkle offers a high quality cleaning service and makes your apartment or house shine throughout the canton of Geneva.",
    "services.s2_title": "Office cleaning",
    "services.s2_desc": "We clean your offices and premises for an impeccable cleanliness and a healthy work environment for your employees. 100% flexible offers.",
    "services.s3_title": "End of tenancy cleaning",
    "services.s3_desc": "Swiss Sparkle is the specialist in end-of-lease cleaning in Geneva. Our company also carries out the cleaning before moving in.",
    "services.s4_title": "Window cleaning",
    "services.s4_desc": "Our professionals in Geneva ensure the cleaning of your glass surfaces. For companies and individuals. Enjoy a perfect service.",
    "services.s5_title": "Job check",
    "services.s5_desc": "Free yourself from household and administrative chores! We declare your domestic employees, so that you are in compliance with the law.",
    "services.s6_title": "Airbnb cleaning",
    "services.s6_desc": "Our Airbnb concierge service provides cleaning and concierge services for your rental apartments. For the greatest satisfaction of your guests.",
    "services.learn_more": "Learn more",

    // CTA
    "cta.tag": "#TRYITNOW",
    "cta.title": "Book your 5-star cleaning in Geneva",
    "cta.desc": "Enjoy a perfect cleaning now.",
    "cta.f1": "Book online easily",
    "cta.f2": "Dedicated house cleaner",
    "cta.f3": "Easy-to-use dashboard",

    // Commercial
    "commercial.title": "Commercial cleaning services",
    "commercial.p1": "Swiss Sparkle is a premium housekeeping company offering professional cleaning and building maintenance services throughout the canton of Geneva, Switzerland. Because our expertise goes beyond cleaning techniques, quality and satisfaction are essential to us. In this field, we provide a wide range of cleaning services from professional to professional.",
    "commercial.p2": "Thus, we offer services including:",
    "commercial.s1": "Deep cleaning of houses and apartments",
    "commercial.s2": "Home cleaning and ironing",
    "commercial.s3": "Office cleaning and clearance",
    "commercial.s4": "Sofa cleaning",
    "commercial.s5": "Mattress cleaning",
    "commercial.s6": "Carpet cleaning",
    "commercial.cta": "Online quote for office cleaning",

    // Testimonials
    "testimonials.title": "What our customers say about us",
    "testimonials.desc": "Our clients appreciate our professionalism, responsiveness and the consistent quality of our services.",
    "testimonials.t1": "Excellent service! The team was punctual, thorough, and very professional. My apartment has never been this clean. Highly recommend Swiss Sparkle!",
    "testimonials.t2": "We've been using Swiss Sparkle for our office cleaning for 6 months now. Consistent quality, reliable team, and great communication. Very satisfied.",
    "testimonials.t3": "The end-of-tenancy cleaning was impeccable. Got my full deposit back without any issues. Thank you Swiss Sparkle for the outstanding work!",

    // Blog
    "blog.title": "Discover Our Cleaning Blog",
    "blog.desc": "Tips, advice and best practices: explore our blog to better maintain your spaces on a daily basis.",
    "blog.p1": "Cleaning Services in Geneva: How to Make the Right Choice?",
    "blog.p2": "How to Choose the Right B2B Cleaning Company in Geneva?",
    "blog.p3": "Why Use a Cleaning Company?",
    "blog.p4": "How to Clean Marble",
    "blog.read_more": "Read more",

    // Areas
    "areas.title": "Areas we Serve",
    "areas.canton": "Canton of Geneva",
    "areas.desc": "Our cleaning service in Geneva serves the whole canton, including the communes of Lancy, Plan-les-Ouates, Carouge, Cologny, Collonge-Bellerive, Champel, Bernex, Troinex, Vandoeuvres, etc.",
    "areas.contact": "Contact us",
    "areas.available": "Available in: Geneva and surroundings",

    // Footer
    "footer.contact_title": "Contact & Infos",
    "footer.payment": "American Express, MasterCard, Visa",
    "footer.social_title": "Follow us on social media",
    "footer.hours_title": "Open Hours",
    "footer.hours": "Monday – Friday:",
    "footer.hours_time": "9:00 – 16:00",
    "footer.resources": "Resources",
    "footer.checklists": "Checklists",
    "footer.terms": "Terms and conditions",
    "footer.privacy": "Privacy policy",
    "footer.quick_title": "Quick Links",
    "footer.our_services": "Our services",
    "footer.office_cleaning": "Office cleaning",
    "footer.quote": "Online quote for office cleaning",
    "footer.jobs": "Jobs",
    "footer.contact_us": "Contact us",
    "footer.blog": "Blog",
    "footer.legal_title": "Legal",
    "footer.legal_notice": "Legal notice",
    "footer.available_title": "Available in",
    "footer.available_area": "Geneva and surroundings",
    "footer.copyright": "All rights reserved by Swiss Sparkle",
  },
  fr: {
    // Navbar
    "nav.households": "Particuliers",
    "nav.companies": "Entreprises",
    "nav.pricing": "Tarifs",
    "nav.about": "À propos",
    "nav.login": "Connexion",
    "nav.book": "Réserver en ligne",

    // Hero
    "hero.title_italic": "Housekeeping premium à Genève :",
    "hero.title_rest": "Votre propreté, notre priorité",
    "hero.desc_prefix": "Swiss Sparkle est une entreprise de housekeeping premium à Genève offrant ses",
    "hero.desc_services": "services",
    "hero.desc_to": "aux",
    "hero.desc_individuals": "particuliers",
    "hero.desc_and": "et",
    "hero.desc_professionals": "professionnels",
    "hero.desc_suffix": "dans tout le canton de Genève.",
    "hero.book_title": "Réservez votre nettoyage",
    "hero.postcode": "Code postal",
    "hero.continue": "Continuer",
    "hero.badge1": "Réservation en ligne facile",
    "hero.badge2": "Agent de ménage dédié",
    "hero.badge3": "0% de travail administratif",

    // Why Choose Us
    "why.subtitle": "#1 Housekeeping premium à Genève",
    "why.title": "Pourquoi nous choisir ?",
    "why.desc": "Nous allions efficacité, flexibilité et discrétion pour vous offrir un service de nettoyage fiable et local à Genève.",
    "why.f1_title": "Réservation en ligne facile",
    "why.f1_desc": "Réservez votre service en ligne, choisissez vos extras et recevez une confirmation instantanée.",
    "why.f2_title": "0% de travail administratif",
    "why.f2_desc": "Nous déclarons tous nos agents. Vous êtes ainsi libéré de toute charge administrative.",
    "why.f3_title": "Satisfaction optimale",
    "why.f3_desc": "Nous recueillons les retours sur nos employés pour garantir qu'ils répondent à vos plus hautes exigences.",
    "why.f4_title": "Une relation durable",
    "why.f4_desc": "Nos agents et clients développent une relation de confiance et de proximité, allant au-delà d'une simple relation de travail.",

    // Pricing
    "pricing.title": "Tarifs de notre service de housekeeping",
    "pricing.desc": "Faites briller votre maison avec Swiss Sparkle. Réservez et payez en ligne et recevez une",
    "pricing.desc_bold": "confirmation immédiate",
    "pricing.how_many": "Combien d'heures dois-je réserver ?",
    "pricing.estimate": "Utilisez le tableau ci-dessous pour estimer la durée du ménage en fonction de la surface.",
    "pricing.kitchen": "Cuisine",
    "pricing.bedroom": "Chambre",
    "pricing.bathrooms": "Salles de bain",
    "pricing.rate": "Tarif (par semaine)",

    // Trust
    "trust.title": "Votre entreprise de nettoyage de confiance",
    "trust.p1": "Notre entreprise, Swiss Sparkle, est spécialisée dans",
    "trust.p1_link1": "le nettoyage et l'entretien de maisons",
    "trust.p1_mid": "ainsi que",
    "trust.p1_link2": "le nettoyage de locaux commerciaux",
    "trust.p1_end": ". Nous travaillons efficacement pour vous faire gagner du temps et de l'argent tout en offrant un environnement parfaitement propre.",
    "trust.p2": "Nous sommes votre partenaire propreté pour tous vos besoins de ménage, nettoyage d'appartement ou de maison,",
    "trust.p2_link": "nettoyage de fin de bail",
    "trust.p2_end": ", et entretien de bureaux à Genève et dans toute la Suisse romande. Nous vous offrons notre",
    "trust.p2_bold": "expertise",
    "trust.p2_final": "dans le secteur du nettoyage et de l'entretien tout en respectant l'environnement grâce à l'utilisation de produits écologiques pour tous nos services.",
    "trust.faq_title": "Comment fonctionne votre service ?",
    "trust.faq1_q": "Apportez-vous vos propres produits de nettoyage ?",
    "trust.faq1_a": "Oui, nos équipes apportent tous les produits et équipements nécessaires. Nous utilisons des produits écologiques de qualité professionnelle, sûrs pour votre maison et l'environnement.",
    "trust.faq2_q": "Quels services de nettoyage puis-je réserver en ligne ?",
    "trust.faq2_a": "Vous pouvez réserver le ménage régulier, le nettoyage en profondeur, le nettoyage de fin de bail, le nettoyage de bureaux, le nettoyage de vitres et le nettoyage Airbnb directement via notre plateforme en ligne.",
    "trust.faq3_q": "Qui emploie vos agents ?",
    "trust.faq3_a": "Tous nos agents sont directement employés par Swiss Sparkle. Nous gérons tous les aspects administratifs, y compris les déclarations de sécurité sociale, les assurances et la paie.",
    "trust.faq4_q": "Quels sont les différents types de nettoyage ?",
    "trust.faq4_a": "Nous proposons le nettoyage d'entretien régulier, le nettoyage en profondeur, le nettoyage de fin de bail, le nettoyage de bureaux et commerces, le nettoyage de vitres et le nettoyage Airbnb spécialisé.",
    "trust.faq5_q": "Combien me coûtera un service de nettoyage à Genève ?",
    "trust.faq5_a": "Nos tarifs commencent à CHF 138 pour une session de 3 heures. Le coût dépend de la taille de votre propriété et du type de nettoyage requis.",

    // Services
    "services.title": "Nos services de nettoyage à Genève",
    "services.desc": "Du ménage régulier au nettoyage de fin de bail, découvrez nos services adaptés à tous vos besoins à Genève.",
    "services.s1_title": "Nettoyage de maison",
    "services.s1_desc": "Swiss Sparkle offre un service de nettoyage de haute qualité et fait briller votre appartement ou maison dans tout le canton de Genève.",
    "services.s2_title": "Nettoyage de bureaux",
    "services.s2_desc": "Nous nettoyons vos bureaux et locaux pour une propreté impeccable et un environnement de travail sain pour vos employés.",
    "services.s3_title": "Nettoyage de fin de bail",
    "services.s3_desc": "Swiss Sparkle est le spécialiste du nettoyage de fin de bail à Genève. Notre entreprise effectue également le nettoyage avant emménagement.",
    "services.s4_title": "Nettoyage de vitres",
    "services.s4_desc": "Nos professionnels à Genève assurent le nettoyage de vos surfaces vitrées. Pour les entreprises et les particuliers.",
    "services.s5_title": "Contrôle emploi",
    "services.s5_desc": "Libérez-vous des tâches ménagères et administratives ! Nous déclarons vos employés de maison, pour que vous soyez en conformité avec la loi.",
    "services.s6_title": "Nettoyage Airbnb",
    "services.s6_desc": "Notre service de conciergerie Airbnb assure le nettoyage et les services de conciergerie pour vos appartements en location.",
    "services.learn_more": "En savoir plus",

    // CTA
    "cta.tag": "#ESSAYEZMAINTENANT",
    "cta.title": "Réservez votre nettoyage 5 étoiles à Genève",
    "cta.desc": "Profitez d'un nettoyage parfait dès maintenant.",
    "cta.f1": "Réservation en ligne facile",
    "cta.f2": "Agent de ménage dédié",
    "cta.f3": "Tableau de bord facile à utiliser",

    // Commercial
    "commercial.title": "Services de nettoyage commercial",
    "commercial.p1": "Swiss Sparkle est une entreprise de housekeeping premium proposant des services professionnels de nettoyage et d'entretien de bâtiments dans tout le canton de Genève, en Suisse.",
    "commercial.p2": "Ainsi, nous proposons des services comprenant :",
    "commercial.s1": "Nettoyage en profondeur de maisons et appartements",
    "commercial.s2": "Ménage et repassage à domicile",
    "commercial.s3": "Nettoyage et débarras de bureaux",
    "commercial.s4": "Nettoyage de canapés",
    "commercial.s5": "Nettoyage de matelas",
    "commercial.s6": "Nettoyage de tapis",
    "commercial.cta": "Devis en ligne pour le nettoyage de bureaux",

    // Testimonials
    "testimonials.title": "Ce que disent nos clients",
    "testimonials.desc": "Nos clients apprécient notre professionnalisme, notre réactivité et la qualité constante de nos services.",
    "testimonials.t1": "Service excellent ! L'équipe était ponctuelle, minutieuse et très professionnelle. Mon appartement n'a jamais été aussi propre. Je recommande vivement Swiss Sparkle !",
    "testimonials.t2": "Nous utilisons Swiss Sparkle pour le nettoyage de nos bureaux depuis 6 mois. Qualité constante, équipe fiable et excellente communication. Très satisfait.",
    "testimonials.t3": "Le nettoyage de fin de bail était impeccable. J'ai récupéré l'intégralité de ma caution sans aucun problème. Merci Swiss Sparkle pour ce travail remarquable !",

    // Blog
    "blog.title": "Découvrez notre blog nettoyage",
    "blog.desc": "Conseils, astuces et bonnes pratiques : explorez notre blog pour mieux entretenir vos espaces au quotidien.",
    "blog.p1": "Services de nettoyage à Genève : comment faire le bon choix ?",
    "blog.p2": "Comment choisir la bonne entreprise de nettoyage B2B à Genève ?",
    "blog.p3": "Pourquoi faire appel à une entreprise de nettoyage ?",
    "blog.p4": "Comment nettoyer le marbre",
    "blog.read_more": "Lire la suite",

    // Areas
    "areas.title": "Zones desservies",
    "areas.canton": "Canton de Genève",
    "areas.desc": "Notre service de nettoyage à Genève couvre tout le canton, y compris les communes de Lancy, Plan-les-Ouates, Carouge, Cologny, Collonge-Bellerive, Champel, Bernex, Troinex, Vandoeuvres, etc.",
    "areas.contact": "Contactez-nous",
    "areas.available": "Disponible à : Genève et environs",

    // Footer
    "footer.contact_title": "Contact & Infos",
    "footer.payment": "American Express, MasterCard, Visa",
    "footer.social_title": "Suivez-nous sur les réseaux sociaux",
    "footer.hours_title": "Heures d'ouverture",
    "footer.hours": "Lundi – Vendredi :",
    "footer.hours_time": "9h00 – 16h00",
    "footer.resources": "Ressources",
    "footer.checklists": "Checklists",
    "footer.terms": "Conditions générales",
    "footer.privacy": "Politique de confidentialité",
    "footer.quick_title": "Liens rapides",
    "footer.our_services": "Nos services",
    "footer.office_cleaning": "Nettoyage de bureaux",
    "footer.quote": "Devis en ligne pour bureaux",
    "footer.jobs": "Emplois",
    "footer.contact_us": "Contactez-nous",
    "footer.blog": "Blog",
    "footer.legal_title": "Mentions légales",
    "footer.legal_notice": "Mentions légales",
    "footer.available_title": "Disponible à",
    "footer.available_area": "Genève et environs",
    "footer.copyright": "Tous droits réservés par Swiss Sparkle",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
