import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Theokot Solutions" },
      { name: "description", content: "Talk to a counsellor at Theokot Solutions about courses, batches and placement." },
      { property: "og:title", content: "Contact — Theokot Solutions" },
      { property: "og:description", content: "Get in touch about courses, batches and placement support." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="bg-secondary/50">
        <div className="container-px max-w-5xl mx-auto py-20">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">Contact</h1>
            <div className="mt-4 mx-auto h-px w-12 bg-foreground/40" />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-12 space-y-4"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <input required placeholder="Name" className={inputCls} />
              <input placeholder="Phone" className={inputCls} />
              <input type="email" required placeholder="Email address" className={inputCls} />
            </div>
            <textarea rows={5} required placeholder="Message" className={inputCls} />
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="px-10 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition"
              >
                {sent ? "Sent — thank you" : "Contact us"}
              </button>
            </div>
          </form>

          <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-start gap-2 font-semibold text-primary">
                <MapPin size={18} className="mt-0.5" />
                <span>Kalyan Nagar, Bengaluru, Karnataka, India</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-center gap-2 text-primary">
                  <Phone size={14} className="text-accent" />
                  <span>+91-9902268822</span>
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <Mail size={14} className="text-accent" />
                  <span>ds@theokot.com</span>
                </li>
                <li className="flex items-center gap-2 text-primary">
                  <Clock size={14} className="text-accent" />
                  <span>Mon-Fri · 08:00–19:00</span>
                </li>
              </ul>
            </div>

            <div className="rounded-sm overflow-hidden border border-border">
              <iframe
                title="Map — Kalyan Nagar, Bengaluru"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.6300%2C13.0150%2C77.6600%2C13.0350&layer=mapnik&marker=13.025%2C77.645"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const inputCls =
  "w-full rounded-sm bg-background border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
