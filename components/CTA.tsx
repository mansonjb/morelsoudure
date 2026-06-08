import { site } from "@/lib/site";
import { IconArrowRight, IconPhone } from "./Icons";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-weld">
      {/* texture sombre par-dessus l'orange */}
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-30 mix-blend-multiply" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-weld-bright/40 blur-3xl" />

      <div className="u-container relative py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div data-reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
              Devis gratuit & sans engagement
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] text-ink md:text-5xl">
              Un projet en métal ?<br />
              Parlons-en dès aujourd'hui.
            </h2>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col xl:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-cream transition-colors hover:bg-steel-800"
            >
              Demander un devis
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-ink/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
