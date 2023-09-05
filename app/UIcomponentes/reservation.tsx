//lib
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
//icons
import { Plane } from 'lucide-react';

//bg




import React from 'react'

const Reservation = () => {

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
                        <Tab.Panel className='rounded-xl bg-gray-400 p-3'>
                            <div className='flex justify-between p-6'>
                                <input className='p-2 w-1/3 mr-2 border border-black rounded-lg ring-2 ring-green-900' placeholder='From' />
                                <input className='p-2 w-1/3 ml-2 border border-black rounded-lg ring-2 ring-red-900' placeholder='To' />
                                <button>Search</button>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className='rounded-xl bg-gray-400 p-3'>Content 2</Tab.Panel>
                        <Tab.Panel className='rounded-xl bg-gray-400 p-3'>Content 3</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>

    )
}

export default Reservation 