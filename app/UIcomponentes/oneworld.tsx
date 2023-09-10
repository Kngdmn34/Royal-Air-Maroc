import OneWorld from '@/public/images/maxresdefaultsit.png'
import Image from 'next/image'
import Logo from '@/public/images/Oneworld.png'
import Ramlogo from '@/public/images/Logo_Royal_Air_Maroc_2020.png'

const Oneworld = () => {
    return (
        <div className='relative w-full m-2 '>

            <Image alt='heart' className='relative  ml-6 rounded-xl' src={OneWorld} loading='lazy' width={900} height={700} quality={100} />
            <div >
                <Image alt='logo' src={Logo} className='absolute inset-0 mr-36 mt-16 border-r border-white' loading='lazy' quality={100} width={200} height={70} />
                <Image alt='ramlogo' src={Ramlogo} className='absolute inset-0 ml-48 mt-16' width={200} height={70} loading='lazy' />
            </div>


        </div>

    )
}
export default Oneworld