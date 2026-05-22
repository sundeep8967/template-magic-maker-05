import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container-px max-w-7xl mx-auto h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="bg-white rounded-md p-1.5 shadow-sm">
            <img src={logo} alt="Theokot Solutions" width={44} height={44} className="size-11 object-contain" />
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[15px] font-medium text-primary-foreground/90 hover:text-white transition-colors relative py-2"
              activeProps={{ className: "text-white after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-white" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/20">
          <div className="container-px max-w-7xl mx-auto py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/90 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
