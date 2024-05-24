import React from 'react'
import CardNotas from './CardNotas'

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
      title: "Un restaurante de Escobar ganó un premio al mejor bodegon",
      description:
        "La tercera edición de las estatuillas más populares de la industria gastronómica argentina tuvo entre sus ganadores...",
      image: "/fotos/notas/LoDeLucas2.png",
      href: "https://infogei.com/nota/45334/un-restaurante-de-escobar-gano-un-premio-al-mejor-bodegon/",
    },
    {
      title: "Lo de Lucas Bodegón",
      description:
        'Brindan a su público la más amplia variedad de servicios gastronómicos estilo comida casera. ',
      image: "/fotos/notas/Salon.png",
      href: "https://noticias.perfil.com/noticias/espacio-no-editorial/lo-de-lucas-bodegon.phtml",
    }

  ]

  return (
    <section id='notas' className="w-full h-max flex justify-center items-center ">
      <main className="lg:w-[85%] w-[70%] flex justify-center items-center flex-col gap-6">
        <h1
          className="text-[#0E0E0E] w-full xl:h-auto text-2xl font-semibold tracking-[.25rem] text-center title"
        >
          NOTAS Y ENTREVISTAS
        </h1>
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