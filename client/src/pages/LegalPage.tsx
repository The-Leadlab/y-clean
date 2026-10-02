import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

type DocId = "privacy" | "terms" | "notice" | "dmca";

const PATHS: Array<[DocId, string]> = [
  ["privacy", "/privacy"],
  ["terms", "/terms"],
  ["notice", "/legal"],
  ["dmca", "/dmca"],
];

export default function LegalPage() {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const [location] = useLocation();
  const id = PATHS.find(([, path]) => location === path)?.[0] ?? "privacy";
  const pack = fr ? FR : EN;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-2xl py-16 space-y-6">
        <Link href="/" className="text-sm text-primary hover:underline">
          {fr ? "Retour" : "Back"}
        </Link>
        <h1 className="text-3xl font-semibold">{pack[id].title}</h1>
        <p className="text-xs text-muted-foreground">
          {fr
            ? "Swiss Sparkle / WhyClean · Genève, Suisse · info@swisssparkle.ch · 2 octobre 2026. Faites relire ce texte par un avocat suisse."
            : "Swiss Sparkle / WhyClean · Geneva, Switzerland · info@swisssparkle.ch · 2 October 2026. Have a Swiss lawyer review this text."}
        </p>
        {pack[id].sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-lg font-medium">{section.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{section.body}</p>
          </section>
        ))}
        <nav className="flex flex-wrap gap-4 pt-4 border-t">
          {PATHS.map(([docId, path]) => (
            <Link key={docId} href={path} className="text-sm text-primary hover:underline">
              {pack[docId].title}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}

type Block = { title: string; sections: Array<{ title: string; body: string }> };

const EN: Record<DocId, Block> = {
  privacy: {
    title: "Privacy policy",
    sections: [
      {
        title: "Who",
        body: "Swiss Sparkle (WhyClean) provides housekeeping in Geneva. Contact: info@swisssparkle.ch, Geneva, Switzerland.",
      },
      {
        title: "What we collect",
        body: "Name, email, phone, address, and booking details you send through the quote form, plus technical logs needed to run the site. We do not sell this data.",
      },
      {
        title: "Why",
        body: "To answer a quote, schedule a clean, and send the messages you asked for. Fonts are served from this website, not from Google.",
      },
      {
        title: "Your rights",
        body: "Under the Swiss Federal Act on Data Protection you can ask for access, correction, or deletion. Email info@swisssparkle.ch. You can also contact the Swiss FDPIC.",
      },
    ],
  },
  terms: {
    title: "Terms of use",
    sections: [
      {
        title: "Bookings",
        body: "A quote request is not a confirmed booking until we accept it. Prices and times are confirmed in writing.",
      },
      {
        title: "Renewals",
        body: "A recurring cleaning continues at the agreed rate until you cancel. Cancel before the next visit so that visit is not charged. The cancellation line sits next to any recurring-booking button.",
      },
      {
        title: "Law",
        body: "Swiss law applies. The courts of Geneva have jurisdiction, to the extent the law allows.",
      },
    ],
  },
  notice: {
    title: "Legal notice",
    sections: [
      {
        title: "Operator",
        body: "Swiss Sparkle / WhyClean\nGeneva, Switzerland\ninfo@swisssparkle.ch\nhttps://www.yclean.ch",
      },
      {
        title: "Registered office",
        body: "The street address is not stored in this website. Email info@swisssparkle.ch for the current commercial-register details.",
      },
    ],
  },
  dmca: {
    title: "Copyright / DMCA",
    sections: [
      {
        title: "Contact",
        body: "Copyright notices: info@swisssparkle.ch, Swiss Sparkle, Geneva, Switzerland. This site does not host a public upload gallery.",
      },
      {
        title: "US agent filing",
        body: "To register a US DMCA agent, open the Designated Agent Directory on copyright.gov, enter the service name, a physical address, phone, and email, and pay the filing fee (currently 6 US dollars). This page does not submit that filing.",
      },
    ],
  },
};

const FR: Record<DocId, Block> = {
  privacy: {
    title: "Politique de confidentialité",
    sections: [
      {
        title: "Qui",
        body: "Swiss Sparkle (WhyClean) propose le ménage à Genève. Contact : info@swisssparkle.ch, Genève, Suisse.",
      },
      {
        title: "Données",
        body: "Nom, e-mail, téléphone, adresse et détails de réservation envoyés via le devis, plus les journaux techniques du site. Nous ne vendons pas ces données.",
      },
      {
        title: "Pourquoi",
        body: "Pour répondre à un devis, planifier un ménage et envoyer les messages demandés. Les polices sont servies par ce site, pas par Google.",
      },
      {
        title: "Droits",
        body: "Selon la LPD suisse, vous pouvez demander l'accès, la rectification ou l'effacement. Écrivez à info@swisssparkle.ch. Vous pouvez aussi saisir le PFPDT.",
      },
    ],
  },
  terms: {
    title: "Conditions d'utilisation",
    sections: [
      {
        title: "Réservations",
        body: "Une demande de devis n'est pas une réservation confirmée tant que nous ne l'avons pas acceptée. Les prix et horaires sont confirmés par écrit.",
      },
      {
        title: "Renouvellement",
        body: "Un ménage récurrent continue au tarif convenu jusqu'à annulation. Annulez avant la prochaine visite pour qu'elle ne soit pas facturée.",
      },
      {
        title: "Droit",
        body: "Le droit suisse s'applique. Les tribunaux de Genève sont compétents, dans la mesure permise par la loi.",
      },
    ],
  },
  notice: {
    title: "Mentions légales",
    sections: [
      {
        title: "Exploitant",
        body: "Swiss Sparkle / WhyClean\nGenève, Suisse\ninfo@swisssparkle.ch\nhttps://www.yclean.ch",
      },
      {
        title: "Siège",
        body: "L'adresse de rue n'est pas stockée sur ce site. Écrivez à info@swisssparkle.ch pour les données du registre du commerce.",
      },
    ],
  },
  dmca: {
    title: "Droit d'auteur / DMCA",
    sections: [
      {
        title: "Contact",
        body: "Notifications de droit d'auteur : info@swisssparkle.ch, Swiss Sparkle, Genève, Suisse. Ce site n'héberge pas de galerie publique de fichiers.",
      },
      {
        title: "Dépôt américain",
        body: "Pour enregistrer un agent DMCA, ouvrez le répertoire des agents sur copyright.gov, indiquez le nom du service, une adresse physique, un téléphone et un e-mail, puis payez les frais (actuellement 6 dollars). Cette page ne fait pas le dépôt.",
      },
    ],
  },
};
