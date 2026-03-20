import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://varanasiayodhya.com"),
  title: {
    default: "Luxury Trip India | Best Ayodhya Varanasi Tour Packages 2026",
    template: "%s | Luxury Trip India"
  },
  description: "Book customized Ayodhya Varanasi Tour Packages for 2026. Specialized in Ram Mandir Darshan, Kashi Vishwanath Spiritual Tours, and Prayagraj Sangam trips at best prices.",
  keywords: ["Ayodhya Varanasi tour packages", "Varanasi Ayodhya tour package 2026", "Ram Mandir darshan tour", "Kashi Vishwanath temple tour", "Prayagraj Sangam tour", "Spiritual tours Uttar Pradesh"],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Luxury Trip India | Best Ayodhya Varanasi Tour Packages 2026",
    description: "Experience the spiritual essence of UP with our curated Ayodhya and Varanasi tour packages. 24/7 support and customized itineraries.",
    url: "https://varanasiayodhya.com/",
    siteName: "Luxury Trip India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varanasi Ayodhya Spiritual Tour",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Trip India | Ayodhya Varanasi Tour Packages",
    description: "Book your spiritual journey to Ayodhya and Varanasi with expert guides and premium comfort.",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Luxury Trip India",
              "url": "https://varanasiayodhya.com",
              "logo": "https://luxurytripindia.com/img/logo-luxury.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9999995475",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61564188934197",
                "https://www.instagram.com/luxurytripindia"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
