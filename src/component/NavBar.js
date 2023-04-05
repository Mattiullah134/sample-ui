import React, { useState } from 'react';

import { Button, Dropdown } from 'antd';
const items = [
    {
        key: '1',
        label: (
            <a className='text-white pb-3 font-semibold' target="_blank" rel="noopener noreferrer" >
                Eric Weche
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a className='dark:text-[#494d5a] pb-3 font-semibold' target="_blank" rel="noopener noreferrer" h>
                0xc4c16ab5ac7d...b21a
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a className='dark:text-[#494d5a] pb-3 font-semibold' target="_blank" rel="noopener noreferrer" >
                <i className="fa-solid fa-user mr-3"></i>My profile
                <hr className='mt-2' />
            </a>
        ),
    },
    {
        key: '8',
        label: (
            <div className='dark:text-[#494d5a] pb-3 font-semibold'   >
                <div className='flex items-center gap-2'>
                    <img src="https://static.currency.com/img/media/bitcoin.dd8a16.png" className="w-9 h-9 " alt="Flowbite Logo" />
                    <div>
                        <p className='font-normal text-[#5d6272]'>Rewards Balance</p>
                        <h1 className='text-xl'>500</h1>
                    </div>
                </div>
                <a type="button" className="text-black  border border-gray-800 focus:outline-none hover:bg-gray-500 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm max-sm:px-2 px-5 py-2.5 max-sm:mr-0.5 mr-2 mb-2  dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 ">Reedem Reward</a>
            </div>
        ),
    },
    {
        key: '4',
        label: (
            <a className='dark:text-[#494d5a] pb-3 font-semibold' target="_blank" rel="noopener noreferrer" >
                <i className="fa-solid fa-image mr-3"></i>My items
                <hr className='mt-2' />
            </a>
        ),
    },
    {
        key: '5',
        label: (
            <a className='dark:text-[#494d5a] pb-3 font-semibold' target="_blank" rel="noopener noreferrer" >
                <i className="fa-solid fa-lightbulb mr-3"></i>Dark Theme
                <hr className='mt-2' />
            </a>
        ),
    },
    {
        key: '6',
        label: (
            <a className='dark:text-[#494d5a] pb-3 font-semibold' target="_blank" rel="noopener noreferrer" >
                <i className="fa-solid fa-right-from-bracket fa-rotate-180 mr-3"></i>Disconnect
                <hr className='mt-2' />
            </a>
        ),
    },
];
const NavBar = () => {
    const [isHamOpen, setIsHamOpen] = useState(false);
    const toggleHamburger = () => {
        setIsHamOpen(!isHamOpen)
    }

    return (
        <>
            <nav className="border-gray-200 bg-gray-50 bg-transparent dark:border-gray-700 border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto max-sm:p-2 p-4">

                    <a href='/' className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 max-sm:mr-1 mr-3" alt="Flowbite Logo" />
                        <span className="self-center max-sm:text-lg text-2xl font-semibold whitespace-nowrap border-r-2 border-[#30333d] max-sm:pr-2 pr-4 text-white italic relative">nandi</span>
                        <p className='text-[#777e90] max-sm:pl-2 pl-3 font-semibold'>Learn more</p>
                    </a>

                    <Dropdown menu={{ items }} placement="bottomLeft" arrow >
                        <Button className='flex border-none items-center justify-start'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wL6j1jY0c2Ov6YWdGDilHzZ7fnMtZxB7bw&usqp=CAU' data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex w-12 h-12 rounded-full items-center p-2 ml-1 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false" alt='' />

                        </Button>
                    </Dropdown>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex items-center flex-col font-medium mt-4 rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-transparent  md:dark:bg-transparent ">
                            <li>
                                <a href='/' className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 text-lg  md:dark:bg-transparent" aria-current="page"><i className="fa-solid fa-paper-plane"></i></a>
                            </li>
                            <li>
                                <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  text-lg md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-brands fa-discord"></i></a>
                            </li>
                            <li>
                                <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0   text-lg md:p-0 dark:text-white  dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                            <li>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>

                            </li>
                            <li>

                                <div className="text-white flex items-center justify-between border focus:ring-4 pr-3 focus:ring-blue-300 font-medium rounded-full text-sm   mb-2 cursor-pointer focus:outline-none " >
                                    <div className="relative object-contain w-10 h-10 overflow-hidden bg-gray-100 mr-2 rounded-full dark:bg-gray-600" >
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wL6j1jY0c2Ov6YWdGDilHzZ7fnMtZxB7bw&usqp=CAU' className="absolute w-12 h-12 text-gray-400 -left-1" alt='' />
                                    </div>
                                    <Dropdown menu={{ items }} placement="bottomLeft" arrow >
                                        < Button style={{ border: 'none' }}>
                                            <span className=' max-sm:hidden text-white mr-2 text-l font-semibold max-sm:hidden ' > 500 </span> <span className='text-green-600'>NANDI POINTS</span >
                                        </Button>
                                    </Dropdown>
                                </div>


                            </li>
                        </ul>
                    </div>
                    {isHamOpen && <div className="w-full" id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a className="block py-2 pl-3 pr-4 text-white  rounded " aria-current="page"><i className="fa-solid fa-paper-plane"></i></a>
                            </li>
                            <li>
                                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><i className="fa-brands fa-discord"></i></a>
                            </li>
                            <li>
                                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"><i className="fa-brands fa-twitter"></i></a>
                            </li>

                        </ul>
                    </div>}
                </div>
            </nav>
            {/* {location.pathname !== '/editprofile' && <PageHeroSection />} */}

        </>
    )
}

export default NavBar
