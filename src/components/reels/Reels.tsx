import React from "react"
import PrincipalCard from "../notas/CardNotas"
import { Poppins } from "next/font/google"
import Title from "../helpers/Title"
import CardReel from "./CardReel"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const Reels = () => {
  const CardInfo = [
    {
      title: "@turistadigitalargentina",
      description:
        "Bodegón Lo de Lucas en 📍Escobar. ❤️ Platos tipicos, exquisitos y abundantes 🌍",
      image: "/fotos/Influ-1.png",
      href: "https://www.instagram.com/p/C0MkH0ROs-v",
    },
    {
      title: "@clubdelbajon",
      description:
        "UNA DE LAS MEJORES EXPERIENCIAS QUE TUVE EN UN BODEGÓN 🐷🍰🍽️❤️‍🔥",
      image: "/fotos/Influ-1.png",
      href: "https://www.instagram.com/p/CtKq7MKg-H-",
    },
    {
      title: "@lachicadelbrunch",
      description:
        "❗️UNO DE LOS BODEGONES MÁS ZARPADOS🏆 ❗️Siempre tiene fila y especialmente los findes!",
      image: "/fotos/Influ-2.png",
      href: "https://www.instagram.com/reel/CuiL97NM6iN",
    },
    {
      title: "@joeburgerchallenge",
      description:
        "En este restaurante todas las raciones son exageradamente GIGANTES.",
      image: "/fotos/Influ-3.png",
      href: "https://www.instagram.com/p/C1aDTsrNt07",
    },
    {
      title: "Toda la comida en @lo.delucas es GIGANTE...",
      description:
        "El local de Lucas Deonato y Natalia Estanguet se transformó en un boom gastronómico...",
      image: "/fotos/Influ-3.png",
      href: "https://www.instagram.com/reel/Czn_mUGogS6/?igsh=YjVnZmp3dzRzOWJh",
    },
  ]
  return (
    <section
      id="notas"
      className="w-full h-max flex justify-center items-center"
    >
      <main className="w-[90%] flex justify-center items-center flex-col gap-6">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <Title
            title="VIDEOS DE INFLUENCERS DESTACADOS"
            className="text-[#00960F] w-full xl:h-auto text-3xl font-semibold  text-center "
          />
          <p
            className={`${poppins.className} w-[40%] text-sm text-[#7C7C7C] hidden md:block text-center`}
          >
            Mira los últimos reels de influencers que han visitado nuestro
            restaurante.
          </p>
        </div>
        <div className="w-full h-max flex justify-center items-center flex-col flex-wrap lg:flex-row gap-12">
          {CardInfo.map((card, index) => {
            return (
              <CardReel
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                href={card.href}
              />
            )
          })}
        </div>
      </main>
    </section>
  )
}

export default Reels
