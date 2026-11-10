"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  GraduationCap,
  Mail,
  Menu,
  MoonStar,
  Send,
  Sparkles,
  SunMedium,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  aboutHighlights,
  aboutText,
  certifications,
  educationTimeline,
  experienceTimeline,
  navItems,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const socialIcons = {
  linkedin: BriefcaseBusiness,
  github: Code2,
  mail: Mail,
};

export default function PortfolioPage() {
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentYear, setCurrentYear] = useState(2026);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [formMessage, setFormMessage] = useState<{ type: "idle" | "error" | "success"; text: string }>({
    type: "idle",
    text: "",
  });

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      return;
    }

    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(systemPrefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? (window.scrollY / totalScrollable) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filterOptions = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [],
  );

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState.honeypot) {
      setFormMessage({ type: "error", text: "Unable to submit this form." });
      return;
    }

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormMessage({ type: "error", text: "Please complete your name, email, and message before sending." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      setFormMessage({ type: "error", text: "Please provide a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setFormMessage({ type: "idle", text: "" });

    await new Promise((resolve) => window.setTimeout(resolve, 900));

    setIsSubmitting(false);
    setFormMessage({
      type: "success",
      text: "Thanks for your message. This demo form is set up for a backend integration and is ready for Formspree, Resend, or a custom API route.",
    });
    setFormState({ name: "", email: "", subject: "", message: "", honeypot: "" });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="scroll-progress fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-slate-300 via-slate-500 to-slate-700 shadow-[0_0_18px_rgba(148,163,184,0.45)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-slate-300/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-overlay)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Isaac Attard home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 text-sm font-bold text-slate-950 shadow-lg shadow-slate-500/20">
              IA
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">Isaac</div>
              <div className="text-xs text-[var(--muted)]">Attard</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--bg-overlay)] md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--foreground)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <section className="grid min-h-[calc(100vh-6rem)] items-center gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
              <Sparkles size={14} />
              Available for software engineering opportunities
            </div>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {profile.heroTagline}
            </h1>

            <h2 className="mt-5 text-xl font-medium text-[var(--muted)] sm:text-2xl">
              {profile.name}
              <span className="mt-2 block text-[var(--primary)]">{profile.jobTitle}</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_18px_26px_rgba(148,163,184,0.25)]"
              >
                Explore My Projects
                <ArrowRight size={16} />
              </a>
              <a
                href={profile.cvLink}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.kind];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-panel gradient-border mx-auto max-w-md p-4">
              <div className="hero-photo relative">
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_40%)]" />
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 p-5">
                  <div className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    Malta
                  </div>
                  <div className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    Software
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Role</div>
                  <div className="mt-2 text-base font-semibold">Software Developer</div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Study</div>
                  <div className="mt-2 text-base font-semibold">First Class Honours</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="section-kicker">About Me</div>
            <h2 className="section-title">Thoughtful software engineering with a practical mind.</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div className="space-y-5">
              <div className="glass-panel p-8">
                <p className="text-lg leading-8 text-[var(--muted)]">{aboutText}</p>
              </div>
              <div className="nature-panel" aria-label="Scenic mountain background" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => {
                const Icon = [Code2, BriefcaseBusiness, Cpu, Database][index % 4];

                return (
                  <motion.article
                    key={item.title}
                    initial={prefersReducedMotion ? undefined : "hidden"}
                    whileInView={prefersReducedMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="glass-panel p-5"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-[var(--surface-strong)] p-3 text-[var(--primary)]">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="section-kicker">Professional Experience</div>
            <h2 className="section-title">Career timeline</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[1.12rem] top-0 bottom-0 hidden w-px bg-gradient-to-b from-slate-300/80 via-slate-500/70 to-slate-700/80 md:block" />

            <div className="space-y-6">
              {experienceTimeline.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.period}`}
                  initial={prefersReducedMotion ? undefined : "hidden"}
                  whileInView={prefersReducedMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="glass-panel relative overflow-hidden p-5 md:ml-10 md:p-7"
                >
                  <div className="absolute left-[-1.2rem] top-7 hidden h-5 w-5 rounded-full border-4 border-[var(--bg-overlay)] bg-gradient-to-br from-slate-200 to-slate-500 md:block" />
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--primary)]">{item.period}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{item.company}</h3>
                      <p className="mt-2 text-lg text-[var(--muted)]">{item.role}</p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">{item.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--primary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="section-kicker">Education</div>
            <h2 className="section-title">Academic foundation and technical depth.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {educationTimeline.map((item, index) => (
              <motion.article
                key={item.school}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex rounded-full bg-[var(--surface-strong)] p-3 text-[var(--primary)]">
                    <GraduationCap size={22} />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{item.period}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-[var(--foreground)]">{item.school}</h3>
                <p className="mt-2 text-base text-[var(--muted)]">{item.degree}</p>
                {item.honour && (
                  <div className="mt-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-sm font-semibold text-[var(--primary)]">
                    {item.honour}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.focus.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="section-kicker">Technical Skills</div>
            <h2 className="section-title">Core technologies and project capabilities.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.category}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel p-6"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[var(--surface-strong)] p-3 text-[var(--primary)]">
                  {group.category.includes("Machine") ? <Cpu size={20} /> : group.category.includes("Database") ? <Database size={20} /> : <Code2 size={20} />}
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="section-kicker">Featured Projects</div>
              <h2 className="section-title">Selected software and research work.</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition ${
                    selectedFilter === filter
                      ? "border-[var(--primary)]/40 bg-[var(--surface-strong)] text-[var(--primary)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--primary)]/60"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-panel overflow-hidden"
              >
                <div className="relative overflow-hidden border-b border-[var(--border)] bg-slate-900">
                  <img
                    src={
                      project.category.includes("AI")
                        ? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                        : project.category.includes("Web")
                          ? "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                          : project.category.includes("Mobile")
                            ? "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
                            : "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={`${project.title} preview`}
                    className="h-56 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-[var(--border)] bg-slate-950/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--primary)]">{project.subtitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.description}</p>

                  <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                    <div>
                      <span className="font-semibold text-[var(--foreground)]">Problem:</span> {project.problem}
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--foreground)]">Solution:</span> {project.solution}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.repo}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      <Code2 size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Demo
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="section-kicker">Certifications</div>
            <h2 className="section-title">Microsoft learning and cloud fundamentals.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certifications.map((certification, index) => (
              <motion.article
                key={certification.code}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${certification.accent}`} />
                <div className="mb-5 inline-flex rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] p-3 text-[var(--primary)]">
                  <CheckCircle2 size={22} />
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Microsoft</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{certification.name}</h3>
                <div className="mt-5 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-sm font-medium text-[var(--primary)]">
                  {certification.code}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="mb-10 max-w-2xl">
            <div className="section-kicker">Contact</div>
            <h2 className="section-title">Have a project or opportunity in mind?</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="glass-panel p-6">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">Reach out</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">Let&apos;s build something useful.</h3>
                </div>

                <div className="space-y-4 text-[var(--muted)]">
                  <a href="mailto:your-email@example.com" className="flex items-center gap-3 transition hover:text-[var(--primary)]">
                    <Mail size={18} />
                    <span>your-email@example.com</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 transition hover:text-[var(--primary)]">
                    <BriefcaseBusiness size={18} />
                    <span>LinkedIn profile placeholder</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 transition hover:text-[var(--primary)]">
                    <Code2 size={18} />
                    <span>GitHub profile placeholder</span>
                  </a>
                </div>

                <p className="text-sm leading-7 text-[var(--muted)]">
                  This form is intentionally client-side only. Connect it to Formspree, Resend, or a small Next.js API route before deployment.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-panel p-6" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-group">
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleInput}
                    placeholder="Your name"
                    className="input-field"
                  />
                </label>

                <label className="field-group">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInput}
                    placeholder="your@email.com"
                    className="input-field"
                  />
                </label>

                <label className="field-group sm:col-span-2">
                  <span>Subject</span>
                  <input
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleInput}
                    placeholder="Project inquiry, collaboration, or opportunity"
                    className="input-field"
                  />
                </label>

                <label className="field-group sm:col-span-2">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    value={formState.message}
                    onChange={handleInput}
                    placeholder="Tell me a little about your project or role..."
                    className="input-field min-h-[140px] resize-y"
                  />
                </label>

                <input
                  type="text"
                  name="honeypot"
                  value={formState.honeypot}
                  onChange={handleInput}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {formMessage.type !== "idle" && (
                <div
                  className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                    formMessage.type === "success"
                      ? "border-[var(--primary)]/30 bg-[var(--surface-strong)] text-[var(--primary)]"
                      : "border-red-400/30 bg-red-500/10 text-red-200"
                  }`}
                >
                  {formMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_18px_26px_rgba(148,163,184,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg-overlay)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-lg font-semibold text-[var(--foreground)]">{profile.name}</div>
            <div className="text-sm text-[var(--muted)]">{profile.jobTitle}</div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.kind];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
            <span>© {currentYear} Isaac Attard</span>
            <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
              Back to top
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
