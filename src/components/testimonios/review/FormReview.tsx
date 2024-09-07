import React, { Dispatch, SetStateAction, useState } from "react"
import { Poppins } from "next/font/google"
import Rating from "./Rating"
import { toast } from "sonner"
import { FormSchema } from "@/schema/FormSchema"
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog"
import { createClient } from "@/lib/supabase/client"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export type FormProps = {
  name: string
  last_name: string
  message: string
  rating: string
}

type FormReviewProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  setState: Dispatch<SetStateAction<boolean>>
}

const FormReview = ({ setOpen, setState }: FormReviewProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [rating, setRating] = useState(0)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const values = Object.fromEntries(formData.entries()) as FormProps

      console.log(values)

      if (!values.name || !values.last_name || !values.message) {
        toast.warning("Por favor, complete todos los campos")
      }

      const result = FormSchema.safeParse(values)

      console.log(result)

      if (!result.success) {
        toast.warning(result.error.errors[0].message)
        return
      }

      values.rating = rating.toString()

      // Send the form data to the server

      await supabase.from("feedback").insert(values)

      setState((prev) => !prev)

      toast.success("Reseña enviada con éxito")
      setOpen(false)
    } catch (error) {
      toast.error("Ocurrió un error al enviar la reseña")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      id="form-resenas"
      onSubmit={handleSubmit}
      className="w-full h-full flex justify-evenly items-center flex-col gap-5 rounded-lg"
    >
      <div className="w-full flex sm:flex-row flex-col gap-5">
        <div className="flex flex-col w-full gap-1">
          <label
            className={`${poppins.className} font-medium xs:text-base text-sm`}
          >
            Nombre
          </label>
          <input
            name="name"
            type="text"
            autoFocus
            placeholder="Ingrese su nombre"
            autoComplete="off"
            className={`${poppins.className} p-2 rounded-md outline-none border-[1px] border-[#7C7C7C] m-0 xs:text-base text-sm`}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            className={`${poppins.className} font-medium xs:text-base text-sm`}
          >
            Apellido
          </label>
          <input
            name="last_name"
            type="text"
            placeholder="Ingrese su apellido"
            autoComplete="off"
            className={`${poppins.className} p-2 rounded-md outline-none border-[1px] border-[#7C7C7C] m-0 xs:text-base text-sm`}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <label className={`${poppins.className} font-medium`}>Mensaje</label>
        <textarea
          name="message"
          placeholder="Comparte tu experiencia en el bodegón"
          className={`${poppins.className} p-2 w-full h-32 resize-none outline-none border-[1px] border-[#7C7C7C] m-0 rounded-md xs:text-base text-sm`}
        />
      </div>
      <Rating finalRating={setRating} />
      <footer className="w-full flex items-center justify-center flex-row gap-4">
        <AlertDialogCancel
          className={`${poppins.className} h-10 bg-white text-[#710996] sm:w-full w-1/2 rounded-md xs:text-base text-sm font-medium border-[2px] border-[#710996]`}
        >
          Cancelar
        </AlertDialogCancel>
        <button
          type="submit"
          className={`${poppins.className} h-10 bg-[#710996] text-white sm:w-full w-1/2 rounded-md xs:text-base text-sm font-medium`}
        >
          {isLoading ? "Enviando..." : "Enviar reseña"}
        </button>
      </footer>
    </form>
  )
}

export default FormReview
