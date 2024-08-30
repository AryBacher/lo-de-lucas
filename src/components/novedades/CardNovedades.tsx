import Image from "next/image"
import React from "react"
import { CarouselItem } from "../ui/carousel"
import { Poppins } from "next/font/google"
import Title from "../helpers/Title"
import PictureFrame from "../helpers/PictureFrame"
import Button from "../helpers/Button"
import { cn } from "@/lib/utils"

type CardNovedadesProps = {
  title: string
  description: string
  image: string
  href: string
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const CardNovedades = ({
  title,
  description,
  image,
  href,
}: CardNovedadesProps) => {
  return (
    <CarouselItem className="w-full flex justify-center items-center -pl-4 ">
      <article className="w-full h-full flex justify-evenly items-center lg:flex-row flex-col gap-5">
        <PictureFrame
          alt={title}
          width={500}
          height={250}
          image={image}
          imageClassName="rounded-lg lg:w-[730px] sm:w-[600px] xs:w-[370px] w-[280px] md:h-[400px] h-[212px] lg:h-[400px] lg:object-cover"
          divClassName="w-max h-full flex justify-center items-center"
        />
        <div className="lg:w-[45%] md:w-[80%] w-[90%] lg:max-h-[225px] max-h-[400px] flex flex-col justify-center items-start 2xl:gap-7 lg:gap-[14px] gap-3">
          <Title
            title={title}
            className={`${poppins.className} font-bold lg:text-lg text-base 2xl:text-4xl w-full leading-normal`}
            divClassName="justify-start items-start h-auto"
          />
          <p
            className={`${poppins.className} lg:text-sm text-xs 2xl:text-base w-full`}
          >
            {description}
          </p>
          <div className="w-full h-max flex justify-start items-center">
            <Button
              href={href}
              className={cn(
                `${poppins.className} w-1/2 h-10 bg-[#3394BB] text-base rounded-xl flex justify-center items-center font-medium p-2 text-white`
              )}
            >
              Ir a entrevista
            </Button>
          </div>
        </div>
      </article>
    </CarouselItem>
  )
}

export default CardNovedades
