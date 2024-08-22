import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  title?: string
  href: string
  className?: string
  children?: React.ReactNode
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Button = ({ className, title, href, children }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={className}
      target='_blank'
    >{title || children}</Link>
  )
}

export default Button