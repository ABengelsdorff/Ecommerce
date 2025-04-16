import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { ThemeProvider } from "./components/theme-provider"; 
import { Toaster } from 'sonner'
// import { MouseGradientEffect } from "./components/mouse-gradient-effect";

// import Ballpit from "./components/Ballpit";


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
  title: "Portafolio",
  description: "Portafolio de un Angélica Bengelsdorff",
};
//componentes globales de la aplicacion 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <MouseGradientEffect /> */}


        {/* <div className="fixed inset-0 -z-10 w-full h-screen">
            <Ballpit
            className="w-full h-full"
              count={50}
              gravity={0.5}
              friction={0.9}
              wallBounce={0.9}
              followCursor={true}
              colors={[0x00ffff, 0xffffff, 0x87cefa, 0xa855f7, 0xcccccc]}
            />
          </div> */}

         <Nav />
            {children}
          <Footer />
        
        </ThemeProvider>
      </body>
    </html>
  );
}
