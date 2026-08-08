import Link from "next/link";
import { ABOUT_COPY } from "@/lib/constants";

export function AboutCredentials() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="accent-rule mb-6" aria-hidden />
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {ABOUT_COPY.credentialsH2}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {ABOUT_COPY.credentialsBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/our-team" className="text-accent hover:text-accent-hover">
              Our team
            </Link>
            <span className="text-border" aria-hidden>
              |
            </span>
            <Link
              href="/practice-area"
              className="text-accent hover:text-accent-hover"
            >
              Practice areas
            </Link>
          </div>
        </div>

        <ul className="space-y-0 lg:col-span-7">
          {ABOUT_COPY.credentials.map((item, index) => (
            <li
              key={item.label}
              className="animate-[fade-up_0.7s_ease-out_both] border-l-2 border-accent py-5 pl-5 md:py-6 md:pl-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                {item.label}
              </p>
              <p className="mt-2 text-base font-medium text-ink md:text-lg">
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
