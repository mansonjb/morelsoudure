import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import {
  IconCheck,
  IconClock,
  IconShield,
  IconSpark,
  IconTorch,
  IconWrench,
} from "./Icons";

const reasons = [
  {
    icon: IconShield,
    title: "Certifié & garanti",
    text: "Des soudures conformes et durables, réalisées par un soudeur certifié et assuré.",
  },
  {
    icon: IconCheck,
    title: "Devis transparent",
    text: "Un prix clair annoncé à l'avance, détaillé poste par poste, sans coût caché.",
  },
  {
    icon: IconClock,
    title: "Délais tenus",
    text: "On s'engage sur une date de livraison et on la respecte.",
  },
  {
    icon: IconWrench,
    title: "Réactivité",
    text: "Dépannage et interventions rapides partout en Sarthe.",
  },
  {
    icon: IconTorch,
    title: "Matériel pro",
    text: "Un équipement de soudure professionnel pour un rendu net et précis.",
  },
  {
    icon: IconSpark,
    title: "Finitions soignées",
    text: "Le souci du détail, de la première découpe à la dernière passe.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 glow-weld" />
      <div className="u-container relative">
        <SectionHeading
          index="05"
          kicker={`Pourquoi ${site.name}`}
          title="Le sérieux d'un pro, la proximité d'un artisan"
          intro="Six bonnes raisons de confier votre projet métal à un atelier indépendant."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                className="group bg-steel-950 p-8 transition-colors duration-300 hover:bg-steel-900"
              >
                <div className="flex items-center gap-4">
                  <span className="text-weld">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-lg font-medium uppercase tracking-wide text-cream">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-fog">{r.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
