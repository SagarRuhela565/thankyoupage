import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700", "800","900"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700", "800","900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
