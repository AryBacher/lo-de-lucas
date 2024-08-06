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
    <CarouselItem className='w-full flex justify-center items-center -pl-4'>
      <article className='w-full h-full flex justify-center items-center flex-row gap-10'>
        <PictureFrame
          alt={title}
          width={600}
          height={350}
          image={image}
          imageClassName='rounded-lg h-full object-cover'
          divClassName='w-1/2 h-full flex justify-evenly items-center'
        />
        <div className='w-1/2 h-full flex flex-col justify-between items-start gap-5'>
          <Title title={title} className={`${poppins.className} font-bold text-2xl`} divClassName='justify-start items-start h-auto' />
          <p className={`${poppins.className} text-lg`}>{description}</p>
          <video autoPlay loop muted playsInline className=' rounded-lg'>
            <source src="/videos/video-telefe.mp4" type="video/mp4" className=''></source>
          </video>
        </div>
      </article>
    </CarouselItem >
  )
}

export default CardNovedades