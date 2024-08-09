import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Poppins } from "next/font/google"
import FormReview, { FormProps } from "./FormReview"
import { Dispatch, SetStateAction, useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

type ButtonReviewProps = {
  setTestimonials: Dispatch<SetStateAction<FormProps[]>>
}

export default function ButtonReview({ setTestimonials }: ButtonReviewProps) {
  const [open, setOpen] = useState(false)
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className={`${poppins.className} w-52 h-10 bg-[#710996] rounded-lg text-white font-medium`}
        >
          Enviar reseña
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-[650px] sm:h-[550px] xs:w-[80%] sm:w-[500px] w-[95%]">
        <AlertDialogHeader className="h-[10%] text-start">
          <AlertDialogTitle className={`${poppins.className}`}>
            Comparte tu reseña
          </AlertDialogTitle>
          <AlertDialogDescription className={`${poppins.className} h-[90%]`}>
            <label className={`${poppins.className} text-[#710996]`}>
              Contanos acerca de tu experiencia en el bodegón.
            </label>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <FormReview setTestimonials={setTestimonials} setOpen={setOpen} />
      </AlertDialogContent>
    </AlertDialog>
  )
}
