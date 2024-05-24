import { Poppins } from 'next/font/google';
import React from 'react'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Intro = () => {
  return (
    <section className="w-full sm:w-[45%] h-[300px] flex justify-center items-center">
      <div
        className="w-[95%] h-max flex justify-center items-center flex-col p-4 gap-2"
      >
        <div className="w-full h-1/3 flex justify-center items-center flex-col lg:flex-row gap-2.5">
          <h1 className="text-3xl text-[#D26500] font-semibold">LO DE LUCAS ES FAMILIA</h1>
        </div>
        <div className={`${poppins.className} w-full h-2/3 flex justify-center items-center font-sans`}>
          <p className="text-center text-[#0E0E0E] ">
            Más que un bodegón, somos el corazón de Escobar. Desde 2016, cocinamos con pasión y amor, ofreciendo platos abundantes y hogareños para disfrutar en familia y con amigos. Vení y descubrí el sabor que nos une.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro