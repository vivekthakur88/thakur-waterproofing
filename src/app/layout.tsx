import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentazone | Premium Multispeciality Dental Care Thane",
  description: "Experience luxury dental treatments at Dentazone Thane West. Advanced dental implants, painless root canals, teeth whitening, clear aligners, and personalized Apple-level dental care.",
  metadataBase: new URL("https://dentazone.in"),
  keywords: [
    "dental clinic thane",
    "luxury dental clinic thane",
    "dentazone thane",
    "best dentist in thane west",
    "painless root canal thane",
    "clear aligners thane",
    "dental implants thane west",
    "teeth whitening clinic thane"
  ],
  authors: [{ name: "Dentazone Clinic" }],
  openGraph: {
    title: "Dentazone | Premium Multispeciality Dental Care",
    description: "Advanced luxury dental care with a personalized, painless approach. Book your same-day smile makeover today.",
    type: "website",
    locale: "en_IN",
    siteName: "Dentazone Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentazone | Premium Multispeciality Dental Care",
    description: "Experience high-tech painless dentistry at Thane's premium luxury clinic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema Markup for Local Business SEO optimization
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dentazone - Advanced Multispeciality Dental Care",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "@id": "https://www.google.com/maps/place/Dentazone/",
    "url": "https://www.google.com/maps/place/Dentazone/",
    "telephone": "+919970418588",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 6, Advanced Multispeciality Dental Care, Wadhwa Elite, 19, Kolshet Rd, Sandoz Baug, Thane West",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400607",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.2312",
      "longitude": "72.9818"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "14:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:30",
        "closes": "21:30"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dentazone_advanceddentalcare/",
      "https://wa.link/7oj64s"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
