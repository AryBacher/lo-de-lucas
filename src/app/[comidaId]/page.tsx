"use client"
import Comida from "@/components/helpers/Comida";
import { Poppins } from "next/font/google";
import { useParams } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function ComidaHome() {
  const params = useParams();

  const MilanesasArr = [
    {
      id: 1,
      title: 'Milanesa calabresa',
      image: "/fotos/milanesas/MilaCalabresa.webp"
    },
    {
      id: 2,
      title: 'Milanesa para 12 personas',
      image: "/fotos/milanesas/Mila_LoDeLucas.webp"
    },
    {
      id: 3,
      title: 'Sandwich de milanesa',
      image: "/fotos/milanesas/Sandwich.webp"
    },
    {
      id: 4,
      title: 'Milanesa a la napolitana',
      image: "/fotos/milanesas/MilaNapo.webp"
    },
    {
      id: 5,
      title: 'Milanesa fugazzeta',
      image: "/fotos/milanesas/Fugazzeta.webp"
    },
    {
      id: 6,
      title: 'Milanesa con fideos',
      image: "/fotos/milanesas/Milanesa.webp"
    },
    {
      id: 7,
      title: 'Milanesa cuatro quesos',
      image: "/fotos/milanesas/MilaQuesos.webp"
    },
  ]
  const Milanesas = MilanesasArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} image={item.image} />
    )
  })

  const PastasArr = [
    {
      id: 1,
      title: 'Ñoquis con estofado',
      image: "/fotos/pastas/Estofado.png"
    },
    {
      id: 2,
      title: 'Canelones con estofado',
      image: "/fotos/pastas/Canelones.png"
    },
    {
      id: 3,
      title: 'Sorrentinos con estofado',
      image: "/fotos/pastas/Sorrentinos.jpg"
    },
    {
      id: 4,
      title: 'Raviolones con estofado',
      image: "/fotos/pastas/Raviolones.jpg"
    },
    {
      id: 5,
      title: 'Fideos con estofado',
      image: "/fotos/pastas/Fideos.jpg"
    },
  ]
  const Pastas = PastasArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} image={item.image} />
    )
  })
  const PostresArr = [
    {
      id: 1,
      title: 'Chocotorta',
      image: "/fotos/postres/Chocotorta.png"
    },
    {
      id: 2,
      title: 'Tiramisú',
      image: "/fotos/postres/Tiramisu.png"
    },
    {
      id: 3,
      title: 'Cheesecake',
      image: "/fotos/postres/CheeseCake.png"
    },
    {
      id: 4,
      title: 'Rogel',
      image: "/fotos/postres/Rogel.png"
    },
    {
      id: 5,
      title: 'Brownie',
      image: "/fotos/postres/Brownie.png"
    },
    {
      id: 6,
      title: 'Balcarce',
      image: "/fotos/postres/Balcarce.png"
    },
    {
      id: 7,
      title: 'Selva negra',
      image: "/fotos/postres/SelvaNegra.png"
    },
    {
      id: 8,
      title: 'Torta Alfajor',
      image: "/fotos/postres/Torta_Alfajor.webp"
    },
    {
      id: 9,
      title: 'Tres Leches',
      image: "/fotos/postres/TresLeches.webp"
    }
  ]
  const Postres = PostresArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} image={item.image} />
    )
  })

  const EntradasArr = [
    {
      id: 1,
      title: 'Bastones de muzzarella',
      image: "/fotos/entradas/Muzza.png"
    },
    {
      id: 2,
      title: 'Papas con cheddar y panceta',
      image: "/fotos/entradas/Papas.png"
    },
    {
      id: 3,
      title: 'Rabas',
      image: "/fotos/entradas/Rabas.png"
    },
    {
      id: 4,
      title: 'tortilla de papas',
      image: "/fotos/entradas/Tortilla.png"
    },
    {
      id: 5,
      title: 'Omelette',
      image: "/fotos/entradas/Omelette.png"
    },
    {
      id: 6,
      title: 'Buñuelos de espinaca',
      image: "/fotos/entradas/Bunuelos.png"
    },
    {
      id: 7,
      title: 'Revuelto de gramajo',
      image: "/fotos/entradas/Revuelto.png"
    },
  ]

  const Entradas = EntradasArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} image={item.image} />
    )
  })

  return (
    <main className="w-full min-h-screen my-32 flex justify-start items-start">
      {
        params.comidaId === 'milanesas' ? (
          <section className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className={`${poppins.className} text-3xl font-bold`}>Milanesas</h1>
            <div className="w-full h-full flex flex-wrap justify-center lg:items-start items-center gap-5">
              {Milanesas}
            </div>
          </section>
        ) : params.comidaId === 'pastas' ? (
          <section className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className={`${poppins.className} text-3xl font-bold`}>Pastas</h1>
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-5">
              {Pastas}
            </div>
          </section>
        ) : params.comidaId === 'postres' ? (
          <section className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className={`${poppins.className} text-3xl font-bold`}>Postres</h1>
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-5">
              {Postres}
            </div>
          </section>
        ) : params.comidaId === 'entradas' ? (
          <section className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className={`${poppins.className} text-3xl font-bold`}>Entradas</h1>
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-5">
              {Entradas}
            </div>
          </section>
        ) : (
          <h1 className="text-3xl title font-bold">No se encontró la comida</h1>
        )
      }
    </main>
  )
}