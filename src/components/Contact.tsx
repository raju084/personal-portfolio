import { useState, type FormEvent } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { profile } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Prefill mailto trigger
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  return (
    <>
      <section id="contact" className="relative bg-slate-950 py-24 md:py-32 text-white overflow-hidden">
        {/* Glow ambient effects */}
        <div className="pointer-events-none absolute -bottom-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute top-[-5rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-teal-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Get In Touch" title="Let's Build Something Exceptional Together" tone="dark" />
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                I am currently open to full-stack engineering roles, software development opportunities, and collaborative initiatives. Feel free to send a message or connect directly.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] items-start">
            {/* Direct Channels */}
            <Reveal delay={100}>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Prompt Response Guaranteed
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300 hover:bg-white/15 hover:text-white transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      {copiedEmail ? "Copied!" : "Copy Email"}
                    </button>
                  </div>

                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-4 block group"
                  >
                    <p className="text-xs text-slate-400">Direct Email</p>
                    <p className="mt-1 text-base font-semibold text-white group-hover:text-sky-300 transition-colors break-all">
                      {profile.email}
                    </p>
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition-all hover:border-sky-500/40 hover:bg-slate-900 group"
                  >
                    <Phone className="text-sky-400 group-hover:scale-110 transition-transform" size={20} />
                    <p className="mt-3 text-xs text-slate-400">Phone</p>
                    <p className="mt-1 text-sm font-semibold text-white">{profile.phone}</p>
                  </a>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
                    <MapPin className="text-teal-400" size={20} />
                    <p className="mt-3 text-xs text-slate-400">Location</p>
                    <p className="mt-1 text-sm font-semibold text-white">{profile.location}</p>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur transition-all hover:border-sky-500/40 hover:bg-slate-900 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">LinkedIn</p>
                      <p className="text-sm font-semibold text-white group-hover:text-sky-300">Connect Profile</p>
                    </div>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur transition-all hover:border-sky-500/40 hover:bg-slate-900 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">GitHub</p>
                      <p className="text-sm font-semibold text-white group-hover:text-teal-300">View Repositories</p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Interactive Contact Form */}
            <Reveal delay={200}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-slate-900/80 p-7 sm:p-9 backdrop-blur shadow-2xl"
              >
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles size={18} className="text-sky-400" />
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  Fill in your details below to reach out directly.
                </p>

                {submitted && (
                  <div className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 text-xs sm:text-sm text-emerald-300 animate-fade-up">
                    Thank you! Your message client has been triggered and your message was captured.
                  </div>
                )}

                <div className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:bg-white/10 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:bg-white/10 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Full-Stack Developer Opportunity / Project Inquiry"
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:bg-white/10 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Bhagya, I came across your portfolio and would like to discuss..."
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:bg-white/10 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:opacity-95 active:scale-[0.99]"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Engineered with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </>
  );
}
