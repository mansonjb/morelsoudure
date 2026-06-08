import { site } from "@/lib/site";

const stats = [
  { value: String(site.yearsExperience), suffix: "ans", label: "d'expérience" },
  { value: String(site.projects), suffix: "+", label: "projets réalisés" },
  { value: "48", suffix: "h", label: "pour votre devis" },
  { value: "100", suffix: "%", label: "soudures garanties" },
];

export default function Stats() {
  return (
    <section className="border-b border-white/8 bg-ink">
      <div className="u-container">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/8 sm:divide-y-0 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex flex-col items-center justify-center px-4 py-10 text-center md:py-12"
            >
              <div className="flex items-end gap-1">
                <span className="font-display text-5xl font-semibold leading-none text-cream md:text-6xl">
                  {s.value}
                </span>
                <span className="mb-1 font-display text-2xl font-medium leading-none text-weld md:text-3xl">
                  {s.suffix}
                </span>
              </div>
              <span className="mt-3 text-xs uppercase tracking-[0.18em] text-fog-dim">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
