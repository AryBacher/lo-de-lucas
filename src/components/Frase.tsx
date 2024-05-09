import Image from 'next/image'
import React from 'react'

const Frase = () => {
  return (
    <article className='w-full h-[450px] bg-black flex justify-center items-center '>
      <div className='h-[60%] w-full bg-black absolute z-10 opacity-70 flex justify-center items-center'>
        <h1 className='text-white title text-3xl text-center'>En lo de lucas somos especialistas en...</h1>
      </div>
      <picture className=' relative w-full h-full opacity-35'>
        <Image src={"/fotos/fotoFrase.png"} width={500} height={200} alt='Lo De Lucas - Bodegón' className='w-full h-full'></Image>
      </picture>


    </article>
  )
}

export default Frase