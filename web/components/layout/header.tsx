"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE, whatsappUrl } from "@/lib/constants";
import { useTheme } from "@/components/theme-provider";
import { ButtonLink } from "@/components/ui/button-link";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid
          ? "bg-surface/95 border-b border-border backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/brand/logo-lockup.png"
            alt={SITE.name}
            width={220}
            height={48}
            className={`h-9 w-auto lg:h-11 ${solid ? "" : "brightness-0 invert"}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-accent"
                    : solid
                      ? "text-ink hover:text-accent"
                      : "text-white/90 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`inline-flex size-10 items-center justify-center rounded-sm transition-colors ${
              solid
                ? "text-ink hover:bg-bg"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <ButtonLink
            href={whatsappUrl()}
            external
            className="hidden sm:inline-flex !py-2.5 !text-xs"
          >
            WhatsApp
          </ButtonLink>

          <button
            type="button"
            className={`inline-flex size-10 items-center justify-center lg:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-surface lg:hidden"
        >
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-3 text-base font-medium ${
                  pathname === link.href ? "text-accent" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href={whatsappUrl()} external className="mt-2 w-full">
              WhatsApp
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
