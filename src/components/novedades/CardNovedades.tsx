import Image from 'next/image'
import React from 'react'
import { CarouselItem } from '../ui/carousel'
import { Poppins } from 'next/font/google'
import Title from '../helpers/Title'
import PictureFrame from '../helpers/PictureFrame'

type CardNovedadesProps = {
  title: string
  description: string
  image: string
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const CardNovedades = ({ title, description, image }: CardNovedadesProps) => {
  return (
    <CarouselItem className='w-full flex justify-center items-center -pl-4 px-10'>
      <article className='w-[80%] h-full flex justify-center items-center flex-row gap-10'>
        <PictureFrame
          alt={title}
          width={500}
          height={250}
          image={image}
          imageClassName='rounded-lg h-full object-cover'
          divClassName='w-1/3 xl:w-1/2 h-full flex justify-evenly items-center'
        />
        <div className='w-2/3 xl:w-1/2 h-full flex flex-col justify-center items-start gap-5'>
          <Title title={title} className={`${poppins.className} font-bold text-3xl xl:text-xl`} divClassName='justify-start items-start h-auto' />
          <p className={`${poppins.className} text-xl xl:text-base`}>{description}</p>

        </div>
      </article>
    </CarouselItem >
  )
}

export default CardNovedades