import Encabezado from "@/components/Encabezado";
import Frase from "@/components/Frase";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Notas from "@/components/Notas";
import Portada from "@/components/Portada";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

      <Encabezado />
      <Portada />
      <Intro />
      <Menu />
      <Notas />
      <Frase />
      <div className="w-full h-[600px]"></div>


    </main>
  );
}
