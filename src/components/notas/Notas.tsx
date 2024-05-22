import React from 'react'
import CardNotas from './CardNotas'

const Notas = () => {
  const CardInfo = [
    {
      title:
        'El restaurante de Escobar que está entre los mejores del AMBA',
      description:
        "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico...",
      image: "/fotos/notas/Natalia_Lucas.png",
      href: "https://zonales.com/bodegon-lucas-restaurante-escobar-mejotres-amba/",
    },
    {
      title:
        "El bodegón que hace milanesas para 10 personas",
      description:
        "Cuando se elige a un bodegón para ir a comer se da por sentado que las porciones son grandes...",
      image: "/fotos/notas/LoDeLucas.png",
      href: "https://thewinetime.com.ar/como-es-lo-de-lucas-el-bodegon-que-hace-milanesas-para-10-personas-y-tortas-de-10-kilos/",
    },
    {
      title: "Un restaurante de Escobar ganó un premio al mejor bodegon",
      description:
        "La tercera edición de las estatuillas más populares de la industria gastronómica argentina ...",
      image: "/fotos/notas/LoDeLucas2.png",
      href: "https://infogei.com/nota/45334/un-restaurante-de-escobar-gano-un-premio-al-mejor-bodegon/",
    },
  ]

  return (
    <section id='notas' className="w-full h-[1600px] lg:h-[600px] flex justify-center items-center pb-20">
      <main className="w-[95%] flex justify-center items-center flex-col gap-5">
        <h1
          className="text-[#0E0E0E] w-full h-1/6 xl:h-auto text-xl tracking-[.25rem] text-center title"
        >
          NOTAS Y ENTREVISTAS
        </h1>
        <div className="w-full h-max flex justify-between items-center flex-col lg:flex-row  gap-10">
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