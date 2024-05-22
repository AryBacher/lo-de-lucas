import React from 'react'

const Intro = () => {
  return (
    <section className="w-full sm:w-[45%] h-[300px] flex justify-center items-center">
      <div
        className="w-[95%] h-max bg-[#D26500] flex justify-center items-center flex-col p-4"
      >
        <div className="w-full h-1/3 flex justify-center items-center flex-col">
          <h1 className="text-3xl text-white title">LO DE LUCAS</h1>
          <h1 className="text-3xl text-white title">ES FAMILIA</h1>
        </div>
        <div className="w-full h-2/3 flex justify-center items-center">
          <p className="text-center text-white font-light">
            Más que un bodegón, somos el corazón de Escobar. Desde 2016, cocinamos con pasión y amor, ofreciendo platos abundantes y hogareños para disfrutar en familia y con amigos. Vení y descubrí el sabor que nos une.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro