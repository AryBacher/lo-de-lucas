import React from 'react'
import CardMenu from './CardMenu'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Menu = () => {
  const CardInfo = [
    {
      title: "MILANESAS",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/milanesas/Milanesa.webp",
      href: "/milanesas",
    },
    {
      title: "PASTAS",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/pastas/Pastas.png",
      href: "/pastas",
    },
    {
      title: "POSTRES",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/postres/Postres.png",
      href: "/postres",
    },
    {
      title: "Entradas",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/entradas/Entradas.png",
      href: "/entradas",
    }
  ]
  return (
    <section
      className="w-[75%] h-max flex justify-center items-center flex-col gap-6"
      id='menu'
    >
      <div className='w-full h-1/6 flex justify-center items-center flex-col gap-2'>
        <h1 className='text-[#00084D] w-full xl:h-auto text-3xl font-semibold  text-center'>LOS PLATOS FAVORITOS</h1>
        <p className={`${poppins.className} w-[85%] lg:w-[50%] text-container text-[#7C7C7C] text-sm text-center`}>Visita nuestro Bodegón para vivir la experiencia de comer en Lo de Lucas en carne propia.</p>
      </div>
      <div className="w-full h-max flex items-center justify-center flex-wrap sm:gap-10 gap-5">
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
      <article className="w-full sm:w-[33%] flex justify-center items-center ">
        <button
          className="w-[85%] lg:w-[65%] h-[50px] bg-[#00084D] flex flex-row justify-center items-center "
        >
          <h3 className="text-white w-[80%] text-xl">
            Ver todo el Menú
          </h3>
          <picture className="w-[20%] h-full flex justify-center items-center">
            <img src="/icons/arrow.svg" alt="arrow-right" className="w-10 h-10" />
          </picture>
        </button>
      </article>
    </section>
  )
}

export default Menu