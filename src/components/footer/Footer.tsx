import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterItems from './FooterItems'
import NavItems from '../encabezado/NavItems'
import { Poppins } from 'next/font/google'
import PictureFrame from '../helpers/PictureFrame'


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
    <footer className='w-full h-max bg-[#5B0D0F] flex justify-center items-center flex-col gap-8'>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='sm:w-[90%] w-[95%] xl:w-full flex flex-col lg:flex-row justify-between lg:items-start items-center px-5 py-20 gap-10 md:gap-0'>
          <PictureFrame
            alt='Lo De Lucas - Bodegón'
            width={250}
            height={250}
            image='/fotos/logo.png'
            divClassName='lg:w-[20%] w-full flex justify-center items-center'
          />
          <FooterItems />
          <ul className='lg:w-[15%] w-full h-full flex justify-center items-start flex-col gap-2'>
            <label className={`${poppins.className} text-white font-medium`}>Páginas</label>
            {arrNavItems.map((item, index) => (
              <NavItems key={index} title={item.title} href={item.href} className='text-white/90 font-normal' />
            ))}
          </ul >
          <ul className='w-full lg:w-[15%] flex flex-col justify-center items-start gap-3'>
            <label className={`${poppins.className} text-white font-medium`}>Seguinos</label>
            <div className='lg:w-full w-[50%] flex justify-start items-center gap-3'>
              {redesItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} target='_blank'>
                    <Image height={30} width={30} src={item.icon} alt='icon' />
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="w-full h-max flex items-center justify-center border-t-[1px] border-white/20 flex-col pb-4">
          <small className={`${poppins.className} text-center text-white text-sm font-medium mt-2 `}>
            © 2024 Lo De Lucas. Todos los derechos reservados.
          </small>
          <small className={`${poppins.className} text-center text-white/60 text-sm font-normal `}>
            Desarrollado por <Link href="https://bacherbros.com/" target='_blank' className='underline text-[#84E9FF]'>Bacher Bros</Link> y <Link href="https://synera.com.ar/" target='_blank' className='underline text-[#84E9FF]'>Synera</Link>
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer