import React from 'react'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const FooterItems = () => {
  const arrItems = [
    {
      title: 'Miercoles / Lunes',
      icon: <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6667 5C27.0749 5.00005 27.4689 5.14993 27.774 5.42119C28.079 5.69246 28.2739 6.06625 28.3217 6.47167L28.3333 6.66667V8.33333H31.6667C32.5076 8.33307 33.3176 8.65068 33.9342 9.22249C34.5509 9.79431 34.9286 10.5781 34.9917 11.4167L35 11.6667V31.6667C35.0003 32.5076 34.6827 33.3176 34.1108 33.9342C33.539 34.5509 32.7553 34.9286 31.9167 34.9917L31.6667 35H8.33333C7.49237 35.0003 6.68239 34.6827 6.06575 34.1108C5.44912 33.539 5.07141 32.7553 5.00833 31.9167L5 31.6667V11.6667C4.99973 10.8257 5.31734 10.0157 5.88916 9.39909C6.46098 8.78245 7.24474 8.40474 8.08333 8.34167L8.33333 8.33333H11.6667V6.66667C11.6671 6.24187 11.8298 5.83328 12.1214 5.52439C12.413 5.21549 12.8116 5.02961 13.2357 5.00471C13.6597 4.97982 14.0773 5.11779 14.4031 5.39044C14.7288 5.66309 14.9382 6.04984 14.9883 6.47167L15 6.66667V8.33333H25V6.66667C25 6.22464 25.1756 5.80072 25.4882 5.48816C25.8007 5.17559 26.2246 5 26.6667 5ZM31.6667 20H8.33333V31.6667H31.6667V20ZM31.6667 11.6667H8.33333V16.6667H31.6667V11.6667Z" fill="#F3F3F3" />
      </svg>

    },
    {
      title: '12:00 - 00:30',
      icon: <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0007 33.3335C23.5369 33.3335 26.9283 31.9287 29.4287 29.4283C31.9292 26.9278 33.334 23.5364 33.334 20.0002C33.334 16.4639 31.9292 13.0726 29.4287 10.5721C26.9283 8.07159 23.5369 6.66683 20.0007 6.66683C16.4644 6.66683 13.073 8.07159 10.5726 10.5721C8.07208 13.0726 6.66732 16.4639 6.66732 20.0002C6.66732 23.5364 8.07208 26.9278 10.5726 29.4283C13.073 31.9287 16.4644 33.3335 20.0007 33.3335ZM20.0007 3.3335C22.1894 3.3335 24.3566 3.76459 26.3787 4.60217C28.4008 5.43975 30.2381 6.66741 31.7858 8.21505C33.3334 9.76269 34.5611 11.6 35.3986 13.6221C36.2362 15.6442 36.6673 17.8115 36.6673 20.0002C36.6673 24.4204 34.9114 28.6597 31.7858 31.7853C28.6602 34.9109 24.4209 36.6668 20.0007 36.6668C10.784 36.6668 3.33398 29.1668 3.33398 20.0002C3.33398 15.5799 5.08993 11.3407 8.21554 8.21505C11.3411 5.08944 15.5804 3.3335 20.0007 3.3335ZM20.834 11.6668V20.4168L28.334 24.8668L27.084 26.9168L18.334 21.6668V11.6668H20.834Z" fill="#F3F3F3" />
      </svg>

    },
    {
      title: 'Av. 25 de Mayo 997, Escobár',
      icon: <svg width="30" height="30" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9994 1.66496e-08C10.4861 -0.000175213 7.11478 1.38282 4.61809 3.8484C2.1214 6.31397 0.701148 9.66286 0.666016 13.1672C0.666016 22.2778 12.416 32.4192 12.916 32.8515C13.2179 33.1091 13.6021 33.2506 13.9994 33.2506C14.3966 33.2506 14.7808 33.1091 15.0827 32.8515C15.666 32.4192 27.3327 22.2778 27.3327 13.1672C27.2976 9.66286 25.8773 6.31397 23.3806 3.8484C20.8839 1.38282 17.5126 -0.000175213 13.9994 1.66496e-08ZM13.9994 29.3436C11.216 26.7001 3.99935 19.3684 3.99935 13.1672C3.99935 10.5216 5.05292 7.9844 6.92828 6.1137C8.80365 4.243 11.3472 3.19205 13.9994 3.19205C16.6515 3.19205 19.1951 4.243 21.0704 6.1137C22.9458 7.9844 23.9994 10.5216 23.9994 13.1672C23.9994 19.3185 16.7827 26.7001 13.9994 29.3436Z" fill="#F3F3F3" />
        <path d="M13.9994 6.6499C12.8456 6.6499 11.7178 6.99117 10.7585 7.63055C9.79924 8.26993 9.05157 9.17871 8.61005 10.242C8.16854 11.3052 8.05302 12.4752 8.2781 13.6039C8.50318 14.7327 9.05876 15.7695 9.87456 16.5833C10.6904 17.3971 11.7298 17.9512 12.8613 18.1758C13.9929 18.4003 15.1658 18.2851 16.2317 17.8446C17.2976 17.4042 18.2086 16.6584 18.8496 15.7015C19.4906 14.7446 19.8327 13.6196 19.8327 12.4687C19.8327 10.9255 19.2181 9.44544 18.1241 8.3542C17.0302 7.26296 15.5464 6.6499 13.9994 6.6499ZM13.9994 14.9625C13.5049 14.9625 13.0216 14.8163 12.6104 14.5422C12.1993 14.2682 11.8789 13.8787 11.6897 13.4231C11.5004 12.9674 11.4509 12.466 11.5474 11.9822C11.6439 11.4985 11.882 11.0541 12.2316 10.7054C12.5812 10.3566 13.0267 10.1191 13.5116 10.0229C13.9966 9.92665 14.4992 9.97603 14.9561 10.1648C15.4129 10.3535 15.8033 10.6732 16.078 11.0833C16.3527 11.4934 16.4994 11.9755 16.4994 12.4687C16.4994 13.1301 16.236 13.7644 15.7671 14.2321C15.2983 14.6998 14.6624 14.9625 13.9994 14.9625Z" fill="#F3F3F3" />
      </svg>

    }
  ]

  return (
    <ul className='lg:w-[30%] w-full flex justify-center items-start flex-col gap-4'>
      <label className={`${poppins.className} text-white font-semibold`}>Horarios</label>
      {arrItems.map((item, index) => (
        <li key={index} className='w-full flex flex-row justify-start items-center gap-3'>
          <div className='w-[10%]'>
            {item.icon}
          </div>
          <p className={`${poppins.className} w-[90%] text-white/90 text-sm`}>{item.title}</p>
        </li>
      ))}
    </ul>
  )
}

export default FooterItems