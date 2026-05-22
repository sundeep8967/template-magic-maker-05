import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Theokot Solutions" },
      { name: "description", content: "Theokot Solutions is a software training institute focused on practical, job-ready skills." },
      { property: "og:title", content: "About — Theokot Solutions" },
      { property: "og:description", content: "Practical, job-ready software training built by industry practitioners." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="bg-secondary/50">
        <div className="container-px max-w-6xl mx-auto py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImg}
              alt="Theokot Solutions team"
              width={1200}
              height={960}
              loading="lazy"
              className="w-full h-auto rounded-md shadow-[var(--shadow-card)]"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              About Theokot<br />Solutions
            </h1>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/80">
              Theokot Solutions is a software training institute focused on practical,
              career-oriented learning. We help students, fresh graduates, and working
              professionals build real-world skills through guided instruction, hands-on
              labs, and project-based training. From programming fundamentals to modern
              development tools and frameworks, our courses are designed to bridge the
              gap between theory and industry expectations. Learners receive mentorship,
              clear learning paths, and supportive feedback to build confidence and
              competence. Whether you're starting from scratch or upgrading your skills,
              Theokot Solutions prepares you to deliver software solutions and succeed
              in today's competitive tech market.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
