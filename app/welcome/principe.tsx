
//plugins
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//icons
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Airplane from '@/public/images/avioncut.png'
import axios from 'axios'

// cities images 
const carouselData = [
    {
        id: 1,
        backgroundCity: '/images/casablanca.jpg',
        prImage: '/images/casa.png',
        cityName: 'CASABLANCA',
        cityPrice: `DESCOVER`
    },
    {
        id: 2,
        backgroundCity: '/images/dubaiuae.jpg',
        prImage: '/images/dubainew.png',
        cityName: 'DUBAI',
        cityPrice: `FROM ${'500'} $`
    },
    {
        id: 3,
        backgroundCity: '/images/france.jpg',
        prImage: '/images/parisnew.png',
        cityName: 'PARIS',
        cityPrice: `FROM ${'300'} $`
    },
    {
        id: 4,
        backgroundCity: '/images/bangkokw.jpg',
        prImage: '/images/bangoknew.png',
        cityName: 'BANGKOK',
        cityPrice: `FROM ${'799'} $`
    }
]

const imageCount = carouselData.length;
const autoSlideInterval = 5000;



export default function Principe() {

    //fetching price 


    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const [currentImage, setCurrentImage] = useState(0);
    const [textContent, setTextContent] = useState(carouselData[0]);
    const [priceCity, setPriceCity] = useState(carouselData[0])


    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageCount);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + imageCount) % imageCount);
    };

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0', '200%']);

    const imageSpring = useSpring(0);


    useEffect(() => {
        imageSpring.set(currentImage);
    }, [currentImage, imageSpring]);


    useEffect(() => {
        setTextContent(carouselData[currentImage]);
    }, [currentImage]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage()
        }, autoSlideInterval);

        return () => { clearInterval(intervalId) };
    }, [currentImage])

    return (
        <>
            <div

                className=" relative flex justify-center items-center min-h-screen "
                ref={ref}
            >

                <AnimatePresence mode='wait'>

                    <motion.h1

                        style={{ y: textY }}
                        className="font-bold drop-shadow-md text-white text-5xl md:text-9xl relative z-10"
                        key={currentImage}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >

                        {textContent.cityName}

                        <span className="text-xl md:text-2xl flex border-l p-2">{textContent.cityPrice}</span>
                    </motion.h1>
                </AnimatePresence>
                <motion.div
                    className="absolute inset-0 z-0 rounded-xl "
                    style={{
                        backgroundImage: `url(${carouselData[currentImage].backgroundCity})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        y: backgroundY,
                    }}
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image data-aos='fade-right' data-aos-delay='2000' className='hidden md:flex absolute drop-shadow-2xl -right-2 md:right-0  mt-6 md:mb-11 ' width={200} src={Airplane} quality={100} alt='airplane' placeholder='blur' />
                </motion.div>

                <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                        backgroundImage: `url(${carouselData[currentImage].prImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />


            </div>


        </>
    );
}