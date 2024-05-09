import React from 'react'

interface Props {
  title: string
  image: string
  href: string
  description: string
}


const CardNotas = ({ href, title, image, description }: Props) => {
  return (
    <div className="w-[85%] h-[405px] flex justify-center items-center flex-col gap-2">
      <picture className="w-full h-[50%]">
        <img src={image} alt={title} className="w-full h-full" />
      </picture>
      <div className="w-full h-[50%] flex justify-start items-center flex-col gap-2">
        <div className="w-full flex justify-start items-center">
          <h2 className="w-full text-start text-xl font-bold title">{title}</h2>
        </div>
        <div className="w-full flex justify-between items-end flex-row gap-3">
          <p className="w-[80%]  text-container text-[#7C7C7C] text-sm text-start">
            {description}
          </p>
          <a
            href={href}
            className="w-24 h-12 bg-[#E1AF00] flex justify-center items-center font-bold underline p-2"
            target="_blank">Leer más </a>
        </div>
      </div>
    </div>
  )
}

export default CardNotas