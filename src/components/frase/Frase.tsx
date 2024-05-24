import React from 'react';

const Frase = () => {
  return (
    <article
      className='w-full h-[450px] bg-cover bg-center flex justify-center items-center my-14 '
      style={{ backgroundImage: 'url("/fotos/fotoFrase.png")' }}
    >
      <picture className='w-full h-[60%] flex justify-center items-center relative '
      >
        <div className='w-full h-full relative flex justify-center items-center px-5 bg-black opacity-60 '>
        </div>
        <h1 className='text-white text-3xl text-center z-20 absolute'>
          En lo de lucas somos especialistas en platos enormes
        </h1>
      </picture>
    </article>
  );
};

export default Frase;
