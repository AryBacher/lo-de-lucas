import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from '../helpers/Title';
import PictureFrame from '../helpers/PictureFrame';
import Button from '../helpers/Button';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Props {
  title: string
  image: string
  href: string
  description: string
}

const CardMenu = ({ href, title, image, description }: Props) => {
  return (
    <div className="lg:w-[21%] sm:w-[45%] w-[85%] h-max border-[1px] border-[#00084D] rounded-lg">
      <div className="w-full h-[70%] rounded-t-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={400}
          height={400}
          className="rounded-t-md"
          quality={100}
          loading="lazy"
        />
      </div>
      <div
        className="w-full h-[30%] flex justify-center items-center flex-col p-3 gap-2 border-t-[1px] border-[#00084D]"
      >
        <Title title={title} className={`${poppins.className} text-start text-2xl font-bold`} />
        <div className="w-full h-2/3 flex justify-between items-start flex-row">
          <p className={`${poppins.className} w-[75%] text-start text-[#7C7C7C] text-sm`}>
            {description}
          </p>
          <Button
            className="w-10 h-10 bg-[#00084D] rounded-lg"
            href={href}
          >
            <PictureFrame alt='arrow-right' image='/icons/arrow.svg' width={24} height={24} divClassName='w-full h-full flex justify-center items-center' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardMenu
