import Link from "next/link";
import { navItems, services, site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-ppm-navy text-white">
      <div className="ppm-container grid gap-12 py-20 md:grid-cols-[1.3fr_0.8fr_1fr_0.9fr]">
        <div>
          <p className="text-2xl font-semibold uppercase tracking-[0.18em]">
            PPM
          </p>
          <p className="ppm-small mt-5 max-w-sm text-white/70">
            Premium painting, finishing and maintenance for Sydney residential,
            commercial and strata properties.
          </p>
        </div>

        <div>
          <h2 className="ppm-label text-white/50">Services</h2>
          <ul className="ppm-small mt-6 space-y-3 text-white/75">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="ppm-label text-white/50">Contact</h2>
          <ul className="ppm-small mt-6 space-y-3 text-white/75">
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.location}</li>
            <li>
              <a href={`https://${site.facebook}`}>{site.facebook}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="ppm-label text-white/50">Start</h2>
          <Button href="#contact" variant="secondary" className="mt-6">
            Get a Free Quote
          </Button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="ppm-container flex flex-col gap-4 py-7 text-xs leading-relaxed text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()} PPM - Pro Performance
            Maintenance.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
