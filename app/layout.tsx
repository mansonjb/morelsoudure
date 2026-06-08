import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://morel-soudure.fr"),
  title: {
    default: `${site.name} - ${site.tagline} ${site.cityA}`,
    template: `%s · ${site.name}`,
  },
  description: `${site.name}, atelier de soudure et métallerie en ${site.region}. Soudure TIG, MIG-MAG et à l'arc, métallerie sur mesure, structures métalliques, ferronnerie et dépannage sur site. Devis gratuit sous ${site.quoteDelay}.`,
  keywords: [
    "soudure",
    "soudeur",
    "métallerie",
    "ferronnerie",
    "structure métallique",
    "soudure TIG",
    "soudure MIG",
    site.city,
    site.region,
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: `${site.name} - ${site.tagline}`,
    description: `Atelier de soudure et métallerie sur mesure ${site.cityA}. Devis gratuit sous ${site.quoteDelay}.`,
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${inter.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body>{children}</body>
    </html>
  );
}
