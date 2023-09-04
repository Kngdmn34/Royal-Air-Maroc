'use client'
//UI components
import Nav from '@/app/UIcomponentes/nav'
import Spacer from '@/app/UIcomponentes/spacer'
import { Separator } from '@/components/ui/separator'
//Lib
import Principe from '@/app/welcome/principe'
import Reservation from './UIcomponentes/reservation'
//image
import Header from '@/public/images/headerram.png';
import Image from 'next/image'
//icons
import { ChevronLeft } from 'lucide-react'

export default function Home() {
  return (
    <>
      <main className='bg-gray-50' >
        <div className=''>
          <Nav />
        </div>
        <header className='w-full p-46 rounded-lg border-b-4 border-green-700 pb-4'>
          <Image src={Header} alt='header' className='' />
        </header>
        <div className='fixed max-w-[50%] mx-auto p-6'><Separator /></div>
        <div className=' pt-6 text-center mt-2  mx-auto'>
          <h2 className='text-left p-11 text-extralight  text-5xl ml-11 tracking-widest'>Start Your Next Trip</h2>
          <div className='grid grid-cols-3 pt-6 mt-2  mx-auto'>
            <span className='col-span-2'><Principe /></span>
            <div className='grid grid-rows-3 gap-y-4 p-4 rounded-xl'>
              <span className='block border border-black  p-2 ml-6 rounded-xl text-end pt-28 '><span className='flex cursor-pointer bg-black rounded-lg text-white w-full p-6 hover:decoration-solid bg-opacity-30 '>Travel Requirments <ChevronLeft /></span></span>
              <span className='border border-black p-2 ml-6 rounded-xl text-end  pt-28'><span className='flex cursor-pointer bg-black rounded-lg text-white w-full p-6 hover:decoration-solid bg-opacity-30 '>Activities <ChevronLeft className='' /></span></span>
              <span className='border border-black  p-2 ml-6 rounded-xl text-end pt-28'><span className='flex cursor-pointer bg-black rounded-lg text-white w-full p-6 hover:decoration-solid bg-opacity-30  '>DUTY FREE <ChevronLeft /></span></span>
            </div>
          </div>
        </div >


        <div className=''>

        </div>

        <div className='max-w-[50%] mx-auto  pt-6'>
          <Reservation />
        </div>
      </main >



    </>
  )
}
