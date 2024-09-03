"use client"
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import CardNovedades from "./CardNovedades"
import { Poppins } from "next/font/google"
import Title from "../helpers/Title"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Novedades = () => {
  const aboutArr = [
    {
      name: "Telefe Visita el Bodegón de Lucas: Donde la Abundancia y la Calidad se Encuentran",
      description:
        "El local de Lucas Deonato y Natalia Estanguet ha capturado la atención de de muchos con sus generosas porciones y su inigualable calidad gastronómica. En esta exclusiva nota, Telefe destaca las especialidades que han hecho famoso a nuestro bodegón: milanesas XXL, pastas caseras y tortillas irresistibles. Descubre cómo logramos conquistar el paladar de los vecinos de Escobar y más allá, convirtiendo nuestro bodegón en un referente de la buena comida y la abundancia en el AMBA. ¡No te pierdas esta nota que celebra lo mejor de nuestra cocina!",
      image: "/fotos/notas/LucasEntrevista.png",
      href: "",
    },
    {
      name: "Somos parte de la historia de Escobar: ADN Escobarense nos entrevista",
      description:
        "Con la calidad periodística y artística que caracteriza a cada una de sus producciones, ADN Escobarense inició este domingo su cuarta temporada y el estreno de su primer capítulo pudo verse en el canal de YouTube de El Día de Escobar “Empezamos con nada y hoy tenemos mucho: pero no en lo económico sino en el reconocimiento de la gente y en la cantidad de gente que viene todos los días”, comenta Natalia Estanguet, compañera de Lucas Deonato en este proyecto que iniciaron en 2016. Además, ella es la autora de los más de 200 platos que tiene la carta.",
      image: "/fotos/notas/nota-adn.jpg",
      href: "https://eldiadeescobar.com.ar/adn-escobarense-inicio-su-cuarta-temporada-con-lo-de-lucas/",
    },
    {
      name: "Lo de Lucas, el mejor bodegón del AMBA",
      description:
        '"Lo de Lucas", uno de los clásicos de Belén de Escobar que se ubica en Av. 25 de Mayo 997, recibió el premio máximo por parte de Cucinare de ser el mejor bodegón de todos aquellos locales que participaron de la selección 2023."Es un orgullo que Lo de Lucas haya sido elegido por Cucinare como el mejor bodegón del Área Metropolitana de Buenos Aires. Este premio, el más popular de la industria gastronómica argentina, tiene como objetivo destacar el esfuerzo de los emprendedores del rubro, manifestaron desde el Municipio de Escobar. El comercio se destaca por sus milanesas y tortas gigantes, tortillas, y muchas más opciones, todas ellas un deleite para los ojos y el paladar.',
      image: "/fotos/notas/nota-3.jpg",
      href: "https://www.quepasaweb.com.ar/un-restaurante-de-escobar-fue-elegido-como-el-mejor-bodegon-del-area-metropolitana-de-buenos-aires/",
    },
    {
      name: "Nota en CARAS! Contando en primera persona nuestra historia",
      description:
        "El local de Lucas Deonato y Natalia Estanguet ha capturado la atención de de muchos con sus generosas porciones y su inigualable calidad gastronómica. En esta exclusiva nota, Telefe destaca las especialidades que han hecho famoso a nuestro bodegón: milanesas XXL, pastas caseras y tortillas irresistibles. Descubre cómo logramos conquistar el paladar de los vecinos de Escobar y más allá, convirtiendo nuestro bodegón en un referente de la buena comida y la abundancia en el AMBA. ¡No te pierdas esta nota que celebra lo mejor de nuestra cocina!",
      image: "/fotos/notas/nota-caras-2.jpg",
      href: "https://caras.perfil.com/noticias/caras-resto/lo-de-lucas-bodegon.phtml",
    },
  ]

  return (
    <main
      id="novedades"
      className="w-full h-max flex flex-col justify-center items-center gap-10"
    >
      <div className="w-full h-[20%] flex justify-center items-center flex-col gap-2">
        <Title
          title="ÚLTIMAS NOVEDADES"
          className="text-3xl font-bold text-[#3394BB] text-center"
        />
        <p
          className={`${poppins.className} w-[80%] text-sm text-[#7C7C7C] hidden md:block text-center`}
        >
          Escuche a nuestros clientes satisfechos acerca de su experiencia con
          nuestro restaurante.
        </p>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-[95%] h-[50%] 2xl:h-[30%] flex justify-center items-center gap-5"
      >
        <span className="w-[10%] h-full">
          <CarouselPrevious className="w-[45px] h-[45px] border-[3px] border-[#3394BB] " />
        </span>
        <CarouselContent className=" flex flex-row m-0">
          {aboutArr.map((item, index) => (
            <CardNovedades
              key={index}
              title={item.name}
              description={item.description}
              image={item.image}
              href={item.href}
            />
          ))}
        </CarouselContent>
        <span className="w-[10%] h-full">
          <CarouselNext className="w-[40px] h-[40px] border-[3px] border-[#3394BB] flex justify-center items-center" />
        </span>
      </Carousel>
    </main>
  )
}

export default Novedades
