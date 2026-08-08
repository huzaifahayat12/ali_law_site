"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  initialContactState,
  sendContactMessage,
} from "@/lib/actions/contact";
import { CONTACT_COPY } from "@/lib/constants";

const fieldClass =
  "mt-2 w-full border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-5"
      noValidate
    >
      {/* Honeypot — leave empty */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            {CONTACT_COPY.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            {CONTACT_COPY.phoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          {CONTACT_COPY.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="matter" className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          {CONTACT_COPY.matterLabel}
        </label>
        <select
          id="matter"
          name="matter"
          defaultValue=""
          className={`${fieldClass} appearance-none bg-[length:0.75rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%235a5a5a' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          }}
        >
          <option value="" disabled>
            {CONTACT_COPY.matterPlaceholder}
          </option>
          {CONTACT_COPY.matters.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          {CONTACT_COPY.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={CONTACT_COPY.messagePlaceholder}
          className={`${fieldClass} min-h-[8.5rem] resize-y`}
        />
      </div>

      <p className="text-xs leading-relaxed text-muted">{CONTACT_COPY.formNote}</p>

      {state.status !== "idle" && state.message ? (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm leading-relaxed ${
            state.status === "success" ? "text-accent" : "text-red-700 dark:text-red-400"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="motion-lift inline-flex w-full items-center justify-center gap-2 border border-transparent bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-accent-fg hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {pending ? CONTACT_COPY.submittingLabel : CONTACT_COPY.submitLabel}
      </button>
    </form>
  );
}
