import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Étude & conseil",
    text: "On analyse votre besoin, sur plan ou sur place, et on vous oriente vers la meilleure solution technique.",
  },
  {
    n: "02",
    title: "Devis détaillé",
    text: "Un chiffrage clair et détaillé sous 48 h, sans surprise ni coût caché.",
  },
  {
    n: "03",
    title: "Fabrication atelier",
    text: "Découpe, soudure et finitions réalisées dans notre atelier, avec contrôle qualité à chaque étape.",
  },
  {
    n: "04",
    title: "Pose & livraison",
    text: "Installation soignée sur site et vérification finale réalisée avec vous.",
  },
];

export default function Process() {
  return (
    <section id="methode" className="border-y border-white/8 bg-ink py-24 md:py-32">
      <div className="u-container">
        <SectionHeading
          index="03"
          kicker="Notre méthode"
          title="Du premier appel à la pose"
          intro="Une façon de travailler simple et carrée, pour que vous sachiez toujours où vous en êtes."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group relative bg-steel-950 p-8 transition-colors duration-300 hover:bg-steel-900"
            >
              <span className="font-display text-6xl font-bold leading-none text-steel-700 transition-colors duration-300 group-hover:text-weld">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-xl font-medium uppercase tracking-wide text-cream">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
