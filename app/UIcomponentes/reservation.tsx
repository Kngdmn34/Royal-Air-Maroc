//lib
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
//icons
import { Plane } from 'lucide-react';



import React from 'react'

const Reservation = () => {

    return (
        <div className="w-full max-w-96 px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 justify-center rounded-xl bg-blue-900/20 p-1">
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-red-800 text-white shadow-lg'
                                : 'text-green-800 hover:bg-white/[0.12] hover:text-white'
                        )
                    }><Plane />Book a flight</Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-red-800 text-white shadow-lg'
                                : 'text-green-800 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>Tab 2</Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-900 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-red-800 text-white shadow-lg'
                                : 'text-green-800 hover:bg-white/[0.12] hover:text-white'
                        )
                    }>Tab 3</Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel className='rounded-xl bg-gray-400 p-3'>Content 1</Tab.Panel>
                    <Tab.Panel className='rounded-xl bg-gray-400 p-3'>Content 2</Tab.Panel>
                    <Tab.Panel className='rounded-xl bg-gray-400 p-3'>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Reservation 