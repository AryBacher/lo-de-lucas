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
      name: 'Telefe Visita el Bodegón de Lucas: Donde la Abundancia y la Calidad se Encuentran',
      description: "El local de Lucas Deonato y Natalia Estanguet ha capturado la atención de de muchos con sus generosas porciones y su inigualable calidad gastronómica. En esta exclusiva nota, Telefe destaca las especialidades que han hecho famoso a nuestro bodegón: milanesas XXL, pastas caseras y tortillas irresistibles. Descubre cómo logramos conquistar el paladar de los vecinos de Escobar y más allá, convirtiendo nuestro bodegón en un referente de la buena comida y la abundancia en el AMBA. ¡No te pierdas esta nota que celebra lo mejor de nuestra cocina!",
      image: "/fotos/notas/LucasEntrevista.jpg"
    },
    {
      name: 'Telefe Visita el Bodegón de Lucas: Donde la Abundancia y la Calidad se Encuentran',
      description: "El local de Lucas Deonato y Natalia Estanguet ha capturado la atención de de muchos con sus generosas porciones y su inigualable calidad gastronómica. En esta exclusiva nota, Telefe destaca las especialidades que han hecho famoso a nuestro bodegón: milanesas XXL, pastas caseras y tortillas irresistibles. Descubre cómo logramos conquistar el paladar de los vecinos de Escobar y más allá, convirtiendo nuestro bodegón en un referente de la buena comida y la abundancia en el AMBA. ¡No te pierdas esta nota que celebra lo mejor de nuestra cocina!",
      image: "/fotos/notas/LucasEntrevista.jpg"
    },
    {
      name: 'Telefe Visita el Bodegón de Lucas: Donde la Abundancia y la Calidad se Encuentran',
      description: "El local de Lucas Deonato y Natalia Estanguet ha capturado la atención de de muchos con sus generosas porciones y su inigualable calidad gastronómica. En esta exclusiva nota, Telefe destaca las especialidades que han hecho famoso a nuestro bodegón: milanesas XXL, pastas caseras y tortillas irresistibles. Descubre cómo logramos conquistar el paladar de los vecinos de Escobar y más allá, convirtiendo nuestro bodegón en un referente de la buena comida y la abundancia en el AMBA. ¡No te pierdas esta nota que celebra lo mejor de nuestra cocina!",
      image: "/fotos/notas/LucasEntrevista.jpg"
    },
    {
      name: 'Telefe Visita el Bodegón de Lucas: Donde la Abundancia y la Calidad se Encuentran',
      description: "El local de Lucas Deonato y Natalia Estanguet ha capturado la atención de de muchos con sus generosas porciones y su inigualable calidad gastronómica. En esta exclusiva nota, Telefe destaca las especialidades que han hecho famoso a nuestro bodegón: milanesas XXL, pastas caseras y tortillas irresistibles. Descubre cómo logramos conquistar el paladar de los vecinos de Escobar y más allá, convirtiendo nuestro bodegón en un referente de la buena comida y la abundancia en el AMBA. ¡No te pierdas esta nota que celebra lo mejor de nuestra cocina!",
      image: "/fotos/notas/LucasEntrevista.jpg"
    },
    {
      name: 'Telefe Visita el Bodegón de Lucas: Donde la Abundancia y la Calidad se Encuentran',
      description: "El local de Lucas Deonato y Natalia Estanguet ha capturado la atención de de muchos con sus generosas porciones y su inigualable calidad gastronómica. En esta exclusiva nota, Telefe destaca las especialidades que han hecho famoso a nuestro bodegón: milanesas XXL, pastas caseras y tortillas irresistibles. Descubre cómo logramos conquistar el paladar de los vecinos de Escobar y más allá, convirtiendo nuestro bodegón en un referente de la buena comida y la abundancia en el AMBA. ¡No te pierdas esta nota que celebra lo mejor de nuestra cocina!",
      image: "/fotos/notas/LucasEntrevista.jpg"
    },
  ]

  return (
    <main id='novedades' className='w-full h-max flex flex-col justify-center items-center py-10 gap-10'>
      <div className='w-full h-[20%] flex justify-center items-center flex-col gap-2'>
        <Title title='ÚLTIMAS NOVEDADES' className="text-3xl font-bold text-[#3394BB] text-center" />
        <p className={`${poppins.className} w-[80%] text-sm text-[#7C7C7C] hidden md:block text-center`}>Escuche a nuestros clientes satisfechos acerca de su experiencia con nuestro restaurante.</p>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className='w-[85%] h-[50%] flex justify-center items-center gap-5'
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