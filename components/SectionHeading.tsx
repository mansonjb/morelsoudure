type Props = {
  index: string;
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  kicker,
  title,
  intro,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <div
      data-reveal
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div
        className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-7 bg-weld" />
        <span className="text-weld">{index}</span>
        <span className="text-fog">{kicker}</span>
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.02] text-cream md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed text-fog md:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
