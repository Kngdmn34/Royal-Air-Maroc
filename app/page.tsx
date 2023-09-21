'use client'


//UI components
import Nav from '@/app/UIcomponentes/nav';
import NewsLetter from './UIcomponentes/NewsLetter';

import { Separator } from '@/components/ui/separator'
//Lib

import Principe from '@/app/welcome/principe'
import Reservation from './UIcomponentes/reservation'
import { useEffect } from 'react'

//image
import Header from '@/public/images/headerimage.jpg';
import Image from 'next/image'
import Airplane from '@/public/images/avioncut.png'

import template from '@/public/images/template.png'

import Logo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'
import HeaderTemplate from '@/public/images/headerbg.jpg'
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
        <header className='relative flex justify-center w-full pb-6 mt-6 '>
          <Image className=' shadow-xl rounded-xl w-full blur-sm brightness-50' quality={40} src={Header} alt='background' loading='lazy' placeholder='blur' width={400} height={100} />
          <div id='scrollToSection' className='absolute  rounded-lg  mt-6 max-w-48  mb-6'>

            <div className=' max-w-48 mt-28'>

              <Reservation data-aos="fade-right" />
            </div>
          </div>

        </header>


        <div className='relative pt-6 text-center mt-11  mx-auto'>
          <Image data-aos="fade-up" className='absolute w-full ' placeholder='blur' src={template} alt='bg' />
          <h2 data-aos="fade-up-right" className=' text-left p-11 text-extralight  text-5xl ml-11 tracking-widest'>Start Your Next Trip</h2>
          <div className=' grid grid-cols-3 pt-6 mt-2  mx-auto rounded-lg'>
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


        <div data-aos="flip-up" data-aos-delay='200' className='max-w-[50%] mx-auto p-2 mt-28  '>

          <Oneworld />


        </div>


        <div className='mt-44'>
          <NewsLetter />
        </div>


      </main >



    </>
  )
}
