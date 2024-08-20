import Image from "next/image"
import React from "react"
import { CarouselItem } from "../ui/carousel"
import { Poppins } from "next/font/google"
import Title from "../helpers/Title"
import PictureFrame from "../helpers/PictureFrame"

type CardNovedadesProps = {
  title: string
  description: string
  image: string
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const CardNovedades = ({ title, description, image }: CardNovedadesProps) => {
  return (
    <CarouselItem className="w-full flex justify-center items-center -pl-4 px-5">
      <article className="w-full h-full flex justify-evenly items-center lg:flex-row flex-col gap-5">
        <PictureFrame
          alt={title}
          width={500}
          height={250}
          image={image}
          imageClassName="rounded-lg w-[730px] h-[390px] object-cover"
          divClassName="w-max h-full flex justify-center items-center"
        />
        <div className="lg:w-[45%] w-full h-full flex flex-col justify-center items-start gap-5">
          <Title
            title={title}
            className={`${poppins.className} font-bold lg:text-xl text-2xl 2xl:text-4xl w-full leading-normal`}
            divClassName="justify-start items-start h-auto"
          />
          <p className={`${poppins.className} lg:text-sm text-xl 2xl:text-xl w-full`}>
            {description}
          </p>
        </div>
      </article>
    </CarouselItem>
  )
}

export default CardNovedades
