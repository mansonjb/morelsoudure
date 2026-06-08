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

// NOTE : visuels de démonstration. Remplacez chaque tuile par une vraie
// photo de chantier via <Image> pour un rendu définitif.
const projects = [
  { title: "Portail contemporain", tag: "Métallerie", icon: IconGate },
  { title: "Garde-corps inox", tag: "Sur mesure", icon: IconBeams },
  { title: "Escalier métal & bois", tag: "Métallerie", icon: IconScroll },
  { title: "Verrière d'atelier", tag: "Métallerie", icon: IconGate },
  { title: "Mezzanine industrielle", tag: "Structure", icon: IconBeams },
  { title: "Pergola acier", tag: "Sur mesure", icon: IconSheet },
];

export default function Realisations() {
  return (
    <section id="realisations" className="bg-steel-950 py-24 md:py-32">
      <div className="u-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="04"
            kicker="Réalisations"
            title="Du métal qui parle de lui-même"
            intro="Un aperçu de ce qui sort de l'atelier. Chaque projet est pensé, fabriqué et posé sur mesure."
          />
          <a
            href="#contact"
            data-reveal
            className="hidden shrink-0 items-center gap-2 border border-white/15 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-weld hover:text-weld md:inline-flex"
          >
            Discuter de mon projet
            <IconArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <a
                key={p.title}
                href="#contact"
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden border border-white/10 bg-gradient-to-br from-steel-800 to-steel-950"
              >
                {/* filigrane */}
                <Icon className="absolute -right-6 -top-6 h-40 w-40 text-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:text-weld/10" />
                {/* lueur au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-weld/0 to-transparent transition-all duration-500 group-hover:from-weld/10" />

                <div className="relative p-6">
                  <span className="inline-block bg-steel-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-weld backdrop-blur-sm">
                    {p.tag}
                  </span>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-medium uppercase tracking-wide text-cream">
                      {p.title}
                    </h3>
                    <IconArrowUpRight className="h-5 w-5 shrink-0 text-fog-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-weld" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.16em] text-fog-dim">
          <IconTorch className="mr-2 inline h-4 w-4 text-weld" />
          Photos de vos chantiers à intégrer ici
          <IconWrench className="ml-2 inline h-4 w-4 text-weld" />
        </p>
      </div>
    </section>
  );
}
