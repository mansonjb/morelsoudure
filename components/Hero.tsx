import { site } from "@/lib/site";
import {
  IconArrowRight,
  IconCheck,
  IconSpark,
} from "./Icons";

const sparks = [
  { left: "12%", delay: "0s", dur: "3.2s" },
  { left: "24%", delay: "1.1s", dur: "3.8s" },
  { left: "38%", delay: "0.5s", dur: "3.4s" },
  { left: "47%", delay: "2.1s", dur: "4.1s" },
  { left: "58%", delay: "1.6s", dur: "3.1s" },
  { left: "69%", delay: "0.2s", dur: "3.9s" },
  { left: "78%", delay: "2.6s", dur: "3.5s" },
  { left: "88%", delay: "1.3s", dur: "4.2s" },
  { left: "33%", delay: "3.0s", dur: "3.6s" },
  { left: "63%", delay: "2.4s", dur: "3.3s" },
];

const trust = [
  "Soudeur certifié",
  "Acier · Inox · Alu",
  `Devis sous ${site.quoteDelay}`,
  `${site.yearsExperience} ans d'expérience`,
];

const fiche = [
  { k: "Procédés", v: "TIG · MIG-MAG · ARC" },
  { k: "Matériaux", v: "Acier · Inox · Aluminium" },
  { k: "Délai devis", v: site.quoteDelay },
  { k: "Zone", v: `${site.city} + ${site.radiusKm} km` },
];

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-4 w-4 border-weld ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      {/* Textures & lumières */}
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-10%] top-[28%] glow-weld" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      {/* Étincelles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-24 h-48">
        {sparks.map((s, i) => (
          <span
            key={i}
            className="spark"
            style={{
              left: s.left,
              bottom: 0,
              animationDelay: s.delay,
              animationDuration: s.dur,
            }}
          />
        ))}
      </div>

      <div className="u-container relative pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Colonne texte */}
          <div className="lg:col-span-7">
            <p
              data-reveal
              className="kicker text-xs font-medium uppercase tracking-[0.22em] text-fog"
            >
              Atelier de soudure & métallerie · {site.region}
            </p>

            <h1
              data-reveal
              style={{ transitionDelay: "60ms" }}
              className="mt-6 font-display text-5xl font-semibold uppercase leading-[0.98] text-cream sm:text-6xl md:text-7xl"
            >
              Le savoir-<span className="text-weld">fer</span>,
              <br />
              point par point<span className="text-weld">.</span>
            </h1>

            <p
              data-reveal
              style={{ transitionDelay: "120ms" }}
              className="mt-7 max-w-xl text-base leading-relaxed text-fog md:text-lg"
            >
              Soudure TIG, MIG-MAG et à l'arc, métallerie sur mesure et
              structures métalliques. De la pièce unique au chantier complet,{" "}
              {site.name} façonne le métal avec la rigueur d'un vrai travail
              d'atelier.
            </p>

            <div
              data-reveal
              style={{ transitionDelay: "180ms" }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-weld px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-weld-bright"
              >
                Demander un devis gratuit
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#realisations"
                className="inline-flex items-center justify-center gap-2 border border-white/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:border-weld hover:text-weld"
              >
                Voir nos réalisations
              </a>
            </div>

            <ul
              data-reveal
              style={{ transitionDelay: "240ms" }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trust.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-sm text-fog"
                >
                  <IconCheck className="h-4 w-4 text-weld" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Fiche atelier */}
          <div className="lg:col-span-5">
            <div
              data-reveal
              style={{ transitionDelay: "200ms" }}
              className="relative border border-white/10 bg-steel-900/60 p-7 backdrop-blur-sm md:p-8"
            >
              <Corner className="left-[-1px] top-[-1px] border-l-2 border-t-2" />
              <Corner className="right-[-1px] top-[-1px] border-r-2 border-t-2" />
              <Corner className="bottom-[-1px] left-[-1px] border-b-2 border-l-2" />
              <Corner className="bottom-[-1px] right-[-1px] border-b-2 border-r-2" />

              <div className="flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-[0.2em] text-cream">
                  Fiche atelier
                </span>
                <IconSpark className="h-5 w-5 text-weld" />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-fog-dim">
                // Atelier indépendant
              </div>

              <dl className="mt-7 divide-y divide-white/8">
                {fiche.map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between py-3.5"
                  >
                    <dt className="text-xs uppercase tracking-[0.14em] text-fog-dim">
                      {row.k}
                    </dt>
                    <dd className="font-display text-base font-medium tracking-wide text-cream">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={`tel:${site.phoneHref}`}
                className="mt-6 flex items-center justify-between bg-steel-800 px-4 py-3.5 transition-colors hover:bg-steel-700"
              >
                <span className="text-xs uppercase tracking-[0.14em] text-fog">
                  Un projet ?
                </span>
                <span className="font-display text-lg font-medium text-weld">
                  {site.phone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
