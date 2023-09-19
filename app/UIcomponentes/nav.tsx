import Logo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'

//
import Image from 'next/image'
import { redirect } from 'next/navigation';
import { AlertCircle, Search } from 'lucide-react';

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-opacity-50 p-2 border-b-8 outline-double outline-green-900 border-red-800 z-10">
            <div className="container relative mx-auto flex justify-between items-center">


                <div className='bg-yellow-100 w-33 flex p-2 rounded-md shadow-lg animate-pulse'>

                    <AlertCircle className='mr-4 animate-ping text-red-600 duration-1000' />
                    <span className='ml-2 border-l-4 border-black px-2 '>ALERTS</span>

                </div>

                <div className="flex justify-center items-center ml-24">
                    <Image src={Logo} alt="Logo" width={150} className='cursor-pointer' onClick={() => redirect('/')} />
                </div>

                {/* Navigation Bmt-3uttons */}
                <div className="flex space-x-4 bg-gray-50 bg-opacity-80 shadow-lg rounded-md backdrop-blur-md p-2 font-semibold ">
                    <button className=" hover:text-neutral-500 transition "><Search /></button>
                    <button className=" border-l  border-gray-400 px-2 tracking-widest hover:text-neutral-500 transition">Services</button>
                    <button className=" border-l border-gray-400 px-2 tracking-widest hover:text-neutral-500 transition">Contact</button>
                    <button className=" border-l border-gray-400 px-2 tracking-widest hover:text-neutral-500 transition">About</button>

                </div>

            </div>
        </nav>
    );
}

export default Nav