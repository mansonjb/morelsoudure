import SectionHeading from "./SectionHeading";
import { IconQuote, IconStar } from "./Icons";

const reviews = [
  {
    text: "Travail impeccable sur notre garde-corps en inox. Soudures nettes, pose rapide et un vrai conseil en amont. Je recommande sans hésiter.",
    name: "Sophie L.",
    place: "Le Mans",
  },
  {
    text: "Kevin est intervenu en urgence pour réparer une structure dans notre atelier. Réactif, professionnel et soigné. Rien à redire.",
    name: "Marc D.",
    place: "Coulaines",
  },
  {
    text: "Un portail sur mesure exactement comme sur le plan. Délais tenus et finitions au top. Un grand merci pour le sérieux.",
    name: "Julie & Romain",
    place: "Arnage",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-steel-950 py-24 md:py-32">
      <div className="u-container">
        <SectionHeading
          index="06"
          kicker="Avis clients"
          title="Ils nous ont fait confiance"
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="relative flex flex-col border border-white/10 bg-steel-900 p-8"
            >
              <IconQuote className="absolute right-6 top-6 h-9 w-9 text-white/5" />
              <div className="flex gap-1 text-weld">
                {Array.from({ length: 5 }).map((_, s) => (
                  <IconStar key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-fog">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-6 border-t border-white/8 pt-5">
                <div className="font-display text-base font-medium uppercase tracking-wide text-cream">
                  {r.name}
                </div>
                <div className="mt-0.5 text-xs uppercase tracking-[0.14em] text-fog-dim">
                  {r.place}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
