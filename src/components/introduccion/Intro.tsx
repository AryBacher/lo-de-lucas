import { Poppins } from 'next/font/google';
import React from 'react'
import Title from '../helpers/Title';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Intro = () => {
  return (
    <section className="w-full sm:w-[45%] lg:h-[200px] h-[300px] flex justify-center items-center">
      <div
        className="w-[95%] h-max flex justify-center items-center flex-col p-4 gap-2"
      >
        <Title title='LO DE LUCAS ES FAMILIA' className='text-3xl text-[#D26500] font-semibold text-center' />
        <div className={`${poppins.className} w-full h-2/3 flex justify-center items-center font-sans`}>
          <p className="text-center text-[#0E0E0E] ">
            Más que un bodegón, somos <span className='font-bold'>el corazón de Escobar</span>. Desde 2016, cocinamos <span className='font-bold'>con pasión y amor</span>, ofreciendo <span className='font-bold'>platos abundantes y hogareños</span> para disfrutar en familia y con amigos. Vení y descubrí el sabor que nos une.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro