import { useEffect, useState } from "react";
import { Download, Menu, Sparkles, X } from "lucide-react";
import { profile } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["contact", "skills", "projects", "experience", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onDark
          ? "bg-slate-950/40 text-white backdrop-blur-md border-b border-white/5"
          : "border-b border-slate-200/80 bg-white/90 text-slate-900 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand / Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 group-hover:scale-105 shadow-sm ${
              onDark
                ? "bg-gradient-to-tr from-sky-400 to-teal-400 text-slate-950 font-extrabold"
                : "bg-slate-900 text-white"
            }`}
          >
            {profile.initials}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight">{profile.name}</span>
            <span className={`text-[10px] -mt-0.5 ${onDark ? "text-sky-300" : "text-slate-500"}`}>
              {profile.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? onDark
                      ? "text-sky-300 bg-white/10"
                      : "text-sky-700 bg-sky-50"
                    : onDark
                    ? "text-slate-300 hover:text-white hover:bg-white/5"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Resume & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
              onDark
                ? "border border-sky-400/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            <Download size={13} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
              onDark ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 text-slate-900 md:hidden shadow-xl animate-fade-up">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-sky-600 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
