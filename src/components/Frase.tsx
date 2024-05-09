import Image from 'next/image'
import React from 'react'

const Frase = () => {
  return (
    <article className='w-full h-[450px] bg-black'>
      <picture className='w-full h-full opacity-55'>
        <Image src={"/fotos/Portada.png"} width={500} height={200} alt='Lo De Lucas - Bodegón' className='w-full h-full'></Image>
      </picture>
    </article>
  )
}

export default Frase