import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Cloud, Brain, ShieldCheck, GraduationCap, Users, Award, Briefcase, Star } from "lucide-react";
import heroImg from "@/assets/hero-classroom.jpg";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Theokot Solutions — Software Training Institute" },
      { name: "description", content: "Learn in-demand software skills with hands-on, job-ready training at Theokot Solutions." },
      { property: "og:title", content: "Theokot Solutions — Software Training Institute" },
      { property: "og:description", content: "Hands-on, job-ready software training across full-stack, data, cloud and AI." },
    ],
  }),
  component: Home,
});

const courses = [
  { icon: Code2, title: "Full-Stack Development", desc: "React, Node.js, databases and deployment — build production apps end to end." },
  { icon: Database, title: "Data Analytics", desc: "SQL, Python, Power BI and dashboards used by real analytics teams." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes and CI/CD pipelines from scratch." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Practical ML, LLMs and applied projects with industry-grade tooling." },
  { icon: ShieldCheck, title: "Cyber Security", desc: "Ethical hacking, network defence and security operations fundamentals." },
  { icon: Briefcase, title: "Career Bootcamps", desc: "Interview prep, mock projects and placement assistance until you're hired." },
];

const stats = [
  { icon: GraduationCap, value: "5,000+", label: "Trained students" },
  { icon: Briefcase, value: "92%", label: "Placement rate" },
  { icon: Users, value: "40+", label: "Industry mentors" },
  { icon: Award, value: "12", label: "Years of training" },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative">
        <div className="container-px max-w-7xl mx-auto pt-8 pb-16 md:pb-24">
          <div className="relative">
            <img
              src={heroImg}
              alt="Students learning software skills in a Theokot Solutions classroom"
              width={1600}
              height={896}
              className="w-full h-[420px] md:h-[560px] object-cover rounded-md"
            />
            <div
              className="absolute inset-y-8 right-4 md:right-10 md:inset-y-12 w-[88%] sm:w-[70%] md:w-[46%] bg-white rounded-md p-7 md:p-10 flex flex-col justify-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
                Theokot Solutions — Software Training Institute
              </h1>
              <div className="mt-6 h-1 w-16 bg-primary rounded-full" />
              <p className="mt-6 text-base md:text-lg text-muted-foreground">
                Learn in-demand software skills with hands-on, job-ready training.
              </p>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition"
                >
                  Explore courses <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-secondary border-y border-border">
        <div className="container-px max-w-7xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="size-12 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                <s.icon size={22} />
              </span>
              <div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="container-px max-w-7xl mx-auto py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Our programs</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Industry-aligned courses for every career stage.</h2>
          <div className="mt-5 h-1 w-16 bg-primary rounded-full" />
          <p className="mt-6 text-muted-foreground">
            Whether you're switching careers, upgrading your skills, or just starting out — our
            programs are designed by industry practitioners and taught with real-world projects.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="p-7 rounded-md bg-white border border-border hover:border-primary/40 hover:-translate-y-0.5 transition"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span className="size-12 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
                <c.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary">
        <div className="container-px max-w-7xl mx-auto py-20">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">Why Theokot</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trained by practitioners. Hired by leaders.</h2>
            <div className="mt-5 h-1 w-16 bg-primary rounded-full" />
            <ul className="mt-8 space-y-4 text-sm">
              {[
                "Small batches with personal mentorship",
                "Live projects from real client briefs",
                "Resume, GitHub and interview preparation",
                "Lifetime access to recordings and updates",
                "Placement assistance until you're hired",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 size-2 rounded-full bg-primary" />
                  <span className="text-foreground/90">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px max-w-7xl mx-auto py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Testimonials</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">What our students say</h2>
          <div className="mt-5 mx-auto h-1 w-16 bg-primary rounded-full" />
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { role: "JUNIOR DEVELOPER", name: "Lohith", text: "Theokot Solutions made complex topics easy to follow. The hands-on projects gave me confidence, and I built a portfolio I'm proud of." },
            { role: "IT SUPPORT SPECIALIST", name: "Aarthi", text: "I joined to upskill while working full-time. The learning path was clear, the mentors were supportive, and I can now work with modern tools." },
            { role: "CAREER SWITCHER", name: "Lavanya", text: "The interview prep was a game changer. Mock interviews and feedback helped me improve quickly, and I landed my first role in tech." },
          ].map((r) => (
            <div key={r.name} className="bg-white rounded-md border border-border p-7 flex flex-col" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="text-[11px] tracking-[0.2em] text-muted-foreground italic">{r.role}</div>
              <div className="mt-1 text-lg font-bold">{r.name}</div>
              <p className="mt-4 text-sm text-foreground/80 flex-1">{r.text}</p>
              <div className="mt-5 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px max-w-7xl mx-auto py-20">
        <div className="rounded-md bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to launch your tech career?</h2>
            <p className="mt-2 text-primary-foreground/85">Talk to our counsellor and find the right course for you.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold hover:bg-white/90 transition self-start"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
