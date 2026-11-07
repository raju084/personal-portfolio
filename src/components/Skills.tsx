import { Award, BookOpen, CheckCircle, GraduationCap, Sparkles } from "lucide-react";
import { certifications, education, skillGroups } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50/60 py-24 md:py-32 border-t border-slate-200/60">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Expertise" title="Technical Skills, Education & Certifications" />
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            A comprehensive overview of my technical stack, academic qualifications, and professional certifications.
          </p>
        </Reveal>

        {/* Technical Skills Card */}
        <div className="mt-12 rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Technical Competencies</h3>
              <p className="text-xs text-slate-500 mt-0.5">Categorized by stack proficiency and production usage</p>
            </div>
            <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Full-Stack & ML Stack
            </span>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-xl border border-slate-100 bg-slate-50/60 p-5 transition-all hover:border-slate-200 hover:bg-slate-50"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-800">{group.label}</p>
                  <span className="text-[11px] font-medium text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200/60">
                    {group.category}
                  </span>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="group inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-xs transition-all hover:border-sky-300 hover:text-sky-900"
                    >
                      <span>{item.name}</span>
                      {item.level === "Advanced" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" title="Advanced" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency legend */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Advanced / Production Experience
            </span>
            <span>•</span>
            <span className="text-slate-400">Regularly updated with new enterprise technologies</span>
          </div>
        </div>

        {/* Education & Certifications 2-Column Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
          {/* Education Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Education</h3>
                <p className="text-xs text-slate-500">Academic Qualifications & Distinctions</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={edu.degree}
                  className={`relative ${
                    idx !== 0 ? "pt-6 border-t border-slate-100" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-md bg-teal-50 px-2.5 py-0.5 text-xs font-bold text-teal-800 border border-teal-200/70">
                      {edu.detail}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{edu.period}</span>
                  </div>

                  <h4 className="mt-2.5 text-base font-bold text-slate-900 leading-snug">{edu.degree}</h4>
                  <p className="mt-1 text-sm font-semibold text-slate-700">{edu.school}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {edu.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Professional Certifications</h3>
                <p className="text-xs text-slate-500">Accredited Technical Programs ({certifications.length})</p>
              </div>
            </div>

            <div className="mt-6 space-y-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle size={17} className="shrink-0 text-teal-600" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{cert.name}</p>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-white px-2.5 py-1 rounded-md border border-slate-200/70 shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
