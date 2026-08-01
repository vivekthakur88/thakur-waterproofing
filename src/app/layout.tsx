import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { whatsappLink, phone1 } from "@/config/whatsapp";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "THAKUR WATERPROOFING | Stop Roof Leakage — Professional Solutions",
  description: "Thakur Waterproofing provides permanent, professional waterproofing solutions for terraces, roofs, bathrooms, damp walls, and water tanks. Expert team with quality materials and long-lasting protection. Get a Free Inspection today!",
  keywords: [
    "Thakur Waterproofing",
    "waterproofing services mumbai",
    "terrace waterproofing",
    "professional waterproofing contractor",
    "wall seepage treatment",
    "roof leakage repairs",
    "water tank waterproofing",
    "bathroom leakage solutions",
    "roof crack filling",
    "damp walls permanent repair",
    "heatproof coating"
  ],
  authors: [{ name: "Thakur Waterproofing" }],
  openGraph: {
    title: "THAKUR WATERPROOFING | Professional Leakage Repairs & Prevention",
    description: "Premium waterproofing services for roofs, terraces, bathrooms, and walls. 100% permanent leakage stop with multi-year warranty and certified professional team.",
    type: "website",
    locale: "en_IN",
    siteName: "Thakur Waterproofing",
  },
  twitter: {
    card: "summary_large_image",
    title: "THAKUR WATERPROOFING | Professional Waterproofing Contractors",
    description: "Stop roof leakage before it damages your home. Expert waterproofing for terraces, roofs, walls, bathrooms and water tanks. Call now for a free inspection!",
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
    "name": "Thakur Waterproofing",
    "image": "/images/pic5.jpeg",
    "telephone": phone1,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thakur Waterproofing",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "",
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
      whatsappLink
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
        <SpeedInsights />
      </body>
    </html>
  );
}
