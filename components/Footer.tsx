import { nav, site } from "@/lib/site";
import { IconMail, IconMapPin, IconPhone, IconTorch } from "./Icons";

const services = [
  "Soudure TIG / MIG / ARC",
  "Métallerie sur mesure",
  "Structures métalliques",
  "Ferronnerie & design",
  "Dépannage sur site",
  "Chaudronnerie & tôlerie",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="u-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marque */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-weld text-ink">
                <IconTorch className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold uppercase tracking-tight text-cream">
                  Morel<span className="text-weld">.</span>
                  <span className="ml-1 text-fog-dim">Soudure</span>
                </span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-weld">
                  Le savoir-fer, point par point
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog">
              Atelier de soudure et de métallerie sur mesure {site.cityA}. Un
              artisan certifié pour tous vos travaux sur acier, inox et
              aluminium.
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-3 text-sm text-fog transition-colors hover:text-cream"
              >
                <IconPhone className="h-4 w-4 text-weld" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-fog transition-colors hover:text-cream"
              >
                <IconMail className="h-4 w-4 text-weld" />
                {site.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-fog">
                <IconMapPin className="h-4 w-4 text-weld" />
                {site.address}
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.16em] text-cream">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-fog transition-colors hover:text-weld"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.16em] text-cream">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-fog transition-colors hover:text-weld"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.16em] text-cream">
              Horaires
            </h3>
            <p className="mt-5 text-sm text-fog">{site.hours}</p>
            <p className="mt-2 text-sm text-fog-dim">Sam : sur rendez-vous</p>
            <a
              href="#contact"
              className="mt-5 inline-block bg-weld px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-weld-bright"
            >
              Devis gratuit
            </a>
          </div>
        </div>
      </div>

      {/* Barre basse */}
      <div className="border-t border-white/8">
        <div className="u-container flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-fog-dim sm:flex-row sm:text-left">
          <p>
            © {year} {site.name} · Soudure & métallerie {site.cityA}.
          </p>
          <p>SIRET {site.siret} · Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
