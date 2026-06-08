// ──────────────────────────────────────────────────────────────
// Informations de l'entreprise - À PERSONNALISER
// Modifiez ces valeurs : elles alimentent tout le site.
// ──────────────────────────────────────────────────────────────

export const site = {
  name: "Morel Soudure",
  founder: "Kevin Morel",
  founderRole: "Fondateur & soudeur certifié",
  tagline: "Soudure & métallerie sur mesure",

  // Localisation
  city: "Le Mans",
  region: "Sarthe",
  address: "ZA Sud, 72100 Le Mans",
  // Formes grammaticales correctes pour « Le Mans » (au Mans / du Mans)
  cityA: "au Mans", // remplace « à <ville> »
  cityDe: "du Mans", // remplace « de <ville> »

  // Contact
  phone: "06 12 34 56 78",
  phoneHref: "+33612345678",
  email: "contact@morel-soudure.fr",
  hours: "Lun-Ven : 7h30-18h00",

  // Chiffres clés
  yearsExperience: 15,
  projects: 800,
  quoteDelay: "48 h",
  radiusKm: 60,

  // Mentions
  siret: "000 000 000 00000",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "L'atelier", href: "#atelier" },
  { label: "Méthode", href: "#methode" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
] as const;
