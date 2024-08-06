import { cn } from '@/lib/utils'
import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type TitleProps = {
  title: string
  className?: string
  divClassName?: string
}

const Title = ({ title, className, divClassName }: TitleProps) => {
  return (
    <div className={cn("w-full h-1/4 flex justify-start items-center", divClassName)}>
      <h2 className={cn(` w-full text-start text-xl font-bold`, className)}>{title}</h2>
    </div>
  )
}

export default Title