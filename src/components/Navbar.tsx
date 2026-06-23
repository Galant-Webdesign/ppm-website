import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ppm-navy/95 text-white backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="ppm-container flex min-h-20 items-center justify-between gap-6"
      >
        <Link
          href="#home"
          className="flex items-center gap-4"
          aria-label="PPM home"
        >
          <Image
            alt="PPM - Pro Performance Maintenance"
            className="h-12 w-auto"
            height={323}
            priority
            src="/assets/logo/logo-ppm-white.png"
            width={362}
          />
          <span className="hidden text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.22em] text-white/70 sm:block">
            Pro Performance Maintenance
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="ppm-label text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          href="#contact"
          variant="primary"
          className="hidden border-white/35 bg-ppm-blue text-white hover:border-white hover:bg-white/50 hover:text-ppm-navy md:inline-flex"
        >
          Get a Free Quote
        </Button>

        <Button
          href="#contact"
          variant="primary"
          className="border-white/35 bg-ppm-blue text-white hover:border-white hover:bg-white/50 hover:text-ppm-navy md:hidden"
        >
          Quote
        </Button>
      </nav>
    </header>
  );
}
