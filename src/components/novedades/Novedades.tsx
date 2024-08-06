"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import CardNovedades from './CardNovedades'
import { Poppins } from 'next/font/google'
import Title from '../helpers/Title'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Novedades = () => {

  const aboutArr = [
    {
      name: 'La historia detrás del bodegón Lo de Lucas, el restaurante de Escobar que causa furor y está entre los mejores del AMBA',
      description: "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillas",
      image: "/fotos/notas/LucasEntrevista.png"
    },
    {
      name: 'La historia detrás del bodegón Lo de Lucas, el restaurante de Escobar que causa furor y está entre los mejores del AMBA',
      description: "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillas",
      image: "/fotos/notas/LucasEntrevista.png"
    },
    {
      name: 'La historia detrás del bodegón Lo de Lucas, el restaurante de Escobar que causa furor y está entre los mejores del AMBA',
      description: "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillas",
      image: "/fotos/notas/LucasEntrevista.png"
    },
    {
      name: 'La historia detrás del bodegón Lo de Lucas, el restaurante de Escobar que causa furor y está entre los mejores del AMBA',
      description: "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillas",
      image: "/fotos/notas/LucasEntrevista.png"
    },
    {
      name: 'La historia detrás del bodegón Lo de Lucas, el restaurante de Escobar que causa furor y está entre los mejores del AMBA',
      description: "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillasEl local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico, con sus milanesas XXL, pastas, tortillas",
      image: "/fotos/notas/LucasEntrevista.png"
    },
  ]

  return (
    <main id='novedades' className='w-full h-max flex flex-col justify-center items-center gap-5 py-10'>
      <div className='flex justify-center items-center flex-col gap-2'>
        <Title title='ÚLTIMAS NOVEDADES' className="text-3xl font-bold text-[#3394BB] text-center" />
        <p className={`${poppins.className} w-[80%] text-sm text-[#7C7C7C] hidden md:block text-center`}>Escuche a nuestros clientes satisfechos acerca de su experiencia con nuestro restaurante.</p>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className='w-[85%] h-full flex justify-center items-center gap-5'
      >
        <span className='w-[10%] h-full'>
          <CarouselPrevious className='w-[45px] h-[45px] border-[3px] border-[#3394BB] ' />
        </span>
        <CarouselContent className=" flex flex-row m-0">
          {aboutArr.map((item, index) => (
            <CardNovedades
              key={index}
              title={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </CarouselContent>
        <span className='w-[10%] h-full'>
          <CarouselNext className='w-[40px] h-[40px] border-[3px] border-[#3394BB] flex justify-center items-center' />
        </span>
      </Carousel>
    </main>
  )
}

export default Novedades