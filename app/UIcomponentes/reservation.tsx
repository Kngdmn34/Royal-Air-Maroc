
import axios from 'axios';
import React, { useState } from 'react'
import { z } from 'zod'
//lib
import { Tab } from '@headlessui/react';
import classNames from 'classnames';


//icons
import { Plane } from 'lucide-react';

const FormValues = z.object({
    destination: z.string().max(4),
    origin: z.string().max(4),
    date: z.string().max(9, { message: 'Ex : 20201124' }).transform((dateStr) => new Date(dateStr).toString())




})
type FormValuesType = z.infer<typeof FormValues>;

const Reservation = () => {

    let parseString = require('xml2js').parseString;

    const [flightDetails, setFlightDetails] = useState(null)

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
            url: `https://timetable-lookup.p.rapidapi.com/TimeTable/${origin}/${destination}/${date}/`,
            params: { Airline: 'ram' },
            headers: {
                'X-RapidAPI-Key': `9283bf4c77msh2ba49837fb248e7p1568b5jsn28ac77f7ca6c`,
                'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
            },
        };

        try {
            const response = await axios.request(options);
            parseString(response.data, (err: any, result: any) => {
                if (err) {
                    console.error('Error parsing XML:', err)
                    return;
                }
                const flightDetails = result.OTA_AirDetailsRS.FlightDetails[0];
                console.log('Flight Details:', flightDetails);
            })
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="max-w-[50%] mx-auto border-4 border-gray-50 backdrop-blur-lg overflow px-6 py-16 sm:px-0 rounded-xl shadow-lg">
            <div className='p-11'>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 justify-center bg-blue-900/20 p-1 rounded-xl">
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-red-800 text-white shadow-lg'
                                    : 'text-green-800 hover:bg-white/[0.12] hover:text-white'
                            )
                        }>Book a Flight</Tab>
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-red-800 text-white shadow-lg'
                                    : 'text-green-800 hover:bg-white/[0.12] hover:text-white'
                            )
                        }>Check-in</Tab>
                        <Tab className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-red-800 text-white shadow-lg'
                                    : 'text-green-800 hover:bg-white/[0.12] hover:text-white'
                            )
                        }>Flight Status</Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel className='rounded-xl bg-gray-50 p-3'>
                            <div className='flex justify-between p-16 md:p-11'>
                                <form onSubmit={handleSubmit} >
                                    <div className='flex justify-between'>
                                        <input type='text' value={formValue.origin} onChange={handleOriginChange} className='p-2 w-[50%] md:w-1/3 mr-2 border border-black rounded-lg ring-2 ring-green-900' placeholder='From' />
                                        <input type='text' value={formValue.destination} onChange={handleDestinationChange} className='p-2 w-[50%] md:w-1/3 ml-2 border border-black rounded-lg ring-2 ring-red-900' placeholder='To' />
                                        <input
                                            type="text"
                                            value={formValue.date}
                                            onChange={handleDateChange}
                                            className="p-2 w-[60%] md:w-1/3 ml-6 border border-black rounded-lg ring-2 ring-green-900"
                                            placeholder="YYYYMMDD"

                                            title="Please enter a date in the format YYYY-MM-DD"
                                        />

                                        <button type='submit' className='flex p-3 ml-6 rounded-lg hover:opacity-60 border border-black bg-red-900 text-white '><Plane className='mr-2' />Search</button>
                                    </div>
                                </form>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className='rounded-xl bg-gray-50 p-3'>Content 2</Tab.Panel>
                        <Tab.Panel className='rounded-xl bg-gray-50 p-3'>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>

    )
}

export default Reservation 