
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import {
  DESCRIPTION,
  METADATA_DESCRIPTION,
  METADATA_TITLE,
  OG_DESCRIPTION,
  OG_TITLE,
  SOCIAL_DESCRIPTION,
  TITLE, URL
} from "@/lib/siteInfo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: update links

export const metadata = {
  title: METADATA_TITLE,
  description: METADATA_DESCRIPTION,
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: URL,
    type: "website",
    images: [
      {
        url: `${URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "Invoice Generator Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [`${URL}/images/logo.png`]
  },
  alternates: {
    canonical: "https://styled-invoice.vercel.app",
  }
};


export default function RootLayout({ children }) {
  // const { theme } = useTheme();
  return (
    <html lang="en">
      <head>
        {/* Schema Metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": TITLE,
              "description": DESCRIPTION,
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": URL,
              "image": `${URL}/images/logo.png`,
              "author": {
                "@type": "Organization",
                "name": "Your Company Name",
                "url": URL,
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <footer className=" bg-secondary/50 transition ">
            <div className=" py-2  mx-auto gradient-item">
              <div className=" text-center text-white/70 ">
                <p>&copy; 2025 Invoice Generator. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
