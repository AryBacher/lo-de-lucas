import React from 'react'

const Portada = () => {
  return (
    <section id='inicio' className="w-full h-screen">
      <div className="relative w-full h-full bg-black">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 hidden md:block">
          <source src="/videos/Video2.mp4" type="video/mp4" className=''></source>
        </video>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 block md:hidden">
          <source src="/videos/Video_Prueba.mp4" type="video/mp4" className=''></source>
        </video>
      </div>
    </section>
  )
}

export default Portada