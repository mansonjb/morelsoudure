import Image from "next/image";
import patron from "@/public/patron.jpg";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import { IconCheck } from "./Icons";

const commitments = [
  "Soudeur certifié & assuré",
  "Devis clair, sans surprise",
  "Délais annoncés, délais tenus",
  "Finitions soignées et garanties",
];

export default function About() {
  return (
    <section id="atelier" className="relative bg-steel-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
      <div className="u-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait */}
          <div data-reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src={patron}
                alt={`${site.founder}, ${site.founderRole.toLowerCase()} chez ${site.name}`}
                placeholder="blur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <div className="font-display text-2xl font-semibold uppercase tracking-wide text-cream">
                  {site.founder}
                </div>
                <div className="mt-1 text-sm uppercase tracking-[0.16em] text-weld">
                  {site.founderRole}
                </div>
              </div>
              {/* repères d'angle */}
              <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-weld" />
              <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-weld" />
            </div>

            {/* Badge expérience */}
            <div className="absolute -bottom-5 -right-4 flex items-center gap-3 bg-weld px-5 py-4 text-ink shadow-2xl md:-right-6">
              <span className="font-display text-4xl font-bold leading-none">
                {site.yearsExperience}
              </span>
              <span className="text-[11px] font-semibold uppercase leading-tight tracking-wide">
                ans
                <br />
                de métier
              </span>
            </div>
          </div>

          {/* Texte */}
          <div>
            <SectionHeading
              index="02"
              kicker="L'atelier"
              title="Un artisan, pas une chaîne"
              intro={`Derrière ${site.name}, il y a ${site.founder}, un soudeur passionné qui met la main à chaque projet.`}
            />

            <div className="mt-7 space-y-5 text-base leading-relaxed text-fog">
              <p>
                Soudeur certifié depuis plus de {site.yearsExperience} ans,{" "}
                {site.founder} a fondé {site.name} avec une conviction simple :
                un travail bien fait se voit, et surtout, il dure. Chaque pièce
                qui sort de l'atelier est contrôlée, ajustée et finie avec le
                même soin.
              </p>
              <p>
                De la réparation urgente à la structure complète, vous avez un
                seul interlocuteur, du premier échange jusqu'à la pose. Pas
                d'intermédiaire, pas de sous-traitance hasardeuse : juste du
                métal bien travaillé.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {commitments.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-cream">
                  <span className="grid h-6 w-6 shrink-0 place-items-center bg-weld/15 text-weld">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
