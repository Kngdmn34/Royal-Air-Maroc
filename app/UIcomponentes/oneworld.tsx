import OneWorld from '@/public/images/maxresdefaultsit.png'
import Image from 'next/image'
import Logo from '@/public/images/Oneworld.png'
import Ramlogo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'

const Oneworld = () => {
    return (
        <div className='relative w-full m-2 p-2 '>

            <Image alt='heart' className='relative rounded-xl drop-shadow-2xl' src={OneWorld} loading='lazy' width={900} height={700} quality={100} placeholder='blur' />
            <div >
                <Image alt='logo' src={Logo} className='absolute inset-0 md:mr-36 mt-3 md:mt-16 md:border-r border-white' loading='lazy' quality={100} width={200} height={70} placeholder='blur' />
                <Image alt='ramlogo' src={Ramlogo} className='absolute mt-3 top-0 right-0 md:inset-0 md:ml-48 md:mt-16' width={200} height={70} loading='lazy' placeholder='blur' />
            </div>


        </div>

    )
}
export default Oneworld