import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Ubi = () => {

  const items = [
    {
      title: 'Av. 25 de Mayo 997, Escobár',
      icon: <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4998 2.08325C10.3041 2.08314 8.19698 2.94967 6.63655 4.49449C5.07612 6.03932 4.18846 8.13759 4.1665 10.3333C4.1665 16.0416 11.5103 22.3958 11.8228 22.6666C12.0114 22.828 12.2516 22.9167 12.4998 22.9167C12.7481 22.9167 12.9882 22.828 13.1769 22.6666C13.5415 22.3958 20.8332 16.0416 20.8332 10.3333C20.8112 8.13759 19.9236 6.03932 18.3631 4.49449C16.8027 2.94967 14.6956 2.08314 12.4998 2.08325ZM12.4998 20.4687C10.7603 18.8124 6.24984 14.2187 6.24984 10.3333C6.24984 8.67565 6.90832 7.08594 8.08042 5.91383C9.25252 4.74173 10.8422 4.08325 12.4998 4.08325C14.1574 4.08325 15.7472 4.74173 16.9193 5.91383C18.0914 7.08594 18.7498 8.67565 18.7498 10.3333C18.7498 14.1874 14.2394 18.8124 12.4998 20.4687Z" fill="#0E0E0E" />
        <path d="M12.4998 6.25C11.7788 6.25 11.0739 6.46382 10.4743 6.86443C9.87477 7.26504 9.40747 7.83444 9.13153 8.50063C8.85558 9.16682 8.78338 9.89988 8.92406 10.6071C9.06473 11.3143 9.41197 11.9639 9.92185 12.4738C10.4317 12.9837 11.0813 13.3309 11.7886 13.4716C12.4958 13.6123 13.2288 13.5401 13.895 13.2641C14.5612 12.9882 15.1306 12.5209 15.5312 11.9214C15.9318 11.3218 16.1457 10.6169 16.1457 9.89583C16.1457 8.9289 15.7616 8.00157 15.0778 7.31784C14.3941 6.63411 13.4668 6.25 12.4998 6.25ZM12.4998 11.4583C12.1908 11.4583 11.8887 11.3667 11.6318 11.195C11.3748 11.0233 11.1745 10.7793 11.0563 10.4938C10.938 10.2083 10.9071 9.8941 10.9674 9.591C11.0277 9.28791 11.1765 9.0095 11.395 8.79098C11.6135 8.57246 11.8919 8.42365 12.195 8.36336C12.4981 8.30307 12.8123 8.33401 13.0978 8.45227C13.3833 8.57053 13.6273 8.7708 13.799 9.02776C13.9707 9.28471 14.0623 9.5868 14.0623 9.89583C14.0623 10.3102 13.8977 10.7077 13.6047 11.0007C13.3117 11.2937 12.9142 11.4583 12.4998 11.4583Z" fill="#0E0E0E" />
      </svg>,
      label: 'Dirección: '
    },
    {
      title: '0348 443-0751',
      icon: <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.8125 5.20833C6.875 6.13542 7.03125 7.04167 7.28125 7.90625L6.03125 9.15625C5.60417 7.90625 5.33333 6.58333 5.23958 5.20833H6.8125ZM17.0833 17.7292C17.9687 17.9792 18.875 18.1354 19.7917 18.1979V19.75C18.4167 19.6562 17.0937 19.3854 15.8333 18.9687L17.0833 17.7292ZM7.8125 3.125H4.16667C3.59375 3.125 3.125 3.59375 3.125 4.16667C3.125 13.9479 11.0521 21.875 20.8333 21.875C21.4062 21.875 21.875 21.4062 21.875 20.8333V17.1979C21.875 16.625 21.4062 16.1562 20.8333 16.1562C19.5417 16.1562 18.2812 15.9479 17.1146 15.5625C17.0112 15.525 16.9016 15.5073 16.7917 15.5104C16.5208 15.5104 16.2604 15.6146 16.0521 15.8125L13.7604 18.1042C10.8077 16.5942 8.40584 14.1923 6.89583 11.2396L9.1875 8.94792C9.47917 8.65625 9.5625 8.25 9.44792 7.88542C9.05276 6.68548 8.85231 5.43 8.85417 4.16667C8.85417 3.59375 8.38542 3.125 7.8125 3.125Z" fill="#0E0E0E" />
      </svg>,
      label: 'Teléfono: '
    }
  ]

  return (
    <section className='w-[80%] xl:w-[85%] flex justify-center items-center flex-col gap-5 py-10'
      id='ubicacion'>
      <div className='w-full h-1/6 flex justify-center items-center flex-col gap-2'>
        <h1 className='text-[#AD00FF] w-full xl:h-auto text-3xl font-semibold  text-center'>ENCONTRANOS</h1>
        <p className={`${poppins.className} w-[85%] lg:w-[50%] text-container text-[#7C7C7C] text-sm text-center hidden md:block`}>Visita nuestro Bodegón para vivir la experiencia de comer en Lo de Lucas en carne propia.</p>
      </div>
      <div className='w-full h-4/6 flex justify-center items-center flex-col lg:flex-row gap-5'>
        <div className='lg:w-[30%] w-full h-full flex justify-center items-center order-2 lg:order-1 '>
          <ul className='w-full h-full flex flex-col items-start justify-start gap-4 '>
            {
              items.map((item, index) => (
                <li key={index} className='w-full flex justify-start items-center flex-row gap-2'>
                  {item.icon}
                  <h4 className='w-full text-container text-black text-base flex flex-col'>
                    <label className='font-semibold text-base'>{item.label}</label>
                    {item.title}</h4>
                </li>
              ))
            }
            <Link href="https://www.google.com.ar/maps/place/Lo+De+Lucas+Bodegón/@-34.3522961,-58.7967762,17z/data=!3m1!4b1!4m6!3m5!1s0x95bb61b77bef62b9:0x346fd3d5c84c5ebb!8m2!3d-34.3522961!4d-58.7941959!16s%2Fg%2F11c74gtkx6?entry=ttu" className={`${poppins.className} w-full lg:w-[85%] 2xl:w-[65%] h-[40px] flex flex-row justify-center items-center gap-4 rounded-xl bg-[#AD00FF] font-medium  text-white`}>
              Ver en Google Maps
              <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 31.5L13.5 28.35L6.525 31.05C6.025 31.25 5.5625 31.194 5.1375 30.882C4.7125 30.57 4.5 30.151 4.5 29.625V8.625C4.5 8.3 4.594 8.0125 4.782 7.7625C4.97 7.5125 5.226 7.325 5.55 7.2L13.5 4.5L22.5 7.65L29.475 4.95C29.975 4.75 30.4375 4.8065 30.8625 5.1195C31.2875 5.4325 31.5 5.851 31.5 6.375V27.375C31.5 27.7 31.4065 27.9875 31.2195 28.2375C31.0325 28.4875 30.776 28.675 30.45 28.8L22.5 31.5ZM21 27.825V10.275L15 8.175V25.725L21 27.825ZM24 27.825L28.5 26.325V8.55L24 10.275V27.825ZM7.5 27.45L12 25.725V8.175L7.5 9.675V27.45Z" fill="#F3F3F3" />
              </svg>

            </Link >
          </ul>
        </div>
        <div className='lg:w-[50%] 2xl:w-[70%] w-full lg:h-[300px] 2xl:h-[450px] md:h-[250px] h-[150px] shadow-lg border-[1px] border-[#AD00FF] bg-gray-300 order-1 lg:order-2' style={{ backgroundImage: 'url("/fotos/ubicacion.png")' }}>
          <picture>
            <Link
              href="https://www.google.com.ar/maps/place/Lo+De+Lucas+Bodegón/@-34.3522961,-58.7967762,17z/data=!3m1!4b1!4m6!3m5!1s0x95bb61b77bef62b9:0x346fd3d5c84c5ebb!8m2!3d-34.3522961!4d-58.7941959!16s%2Fg%2F11c74gtkx6?entry=ttu"
              className='w-full h-full rounded-lg'
            >
              <Image
                src='/fotos/ubicacion.png'
                alt='Ubicación Lo De Lucas'
                width={1100}
                height={1100}
                className='w-full h-full'
                quality={100}
                loading="lazy"
              ></Image>
            </Link>
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Ubi