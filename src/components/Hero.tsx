import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { profile, stats, tagline } from "@/data/resume";

const dotGrid = {
  backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none" style={dotGrid} />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-teal-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[20rem] w-[20rem] rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-32 pb-16">
        {/* Availability Badge */}
        <div className="animate-fade-up flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <Sparkles size={13} className="text-amber-400" />
            Open for Full-Time Roles
          </span>
        </div>

        {/* Name and Dynamic Role */}
        <h1 className="animate-fade-up mt-8 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300">{profile.name}</span>
        </h1>

        <div className="animate-fade-up mt-4 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
          <span>Specialized as</span>
          <span
            key={roleIndex}
            className="inline-block text-sky-400 underline decoration-sky-500/40 underline-offset-8 transition-all duration-500 animate-fade-up"
          >
            {profile.roles[roleIndex]}
          </span>
        </div>

        {/* Tagline / Value Proposition */}
        <p className="animate-fade-up mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
          {tagline}
        </p>

        {/* Primary Action Buttons */}
        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5"
          >
            <Mail size={16} className="text-sky-400" />
            Get In Touch
          </a>

          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-500/10 px-5 py-3.5 text-sm font-semibold text-sky-300 backdrop-blur transition-all hover:bg-sky-500/20 hover:border-sky-400/50 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Contact Strip with Quick Copy */}
        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-sky-400" />
            {profile.location}
          </span>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            title="Click to copy email address"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-slate-400" />}
            <span>{copied ? "Email copied!" : profile.email}</span>
          </button>

          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-sky-300"
          >
            <Phone size={14} className="text-sky-400" />
            {profile.phone}
          </a>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-sky-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-sky-300"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="animate-fade-up mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/90 hover:-translate-y-1"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-200">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.hint}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="relative mx-auto pb-8">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-400 backdrop-blur transition-colors hover:border-white/30 hover:text-white"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
