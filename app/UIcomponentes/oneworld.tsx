import OneWorld from '@/public/images/maxresdefaultsit.png'
import Image from 'next/image'
import Logo from '@/public/images/Oneworld.png'
import Ramlogo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'

const Oneworld = () => {
    return (
        <div className='relative w-full h-[72%]  m-2 p-2 '>

            <Image alt='heart' className='relative rounded-xl flex flex-row space-x-10 drop-shadow-2xl' src={OneWorld} loading='lazy' width={900} height={900} quality={100} placeholder='blur' />
            <div >
                <Image alt='logo' src={Logo} className='absolute top-3 lg:top-10   border-white' loading='lazy' quality={100} width={150} height={70} placeholder='blur' />
                <Image alt='ramlogo' src={Ramlogo} className='absolute top-3 lg:top-10 left-24 ml-6 ' width={150} height={70} loading='lazy' placeholder='blur' />
            </div>


        </div>

    )
}
export default Oneworld