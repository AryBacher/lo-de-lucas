"use client"
import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import { cn } from '@/lib/utils'
import BarsIcon from './BarsIcon'
import { useParams, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Encabezado = () => {
  const arrItems = [
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
  const [header, setHeader] = useState(true)
  const params = usePathname()



  const scrollHandler = () => {
    if (window.scrollY >= 80 || params === '/milanesas' || params === '/pastas' || params === '/postres' || params === '/entradas') {
      setHeader(false)
    } else {
      setHeader(true)
    }
  }

  useEffect(() => {
    console.log(params)
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }
  )
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={cn(header ? "w-full h-[70px] fixed z-30 flex justify-start items-center  top-0 lg:px-10 px-4 transition-all border-b-[1px] border-white/0" : "  bg-white w-full h-[70px] fixed z-30 flex justify-start items-center border-b-[1px] shadow-xl border-b-white/20 top-0 lg:px-10 px-4 transition-all",
      {
        " w-full h-[70px] fixed z-30 flex justify-start items-center  top-0 lg:px-10 px-4 transition-all border-b-[1px] border-white/0": header === true && params !== '/milanesas' && params !== '/pastas' && params !== '/postres' && params !== '/entradas',

      })}
      id='inicio'>
      <picture className='xl:w-[25%] h-full w-[50%] flex justify-start items-center z-10'>
        <Link
          href={'/#inicio'}
        >
          <Image src={'/fotos/logo.png'} alt='Logo Lo de Lucas' width={110} height={110} className='h-auto' quality={75} loading="lazy"></Image>
        </Link>
      </picture>
      <nav className='w-[65%] h-full flex justify-end items-center xl:ml-28'>
        <ul className='xl:flex hidden w-[75%] justify-between items-center'>
          {arrItems.map((item, index) => (
            <NavItems key={index} title={item.title} href={item.href} className={cn(header ? "text-white" : "text-black")} />
          ))}
        </ul>
      </nav>
      <div className="relative xl:hidden block z-50 rounded-xl">
        {
          header ? <svg onClick={() => setIsOpen(!isOpen)} width="50" height="50" viewBox="0 0 50 50" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.3335 35.9792V33.8958H41.6668V35.9792H8.3335ZM8.3335 26.0417V23.9583H41.6668V26.0417H8.3335ZM8.3335 16.1042V14.0208H41.6668V16.1042H8.3335Z" fill="white" />
          </svg> :

            <BarsIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        }
      </div>
      <aside
        className={cn(
          "fixed top-0 left-0 w-[75%] h-screen bg-white xl:hidden flex -translate-x-full transition-all duration-500 justify-between items-center",
          {
            "translate-x-0 transition-all duration-500": isOpen,
          }
        )}
      >
        <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-start flex-col mt-20">
          <span className="w-[90%] h-[1px] bg-white/20" />
          <ul className="w-[90%] h-max flex items-start justify-start flex-col gap-12 mt-12">
            {arrItems.map((item, index) => (
              <NavItems
                key={index}
                title={item.title}
                href={item.href}
                action={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>
      </aside>
    </header>
  )
}

export default Encabezado
