import Image from 'next/image'
import React from 'react';
import Logo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'

const nav = () => {
    return (
        <nav className='fixed  py-5 backdrop-blur-xl w-full z-20 top-0 border-b shadow-lg shadow-red-800'>
            <div className='relative w-full flex justify-center items-center'>
                <Image className='absolute p-2  shadow-md shadow-green-800 bg-gray-50 -bottom-10 ' src={Logo} alt='logo' height={100} width={100} />

            </div>
        </nav>
    )
}

export default nav