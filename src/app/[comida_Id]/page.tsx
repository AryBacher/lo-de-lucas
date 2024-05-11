"use client"
import { useParams } from 'next/navigation';
import Comida from '../../components/helpers/Comida';

type ComidaData = {
  description: string;
  price: number;
};

const comidasData: Record<string, ComidaData> = {
  milanesas: {
    description: "Milanesas",
    price: 10
  },
  pastas: {
    description: "Pastas",
    price: 12
  },
  postres: {
    description: "Postres",
    price: 5
  }
};

const page = () => {
  const { comidaId } = useParams();
  const comidaData = comidasData[comidaId as string];

  return (
    <div className='w-full h-screen'>
      {comidaData && <Comida title={comidaId as string} description={comidaData.description} price={comidaData.price} />}
    </div>
  );
};

export default page;