import type { Metadata, Viewport } from "next";
import { Caveat, Cormorant_Garamond } from "next/font/google";
import { AmbientProvider } from "@/components/AmbientProvider";
import { SoundToggle } from "@/components/SoundToggle";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Story of Us",
  description:
    "A soft lilac memory book for Grace — seven years, seven chapters, one love that was ours.",
  openGraph: {
    title: "The Story of Us",
    description: "Seven years. Seven memories. One love that was ours.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#B794C0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="lilac-atmosphere min-h-full font-serif text-ink">
        <AmbientProvider>
          {children}
          <SoundToggle />
        </AmbientProvider>
      </body>
    </html>
  );
}
