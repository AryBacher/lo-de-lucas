import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  image: string
  href: string
  description: string
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


const CardNotas = ({ href, title, image, description }: Props) => {
  return (
    <div className="w-full md:w-[50%] lg:w-[30%] 2xl:w-[25%] h-max flex justify-center items-center flex-col gap-3 rounded-lg">
      <picture className="w-full ">
        <Image width={400} height={400} src={image} alt='Bodeón Lo De Lucas' className="rounded-2xl w-full h-full" />
      </picture>
      <div className="w-full h-[45%] flex justify-start items-center flex-col gap-2 ">
        <div className="w-full h-1/4 flex justify-start items-center">
          <h2 className="w-full text-start text-xl font-bold ">{title}</h2>
        </div>
        <div className="w-full h-3/4 flex justify-center items-start flex-col gap-4">
          <p className={`${poppins.className} w-full text-container text-[#7C7C7C] text-base text-start font-oswald`}>
            {description}
          </p>
          <Link
            href={href}
            className="w-full h-10 bg-[#E1AF00] text-base rounded-xl flex justify-center items-center font-semibold p-2"
          >Leer más </Link>
        </div>
      </div>
    </div>
  )
}

export default CardNotas