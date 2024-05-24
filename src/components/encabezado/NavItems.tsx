import Link from 'next/link'
import React from 'react'

type NavItemsProps = {
  title: string
  href: string
  action?: () => void
}

const NavItems = ({ title, href, action }: NavItemsProps) => {
  return (
    <li className=''>
      <Link onClick={action} href={href} className='font-normal text-lg text-black'>{title}</Link>
    </li>
  )
}

export default NavItems