'use client'
//UI components
import Nav from '@/app/UIcomponentes/nav'
//Lib
import Principe from '@/app/welcome/principe'
import Reservation from './UIcomponentes/reservation'

export default function Home() {
  return (
    <main className='bg-gray-50' >
      <div className=''>
        <Nav />
      </div>
      <div className='pt-32 text-center mt-2 max-w-[98%] mx-auto'>
        <Principe />

      </div>
      <div className='w-full'>
        waves
      </div>
      <div className='max-w-[50%] mx-auto pt-11'>
        <Reservation />
      </div>
    </main>
  )
}
