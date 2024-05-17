import React from 'react'
import CardMenu from './CardMenu'

const Menu = () => {
  const CardInfo = [
    {
      title: "MILANESAS",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/Milanesa.png",
      href: "/milanesas",
    },
    {
      title: "PASTAS",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/Pastas.png",
      href: "/pastas",
    },
    {
      title: "POSTRES",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/Postres.png",
      href: "/postres",
    },
  ]
  return (
    <section
      className="w-full xl:h-[600px] min-h-screen flex justify-center items-center flex-col gap-5"
      id='menu'
    >
      <h1
        className="text-[#0E0E0E] w-full h-1/6 xl:h-auto text-2xl font-medium tracking-[.25rem] text-center title"
      >
        LOS PLATOS FAVORITOS
      </h1>
      <div className="w-[85%] h-4/6 xl:h-auto flex flex-wrap items-center justify-center gap-10">
        {CardInfo.map((card, index) => {
          return (
            <CardMenu
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              href={card.href}
            />
          )

        })}
      </div>
      <article className="w-full sm:w-[33%] h-1/6 flex justify-center items-center pt-10 lg:pt-28">
        <button
          className="w-[85%] h-[50px] bg-[#00084D] flex flex-row justify-center items-center"
        >
          <h3 className="text-white w-[80%] text-xl tracking-widest">
            Ver todo el Menú
          </h3>
          <picture className="w-[20%] h-full flex justify-center items-center hover:translate-x-3 transition-all">
            <img src="/icons/arrow.svg" alt="arrow-right" className="w-6 h-6" />
          </picture>
        </button>
      </article>
    </section>
  )
}

export default Menu