import React from 'react'

const Intro = () => {
  return (
    <section className="w-full sm:w-[45%] h-[400px] flex justify-center items-center">
      <div
        className="w-[85%] h-[250px] bg-[#D26500] flex justify-center items-center flex-col p-4"
      >
        <div className="w-full h-1/3 flex justify-center items-center flex-col">
          <h1 className="text-4xl text-white title">LO DE LUCAS</h1>
          <h1 className="text-4xl text-white title">ES FAMILIA</h1>
        </div>
        <div className="w-full h-2/3 flex justify-center items-center">
          <p className="text-center text-white font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laudantium est tempore omnis maiores in perferendis odit officiis
            tempora
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro