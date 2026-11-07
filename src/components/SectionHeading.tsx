interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
}

export default function SectionHeading({ eyebrow, title, tone = "light" }: SectionHeadingProps) {
  const eyebrowClass = tone === "dark" ? "text-sky-400" : "text-sky-700";
  const titleClass = tone === "dark" ? "text-white" : "text-slate-900";

  return (
    <div>
      <p className={`text-sm font-semibold uppercase tracking-widest ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold leading-[1.2] md:text-4xl ${titleClass}`}>{title}</h2>
    </div>
  );
}
