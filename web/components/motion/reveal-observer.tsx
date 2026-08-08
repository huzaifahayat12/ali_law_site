"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "[data-reveal]";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealAll(root: ParentNode = document) {
  root.querySelectorAll(SELECTOR).forEach((el) => {
    el.classList.add("is-in");
  });
}

/**
 * One shared IntersectionObserver for the whole site.
 * Uses only opacity/transform CSS transitions — no animation libraries.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    if (prefersReducedMotion()) {
      root.classList.remove("js-motion");
      revealAll();
      return;
    }

    root.classList.add("js-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    const observeTargets = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.classList.contains("is-in")) return;
        observer.observe(el);
      });
    };

    observeTargets();

    // Catch late-mounted client UI (FAQ filters, forms, etc.)
    const mutation = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches?.(SELECTOR)) observer.observe(node);
          node.querySelectorAll?.(SELECTOR).forEach((el) => {
            if (!el.classList.contains("is-in")) observer.observe(el);
          });
        });
      }
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, [pathname]);

  return null;
}
