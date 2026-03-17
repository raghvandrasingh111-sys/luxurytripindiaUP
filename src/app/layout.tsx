import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us",
  description: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us. We'll plan as per your budget and number of days you have. Contact us.",
  openGraph: {
    title: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us",
    description: "Plan Your Customized Ayodhya Varanasi Tour Packages With Us. We'll plan as per your budget and number of days you have. Contact us.",
    url: "https://varanasiayodhya.com/",
    siteName: "Varanasi Ayodhya",
    images: [
      {
        url: "https://varanasiayodhya.com/wp-content/uploads/image-444.png-1024x633.webp",
        width: 1024,
        height: 633,
        alt: "Varanasi Tour Packages",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
