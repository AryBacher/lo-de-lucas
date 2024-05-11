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
  const firstComidaId = Array.isArray(comida_Id) ? comida_Id[0] : comida_Id;
  const comida = firstComidaId ? comidasData[firstComidaId] : undefined;
  const title = typeof firstComidaId === 'string' ? firstComidaId : '';
  return (
    <div className='w-full h-screen'>
      {comida && <Comida title={title} description={comida.description} price={comida.price} />}
    </div>
  )
}

export default page