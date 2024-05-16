import React from 'react'

const Portada = () => {
  return (
    <section className="w-full h-screen">
      <div className="relative w-full h-full bg-black">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 ">
          <source src="/videos/Video2.mp4" type="video/mp4"></source>
        </video>

      </div>
    </section>
  )
}

export default Portada