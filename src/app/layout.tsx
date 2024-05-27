import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Encabezado from "@/components/encabezado/Encabezado";

const oswald = Oswald({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Lo de Lucas",
  description: "Bodegón de comida argentina en la ciudad de Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${oswald.className}`}>
        <Encabezado />
        {children}
        <Footer />
      </body>
    </html>
  );
}
