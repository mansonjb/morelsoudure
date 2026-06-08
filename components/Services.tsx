import SectionHeading from "./SectionHeading";
import {
  IconArrowUpRight,
  IconBeams,
  IconGate,
  IconScroll,
  IconSheet,
  IconTorch,
  IconWrench,
} from "./Icons";

const services = [
  {
    icon: IconTorch,
    title: "Soudure TIG / MIG / ARC",
    text: "Assemblages précis et propres sur acier, inox et aluminium, en atelier comme sur site.",
  },
  {
    icon: IconGate,
    title: "Métallerie sur mesure",
    text: "Portails, garde-corps, escaliers, verrières et mobilier métal conçus selon vos plans.",
  },
  {
    icon: IconBeams,
    title: "Structures métalliques",
    text: "Charpentes, mezzanines, ossatures et passerelles dimensionnées pour durer.",
  },
  {
    icon: IconScroll,
    title: "Ferronnerie & design",
    text: "Pièces uniques, restauration et créations décoratives travaillées à la main.",
  },
  {
    icon: IconWrench,
    title: "Dépannage sur site",
    text: "Intervention rapide sur votre chantier pour réparer, renforcer ou modifier une structure.",
  },
  {
    icon: IconSheet,
    title: "Chaudronnerie & tôlerie",
    text: "Découpe, pliage, formage et réparation de tôle et d'ensembles chaudronnés.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 md:py-32">
      <div className="u-container">
        <SectionHeading
          index="01"
          kicker="Nos services"
          title="Tout ce qui touche au métal"
          intro="Un seul interlocuteur pour vos travaux de soudure et de métallerie, de l'étude à la pose."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                className="group relative flex flex-col bg-steel-950 p-8 transition-colors duration-300 hover:bg-steel-900 md:p-9"
              >
                <span className="absolute right-7 top-7 font-display text-sm text-fog-dim/60">
                  0{i + 1}
                </span>

                <span className="grid h-14 w-14 place-items-center border border-white/10 bg-steel-900 text-weld transition-colors duration-300 group-hover:border-weld group-hover:bg-weld group-hover:text-ink">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-7 font-display text-xl font-medium uppercase tracking-wide text-cream">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                  {s.text}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-fog-dim transition-colors group-hover:text-weld">
                  En savoir plus
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
