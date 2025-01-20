import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavbarMain from "./components/Navbar";
import Footer from "./components/footer";

import { Providers } from "./provider";

import { Toaster } from 'sonner'



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Innova",
  description: "Tienda tecnológica con lo último en innovación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" />
        <Providers>
          <NavbarMain/>
            {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
