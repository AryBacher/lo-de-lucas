import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type PictureFrameProps = {
  alt: string
  image: string
  className?: string
  divClassName?: string
  imageClassName?: string
  width?: number
  height?: number
}

const PictureFrame = ({ alt, image, divClassName, imageClassName, width, height }: PictureFrameProps) => {
  return (
    <picture className={cn('', divClassName)}>
      <Image width={width} height={height} src={image} alt={alt} className={cn('', imageClassName)} quality={75}
        loading="lazy" />
    </picture>
  )
}

export default PictureFrame