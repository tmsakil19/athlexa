import type { Metadata } from "next";
import {
  Bebas_Neue,
  Poppins,
  Staatliches,
  Manrope,
  Inter,
} from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const staatliches = Staatliches({
  weight: "400",
  variable: "--font-staatliches",
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: ["400", "600"],
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athlexa - Sports Coaching",
  description:
    "Professional coaching programs designed to unlock your full athletic potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} ${staatliches.variable} ${manrope.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
