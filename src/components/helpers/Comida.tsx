import React from 'react'

type ComidaProps = {
  title: string
  description: string
  image: string
}

const Comida = ({ title, description, image }: ComidaProps) => {



  return (
    <div className="w-full h-[450px] lg:h-[350px] sm:w-[full] xl:w-[27%] md:w-[50%] pt-5 px-10">
      <picture className="w-full h-[20%]">
        <img src={image} alt={title} className="w-full" />
      </picture>
      <div
        className="w-full h-[35%] flex justify-center items-center flex-col py-4 gap-2"
      >
        <div className="w-full h-1/3 flex justify-start items-center">
          <h2 className="text-start text-xl font-bold">{title}</h2>
        </div>
        <div className="w-full h-2/3 flex justify-between items-start flex-row">
          <p className="w-[75%] text-start text-container text-[#7C7C7C]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comida