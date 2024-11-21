import React, { useState } from 'react'
import { FaEarthAmericas, FaPlus } from "react-icons/fa6";
import floorIcon from '../assets/icons/floor.svg';
import tableImage1 from '../assets/icons/Table.svg';
import tableImage2 from '../assets/icons/Mid.svg';

import incrementImage from '../assets/icons/plus.svg';
import decrementImage from '../assets/icons/mininum-btn.svg';
import { IoMdMore } from 'react-icons/io';
import { MdTableRestaurant } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
function Home() {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };


    return (
        <div className='w-screen h-screen relative'>

            {/* navbar */}
            <div className="px-10 py-1 border border-b-gray-100 flex justify-center">
                <h1 className='text-2xl font-bold text-gray-800 text-center'>Floor Management</h1>
            </div>

            {/* sidebar */}
            <div className="flex justify-center space-y-6 bg-gray-50 absolute top-0 bottom-0 left-0 w-16 border border-r-2 border-gray-100 z-10">
                <ul>
                    <li className="p-4">
                        <img src={floorIcon} alt="home" className='w-5 h-5' />
                    </li>
                    <li className="p-4">
                        <img src={floorIcon} alt="home" className='w-5 h-5' />
                    </li>

                </ul>

            </div>

            {/* content */}
            <div className="ml-[64px] flex h-[calc(100vh-50px)]">

                {/* table section */}
                <div className="w-1/5 border-r-2 h-full">
                    <div className="py-2 px-4  border-b-2 border-b-gray-100">
                        <h1 className='font-bold text-gray-800'>Tables</h1>
                    </div>

                    {/* table details */}
                    <div>
                        {/* 1.table option */}
                        <div className='flex flex-col space-y-6 border-b-2 border-gray-200 p-4'>
                            {/* option title */}
                            <div className="text-center">
                                <h1 className='font-bold text-gray-800'>Table Options</h1>
                                <p className='text-xs text-gray-700'>Drag and drop your tables</p>
                            </div>

                            {/* table images */}
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <img src={tableImage1} alt="table" className='w-16 h-16' />
                                </div>
                                <div className="w-1/2">
                                    <img src={tableImage2} alt="table" className='w-16 h-16' />
                                </div>
                            </div>

                        </div>

                        {/* 2.table option */}
                        <div className='flex flex-col space-y-6 border-b-2 border-gray-200 p-4'>
                            {/* details title */}
                            <div className="text-center">
                                <h1 className='font-bold text-gray-800'>Table Details</h1>
                            </div>

                            {/* table name input */}

                            <div className="flex gap-8 items-center">
                                <div className='flex flex-col space-y-6'>
                                    <label htmlFor="table-name" className='text-gray-700 text-sm'>Table Name</label>
                                    <label htmlFor="min-covers" className='text-gray-700 text-sm'>Min Covers</label>
                                    <label htmlFor="max-covers" className='text-gray-700 text-sm'>Max Covers</label>
                                    <label htmlFor="Online" className='text-gray-700 text-sm'>Active</label>

                                </div>

                                <div className='flex flex-col space-y-6'>
                                    {/* Table name input */}
                                    <input type="text" id='table-name' className='border border-gray-200 p-2 rounded-md w-24 h-8' />
                                    {/*Min Covers  increament and decreament */}
                                    <div className='flex gap-3 items-center'>
                                        <img src={decrementImage} alt="decrement" />
                                        <p className='font-bold'>1</p>
                                        <img src={incrementImage} alt="decrement" />
                                    </div>

                                    {/* Max Covers  increament and decreament */}
                                    <div className='flex gap-3 items-center'>
                                        <img src={decrementImage} alt="decrement" />
                                        <p className='font-bold'>1</p>
                                        <img src={incrementImage} alt="decrement" />
                                    </div>

                                    {/* Active toggle */}
                                    <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            id="toggle"
                                            type="checkbox"
                                            className="sr-only"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer transition-colors duration-200 ease-in-out">
                                            <div
                                                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out transform ${isChecked ? 'translate-x-5 bg-red-500' : 'bg-gray-400'
                                                    }`}
                                            />
                                        </div>
                                    </label>

                                </div>

                            </div>

                        </div>

                        {/* Advance Settings */}
                        <div className='flex flex-col space-y-6 border-b-2 border-gray-200 px-4 py-3'>
                            <div className='flex justify-between items-center'>
                                <label htmlFor="advance-settings" className='text-gray-700 text-sm'>Advance Settings</label>
                                <input type="checkbox" id='advance-settings' />

                            </div>

                        </div>

                    </div>

                </div>
                {/* main room */}

                <div className="w-4/5 relative">
                    <div className="py-2 px-4 flex justify-between items-center  border-b-2 border-b-gray-100">
                        <h1 className='font-bold text-gray-800'>Main Room</h1>

                        {/* 3 buttons */}
                        <div className='flex gap-4 items-center'>
                            <div className="bg-red-700 w-30 px-2 py-1  rounded flex items-center gap-2">
                                <FaPlus className='text-white' size={10} />
                                <h1 className='text-white text-xs'>Add Room</h1>
                            </div>

                            <div className="w-30 px-2 py-1  rounded flex items-center gap-2 border border-gray-200">
                                <h1 className='text-gray-500 text-xs'>Save Room</h1>
                            </div>

                            <div className="w-30 px-2 py-1  rounded flex items-center gap-2">
                                <IoMdMore size={18} />
                            </div>



                        </div>
                    </div>

                    {/* table details */}

                    <div className="bg-black left-1/2 transform -translate-x-1/2 absolute bottom-4 mx-auto px-4  py-2 flex gap-10 items-center">
                        <div className="flex gap-4 items-center">
                            <MdTableRestaurant className="text-white" size={12} />
                            <h1 className='text-white text-xs'>76 Tables</h1>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaUserFriends className="text-white" size={12} />
                            <h1 className='text-white text-xs'>76 Tables</h1>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaUserFriends className="text-white" size={12} />
                            <h1 className='text-white text-xs'>76 Tables</h1>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaEarthAmericas className="text-white" size={12} />
                            <h1 className='text-white text-xs'>76 Tables</h1>
                        </div>
                    </div>


                </div>

            </div>




        </div>
    )
}

export default Home
