import Footer from "@/components/Footer";
import Frase from "@/components/Frase";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Notas from "@/components/Notas";
import Portada from "@/components/Portada";
import Ubicacion from "@/components/Ubicacion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10">
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
