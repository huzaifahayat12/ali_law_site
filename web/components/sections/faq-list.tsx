"use client";

import { ChevronDown, Search, X } from "lucide-react";
import { useDeferredValue, useId, useState } from "react";
import {
  FAQ_CATEGORIES,
  FAQ_COPY,
  FAQ_ITEMS,
  type FaqCategoryId,
} from "@/lib/constants";

export function FaqList() {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategoryId>("all");
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = FAQ_ITEMS.filter((item) => {
    const inCategory = category === "all" || item.category === category;
    if (!inCategory) return false;
    if (!deferredQuery) return true;
    return (
      item.question.toLowerCase().includes(deferredQuery) ||
      item.answer.toLowerCase().includes(deferredQuery)
    );
  });

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  function selectCategory(next: FaqCategoryId) {
    setCategory(next);
    const first = FAQ_ITEMS.find(
      (item) =>
        (next === "all" || item.category === next) &&
        (!deferredQuery ||
          item.question.toLowerCase().includes(deferredQuery) ||
          item.answer.toLowerCase().includes(deferredQuery)),
    );
    setOpenId(first?.id ?? null);
  }

  return (
    <section
      id="faq-list"
      className="scroll-mt-24 bg-bg py-16 md:scroll-mt-28 md:py-20"
    >
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center animate-[fade-up_0.7s_ease-out_both]">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {FAQ_ITEMS.length} answers
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {FAQ_COPY.listH2}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            {FAQ_COPY.listBody}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <label htmlFor={searchId} className="sr-only">
            Search FAQ
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted"
              aria-hidden
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={FAQ_COPY.searchPlaceholder}
              autoComplete="off"
              className="w-full border border-border bg-surface py-3.5 pr-11 pl-11 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute top-1/2 right-3 -translate-y-1/2 p-1 text-muted transition-colors hover:text-ink"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </div>

          <div
            className="mt-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="FAQ topics"
          >
            {FAQ_CATEGORIES.map((item) => {
              const selected = category === item.id;
              const count =
                item.id === "all"
                  ? FAQ_ITEMS.length
                  : FAQ_ITEMS.filter((faq) => faq.category === item.id).length;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectCategory(item.id)}
                  className={`shrink-0 border px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    selected
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-border bg-surface text-ink hover:border-accent hover:text-accent"
                  }`}
                >
                  {item.label}
                  <span
                    className={`ml-2 tabular-nums ${
                      selected ? "text-accent-fg/80" : "text-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-muted" aria-live="polite">
            Showing {filtered.length} of {FAQ_ITEMS.length}
          </p>

          {filtered.length === 0 ? (
            <p className="mt-8 border border-border bg-surface px-5 py-8 text-center text-sm text-muted md:text-base">
              {FAQ_COPY.emptySearch}
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {filtered.map((item, index) => {
                const isOpen = openId === item.id;
                const panelId = `${item.id}-panel`;
                const buttonId = `${item.id}-button`;
                const categoryLabel =
                  FAQ_CATEGORIES.find((c) => c.id === item.category)?.label ??
                  item.category;

                return (
                  <li
                    key={item.id}
                    className="animate-[fade-up_0.55s_ease-out_both]"
                    style={{ animationDelay: `${Math.min(index, 8) * 0.04}s` }}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(item.id)}
                        className="group flex w-full items-start gap-4 py-5 text-left transition-colors hover:text-accent sm:gap-5"
                      >
                        <span className="mt-0.5 w-8 shrink-0 font-semibold tabular-nums tracking-wide text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.7rem] font-semibold tracking-[0.16em] text-muted uppercase">
                            {categoryLabel}
                          </span>
                          <span className="mt-1.5 block text-base font-medium text-ink transition-colors group-hover:text-accent md:text-lg">
                            {item.question}
                          </span>
                        </span>
                        <ChevronDown
                          className={`mt-1 size-5 shrink-0 text-muted transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-accent" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className={isOpen ? "pb-6 pl-12 sm:pl-[3.25rem]" : undefined}
                    >
                      {isOpen ? (
                        <p className="max-w-2xl text-sm leading-relaxed text-muted animate-[fade-in_0.35s_ease-out_both] md:text-base">
                          {item.answer}
                        </p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
