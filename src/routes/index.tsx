import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileDown,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Rocket,
  Server,
  Sparkles,
  Trophy,
  GraduationCap,
  Briefcase,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anusha Tulasi — Software Engineer | Backend, Cloud & AI" },
      {
        name: "description",
        content:
          "Software Engineer with experience in Java, Spring Boot, microservices, Kubernetes, GCP/AWS, distributed systems, and AI-powered projects. Open to Software Engineer, Backend, Full Stack, and Cloud roles.",
      },
      { property: "og:title", content: "Anusha Tulasi — Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend, cloud-native, and distributed systems engineer building scalable APIs and AI-powered products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  email: "mailto:anusha.tulasi@example.com",
  resume: "#",
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TechSnapshot />
        <CurrentlyFocused />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground mono text-sm">
            AT
          </span>
          <span className="hidden sm:inline">Anusha Tulasi</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={SOCIAL.resume}
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <FileDown className="h-4 w-4" /> Resume
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={SOCIAL.resume}
              className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] glow" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Open to Software Engineering opportunities
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Anusha Tulasi
          </h1>
          <p className="mono mt-3 text-sm text-brand sm:text-base">
            Software Engineer · Backend · Cloud · Distributed Systems · AI
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Software engineer with experience building scalable backend systems,
            REST APIs, cloud-native services, and performance-focused
            applications using Java, Spring Boot, Kubernetes, GCP, AWS, and
            React.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              View Projects
            </a>
            <a
              href={SOCIAL.resume}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <FileDown className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <IconLink href={SOCIAL.github} label="GitHub">
              <Github className="h-5 w-5" />
            </IconLink>
            <IconLink href={SOCIAL.linkedin} label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </IconLink>
            <IconLink href={SOCIAL.email} label="Email">
              <Mail className="h-5 w-5" />
            </IconLink>
            <span className="ml-2 inline-flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4" /> San Jose, CA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="rounded-md p-2 transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mono text-xs uppercase tracking-widest text-brand">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

const STACK = [
  { icon: Code2, label: "Java 17 · Spring Boot · WebFlux" },
  { icon: Server, label: "Microservices · REST APIs" },
  { icon: Cloud, label: "GCP · AWS · Kubernetes" },
  { icon: GitBranch, label: "Jenkins · ArgoCD · GitHub Actions" },
  { icon: Database, label: "Cassandra · SQL · Kafka" },
  { icon: Sparkles, label: "Gen AI · Multi-Agent Systems" },
];

function TechSnapshot() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mono mb-4 text-xs uppercase tracking-widest text-muted-foreground">
          Tech Stack Snapshot
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {STACK.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm"
            >
              <s.icon className="h-4 w-4 shrink-0 text-brand" />
              <span className="truncate">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FOCUS = [
  {
    icon: Server,
    title: "Backend systems",
    body: "Reactive, high-throughput services with Java 17 and Spring WebFlux.",
  },
  {
    icon: Cloud,
    title: "Cloud-native engineering",
    body: "Deploying and operating containerized services on GKE with GitOps.",
  },
  {
    icon: Layers,
    title: "Scalable APIs",
    body: "Designing secure REST APIs with sub-10ms latency at ~900 TPS.",
  },
  {
    icon: Cpu,
    title: "AI applications",
    body: "Building multi-agent and LLM-powered products end-to-end.",
  },
];

function CurrentlyFocused() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Currently Focused On"
        title="What I'm building and studying"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FOCUS.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
          >
            <f.icon className="h-5 w-5 text-brand" />
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-3">
        <SectionHeader eyebrow="About" title="Engineer with a bias toward measurable impact" />
        <div className="space-y-4 text-muted-foreground lg:col-span-2">
          <p>
            I'm a software engineer with hands-on experience across fintech and
            enterprise systems, focused on building scalable backend services,
            secure REST APIs, and cloud-native deployments.
          </p>
          <p>
            My strengths are in Java, Spring Boot, Spring WebFlux, distributed
            systems, cloud deployment, and performance optimization — turning
            legacy services into reactive systems that measurably improve
            throughput and latency.
          </p>
          <p>
            Alongside backend work I build AI-powered products and modern full
            stack applications. I'm currently pursuing my M.S. in Software
            Engineering at <span className="text-foreground">San Jose State University</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  {
    role: "Software Engineer II",
    company: "Candescent (Formerly NCR Voyix)",
    location: "Hyderabad, India",
    period: "Sep 2023 – Nov 2025",
    bullets: [
      "Led reengineering of legacy C++ systems to Java 17 and Spring WebFlux, improving throughput by 50%.",
      "Scaled services to support ~900 TPS per service with sub-10ms latency.",
      "Designed secure REST APIs for digital banking features: account details, transactions, and Zelle transfers.",
      "Worked with DPoP-based authentication and integrations across multiple core banking systems.",
      "Optimized API performance using JMeter and automated Postman regression testing via Jenkins.",
      "Deployed and managed services on Kubernetes (GKE); automated CI/CD with GitHub Actions, Jenkins, and ArgoCD.",
      "Integrated security & compliance tooling: JFrog, Polaris, and WhiteSource.",
    ],
    tags: ["Java 17", "Spring WebFlux", "GKE", "ArgoCD", "Jenkins", "REST"],
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    period: "Mar 2021 – Sep 2023",
    bullets: [
      "Developed and maintained REST APIs; improved performance by 20% using asynchronous processing.",
      "Implemented CRON jobs and Bash scripts for workflow automation and reporting.",
      "Optimized Cassandra queries with batch execution.",
      "Used Groovy scripting to improve dynamic query execution and distributed system data retrieval.",
      "Wrote JUnit and Mockito test cases achieving 95% code coverage.",
      "Resolved 100+ production issues.",
    ],
    tags: ["Java", "Cassandra", "Groovy", "JUnit", "Bash"],
  },
  {
    role: "Intern",
    company: "Software Engineering Internship",
    location: "",
    period: "",
    bullets: [
      "Developed a product microservice for an e-commerce platform supporting dynamic product filtering.",
      "Integrated Apache Kafka for real-time transaction logs.",
      "Persisted data in AWS RDS and supported S3-backed CDN delivery for frontend assets.",
      "Deployed applications with AWS EC2 and API Gateway.",
    ],
    tags: ["Kafka", "AWS RDS", "S3", "EC2", "API Gateway"],
  },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader
        eyebrow="Experience"
        title="Backend, cloud, and platform work"
      />
      <ol className="relative space-y-8 border-l border-border pl-6">
        {EXPERIENCE.map((e, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[31px] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-border bg-background">
              <Briefcase className="h-3 w-3 text-brand" />
            </span>
            <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-brand/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {e.company}
                    {e.location && <> · {e.location}</>}
                  </p>
                </div>
                {e.period && (
                  <span className="mono text-xs text-muted-foreground">
                    {e.period}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="mono rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

const PROJECTS = [
  {
    name: "Aetherius",
    tagline: "Multi-Agent AI System",
    body: "Self-orchestrating multi-agent system built with Google Agents SDK and Antigravity. Processes real-time crisis data and generates optimized resource allocation strategies.",
    tech: ["Google Agents SDK", "Antigravity", "LLMs", "Python"],
    href: "#",
  },
  {
    name: "SemesterOS",
    tagline: "AI-powered Academic Planner",
    body: "Converts course syllabi into structured semester roadmaps and weekly study plans using automated task decomposition.",
    tech: ["Gen AI", "Python", "LLMs"],
    href: "#",
  },
  {
    name: "Ecommerce App",
    tagline: "React shopping experience",
    body: "Shopping application UI with real-time product search and cart management, using hooks and React Router for efficient state and navigation.",
    tech: ["React", "React Router", "Hooks"],
    href: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="A mix of backend, distributed systems, and AI-focused projects."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="mono text-xs uppercase tracking-widest text-brand">
                    {p.tagline}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="mono rounded-md border border-border bg-surface-2 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C++", "Core Java", "Python", "SQL", "HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: [
      "Spring Boot",
      "Spring WebFlux",
      "Microservices",
      "JUnit",
      "Kafka",
      "Cassandra",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Gen AI",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Cloud,
    items: [
      "GCP",
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "Jenkins",
      "ArgoCD",
      "JMeter",
      "SonarQube",
      "Postman",
      "Jira",
      "UML",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="Skills" title="Technical toolkit" />
      <div className="grid gap-5 lg:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <g.icon className="h-4 w-4 text-brand" />
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="mono rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const EDUCATION = [
  {
    school: "San Jose State University",
    degree: "M.S. in Software Engineering",
    location: "San Jose, California",
    period: "Jan 2026 – Dec 2027 (Expected)",
    gpa: "GPA: 3.7",
    extra:
      "Relevant coursework: Data Structures & Algorithms (C++), Database Systems, Operating Systems, Distributed Systems.",
  },
  {
    school: "JNTUA College of Engineering",
    degree: "Bachelor's Degree",
    location: "Andhra Pradesh, India",
    period: "2017 – 2021",
    gpa: "GPA: 3.95 · Gold Medalist",
    extra: "",
  },
];

function Education() {
  return (
    <section id="education" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="Education" title="Academic background" />
        <div className="grid gap-5 md:grid-cols-2">
          {EDUCATION.map((e) => (
            <div key={e.school} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 shrink-0 text-brand" />
                <div className="min-w-0">
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {e.school} · {e.location}
                  </p>
                  <p className="mono mt-2 text-xs text-muted-foreground">{e.period}</p>
                  <p className="mono mt-1 text-xs text-brand">{e.gpa}</p>
                  {e.extra && (
                    <p className="mt-3 text-sm text-muted-foreground">{e.extra}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Ownership Recognition",
    body: "Recognized by management for ownership of key modules and contributions to design decisions.",
  },
  {
    icon: Cloud,
    title: "AWS Certified Cloud Practitioner",
    body: "Certified on AWS foundational cloud concepts and services.",
  },
  {
    icon: Rocket,
    title: "AWS Solutions Architect Training",
    body: "Completed AWS Solutions Architect training program.",
  },
  {
    icon: Sparkles,
    title: "VocalBridge Hackathon Finalist",
    body: "Finalist for a voice-assisted travel application built with OpenAI LLM, Sabre MCP, and PayPal.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader eyebrow="Achievements" title="Recognitions & certifications" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.title}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
          >
            <a.icon className="h-5 w-5 text-brand" />
            <h3 className="mt-4 font-semibold">{a.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something together"
              description="I'm actively open to software engineering opportunities and would love to connect."
            />
            <div className="flex flex-wrap gap-3">
              <a
                href={SOCIAL.email}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                `Portfolio message from ${data.get("name")}`,
              );
              const body = encodeURIComponent(
                `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
              );
              window.location.href = `${SOCIAL.email}?subject=${subject}&body=${body}`;
            }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="grid gap-4">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <div>
                <label className="mono mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about the role or project…"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mono mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anusha Tulasi · Built with care.
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <IconLink href={SOCIAL.github} label="GitHub">
            <Github className="h-4 w-4" />
          </IconLink>
          <IconLink href={SOCIAL.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </IconLink>
          <IconLink href={SOCIAL.email} label="Email">
            <Mail className="h-4 w-4" />
          </IconLink>
        </div>
      </div>
    </footer>
  );
}
