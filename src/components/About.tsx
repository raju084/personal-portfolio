import { CheckCircle2, Code2, Cpu, Database, Layers, Sparkles } from "lucide-react";
import { focusAreas, profile } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const highlights = [
  "Production experience building both frontend UIs and backend APIs.",
  "Skilled in PostgreSQL query optimization and relational schema design.",
  "Hands-on with Docker containerization and Render cloud deployments.",
  "Strict adherence to TypeScript types, clean architecture, and modular code.",
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-16 items-start">
          {/* Left Column: Summary & Core Strengths */}
          <Reveal>
            <SectionHeading eyebrow="About Me" title="Turning Complex Problems into Clean, Reliable Web Applications" />
            
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {profile.summary}
            </p>

            {/* Core Highlights List */}
            <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-800">
                <Sparkles size={16} className="text-sky-600" />
                Key Capabilities at a Glance
              </h4>
              <ul className="mt-4 space-y-3">
                {highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right Column: Focus Areas */}
          <div className="grid gap-5">
            {focusAreas.map((area, index) => {
              const icons = [Code2, Layers, Database];
              const Icon = icons[index % icons.length];

              return (
                <Reveal key={area.title} delay={index * 100}>
                  <div className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{area.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {area.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/70 transition-colors group-hover:border-sky-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
