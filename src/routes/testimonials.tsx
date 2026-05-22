import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
});

const reviews = [
  {
    role: "JUNIOR DEVELOPER",
    name: "Lohith",
    text: "Theokot Solutions made complex topics easy to follow. The hands-on projects gave me confidence, and I built a portfolio I'm proud of.",
  },
  {
    role: "IT SUPPORT SPECIALIST",
    name: "Aarthi",
    text: "I joined to upskill while working full-time. The learning path was clear, the mentors were supportive, and I can now work with modern tools.",
  },
  {
    role: "CAREER SWITCHER",
    name: "Lavanya",
    text: "The interview prep was a game changer. Mock interviews and feedback helped me improve quickly, and I landed my first role in tech.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setI((p) => (p + 1) % reviews.length);

  return (
    <PageShell>
      <section className="bg-secondary/50">
        <div className="container-px max-w-6xl mx-auto py-20">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">Testimonials</h1>
            <div className="mt-4 mx-auto h-px w-12 bg-primary" />
          </div>

          <div className="mt-14 relative">
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-2"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="bg-background shadow-[var(--shadow-card)] rounded-sm">
              <div className="p-10 md:p-16 flex flex-col items-center text-center max-w-3xl mx-auto">
                <div className="text-[11px] tracking-[0.2em] text-muted-foreground italic">{r.role}</div>
                <div className="mt-2 text-2xl font-bold">{r.name}</div>
                <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">{r.text}</p>
                <div className="mt-6 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-2"
            >
              <ChevronRight size={28} />
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to slide ${k + 1}`}
                  className={`size-2 rounded-full transition ${k === i ? "bg-foreground" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
