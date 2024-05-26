import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterItems from './FooterItems'
import NavItems from '../encabezado/NavItems'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Footer = () => {
  const redesItems = [
    {
      icon: '/icons/instagram.svg',
      link: 'https://www.instagram.com/lo.delucas/'
    },
    {
      icon: '/icons/facebook.svg',
      link: 'https://www.facebook.com/lodelucasbodegon'
    },
    {
      icon: '/icons/pedidosya.svg',
      link: 'https://www.pedidosya.com.ar/restaurantes/escobar/lo-de-lucas-bodegon-e6b43e59-a244-4fb6-9c89-1b7fad0eba1b-menu?search=lo%20de%20lucas%20bodegon'
    }
  ]

  const arrNavItems = [
    {
      title: "Inicio",
      href: "/#inicio",
    },
    {
      title: "Platos Favoritos",
      href: "/#menu",
    },
    {
      title: "Notas",
      href: "/#notas",
    },
    {
      title: "Ubicación",
      href: "/#ubicacion",
    },
    {
      title: "Testimonios",
      href: "/#testimonios",
    }
  ]

  return (
    <footer className='w-full h-max bg-[#5B0D0F] flex justify-center items-center flex-col px-5 gap-8'>
      <div className='w-[90%] sm:w-[50%] xl:w-full flex flex-col xl:flex-row justify-between items-start py-10 lg:py-20 gap-20'>
        <picture className='xl:w-[25%] w-full flex xl:justify-start justify-center items-center'>
          <Image src={'/fotos/logo.png'} alt='' width={250} height={250}></Image>
        </picture>
        <FooterItems />
        <ul className='xl:w-[15%] w-[35%] flex flex-col justify-center items-start gap-3'>
          <label className={`${poppins.className} text-white font-bold`}>Seguinos</label>
          <div className='w-full flex justify-between items-center'>
            {redesItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} target='_blank'>
                  <Image height={30} width={30} src={item.icon} alt='icon' />
                </Link>
              </li>
            ))}
          </div>
        </ul>
        <ul className='xl:w-[25%] w-full h-full flex justify-center items-start flex-col gap-4'>
          <label className={`${poppins.className} text-white font-bold`}>Páginas</label>
          {arrNavItems.map((item, index) => (
            <NavItems key={index} title={item.title} href={item.href} className='text-white' />
          ))}
        </ul >
      </div>
      <div className="w-[85%] md:w-[47%] h-max flex items-center justify-center border-t-[1px] border-white/20 flex-col pb-4">
        <small className="text-center text-white text-sm font-bold mt-2 ">
          © 2024 Lo De Lucas. Todos los derechos reservados.
        </small>
        <small className="text-center text-white/60 text-sm font-normal ">
          Diseñado y desarrollado por <Link href="https://synera.com.ar" target='_blank' className='underline text-[#84E9FF]'>Synera</Link>
        </small>
      </div>
    </footer>
  )
}

export default Footer