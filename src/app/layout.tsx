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
  title: "Waterproofing Experts | No.1 Leakage Solutions India",
  description: "Get permanent, professional waterproofing solutions for your terraces, roofs, bathrooms, damp walls, and water tanks. Certified chemical and membrane treatments with 10+ Years Warranty. Book your Free Visual Inspection today!",
  metadataBase: new URL("https://waterproofingexperts.in"),
  keywords: [
    "waterproofing services mumbai",
    "terrace waterproofing thane",
    "professional waterproofing contract pune",
    "wall seepage treatment",
    "roof leakage repairs",
    "water tank waterproofing india",
    "bathroom leakage solutions",
    "waterproofing contractor thane",
    "roof crack filling services",
    "damp walls permanent repair",
    "waterproofing expert bangalore"
  ],
  authors: [{ name: "Waterproofing Experts" }],
  openGraph: {
    title: "Waterproofing Experts | Professional Leakage Repairs & Prevention",
    description: "Premium waterproofing services for roofs, terraces, bathrooms, and walls. 100% permanent leakage stop with a multi-year warranty and a fully certified expert team.",
    type: "website",
    locale: "en_IN",
    siteName: "Waterproofing Experts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterproofing Experts | Professional Waterproofing Contractors India",
    description: "Stop structural water leakage before it destroys your home. Premium terrace, wall, and tank waterproofing with a certified professional team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema Markup for local HomeAndConstructionBusiness SEO optimization
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Waterproofing Experts - Professional Leakage Solutions",
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    "@id": "https://waterproofingexperts.in",
    "url": "https://waterproofingexperts.in",
    "telephone": "+919970418588",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 6, Wadhwa Elite, 19, Kolshet Road, Sandoz Baug, Thane West",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://wa.me/919970418588"
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
