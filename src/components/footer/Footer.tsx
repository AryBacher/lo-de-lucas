import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
  return (
    <footer className='w-full bg-[#5B0D0F] flex justify-center items-center flex-col p-5 gap-8'>
      <h1 className='title text-white text-3xl text-center'>“En lo de lucas se come sin culpa”</h1>
      <picture className='flex justify-center items-center'>
        <Image src={'/fotos/logo.png'} alt='' width={60} height={60}></Image>
      </picture>
      <h3 className='text-white'>Av 25 de Mayo 997, Escobar.</h3>
      <ul className='w-[85%] flex justify-between sm:justify-evenly items-center'>
        {redesItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link} target='_blank'>
              <Image height={30} width={30} src={item.icon} alt='icon' />
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-[85%] md:w-[47%] h-max flex items-center justify-center border-t-[1px] border-white/20 flex-col">
        <small className="text-center text-white text-sm font-bold mt-4 mb-1">
          © 2024 Lo De Lucas. Todos los derechos reservados.
        </small>
        <small className="text-center text-white/60 text-sm font-normal">
          Diseñado y desarrollado por <Link href="https://synera.com.ar" target='_blank' className='underline text-[#84E9FF]'>Synera</Link>
        </small>
      </div>
    </footer>
  )
}

export default Footer