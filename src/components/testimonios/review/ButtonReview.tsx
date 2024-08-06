import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import { Poppins } from "next/font/google";
import FormReview from "./FormReview";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Component() {
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <button className={`${poppins.className} w-52 h-10 bg-[#710996] rounded-lg text-white font-medium`}>Enviar reseña</button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-[650px] sm:h-[550px] xs:w-[80%] sm:w-[500px] w-[95%]">
        <AlertDialogHeader className="h-[10%] text-start">
          <AlertDialogTitle className={`${poppins.className}`}>Comparte tu reseña</AlertDialogTitle>
          <AlertDialogDescription className={`${poppins.className} h-[90%]`}>
            <label className={`${poppins.className} text-[#710996]`}>Contanos acerca de tu experiencia en el bodegón.</label>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <FormReview>
        </FormReview>
        <AlertDialogFooter className="h-[10%] w-full flex flex-row justify-center items-center gap-4">
          <AlertDialogCancel className={`${poppins.className} h-10 bg-white text-[#710996] sm:w-full w-1/2 rounded-md xs:text-base text-sm font-medium border-[2px] border-[#710996]`}>Cancelar</AlertDialogCancel>
          <button className={`${poppins.className} h-10 bg-[#710996] text-white sm:w-full w-1/2 rounded-md xs:text-base text-sm font-medium`}>Enviar reseña</button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog >
  )
}