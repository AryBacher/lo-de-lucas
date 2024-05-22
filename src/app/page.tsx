import Footer from "@/components/footer/Footer";
import Frase from "@/components/frase/Frase";
import Intro from "@/components/introduccion/Intro";
import Menu from "@/components/menu/Menu";
import Notas from "@/components/notas/Notas";
import Portada from "@/components/portada/Portada";
import Ubicacion from "@/components/ubicacion/Ubi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-8">
      <Portada />
      <Intro />
      <Menu />
      <Notas />
      <Frase />
      <Ubicacion />
      <Footer />
    </main>
  );
}
