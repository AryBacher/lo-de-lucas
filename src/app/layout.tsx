import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Encabezado from "@/components/encabezado/Encabezado";

const oswald = Oswald({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Lo de Lucas",
  description: "Bodegón de comida argentina en la ciudad de Buenos Aires",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.ico",
    },]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <script src="https://widget.trustmary.com/XCm0Zr-yO"></script>
      </head>
      <html lang="es">
        <body className={`${oswald.className}`}>
          <Encabezado />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
