import Image from 'next/image'
import React from 'react'

type ComidaProps = {
  title: string
  description: string
  image: string
}

const Comida = ({ title, description, image }: ComidaProps) => {



  return (
    <div className="lg:w-[350px] w-[375px] h-[250px] pt-5 px-10 lg:pt-0 lg:px-0 flex justify-center items-center flex-col gap-4">
      <picture className='w-full h-[80%]'>
        <Image width={250} height={250} src={image} alt={title} className="w-full h-full" />
      </picture>
      <div
        className="w-full h-[20%] flex justify-start items-center flex-col"
      >
        <div className="w-full h-1/3 flex justify-start items-center">
          <h2 className="text-start text-xl font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default Comida