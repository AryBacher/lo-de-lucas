import Image from 'next/image'
import React from 'react'

const Encabezado = () => {
  return (
    <header className="bg-white w-full h-[70px] fixed z-20 flex justify-center items-center border-b-[1px] shadow-2xl border-b-white/20 ">
      <picture>
        <Image src={'/fotos/logo.png'} alt='Logo - Lo De Lucas' height={50} width={50}></Image>
      </picture>
    </header>
  )
}

export default Encabezado