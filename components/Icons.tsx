import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ── Services ───────────────────────────────────────────── */

export function IconTorch(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3.5c-3.5 1.2-5.5 3.8-5.5 6.7 0 1.5.7 2.6 1.7 3.4-.2-1.4.3-2.6 1.3-3.4-.3 1.8.6 2.9 1.8 3.6 1.5.9 2.4 2 2.4 3.6 0 2-1.7 3.6-3.9 3.6S4 23 4 20.2" />
      <path d="m15 4 4.5-1.3M15.6 7l4.7-.6M16 10.2l4.4.8" />
    </svg>
  );
}

export function IconGate(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18M4 20V8l8-3 8 3v12" />
      <path d="M8 20V9.5M12 20V8M16 20V9.5M4 13.5h16" />
    </svg>
  );
}

export function IconBeams(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 4h18M3 20h18M5 4l-2 16M19 4l2 16M9.5 4 8 20M14.5 4l1.5 16" />
    </svg>
  );
}

export function IconScroll(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V9a4 4 0 1 1 4 4c-2 0-3-1.4-3-3" />
      <path d="M12 21V9a4 4 0 1 0-4 4c2 0 3-1.4 3-3" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18v3h3l6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.1-.5-.5-2.1 2.7-2.5Z" />
    </svg>
  );
}

export function IconSheet(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8c3-2 6-2 9 0s6 2 9 0M3 13c3-2 6-2 9 0s6 2 9 0M3 18c3-2 6-2 9 0s6 2 9 0" />
    </svg>
  );
}

/* ── Utilitaires ────────────────────────────────────────── */

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="0" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 18.9 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
    </svg>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 7H5a3 3 0 0 0-3 3v7h7v-7H5l1-3h4V7Zm12 0h-5a3 3 0 0 0-3 3v7h7v-7h-4l1-3h4V7Z" opacity="0.9" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c.6 4.8 2.2 6.4 7 7-4.8.6-6.4 2.2-7 7-.6-4.8-2.2-6.4-7-7 4.8-.6 6.4-2.2 7-7Z" />
    </svg>
  );
}
