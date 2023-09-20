
import axios from 'axios';
import React, { useState } from 'react'
import { z } from 'zod'
//lib
import { Tab } from '@headlessui/react';
import { format } from "date-fns"
import classNames from 'classnames';
import Model from '@/app/UIcomponentes/model'
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"


//icons
import { PlaneTakeoff, ChevronDown, Users, Plane, PlaneLanding, ChevronLeft, CarFront, Bed, Utensils } from 'lucide-react';


interface Flight {
    depart_date: string;
    origin: string;
    destination: string;
    value: number;
    duration: number;
    number_of_changes: number;
}

interface FlightResultsProps {
    flights: Flight[]
    setData: React.Dispatch<React.SetStateAction<Flight[]>>
}

const FlightResults: React.FC<FlightResultsProps> = ({ flights, setData }) => {




    return (
        <Tab.Panel>
            <div className="rounded-xl bg-gray-50 p-3">
                <button className='flex text-end p-2' onClick={() => setData([])}><ChevronLeft /></button>
                <ul className=' p-6 mr-6'>
                    {flights.map((flight, index) => (
                        <li key={index}>
                            <div className='flex justify-between p-6  bg-white rounded-xl  border-3 border-gray-500 shadow-md mt-4'>
                                <div className='grid grid-cols-4 gap-4'>
                                    <div className='border-l-2 border-black p-2 pt-2'><span className='flex py-2 ml-2'><PlaneTakeoff /></span> <span className='font-semibold'>{flight.origin} </span>  <span className='flex py-2 ml-2'><PlaneLanding /></span> <span className='font-semibold'>{flight.destination}</span> </div>
                                    <div className='grid border-l-2 items-center text-center border-black p-2 pt-2'>{flight.number_of_changes == 1 ? <span className='pr-2 p-2 border rounded-lg shadow-lg border-black'>One Stop</span> : <span className='pr-2 p-2 border rounded-lg shadow-lg border-black'>{flight.number_of_changes == 0 ? <span className='pr-2 p-2  rounded-lg '>Direct</span> : <span >Stops : {flight.number_of_changes}</span>}</span>}  </div>
                                    <div className='grid border-l-2 items-center border-black mr-2 pl-2 '> <span className='font-semibold'>{flight.value}<span className='font-light pl-2'>MAD</span></span> </div>
                                    <div className='grid border-l-2 items-center border-black  pl-2'><span>Flight Date: <span className='font-semibold'>{flight.depart_date}</span></span><span>Duration: {Math.round(flight.duration / 60)} hours</span></div>


                                </div>
                            </div>




                        </li>
                    ))}
                </ul>

            </div>
        </Tab.Panel>
    );
};


const FormValues = z.object({
    destination: z.string().max(4),
    origin: z.string().max(4),
    date: z.string().max(11, { message: 'Ex : 2020-11-24' }).transform((dateStr) => new Date(dateStr).toString())




})
type FormValuesType = z.infer<typeof FormValues>;

const Reservation = () => {


    const [data, setData] = useState<Flight[]>([])
    const [formValue, setFormValues] = useState<FormValuesType>({
        destination: '',
        origin: '',
        date: ''
    })



    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        try {
            FormValues.parse({
                ...formValue,
                date: newValue

            });
            setFormValues({
                ...formValue,
                date: newValue
            })


        } catch (error) {
            console.log('Date Validation Error', error)
        }



    }



    const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;


        try {
            FormValues.parse({
                ...formValue,
                destination: newValue
            });
            setFormValues({
                ...formValue,
                destination: newValue,
            })

        } catch (error) {
            console.log('Validation Error', error)
        }
    }

    const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        try {

            FormValues.parse({
                ...formValue,
                origin: newValue
            }),
                setFormValues({
                    ...formValue,
                    origin: newValue
                })

        } catch (error) {
            console.log('Validation Error', error)
        }
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            FormValues.parse(formValue)
        } catch (error) {
            console.log('Validation Error', error)
            return;
        }

        const { origin, destination, date } = formValue;


        const options = {
            method: 'GET',
            url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/month-matrix',
            params: {
                origin: `${origin}`,
                destination: `${destination}`,
                show_to_affiliates: 'true',
                month: `${date}`,
                currency: 'mad'
            },
            headers: {
                'X-Access-Token': '29cbc88a46cfba39259a310d25c23cc1',
                'X-RapidAPI-Key': '7848e79b30msha8060f955aa9f79p1c8459jsn1789c3dbe62b',
                'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data.data)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="  border-4 border-gray-200 backdrop-blur-2xl overflow p-6 sm:px-0 rounded-xl shadow-xl">
            <div data-aos='fade-left' data-aos-delay='1200' className='text-6xl text-white font-light p-2 ml-11 '>Book Your Flight </div><span className='flex text-white justify-end mr-2 p-4'><Model /></span>
            <div className=' p-2'>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 justify-center bg-gray-200 p-2 rounded-xl">
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-red-800 text-white shadow-lg'
                                    : 'text-black hover:bg-white/[0.12] hover:text-emerald-900'
                            )
                        }>Book a Flight</Tab>
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-red-800 text-white shadow-lg'
                                    : 'text-black hover:bg-white/[0.12] hover:text-emerald-900'
                            )
                        }>Check-in</Tab>
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-red-800 text-white shadow-lg'
                                    : 'text-black hover:bg-white/[0.12] hover:text-emerald-900'
                            )
                        }>Flight Status</Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">


                        {data.length > 0 ? (
                            <FlightResults flights={data} setData={setData} />
                        )
                            :
                            <Tab.Panel className='rounded-md bg-gray-50 p-3 backdrop-blur-lg shadow-md'>
                                <div className='flex flex-row justify-between p-6 '>
                                    <span className='px-3 text-2xl md:text-4xl font-extralight'>One-Way
                                        <DropdownMenu>
                                            <DropdownMenuTrigger><ChevronDown /></DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>One Way</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem disabled={true}>Round Trip</DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu></span>
                                    <span className='pt-2'>
                                        <Popover>
                                            <PopoverTrigger><Users className='hover:border hover:border-black ' /></PopoverTrigger>
                                            <PopoverContent className='p-2 '>
                                                <span className='flex flex-row p-2  text-left align-bottom '> Adult <Input className=' p-2 ml-6 ' type='number' placeholder='Adults' /></span>
                                                <span className='flex flex-row p-2  text-left align-bottom'> Enfants <Input className=' p-2 ml-3 ' type='number' disabled={true} /></span>

                                            </PopoverContent>
                                        </Popover>
                                    </span>
                                    <span className='px-3 text-2xl  font-extralight'>Eco- Class
                                        <DropdownMenu>
                                            <DropdownMenuTrigger><ChevronDown className='pt-2' /></DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuLabel>Economic Class</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem disabled={true}>First Class</DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu></span>
                                </div>
                                <div className='flex  pt-6'>

                                    <form onSubmit={handleSubmit} >
                                        <div className='flex flex-row'>

                                            <input type='text' value={formValue.origin} onChange={handleOriginChange} className='p-2  mr-2 border border-black rounded-md ' placeholder='From' />
                                            <input type='text' value={formValue.destination} onChange={handleDestinationChange} className='p-2   ml-2 border border-black rounded-md ' placeholder='Destination' />
                                            <input
                                                type="number"
                                                value={formValue.date}
                                                onChange={handleDateChange}
                                                className="p-2 w-[60%] md:w-1/3 ml-6 border border-black rounded-md"
                                                placeholder="YYYY-MM-DD"
                                                pattern='\d{4}-\d{1,2}-\d{1,2}'

                                                title="Please enter a date in the format YYYY-MM-DD"
                                            />

                                            <button type='submit' className='flex p-3 ml-6 rounded-lg hover:opacity-60 border border-black bg-red-800 text-white '><PlaneTakeoff className='mr-2' />Search</button>
                                        </div>
                                    </form>
                                </div>
                            </Tab.Panel>
                        }
                        <Tab.Panel className='rounded-xl text-center bg-gray-50 p-3'>Next Update</Tab.Panel>
                        <Tab.Panel className='rounded-xl text-center bg-gray-50 p-3'>Next Update</Tab.Panel>
                    </Tab.Panels >
                </Tab.Group >
            </div >
            <div className='max-w-[50%] mx-auto grid grid-cols-3 gap-5 text-white text-center items-center p-2 cursor-pointer '>
                <span data-aos="fade-right" className=' border-r-2 p-6 border-neutral-500  '><CarFront size={50} className='ml-4' /><span className='mr-11'>Car Rent</span></span>
                <span data-aos="fade-down" className=' p-6 pl-11 '><Bed size={50} className='ml-4' /><span className='mr-11'>Hotels</span></span>
                <span data-aos="fade-left" className=' border-l-2 p-6 pl-11 border-neutral-500 '><Utensils size={50} className='ml-4' /><span className='mr-11'>Meals</span></span>
            </div>
        </div >

    )
}

export default Reservation 