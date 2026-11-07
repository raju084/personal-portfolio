import { useState } from "react";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";
import { experience, projectCategories, projects } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-slate-50/70 py-24 md:py-32 border-y border-slate-200/60">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Professional Journey" title="Experience & Track Record" />
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Real-world software engineering experience working with cross-functional teams to build, optimize, and deploy scalable products.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <article className="relative rounded-2xl border border-slate-200/80 bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-bold text-slate-900">{job.role}</h3>
                      <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-800">
                        {job.badge}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Briefcase size={15} className="text-sky-600" />
                        {job.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <MapPin size={14} className="text-slate-400" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    <Calendar size={13} className="text-slate-500" />
                    {job.period}
                  </span>
                </div>

                {/* Project context badge */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 border border-slate-200/60">
                  <span className="font-semibold text-slate-900">Project Focus:</span>
                  <span>{job.project}</span>
                </div>

                {/* Key Achievements Bullet points */}
                <ul className="mt-6 space-y-3.5">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-slate-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [primaryHighlight, ...additionalHighlights] = project.highlights;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
      {/* Top Header & Category */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Project {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200/60">
              <Sparkles size={11} className="text-amber-500" />
              Featured
            </span>
          )}
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Title */}
      <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 group-hover:text-sky-700 transition-colors">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="mt-2 text-sm font-medium text-slate-600">{project.tagline}</p>

      {/* Tech Stack Badges */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-800 border border-sky-100/80"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Primary Highlight */}
      <p className="mt-5 text-sm leading-relaxed text-slate-600">{primaryHighlight}</p>

      {/* Expandable highlights */}
      {additionalHighlights.length > 0 && (
        <>
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <ul className="overflow-hidden">
              <li className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
                {additionalHighlights.map((point) => (
                  <p key={point} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span>{point}</span>
                  </p>
                ))}
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors"
          >
            {expanded ? "Show less" : `View architecture details (${additionalHighlights.length})`}
            <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </button>
        </>
      )}

      {/* Project Links Footer */}
      <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors"
        >
          <Github size={14} />
          Source Repository
        </a>

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors"
          >
            Live Demo
            <ExternalLink size={13} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <Layers size={13} />
            Enterprise Service
          </span>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionHeading eyebrow="Portfolio" title="Featured Full-Stack Projects" />
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Production-grade applications engineered with modern frontend interfaces, secure backend APIs, and optimized databases.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
