import React from 'react'
import { Poppins } from "next/font/google";
import Rating from "./Rating";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const FormReview = () => {
  return (
    <form action="" className="w-full h-full flex justify-evenly items-center flex-col gap-5">
      <div className="w-full flex sm:flex-row flex-col gap-5">
        <div className="flex flex-col w-full gap-1">
          <label className={`${poppins.className} font-medium xs:text-base text-sm`}>Nombre</label>
          <input name="name" type="text" placeholder="Ingrese su nombre" autoComplete='off' className={`${poppins.className} p-2 rounded-md outline-none border-[1px] border-[#7C7C7C] m-0 xs:text-base text-sm`} />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label className={`${poppins.className} font-medium xs:text-base text-sm`}>Apellido</label>
          <input name="lastname" type="text" placeholder="Ingrese su apellido" autoComplete='off' className={`${poppins.className} p-2 rounded-md outline-none border-[1px] border-[#7C7C7C] m-0 xs:text-base text-sm`} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className={`${poppins.className} font-medium`}>Mensaje</label>
        <textarea name="message" placeholder="Comparte tu experiencia en el bodegón" className={`${poppins.className} p-2 w-full h-32 resize-none outline-none border-[1px] border-[#7C7C7C] m-0 rounded-md xs:text-base text-sm`}></textarea>
      </div>
      <Rating />
    </form>
  )
}

export default FormReview