"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardTestimonios from './CardTestimonios'
import Autoplay from "embla-carousel-autoplay"
import { Poppins } from 'next/font/google';
import ButtonReview from './review/ButtonReview'
import Title from '../helpers/Title'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


const Testimonios = () => {

  const aboutArr = [
    {
      name: 'Facundo Soreira',
      testimonio: 'Las porciones son gigantescas, todo para compartir, nos pedimos la milanesa napolitana y la tortilla española, q delicia comimos entre cuatro...'
    },
    {
      name: 'Martina Prieto',
      testimonio: 'Las porciones son muy grandes 😌 pedimos una milanesa, unas papas con cheddar, y los bastóncitos de muzzarella con una coca grande...'
    },
    {
      name: 'Alicia Diaz Hutter',
      testimonio: 'Es un lugar agradable, pocas mesas...vayan temprano. Las milanesas son como para 4 o 5 personas, deliciosa!  Las tortas se veían gigantes, la próxima vez probaré 😋🐷'
    },
    {
      name: 'María Julieta Pérez Corneli',
      testimonio: 'Pese a que ya desde antes de las 8 de la noche había fila para comer y eso en otro lugar me desalentaria por la espera, valió completamente la pena!...'
    },
    {
      name: 'Maria del Carmen Brown',
      testimonio: 'Lugar agradable, comida abundante y muy sabrosa. Una porción de milanesa a la napolitana y papas fritas alcanza para que coman tres personas...'
    },
  ]

  return (

    <main id='testimonios' className='w-full h-max flex flex-col justify-center items-center gap-5 pb-20'>
      <div className='flex justify-center items-center flex-col gap-2'>
        <Title
          title='TESTIMONIOS DE NUESTROS CLIENTES'
          className="text-[#710996] w-full xl:h-auto text-3xl font-semibold  text-center" />
        <p className={`${poppins.className} w-[80%] text-sm text-[#7C7C7C] hidden md:block text-center`}>Escuche a nuestros clientes satisfechos acerca de su experiencia con nuestro restaurante.</p>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className='w-full h-full flex justify-center items-center overflow-hidden'
      >
        <CarouselContent className="flex flex-row m-0">
          {aboutArr.map((item, index) => (
            <CardTestimonios
              key={index}
              name={item.name}
              testimonio={item.testimonio}
            />
          ))}
        </CarouselContent>
      </Carousel>
      <div>
        <ButtonReview />
      </div>
    </main>
  )
}

export default Testimonios