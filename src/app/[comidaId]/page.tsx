"use client"
import Comida from "@/components/helpers/Comida";
import { useParams } from "next/navigation";


export default function ComidaHome() {
  const params = useParams();
  console.log(params);

  const MilanesasArr = [
    {
      id: 1,
      title: 'Milanesa a la napolitana',
      description: 'Milanesa de carne vacuna, con jamón cocido, queso y salsa de tomate',
      image: "/fotos/Milanesa.png"
    },
    {
      id: 2,
      title: 'Milanesa a la fugazzeta',
      description: 'Milanesa de carne vacuna, con cebolla y queso',
      image: "/fotos/Milanesa.png"
    },
    {
      id: 3,
      title: 'Milanesa a la caballo',
      description: 'Milanesa de carne vacuna, con huevo frito',
      image: "/fotos/Milanesa.png"
    },
    {
      id: 4,
      title: 'Milanesa a la suiza',
      description: 'Milanesa de carne vacuna, con jamón cocido y queso',
      image: "/fotos/Milanesa.png"
    },
    {
      id: 5,
      title: 'Milanesa a la provenzal',
      description: 'Milanesa de carne vacuna, con ajo y perejil',
      image: "/fotos/Milanesa.png"
    },
    {
      id: 6,
      title: 'Milanesa a la parmesana',
      description: 'Milanesa de carne vacuna, con queso parmesano',
      image: "/fotos/Milanesa.png"
    },
    {
      id: 7,
      title: 'Milanesa a la pizza',
      description: 'Milanesa de carne vacuna, con salsa de tomate, queso y orégano',
      image: "/fotos/Milanesa.png"
    },
    {
      id: 8,
      title: 'Milanesa a la napolitana con fritas',
      description: 'Milanesa de carne vacuna, con jamón cocido, queso, salsa de tomate y papas fritas',
      image: "/fotos/Milanesa.png"
    }
  ]
  const Milanesas = MilanesasArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} description={item.description} image={item.image} />
    )
  })

  const PastasArr = [
    {
      id: 1,
      title: 'Sorrentinos',
      description: 'Sorrentinos de jamón y queso',
      iamge: "/fotos/Pastas.png"
    },
    {
      id: 2,
      title: 'Ravioles',
      description: 'Ravioles de ricota y espinaca',
      iamge: "/fotos/Pastas.png"
    },
    {
      id: 3,
      title: 'Tallarines',
      description: 'Tallarines con salsa bolognesa',
      iamge: "/fotos/Pastas.png"
    },
    {
      id: 4,
      title: 'Ñoquis',
      description: 'Ñoquis de papa con salsa de tu elección',
      iamge: "/fotos/Pastas.png"
    },
    {
      id: 5,
      title: 'Canelones',
      description: 'Canelones de carne con salsa de tomate',
      iamge: "/fotos/Pastas.png"
    },
    {
      id: 6,
      title: 'Tortellinis',
      description: 'Tortellinis de jamón y queso',
      iamge: "/fotos/Pastas.png"
    },
    {
      id: 7,
      title: 'Fideos',
      description: 'Fideos con tu salsa favorita',
      iamge: "/fotos/Pastas.png"
    },
    {
      id: 8,
      title: 'Lasagna',
      description: 'Lasagna de carne con salsa de tomate y queso',
      iamge: "/fotos/Pastas.png"
    }
  ]
  const Pastas = PastasArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} description={item.description} image={item.iamge} />
    )
  })
  const PostresArr = [
    {
      id: 1,
      title: 'Flan',
      description: 'Flan casero con dulce de leche',
      image: "/fotos/Postres.png"
    },
    {
      id: 2,
      title: 'Helado',
      description: 'Helado de tu sabor favorito',
      image: "/fotos/Postres.png"
    },
    {
      id: 3,
      title: 'Tiramisú',
      description: 'Tiramisú casero',
      image: "/fotos/Postres.png"
    },
    {
      id: 4,
      title: 'Cheesecake',
      description: 'Cheesecake de frutos rojos',
      image: "/fotos/Postres.png"
    },
    {
      id: 5,
      title: 'Mousse',
      description: 'Mousse de chocolate',
      image: "/fotos/Postres.png"
    },
    {
      id: 6,
      title: 'Brownie',
      description: 'Brownie con helado',
      image: "/fotos/Postres.png"
    },
    {
      id: 7,
      title: 'Chocotorta',
      description: 'Chocotorta con dulce de leche',
      image: "/fotos/Postres.png"
    },
    {
      id: 8,
      title: 'Tarta',
      description: 'Tarta de frutas',
      image: "/fotos/Postres.png"
    }
  ]
  const Postres = PostresArr.map((item) => {
    return (
      <Comida key={item.id} title={item.title} description={item.description} image={item.image} />
    )
  })

  return (
    <main className="w-full h--screen my-32 flex justify-center items-center">
      {
        params.comidaId === 'milanesas' ? (
          <section className="w-full h-full flex flex-wrap justify-center items-center gap-5">
            <h1 className="text-3xl title font-bold">Milanesas</h1>
            {Milanesas}
          </section>
        ) : params.comidaId === 'pastas' ? (
          <section className="w-full h-full flex flex-wrap justify-center items-center gap-5">
            <h1 className="text-3xl title font-bold">Pastas</h1>
            {Pastas}
          </section>
        ) : params.comidaId === 'postres' ? (
          <section className="w-full h-full flex flex-wrap justify-center items-center gap-5">
            <h1 className="text-3xl title font-bold">Postres</h1>
            {Postres}
          </section>
        ) : 'No hay comida'
      }

    </main>
  )
}