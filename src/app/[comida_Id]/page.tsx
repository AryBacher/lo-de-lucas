"use client"
import { useParams } from 'next/navigation';
import Comida from '../../components/helpers/Comida';

type ComidaData = {
  description: string;
  price: number;
};

export default function Home() {
  const comidasData = [
    {
      id: "milanesas",
      description: "Milanesas",
      price: 10
    }, {
      id: "pastas",
      description: "Pastas",
      price: 12
    }, {
      id: "postres",
      description: "Postres",
      price: 5

    }
  ]
  const comidaId = useParams();
  comidaId.toString() === 'milanesas' ? comidasData.indexOf(comidasData[0]) : comidaId.toString() === 'pastas' ? comidasData.indexOf(comidasData[1]) : comidasData.indexOf(comidasData[2])
  return (
    <div className='w-full h-screen'>
      {
        comidasData.map((comida, index) => {
          return (
            <Comida
              key={index}
              title={comida.id}
              description={comida.description}
              price={comida.price}
            />
          )
        }
        )
      }
    </div>
  )
}


