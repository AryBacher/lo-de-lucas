"use client"

import React, { useEffect, useState } from "react"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import CardTestimonios from "./CardTestimonios"
import Autoplay from "embla-carousel-autoplay"
import { Poppins } from "next/font/google"
import ButtonReview from "./review/ButtonReview"
import Title from "../helpers/Title"
import { Toaster } from "sonner"
import { createClient } from "@/lib/supabase/client"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

type FeedBackProps = {
  name: string
  lastname: string
  message: string
  rating: string
}

const Testimonios = () => {
  const supabase = createClient()
  const [feedbacks, setFeedbacks] = useState<FeedBackProps[]>([])
  const [state, setState] = useState(false)

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase.from("feedback").select()

      if (error) {
        console.error(error)
        return
      }

      setFeedbacks(data)
    }

    fetchFeedbacks()
  }, [state])

  return (
    <main
      id="testimonios"
      className="w-full h-max flex flex-col justify-center items-center gap-5 pb-36"
    >
      <Toaster position="top-center" duration={3000} richColors />
      <div className="flex justify-center items-center flex-col gap-2">
        <Title
          title="TESTIMONIOS DE NUESTROS CLIENTES"
          className="text-[#710996] w-full xl:h-auto text-3xl font-semibold  text-center"
        />
        <p
          className={`${poppins.className} w-[80%] text-sm text-[#7C7C7C] hidden md:block text-center `}
        >
          Escuche a nuestros clientes satisfechos acerca de su experiencia con
          nuestro restaurante.
        </p>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full h-full flex justify-center items-center overflow-hidden"
      >
        <CarouselContent className="flex flex-row m-0">
          {feedbacks &&
            feedbacks.map((item, index) => (
              <CardTestimonios
                key={index}
                name={item.name}
                message={item.message}
                lastname={item.last_name}
                rating={item.rating}
              />
            ))}
        </CarouselContent>
      </Carousel>
      <div>
        <ButtonReview setState={setState} />
      </div>
    </main>
  )
}

export default Testimonios
