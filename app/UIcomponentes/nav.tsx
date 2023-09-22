'use client'

import Logo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'
import { useState, useRef } from 'react'
//
import Image from 'next/image'
import { redirect, } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



import { AlertCircle, Search, Menu, AlignRight } from 'lucide-react';

interface pagesMenuProps {
    label: string
}

const Nav = () => {

    const pagesMenu: Array<pagesMenuProps> = [
        {
            label: 'Home'
        },
        {
            label: 'Contact'
        },
        {
            label: 'Services'
        }
    ]

    const [navbar, setNavbar] = useState(false)
    const [open, setOpen] = useState(false);
    const sheetRef = useRef(null);


    return (
        <nav className=" fixed top-0 left-0 w-full backdrop-blur-md bg-opacity-50 p-2 border-b-8 outline-double outline-green-900 border-red-800 z-10">
            <div className="container relative mx-auto flex justify-between items-center">


                <div className='hidden md:flex bg-yellow-100 w-33  p-2 rounded-md shadow-lg animate-pulse'>

                    <AlertCircle className='mr-4 animate-ping text-red-600 duration-1000' />
                    <span className='ml-2 border-l-4 border-black px-2 '>ALERTS</span>

                </div>

                <div className="flex justify-center items-center sm:ml-24">
                    <Image src={Logo} alt="Logo" width={100} className='cursor-pointer drop-shadow-lg' onClick={() => redirect('/')} />
                </div>
                <div className='md:hidden'>
                    <button onClick={() => setOpen(!open)} className='py-3 text-gray-400 shadow-2xl'>
                        {navbar ? <Menu /> : <Menu />}
                    </button>

                </div>
                <div className={`${navbar ? 'block' : 'hidden'}`}>
                    <Sheet open={open} onOpenChange={setOpen} >

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className=' pt-3'><div className='relative' ><Input className='relative shadow-md' placeholder='Search' /><Search className='absolute top-0 mt-2 mr-2 z-10 right-0 text-neutral-500 cursor-pointer' /></div></SheetTitle>
                                <SheetDescription ref={sheetRef}>
                                    {pagesMenu.map((item, id) => {
                                        return (<Link
                                            className={'block border-b border-black p-3 mt-2 bg-white max-w-96'}
                                            key={id}
                                            href={'/'}
                                            onClick={() => setNavbar(!navbar)}
                                        >
                                            {item.label}
                                        </Link>)
                                    })}
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>



                </div>


                <div className="hidden md:flex space-x-4 bg-gray-50 bg-opacity-80 shadow-lg ml-6 rounded-md backdrop-blur-md p-2 font-semibold ">
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