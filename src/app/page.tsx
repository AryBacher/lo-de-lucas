import Intro from "@/components/introduccion/Intro";
import Menu from "@/components/menu/Menu";
import Notas from "@/components/notas/Notas";
import Novedades from "@/components/novedades/Novedades";
import Portada from "@/components/portada/Portada";
import Reels from "@/components/reels/Reels";
import Testimonios from "@/components/testimonios/Testimonios";
import Ubicacion from "@/components/ubicacion/Ubi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-36">
      <Portada />
      <Intro />
      <Menu />
      <Novedades />
      <Notas />
      <Reels />
      <Ubicacion />
      <Testimonios />
    </main>
  );
}
