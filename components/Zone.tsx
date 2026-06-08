import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import { IconMapPin } from "./Icons";

const towns = [
  "Le Mans",
  "Allonnes",
  "Coulaines",
  "Arnage",
  "Changé",
  "Mulsanne",
  "Yvré-l'Évêque",
  "La Chapelle-Saint-Aubin",
  "Saint-Saturnin",
  "La Ferté-Bernard",
];

// Points de couverture (positionnés sur le radar)
const dots = [
  { top: "18%", left: "44%" },
  { top: "32%", left: "70%" },
  { top: "60%", left: "74%" },
  { top: "74%", left: "40%" },
  { top: "58%", left: "20%" },
  { top: "30%", left: "26%" },
];

export default function Zone() {
  return (
    <section id="zone" className="border-y border-white/8 bg-ink py-24 md:py-32">
      <div className="u-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texte */}
          <div>
            <SectionHeading
              index="07"
              kicker="Zone d'intervention"
              title={`${site.city} et toute la ${site.region}`}
              intro={`Basé à ${site.address.split(",").slice(-1)[0].trim()}, nous intervenons en atelier et sur site dans un rayon d'environ ${site.radiusKm} km autour ${site.cityDe}.`}
            />

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {towns.map((t, i) => (
                <li
                  key={t}
                  data-reveal
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="flex items-center gap-2 border border-white/10 bg-steel-900 px-3.5 py-2 text-sm text-fog"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-weld" />
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-fog-dim">
              Votre commune n'est pas dans la liste ?{" "}
              <a href="#contact" className="text-weld hover:underline">
                Contactez-nous
              </a>
              , on se déplace au cas par cas.
            </p>
          </div>

          {/* Radar */}
          <div data-reveal className="flex justify-center">
            <div className="relative aspect-square w-full max-w-md">
              {[100, 74, 50, 28].map((s, i) => (
                <span
                  key={s}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                    i === 0 ? "border-weld/25" : "border-white/10"
                  }`}
                  style={{ width: `${s}%`, height: `${s}%` }}
                />
              ))}

              {/* lignes de croix */}
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/5" />
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/5" />

              {/* points de couverture */}
              {dots.map((d, i) => (
                <span
                  key={i}
                  className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-weld/70"
                  style={{ top: d.top, left: d.left }}
                />
              ))}

              {/* centre */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-weld/30" />
                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-weld text-ink">
                  <IconMapPin className="h-6 w-6" />
                </span>
              </div>

              {/* libellé rayon */}
              <span className="absolute bottom-[6%] left-1/2 -translate-x-1/2 bg-ink px-3 text-xs font-medium uppercase tracking-[0.16em] text-fog-dim">
                ≈ {site.radiusKm} km autour {site.cityDe}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
