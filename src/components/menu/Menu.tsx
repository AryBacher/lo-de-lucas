import React from 'react'
import CardMenu from './CardMenu'
import { Poppins } from 'next/font/google'
import Image from 'next/image';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Menu = () => {
  const CardInfo = [
    {
      title: "MILANESAS",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/milanesas/Milanesa.webp",
      href: "/milanesas",
    },
    {
      title: "PASTAS",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/pastas/Pastas.png",
      href: "/pastas",
    },
    {
      title: "POSTRES",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/postres/Postres.png",
      href: "/postres",
    },
    {
      title: "Entradas",
      description: "Abundantes milanesas de todos los gustos existentes.",
      image: "/fotos/entradas/Entradas.png",
      href: "/entradas",
    }
  ]
  return (
    <section
      className="w-[90%] h-max flex justify-center items-center flex-col gap-6"
      id='menu'
    >
      <div className='w-full h-1/6 flex justify-center items-center flex-col gap-2'>
        <h1 className='text-[#00084D] w-full xl:h-auto text-3xl font-semibold  text-center'>LOS PLATOS FAVORITOS</h1>
        <p className={`${poppins.className} w-[85%] lg:w-[50%] text-container text-[#7C7C7C] text-sm text-center`}>Visita nuestro Bodegón para vivir la experiencia de comer en Lo de Lucas en carne propia.</p>
      </div>
      <div className="w-full h-max flex items-center justify-center flex-wrap sm:gap-10 gap-5">
        {CardInfo.map((card, index) => {
          return (
            <CardMenu
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              href={card.href}
            />
          )

        })}
      </div>
      <article className="w-full sm:w-[33%] flex justify-center items-center ">
        <button
          className="w-full lg:w-[65%] h-[50px] bg-[#00084D] flex flex-row justify-center items-center gap-4 rounded-xl"
        >
          <h3 className={`${poppins.className} text-white text-base`}>
            Ver todo el Menú
          </h3>
          <picture className=" h-full flex justify-center items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 16.039C7.37334 16.039 8.22234 16.139 9.047 16.339C9.87167 16.539 10.6893 16.8656 11.5 17.319V7.50796C10.778 6.99263 9.98267 6.60596 9.114 6.34796C8.244 6.09063 7.37267 5.96196 6.5 5.96196C5.836 5.96196 5.20167 6.01696 4.597 6.12696C3.99233 6.23696 3.46 6.42163 3 6.68096V16.677C3.468 16.477 4.01833 16.3203 4.651 16.207C5.28367 16.0936 5.9 16.038 6.5 16.04M12.5 17.32C13.3107 16.868 14.1283 16.5413 14.953 16.34C15.7777 16.1386 16.6267 16.0386 17.5 16.04C18.1 16.04 18.7163 16.0963 19.349 16.209C19.9817 16.3216 20.532 16.478 21 16.678V6.68096C20.54 6.42163 20.0077 6.23696 19.403 6.12696C18.7983 6.01696 18.164 5.96196 17.5 5.96196C16.6267 5.96196 15.7557 6.09063 14.887 6.34796C14.0177 6.60596 13.222 6.99263 12.5 7.50796V17.32ZM12 18.77C11.1867 18.214 10.3133 17.7866 9.38 17.488C8.44667 17.1893 7.48667 17.04 6.5 17.04C5.68067 17.04 4.874 17.155 4.08 17.385C3.28667 17.6163 2.59333 17.9216 2 18.301V6.06996C2.56667 5.72329 3.24667 5.45196 4.04 5.25596C4.83267 5.05863 5.65267 4.95996 6.5 4.95996C7.48 4.95996 8.43534 5.10096 9.366 5.38296C10.298 5.66563 11.176 6.07596 12 6.61396C12.8247 6.07596 13.7027 5.66596 14.634 5.38396C15.5653 5.10196 16.5207 4.96096 17.5 4.96096C18.3473 4.96096 19.1643 5.05896 19.951 5.25496C20.7377 5.45096 21.4207 5.72229 22 6.06896V18.3C21.41 17.92 20.7173 17.615 19.922 17.385C19.1267 17.1536 18.3193 17.038 17.5 17.038C16.5133 17.038 15.5533 17.1873 14.62 17.486C13.6867 17.7846 12.8133 18.2126 12 18.77ZM13.885 9.59296V8.66296C14.4217 8.39096 14.9967 8.18696 15.61 8.05096C16.2233 7.91496 16.8533 7.84696 17.5 7.84696C17.8693 7.84696 18.224 7.87063 18.564 7.91796C18.9033 7.96596 19.254 8.03329 19.616 8.11996V9.02796C19.2667 8.91663 18.9267 8.83929 18.596 8.79596C18.264 8.75329 17.8987 8.73196 17.5 8.73196C16.8533 8.73196 16.2227 8.80463 15.608 8.94996C14.992 9.09529 14.4173 9.30963 13.884 9.59296M13.884 15.055V14.085C14.396 13.8136 14.9683 13.61 15.601 13.474C16.2337 13.338 16.8667 13.27 17.5 13.27C17.8693 13.27 18.224 13.294 18.564 13.342C18.9033 13.3886 19.254 13.4556 19.616 13.543V14.451C19.2667 14.3396 18.9267 14.2623 18.596 14.219C18.264 14.1763 17.8987 14.155 17.5 14.155C16.8533 14.155 16.2227 14.2333 15.608 14.39C14.992 14.546 14.4173 14.7676 13.884 15.055ZM13.884 12.343V11.374C14.4213 11.102 14.9967 10.8983 15.61 10.763C16.2233 10.6276 16.8533 10.5596 17.5 10.559C17.8693 10.559 18.2237 10.5823 18.563 10.629C18.903 10.677 19.2537 10.7446 19.615 10.832V11.74C19.2663 11.628 18.9263 11.5506 18.595 11.508C18.2637 11.4646 17.8987 11.443 17.5 11.443C16.8533 11.443 16.2227 11.5223 15.608 11.681C14.992 11.839 14.4173 12.0596 13.884 12.343Z" fill="#F3F3F3" />
            </svg>
          </picture>
        </button>
      </article>
    </section>
  )
}

export default Menu