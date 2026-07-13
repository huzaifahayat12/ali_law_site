"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE, whatsappUrl } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button-link";

export function Header() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  // Stay solid until mounted so SSR HTML matches the first client paint
  // (avoids hydration mismatch that breaks mobile button handlers).
  const solid = !mounted || !isDesktop || scrolled || menuOpen || !isHome;

  useEffect(() => {
    setMounted(true);

    const themeSwitch = document.getElementById(
      "theme-switch",
    ) as HTMLInputElement | null;
    if (themeSwitch) {
      themeSwitch.checked =
        document.documentElement.classList.contains("dark");
    }

    const mq = window.matchMedia("(min-width: 1024px)");
    const syncDesktop = () => setIsDesktop(mq.matches);
    syncDesktop();
    mq.addEventListener("change", syncDesktop);
    return () => mq.removeEventListener("change", syncDesktop);
  }, []);

  useEffect(() => {
    if (!mounted || !isDesktop || !isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, isDesktop, isHome]);

  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const controlClass =
    "inline-flex size-11 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-sm text-ink select-none";

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 right-0 left-0 z-[100] pt-[env(safe-area-inset-top,0px)] ${
        solid
          ? "site-header-solid border-b border-border bg-surface"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-20">
        <Link href="/" className="block shrink-0">
          <Image
            src="/brand/logo-lockup.png"
            alt={SITE.name}
            width={180}
            height={40}
            className={`h-8 w-auto max-w-[140px] object-contain object-left sm:h-9 sm:max-w-[180px] lg:h-11 lg:max-w-none ${
              solid ? "" : "brightness-0 invert"
            }`}
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

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Native label+checkbox — works even when React click handlers fail */}
          <label
            htmlFor="theme-switch"
            className={`${controlClass} ${solid ? "hover:bg-bg" : "text-white hover:bg-white/10"}`}
            title="Toggle color theme"
          >
            <input
              id="theme-switch"
              type="checkbox"
              className="peer sr-only"
              aria-label="Toggle dark mode"
            />
            <Moon
              size={18}
              className="peer-checked:hidden"
              aria-hidden="true"
            />
            <Sun
              size={18}
              className="hidden peer-checked:block"
              aria-hidden="true"
            />
          </label>

          <ButtonLink
            href={whatsappUrl()}
            external
            className="hidden !px-4 !py-2.5 !text-xs sm:inline-flex"
          >
            WhatsApp
          </ButtonLink>

          {/* Native details/summary — opens without React onClick */}
          <details
            ref={detailsRef}
            className="group relative lg:hidden"
            onToggle={(event) => {
              setMenuOpen(event.currentTarget.open);
            }}
          >
            <summary
              className={`${controlClass} list-none [&::-webkit-details-marker]:hidden ${
                solid ? "hover:bg-bg" : "text-white hover:bg-white/10"
              }`}
              aria-label="Open menu"
            >
              <Menu
                size={22}
                className="group-open:hidden"
                aria-hidden="true"
              />
              <X
                size={22}
                className="hidden group-open:block"
                aria-hidden="true"
              />
            </summary>

            <div className="fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-[120] max-h-[min(70dvh,28rem)] overflow-y-auto border-b border-t border-border bg-surface sm:top-[calc(4rem+env(safe-area-inset-top,0px))]">
              <nav
                className="container-site flex flex-col gap-1 py-4"
                aria-label="Mobile"
              >
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
                <ButtonLink
                  href={whatsappUrl()}
                  external
                  className="mt-2 w-full"
                >
                  WhatsApp
                </ButtonLink>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
