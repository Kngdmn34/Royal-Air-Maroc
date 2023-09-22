import React from 'react';
import Image from 'next/image';
import NewsBg from '@/public/images/newsletter_back.jpeg';
import NewsBgPhone from '@/public/images/newsletter-bck_fr.png'

const NewsLetter = () => {
    return (
        <div className='w-full flex justify-center  items-center'>
            <Image alt='bgnews' className='relative w-full md:mr-3 md:ml-3 md:rounded-xl' src={NewsBg} width={1300} height={1200} style={{ backgroundSize: 'cover' }} />

            <span className='absolute mb-11 z-10 text-xl md:text-3xl font-semibold drop-shadow-xl text-center'>Stay On Touch With Our Offers  </span>
            <span className='absolute mt-6 pt-2 md:mt-24 '><input placeholder='Enter Your Email' type='email' className='p-2 border-2  rounded-md ' /> <button className='border text-white bg-red-400 p-2 hover:bg-red-500 transition-colors'>Subscribe</button> </span>

            <Image alt='bgphone' className='hidden md:flex absolute left-0' src={NewsBgPhone} width={400} height={200} />



        </div>
    )
}

export default NewsLetter