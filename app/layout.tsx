import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gordon Toy — Investment Writer & Data Visualiser",
  description:
    "Gordon Toy works at the intersection of investment analysis, data storytelling, and strategic communications. Investment writing, data visualisation, content marketing, media, and political consulting.",
  metadataBase: new URL("https://gordontoy.com"),
  openGraph: {
    title: "Gordon Toy — Investment Writer & Data Visualiser",
    description:
      "Translating markets, data, and politics into writing that is clear, credible, and built to last.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400&family=Sora:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
