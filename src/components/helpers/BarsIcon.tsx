import { motion } from 'framer-motion'
import React from 'react'

type BarsIconProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const variants = {
  closed: {
    d: "M6 10h26M6 22h26M6 34h26", // Tres líneas horizontales
  },
  open: {
    d: "M4 8l16 16 M4 24l16 -16", // Tres líneas y una línea adicional
  },
};


const Path = (props: any) => (
  <motion.path fill="none" stroke="#000"  {...props}></motion.path>
)

const BarsIcon = ({ isOpen, setIsOpen }: BarsIconProps) => {
  return (

    <svg onClick={() => setIsOpen(!isOpen)} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.3335 35.9792V33.8958H41.6668V35.9792H8.3335ZM8.3335 26.0417V23.9583H41.6668V26.0417H8.3335ZM8.3335 16.1042V14.0208H41.6668V16.1042H8.3335Z" fill="#0E0E0E" />
    </svg>

  )
}

export default BarsIcon
