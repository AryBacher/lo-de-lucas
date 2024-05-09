import React from 'react'
import CardNotas from './helpers/CardNotas'

const Notas = () => {
  const CardInfo = [
    {
      title:
        '"Lo de Lucas", el restaurante de Escobar que está entre los mejores del AMBA',
      description:
        "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, tortas gigantes y más...",
      image: "/fotos/LoDeLucas.png",
      href: "https://zonales.com/bodegon-lucas-restaurante-escobar-mejotres-amba/",
    },
    {
      title:
        "Como es “Lo de Lucas”, el bodegon que hace milanesas para 10 personas",
      description:
        "Cuando se elige a un bodegón para ir a comer se da por sentado que las porciones son grandes, más abundantes que en...",
      image: "/fotos/LoDeLucas.png",
      href: "https://thewinetime.com.ar/como-es-lo-de-lucas-el-bodegon-que-hace-milanesas-para-10-personas-y-tortas-de-10-kilos/",
    },
    {
      title: "Un restaurante de Escobar ganó un premio al mejor bodegon",
      description:
        "La tercera edición de las estatuillas más populares de la industria gastronómica argentina tuvo entre sus ganadores a un clásico...",
      image: "/fotos/LoDeLucas.png",
      href: "https://infogei.com/nota/45334/un-restaurante-de-escobar-gano-un-premio-al-mejor-bodegon/",
    },
  ]

  return (
    <section className="w-full min-h-screen mt-16">
      <main className="w-full h-full flex justify-center items-center flex-col gap-5">
        <h1
          className="text-[#0E0E0E] w-full h-1/6 text-2xl tracking-[.25rem] text-center title"
        >
          NOTAS Y ENTREVISTAS
        </h1>
        <div className="w-full h-5/6 flex justify-center items-center flex-wrap gap-10">
          {CardInfo.map((card) => {

            return (
              <CardNotas
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