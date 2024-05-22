"use client"
import React, { useState } from 'react'
import NavItems from './NavItems'
import { cn } from '@/lib/utils'
import BarsIcon from './BarsIcon'

const Encabezado = () => {
  const [isOpen, setIsOpen] = useState(false)
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
  return (
    <header className="bg-white w-full h-[70px] fixed z-20 flex justify-center items-center border-b-[1px] shadow-xl border-b-white/20 top-0"
      id='inicio'>
      <nav className='w-[85%] h-full flex justify-end items-center'>
        <ul className='lg:flex hidden w-[75%] justify-between items-center'>
          {arrItems.map((item, index) => (
            <NavItems key={index} title={item.title} href={item.href} />
          ))}
        </ul>
      </nav>
      <div className="relative lg:hidden block z-50">
        <BarsIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <aside
        className={cn(
          "fixed top-0 left-0 w-[80%] h-screen bg-white lg:hidden flex -translate-x-full transition-all duration-500 justify-between items-center",
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