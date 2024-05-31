import React from 'react'
import CardNotas from './CardNotas'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Notas = () => {
  const CardInfo = [
    {
      title:
        'La historia detrás del bodegón Lo de Lucas, el restaurante de...',
      description:
        "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico...",
      image: "/fotos/notas/Natalia_Lucas.png",
      href: "https://zonales.com/bodegon-lucas-restaurante-escobar-mejotres-amba/",
    },
    {
      title:
        "Cómo es “Lo de Lucas”, el bodegón que hace milanesas...",
      description:
        "Cuando se elige a un bodegón para ir a comer se da por sentado que las porciones...",
      image: "/fotos/notas/LoDeLucas.png",
      href: "https://thewinetime.com.ar/como-es-lo-de-lucas-el-bodegon-que-hace-milanesas-para-10-personas-y-tortas-de-10-kilos/",
    },
    {
      title: "Un restaurante de Escobar ganó un premio al mejor bodegón",
      description:
        "La tercera edición de las estatuillas más populares de la industria gastronómica argentina...  ",
      image: "/fotos/notas/LoDeLucas2.png",
      href: "https://infogei.com/nota/45334/un-restaurante-de-escobar-gano-un-premio-al-mejor-bodegon/",
    },
    {
      title: "Lo de Lucas Bodegón",
      description:
        'Brindan a su público la más amplia variedad de servicios gastronómicos estilo comida casera. ',
      image: "/fotos/notas/Salon.png",
      href: "https://noticias.perfil.com/noticias/espacio-no-editorial/lo-de-lucas-bodegon.phtml",
    },
    {
      title: "El bodegón donde todo es...",
      description: "Queda en Escobar pero gracias al boca en boca tienen comensales de todos lados. Sus porciones...",
      image: "/fotos/notas/LoDeLucas3.png",
      href: "https://www.clarin.com/gourmet/bodegon-gigante-sirven-milanesa-compartir-10-tortas-12-kilos_0_jUzIw7cDHQ.html",
    }
  ]

  return (
    <section id='notas' className="w-full h-max flex justify-center items-center pt-10">
      <main className="w-[90%] flex justify-center items-center flex-col gap-6">

        <div className='w-full flex flex-col justify-center items-center gap-2'>
          <h1
            className="text-[#E1AF00] w-full xl:h-auto text-3xl font-semibold  text-center "
          >
            NOTAS Y ENTREVISTAS
          </h1>
          <p className={`${poppins.className} w-[40%] text-sm text-[#7C7C7C] hidden md:block text-center`}>Escuche directamente del propietario de nuestro bodegón su visión y pasión por brindar una experiencia gastronómica excepcional.</p>
        </div>
        <div className="w-full h-max flex justify-center items-center flex-col flex-wrap lg:flex-row gap-10">
          {CardInfo.map((card, index) => {
            return (
              <CardNotas
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                href={card.href}
              />
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default Notas