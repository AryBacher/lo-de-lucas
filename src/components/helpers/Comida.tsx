import React from 'react'

type ComidaProps = {
  title: string
  description: string
  price: number
}

const Comida: React.FC<ComidaProps> = ({ title, description, price }) => {
  return (
    <div className='w-full h-full pt-20' >
      <h1 className='text-xl text-black'>{title}</h1>
      <p className='text-xl text-black'>{description}</p>
      <p className='text-xl text-black'>Precio: ${price}</p>
    </div >
  )
}

export default Comida