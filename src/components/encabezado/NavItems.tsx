import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


type NavItemsProps = {
  title: string
  href: string
  action?: () => void
  className?: string
}

const NavItems = ({ title, href, action, className }: NavItemsProps) => {
  return (
    <li className='list-none'>
      <Link onClick={action} href={href} className={cn(`${poppins.className} font-normal text-lg`, className)}>{title}</Link>
    </li>
  )
}

export default NavItems