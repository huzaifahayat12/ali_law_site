import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SITE } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.title}, ${SITE.city}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Ali Law Associate — Ali Raza Wahga, Advocate High Court. Full-service legal counsel in Lahore. Contact via WhatsApp for consultation.",
  metadataBase: new URL("https://alilawassociate.pk"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeInitScript = `
(function () {
  try {
    if (localStorage.getItem("ali-law-theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
  document.addEventListener("change", function (event) {
    var target = event.target;
    if (!target || target.id !== "theme-switch") return;
    var dark = !!target.checked;
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("ali-law-theme", dark ? "dark" : "light");
    } catch (err) {}
  });
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} min-h-dvh`} suppressHydrationWarning>
      <body
        className="min-h-dvh flex flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Header />
        <main className="relative z-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
