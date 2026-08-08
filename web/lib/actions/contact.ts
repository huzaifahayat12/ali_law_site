"use server";

import { Resend } from "resend";
import { CONTACT_COPY, SITE } from "@/lib/constants";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot) {
    return {
      status: "success",
      message: CONTACT_COPY.successMessage,
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const matter = String(formData.get("matter") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { status: "error", message: "Please enter your full name." };
  }
  if (!phone || phone.length < 7) {
    return {
      status: "error",
      message: "Please enter a valid phone or WhatsApp number.",
    };
  }
  if (!email || !isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return {
      status: "error",
      message: "Please add a short description of your matter.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Email delivery is not configured yet. Please WhatsApp or call chambers instead.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Ali Law Associate <onboarding@resend.dev>";

  const subject = matter
    ? `Website inquiry — ${matter} — ${name}`
    : `Website inquiry — ${name}`;

  const text = [
    `New inquiry from the ${SITE.name} website`,
    "",
    `Name: ${name}`,
    `Phone / WhatsApp: ${phone}`,
    `Email: ${email}`,
    `Matter: ${matter || "Not specified"}`,
    "",
    "Message:",
    message,
    "",
    `— Sent via alilawassociate.pk contact form`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: CONTACT_COPY.errorMessage };
    }

    return { status: "success", message: CONTACT_COPY.successMessage };
  } catch (err) {
    console.error("Contact form error:", err);
    return { status: "error", message: CONTACT_COPY.errorMessage };
  }
}
