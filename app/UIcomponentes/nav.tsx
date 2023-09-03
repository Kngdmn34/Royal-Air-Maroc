import Logo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'
import Image from 'next/image'
import { redirect } from 'next/navigation';

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0  w-full backdrop-blur-md bg-opacity-50 p-4 border-b-8 outline-double outline-green-700 border-red-500 z-10">
            <div className="container   mx-auto flex justify-between items-center">
                <div className=''>Notification</div>
                <div className="ml-32 flex  items-center ">
                    <Image src={Logo} alt="Logo" width={150} className='cursor-pointer ' onClick={() => redirect('/')} />
                </div>

                {/* Navigation Bmt-3uttons */}
                <div className="space-x-4">
                    <button className="text-semibold shadow-sm">Home</button>
                    <button className="text-semibold shadow-md">About</button>
                    <button className="text-semibold shadow-md">Services</button>
                    <button className="text-semibold shadow-md">Contact</button>
                </div>
            </div>
        </nav>
    );
}

export default Nav