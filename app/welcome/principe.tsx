//plugins
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

//icons
import { ChevronRight, ChevronLeft } from 'lucide-react'

// cities images with parallax effect ...
const carouselData = [
    {
        id: 1,
        backgroundCity: '/images/casablanca.jpg',
        prImage: '/images/casa.png',
        cityName: 'CASABLANCA',
        cityPrice: `FROM ${'200'} $`
    },
    {
        id: 2,
        backgroundCity: '/images/dubaiuae.jpg',
        prImage: '/images/dubai.png',
        cityName: 'DUBAI',
        cityPrice: `FROM ${'500'} $`
    },
    {
        id: 3,
        backgroundCity: '/images/france.jpg',
        prImage: '/images/paris.png',
        cityName: 'PARIS',
        cityPrice: `FROM ${'300'} $`
    }
]

const imageCount = carouselData.length;
const autoSlideInterval = 5000;

export default function Principe() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const [currentImage, setCurrentImage] = useState(0);
    const [textContent, setTextContent] = useState(carouselData[0]); // Initialize text content with the first item

    // Handle image change on scroll
    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageCount);
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + imageCount) % imageCount);
    };

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0', '100%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0', '200%']);

    const imageSpring = useSpring(0);

    // Update the image spring value when the currentImage changes
    useEffect(() => {
        imageSpring.set(currentImage);
    }, [currentImage, imageSpring]);

    // Update text content when currentImage changes
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
                className="w-full ml-6 h-screen overflow-hidden relative grid place-items-center"
                ref={ref}
            >
                <AnimatePresence mode='wait'>
                    <motion.h1
                        style={{ y: textY }}
                        className="font-bold text-white text-7xl md:text-9xl relative z-10"
                        key={currentImage}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {textContent.cityName}
                        <span className="text-2xl flex border-l p-2">{textContent.cityPrice}</span>
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
                    <button onClick={prevImage} className="text-white absolute top-1/2 left-6 transform -translate-y-1/2">
                        <ChevronLeft />
                    </button>
                    <button onClick={nextImage} className="text-white absolute top-1/2 right-6 transform -translate-y-1/2">
                        <ChevronRight />
                    </button>
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