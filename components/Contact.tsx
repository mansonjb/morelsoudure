"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import {
  IconArrowRight,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "./Icons";

const coords = [
  {
    icon: IconPhone,
    label: "Téléphone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: IconMail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: IconMapPin,
    label: "Atelier",
    value: site.address,
  },
  {
    icon: IconClock,
    label: "Horaires",
    value: site.hours,
  },
];

const fieldClass =
  "w-full border border-white/10 bg-ink px-4 py-3 text-sm text-cream placeholder:text-fog-dim transition-colors focus:border-weld focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Demande de devis - ${form.name || "Site web"}`;
    const body = [
      `Nom : ${form.name}`,
      `E-mail : ${form.email}`,
      `Téléphone : ${form.phone}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-steel-950 py-24 md:py-32">
      <div className="u-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coordonnées */}
          <div>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em]">
              <span className="h-px w-7 bg-weld" />
              <span className="text-weld">08</span>
              <span className="text-fog">Contact</span>
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-cream md:text-5xl">
              Parlons de
              <br />
              votre projet
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fog">
              Décrivez-nous votre besoin en quelques mots. On revient vers vous
              sous {site.quoteDelay} avec un premier retour et un devis clair.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden border border-white/8 bg-white/8 sm:grid-cols-2">
              {coords.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex h-full items-start gap-4 bg-steel-900 p-5 transition-colors group-hover:bg-steel-800">
                    <span className="grid h-10 w-10 shrink-0 place-items-center bg-weld/15 text-weld">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-fog-dim">
                        {c.label}
                      </div>
                      <div className="mt-1 text-sm text-cream">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="group">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={onSubmit}
            data-reveal
            className="border border-white/10 bg-steel-900 p-7 md:p-9"
          >
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-fog-dim">
                    Nom *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Votre nom"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-fog-dim">
                    Téléphone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="06 00 00 00 00"
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-fog-dim">
                  E-mail *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="vous@exemple.fr"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.14em] text-fog-dim">
                  Votre projet *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Portail, garde-corps, réparation, structure… décrivez votre besoin."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-weld px-7 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-weld-bright"
              >
                Envoyer ma demande
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <p className="text-center text-xs text-fog-dim">
                Ou écrivez-nous directement à{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-weld hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
