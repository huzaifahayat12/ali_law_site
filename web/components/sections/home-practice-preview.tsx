import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_COPY, PRACTICE_PREVIEW } from "@/lib/constants";

export function HomePracticePreview() {
  return (
    <section className="bg-bg py-16 md:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Practice areas
          </h2>
          <p className="mt-3 text-muted">{HOME_COPY.practiceIntro}</p>
        </div>

        <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {PRACTICE_PREVIEW.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice-area#${area.slug}`}
                className="group flex items-center justify-between border-b border-border py-3 text-ink transition-colors hover:text-accent"
              >
                <span className="font-medium">{area.label}</span>
                <ArrowRight
                  size={16}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/practice-area"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
        >
          View all practice areas
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
