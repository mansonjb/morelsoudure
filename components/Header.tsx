"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { IconClose, IconMenu, IconPhone, IconTorch } from "./Icons";

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center bg-weld text-ink transition-colors group-hover:bg-weld-bright">
        <IconTorch className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold uppercase tracking-tight text-cream">
          Morel<span className="text-weld">.</span>
          <span className="ml-1 text-fog-dim">Soudure</span>
        </span>
        <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.1em] text-fog-dim sm:block">
          Le savoir-fer, point par point
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-steel-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="u-container flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[0.12em] text-fog transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-fog transition-colors hover:text-cream"
          >
            <IconPhone className="h-4 w-4 text-weld" />
            {site.phone}
          </a>
          <a
            href="#contact"
            className="bg-weld px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-weld-bright"
          >
            Devis gratuit
          </a>
        </div>

        {/* Burger mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border border-white/10 text-cream md:hidden"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/8 bg-steel-950/98 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <nav className="u-container flex flex-col py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-fog transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center justify-center gap-2 border border-white/10 py-3 text-sm font-medium text-cream"
            >
              <IconPhone className="h-4 w-4 text-weld" />
              {site.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-weld py-3 text-center text-[13px] font-semibold uppercase tracking-[0.1em] text-ink"
            >
              Devis gratuit
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
