import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  image: string
  href: string
  description: string
}

const CardMenu = ({ href, title, image, description }: Props) => {
  return (
    <div className="lg:w-[33%] w-full h-max border-[1px] border-[#00084D] rounded-lg">
      <picture className="w-full h-[70%]">
        <Image width={300} height={300} src={image} alt={title} className="w-full  rounded-t-md" />
      </picture>
      <div
        className="w-full h-[30%] flex justify-center items-center flex-col p-4 gap-2 border-t-[1px] border-[#00084D]"
      >
        <div className="w-full h-1/3 flex justify-start items-center">
          <h2 className="text-start text-2xl font-bold">{title}</h2>
        </div>
        <div className="w-full h-2/3 flex justify-between items-start flex-row">
          <p className="w-[75%] text-start text-container text-[#7C7C7C]">
            {description}
          </p>
          <Link href={href} className="w-12 h-12 bg-[#00084D] rounded-lg">
            <picture className="w-full h-full flex justify-center items-center">
              <Image
                width={24}
                height={24}
                src="/icons/arrow.svg"
                alt="arrow-right"
                className="w-6 h-6"
              />
            </picture>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardMenu