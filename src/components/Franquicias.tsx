import React from 'react'

const Franquicias = () => {
  return (
    <section className='mt-10 w-full flex justify-center items-center'>
      <div className='w-[85%] h-full flex justify-center items-center flex-col gap-2'>
        <h2 className='text-3xl text-black title'>Franquicias</h2>
        <p className='text-container text-[#7C7C7C] text-sm text-center'>¿Interesado en tener tu propio restaurante? Nuestra oportunidad de franquicia podría ser la opción perfecta. Contáctese para obtener más información.</p>
        <button className='w-[80%] h-14 bg-[#00960F] flex justify-center items-center flex-row gap-3 mt-4 p-4'>
          <span className='text-white text-sm'>Comunicate con nosotros</span>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_72_104)">
              <path d="M16.9917 23.05L25 15L16.9917 6.94999C16.9193 6.85501 16.8275 6.77668 16.7222 6.7203C16.617 6.66392 16.5009 6.63081 16.3817 6.62321C16.2626 6.61561 16.1432 6.6337 16.0317 6.67624C15.9201 6.71879 15.819 6.78481 15.7352 6.86982C15.6514 6.95484 15.5869 7.05687 15.5459 7.16901C15.505 7.28114 15.4886 7.40077 15.4979 7.51979C15.5072 7.63881 15.5419 7.75444 15.5998 7.85885C15.6577 7.96326 15.7373 8.05402 15.8333 8.12499L21.825 14.1667H5.88333C5.66232 14.1667 5.45036 14.2544 5.29408 14.4107C5.1378 14.567 5.05 14.779 5.05 15C5.05 15.221 5.1378 15.433 5.29408 15.5892C5.45036 15.7455 5.66232 15.8333 5.88333 15.8333L21.825 15.8333L15.8333 21.875C15.6775 22.0319 15.5904 22.2443 15.5912 22.4654C15.592 22.6866 15.6806 22.8983 15.8375 23.0541C15.9944 23.21 16.2068 23.2971 16.4279 23.2963C16.6491 23.2955 16.8609 23.2069 17.0167 23.05H16.9917Z" fill="#F3F3F3" />
            </g>
            <defs>
              <clipPath id="clip0_72_104">
                <rect width="30" height="30" fill="white" transform="matrix(0 1 -1 0 30 0)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Franquicias
