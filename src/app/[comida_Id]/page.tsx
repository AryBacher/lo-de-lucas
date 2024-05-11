"use client"
import { useParams } from 'next/navigation'
import Comida from '../../components/helpers/Comida'

type ComidaData = {
  comida_Id: string | string[]
  description: string
  price: number
}

const comidasData: Record<string, ComidaData> = {
  milanesas: {
    comida_Id: "milanesas",
    description: "Milanesas",
    price: 10
  },
  pastas: {
    comida_Id: "pastas",
    description: "Pastas",
    price: 12
  },
  postres: {
    comida_Id: "postres",
    description: "Postres",
    price: 5
  }
}

const page = () => {
  const { comida_Id } = useParams()
  const comida = comida_Id ? comidasData[comida_Id] : undefined
  console.log(comidasData[comida_Id])
  return (
    <div className='w-full h-screen'>
      {comida && <Comida title={comida.comida_Id} description={comida.description} price={comida.price} />}
    </div>
  )
}

export default page