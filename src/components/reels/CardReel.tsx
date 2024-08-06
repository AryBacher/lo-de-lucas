import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import React from 'react'
import Title from '../helpers/Title'
import PictureFrame from '../helpers/PictureFrame'
import Button from '../helpers/Button'
import InstagramEmbed from './InstagramEmbed'

interface Props {
  title: string
  image: string
  href: string
  description: string
  className?: string
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


const CardNotas = ({ title, href, description, className }: Props) => {

  return (
    <div className={cn("w-full md:w-[50%] lg:w-[30%] 2xl:w-[30%] h-max flex justify-center items-center flex-col gap-3 rounded-lg")}>
      <div className='w-full h-[500px] rounded-t-lg overflow-hidden'>
        <InstagramEmbed href={href} />
      </div>
      <div className={cn("w-full h-[25%] flex justify-start items-center flex-col gap-2")}>
        <Title title={title} divClassName='w-full h-1/4 flex justify-start items-center' className={`${poppins.className} w-full text-start text-xl font-bold `} />
        <div className={cn("w-full h-3/4 flex justify-center items-start flex-col gap-4")}>
          <p className={cn(`${poppins.className} w-full text-container text-[#7C7C7C] text-base text-start font-oswald`)}>
            {description}
          </p>
          <Button
            title='Ver video'
            className={cn(`${poppins.className} w-full h-10 bg-[#00960F] text-base rounded-xl flex justify-center items-center font-medium p-2 text-white`)}
            href={href}
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default CardNotas