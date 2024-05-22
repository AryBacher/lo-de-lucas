"use client"
import Comida from "@/components/helpers/Comida";
import { useParams } from "next/navigation";


export default function ComidaHome() {
  const params = useParams();
  console.log(params);

  const MilanesasArr = [
    {
      id: 1,
      title: 'Milanesa calabresa',
      image: "/fotos/milanesas/MilaCalabresa.png"
    },
    {
      id: 2,
      title: 'Milanesa para 12 personas',
      image: "/fotos/milanesas/Mila_LoDeLucas.png"
    },
    {
      id: 3,
      title: 'Sandwich de milanesa',
      image: "/fotos/milanesas/Sandwich.png"
    },
    {
      id: 4,
      title: 'Milanesa a la napolitana',
      image: "/fotos/milanesas/MilaNapo.png"
    },
    {
      id: 5,
      title: 'Milanesa fugazzeta',
      image: "/fotos/milanesas/Fugazzeta.png"
    },
    {
      id: 6,
      title: 'Milanesa con fideos',
      image: "/fotos/milanesas/Milanesa.png"
    },
    {
      id: 7,
      title: 'Milanesa cuatro quesos',
      image: "/fotos/milanesas/MilaQuesos.png"
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
      title: 'Canelones de verdura con estofado',
      image: "/fotos/pastas/Canelones.png"
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
      image: "/fotos/postres/Torta_Alfajor.png"
    },
    {
      id: 9,
      title: 'Tres Leches',
      image: "/fotos/postres/TresLeches.png"
    }
  ]
  const Postres = PostresArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} image={item.image} />
    )
  })

  return (
    <main className="w-full min-h-screen my-32 flex justify-start items-start">
      {
        params.comidaId === 'milanesas' ? (
          <section className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl title font-bold not-italic">Milanesas</h1>
            <div className="w-full h-full flex flex-wrap justify-center lg:items-start items-center gap-5">
              {Milanesas}
            </div>
          </section>
        ) : params.comidaId === 'pastas' ? (
          <section className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl title font-bold">Pastas</h1>
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-5">
              {Pastas}
            </div>
          </section>
        ) : params.comidaId === 'postres' ? (
          <section className="w-full h-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl title font-bold">Postres</h1>
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-5">
              {Postres}
            </div>
          </section>
        ) : 'No hay comida'
      }
    </main>
  )
}