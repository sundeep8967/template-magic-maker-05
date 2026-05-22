import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-secondary mt-24 border-t border-border">
      <div className="container-px max-w-7xl mx-auto py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Theokot Solutions" width={56} height={56} className="size-14 object-contain" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Theokot Solutions — practical software training that gets you job-ready.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> ds@theokot.com</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91-9902268822</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-0.5" /> Kalyan Nagar, Bengaluru, Karnataka, India</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Hours</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Mon – Fri · 9:00 – 19:00</li>
            <li>Sat · 10:00 – 14:00</li>
            <li>Sun · Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px max-w-7xl mx-auto py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Theokot Solutions. All rights reserved.</span>
          <span>Software Training Institute</span>
        </div>
      </div>
    </footer>
  );
}
