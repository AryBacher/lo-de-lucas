import { Poppins } from "next/font/google"
import React, { Dispatch, SetStateAction, useEffect } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Rating = ({
  finalRating,
}: {
  finalRating: Dispatch<SetStateAction<number>>
}) => {
  const [rating, setRating] = React.useState(0)

  const handleClick = (value: number) => {
    setRating(value)
    finalRating(value)
  }

  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      <label className={`${poppins.className} font-medium`}>Calificación</label>
      <div className=" flex justify-start items-center gap-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <svg
            key={value}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleClick(value)}
            style={{
              cursor: "pointer",
              transition: "transform 0.1s ease-in-out",
            }}
            className="cursor-pointer hover:scale-95"
          >
            <path
              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
              fill={value <= rating ? "#710996" : "none"}
              stroke="#710996"
              className="transition-all duration-75 ease-in-out"
            />
          </svg>
        ))}
      </div>
    </div>
  )
}

export default Rating
