import Link from 'next/link'
import React from 'react'

type NavItemsProps = {
  title: string
  href: string
  action?: () => void
}

const NavItems = ({ title, href, action }: NavItemsProps) => {
  return (
    <li className='group'>
      <Link onClick={action} href={href} className='font-normal text-lg'>{title}</Link>
    </li>
  )
}

export default NavItems