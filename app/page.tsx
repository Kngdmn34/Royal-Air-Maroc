'use client'


//UI components
import Nav from '@/app/UIcomponentes/nav'

import { Separator } from '@/components/ui/separator'
//Lib

import Principe from '@/app/welcome/principe'
import Reservation from './UIcomponentes/reservation'
import { useEffect } from 'react'

//image
import Header from '@/public/images/newheader.jpg';
import Image from 'next/image'
import Airplane from '@/public/images/avioncut.png'
import ReservationBackground from '@/app/UIcomponentes/reservationbackground'
import template from '@/public/images/template.png'
import OneWorld from '@/public/images/Oneworld.png'
import Logo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'
//icons
import { ChevronLeft } from 'lucide-react'
import Oneworld from './UIcomponentes/oneworld'


export default function Home() {


  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll()
      }
    )()
  }, [])


  return (
    <>
      <main className='bg-gray-50' >
        <div className=''>
          <Nav />
        </div>
        <header data-aos="fade-up" className='relative flex justify-center w-full pb-6    mt-6 '>

          <Image className='shadow-xl rounded-xl  ' quality={60} src={Header} alt='header' placeholder='blur' width={1000} />
          <h1 data-aos='fade-right' className='absolute text-6xl mb-16 font-extralight right-0 bottom-0 mr-48 shadow-sm'>A Walk Above The Clouds</h1>
          <Image data-aos='fade-right' data-aos-delay='2000' className='absolute right-0 mr-44 mt-20 ' width={300} src={Airplane} quality={100} alt='airplane' placeholder='blur' />

          <div data-aos='fade-right' className='absolute left-0 bottom-0 ml-72 mb-64  bg-green-900 border-2 rounded-xl   w-44 h-32 shadow-xl'>

            <Image className='absolute inset-0 pt-2 ' src={Logo} alt='logo' width={300} />
          </div>

        </header>

        <div className='fixed max-w-[50%] mx-auto p-6 '><Separator /></div>
        <div className=' pt-6 text-center mt-11  mx-auto'>
          <h2 data-aos="fade-up-right" className='text-left p-11 text-extralight  text-5xl ml-11 tracking-widest'>Start Your Next Trip</h2>
          <div className='grid grid-cols-3 pt-6 mt-2  mx-auto rounded-lg'>
            <span data-aos="zoom-out" className='col-span-2'><Principe /></span>
            <div data-aos="fade-down" data-aos-delay="500" className='grid grid-rows-3 gap-y-4 p-4 rounded-xl overflow-hidden'>
              <span className='block border border-black  p-2 ml-6 rounded-xl text-end pt-28'>
                <div className='text-black' >
                  Next Update
                </div>
                <span className='flex cursor-pointer bg-black rounded-lg text-white w-full p-6 hover:decoration-solid bg-opacity-30'>
                  Travel Requirements <ChevronLeft />
                </span>
              </span>
              <span className='border border-black p-2 ml-6 rounded-xl text-end  pt-28'>
                <div className='text-black'>
                  Next Update
                </div><span className='flex cursor-pointer bg-black rounded-lg text-white w-full p-6 hover:decoration-solid bg-opacity-30 '>Activities <ChevronLeft className='' /></span></span>
              <span className='border border-black  p-2 ml-6 rounded-xl text-end pt-28'>
                <div className='text-black'>
                  Next Update
                </div><span className='flex cursor-pointer bg-black rounded-lg text-white w-full p-6 hover:decoration-solid bg-opacity-30  '>DUTY FREE <ChevronLeft /></span></span>
            </div>
          </div>
        </div >

        <div id='scrollToSection' className='relative  rounded-lg pt-6 mt-6 w-full h-full mb-6'>

          <div className='relative z-10 w-full h-full p-6 mt-11'>
            <Image data-aos="fade-up" className='absolute ' placeholder='blur' src={template} alt='bg' />
            <Reservation data-aos="fade-right" />
          </div>
        </div>
        <div data-aos="flip-up" data-aos-delay='200' className='max-w-[50%] mx-auto p-2 '>

          <Oneworld />


        </div>


        <div className=''>

        </div>


      </main >



    </>
  )
}
