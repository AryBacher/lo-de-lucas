import Image from 'next/image'
import React from 'react'

const Frase = () => {
  return (
    <article className='w-full h-[450px] bg-black flex justify-center items-center my-14'>
      <div className='h-[60%] w-full bg-black absolute z-10 opacity-70 flex justify-center items-center px-5'>
        <h1 className='text-white title text-3xl text-center'>En lo de lucas somos especialistas en platos enormes</h1>
      </div>
      <picture className=' w-full h-full opacity-35'>
        <Image src={"/fotos/fotoFrase.png"} width={500} height={200} alt='Lo De Lucas - Bodegón' className='w-full h-full object-cover  '></Image>
      </picture>


    </article >
  )
}

export default Frase