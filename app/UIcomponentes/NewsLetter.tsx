import React from 'react';
import Image from 'next/image';
import NewsBg from '@/public/images/newsletter_back.jpeg';
import NewsBgPhone from '@/public/images/newsletter-bck_fr.png'

const NewsLetter = () => {
    return (
        <div className='w-full flex justify-center  items-center'>
            <Image alt='bgnews' className='relative rounded-xl' src={NewsBg} width={1300} height={1200} style={{ backgroundSize: 'cover' }} />

            <span className='absolute  z-10 text-3xl font-semibold drop-shadow-xl text-center'>Stay On Touch With Our Offers  </span>
            <span className='absolute mt-24 '><input placeholder='Enter Your Email' type='email' className='p-2 border-2  rounded-md ' /> <button className='border text-white bg-red-400 p-2'>Subscribe</button> </span>

            <Image alt='bgphone' className='absolute left-0' src={NewsBgPhone} width={400} height={200} />



        </div>
    )
}

export default NewsLetter