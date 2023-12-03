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
import { ChevronLeft, CarFront, Bed, Luggage, Utensils } from 'lucide-react'
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
      <main className='' >
        <div className=''>
          <Nav />
        </div>
        <div className='relative p-3  w-full overflow-hidden h-screen '>
          <span data-aos="zoom-out" className='relative '>
            <Principe />
          </span>
        </div>
        <br />


        <hr className='w-full relative flex  border-b-8 outline-double outline-green-900 border-red-800' />
        <br />
        <h1 className='flex text-left cursor-default p-6 text-5xl mt-11'>Start Your Next Trip</h1>

        <div className=' flex justify-center text-left  w-full pb-6 mt-6 '>
          <Image data-aos="fade-up" className='  h-screen md:min-h-screen ' placeholder='blur' src={template} alt='bg' />



          <div className='absolute   rounded-lg  mt-6 max-w-48  mb-6'>


            <div className=' max-w-48 z-10 mt-28 '>

              <Reservation data-aos="fade-right" />
            </div>
          </div>

        </div>



        <div className='w-[96%] mx-auto overflow-hidden  '>
          <Image style={{ transform: `rotate(180deg)` }} data-aos="fade-up" className='absolute   h-44 md:hidden' placeholder='blur' src={template} alt='bg' />
          <h1 className='relative pt-3 cursor-default font-semibold text-xl tracking-wider flex justify-center mx-auto text-center md:hidden'>Our side Services </h1>
          <div className='absolute  flex flex-row w-[50%] px-16  mx-auto md:hidden justify-between space-x-5 items-center    rounded-md p-1 align-middle mt-3 '>

            <span className=' cursor-pointer whitespace-nowrap   '><CarFront size={50} className='text-red-900/80' /><span className='font-semibold text-center text-gray-900/90'>Car Rent</span></span>
            <span className=' cursor-pointer  '><Bed size={50} className='text-red-900/80' /><span className='font-semibold text-gray-900/90'>Hotels</span></span>
            <span className='cursor-pointer '><Luggage size={50} className='text-red-900/80' /><span className='font-semibold text-center text-gray-900/90'>Luggage</span></span>
            <span className='cursor-pointer  '><Utensils size={50} className='text-red-900/80' /><span className='font-semibold text-gray-900/90'>Meals</span></span>
          </div>
        </div>

        <div className='md:max-w-[50%] md:mx-auto mt-48  p-2 md:mt-28  '>

          <Oneworld />


        </div>


        <div className='mt-44'>
          <NewsLetter />
        </div>


      </main >



    </>
  )
}
