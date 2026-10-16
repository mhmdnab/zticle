import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zticle — Stay curious. Share perspective.",
  icons: { icon: "/favicon.ico" },
  description: "Stories for the curious generation. Explore culture, wellbeing, money and digital life, with quick summaries and read aloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-5629338683654162"
        ></meta>
      </head>
      <body
        className="antialiased"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
