import { IconSpark } from "./Icons";

const words = [
  "Soudure TIG",
  "Métallerie",
  "Structures métalliques",
  "Ferronnerie",
  "Inox & Aluminium",
  "Dépannage sur site",
  "Chaudronnerie",
  "Sur mesure",
];

function Row() {
  return (
    <div className="flex items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className="px-6 font-display text-lg font-medium uppercase tracking-wide text-fog">
            {w}
          </span>
          <IconSpark className="h-4 w-4 shrink-0 text-weld" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/8 bg-steel-950 py-5">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
