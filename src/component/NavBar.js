import React, { useState } from 'react'
import bannerImage from '../assets/bannerimage.jpg'
const NavBar = () => {
    const [isHamOpen, setIsHamOpen] = useState(false);
    const toggleHamburger = () => {
        setIsHamOpen(!isHamOpen)
    }

    return (
        <>
            <nav className="border-gray-200 bg-gray-50 bg-transparent dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <a href='/' className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white italic relative">nandi</span>
                    </a>


                    <div className='flex items-center justify-start'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wL6j1jY0c2Ov6YWdGDilHzZ7fnMtZxB7bw&usqp=CAU' data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex w-12 h-12 rounded-full items-center p-2 ml-1 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false" alt='' />

                        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" onClick={toggleHamburger} aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex items-center flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <a href='/' className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 text-lg md:hover:text-blue-700  md:dark:bg-transparent" aria-current="page"><i className="fa-solid fa-paper-plane"></i></a>
                            </li>
                            <li>
                                <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-brands fa-discord"></i></a>
                            </li>
                            <li>
                                <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-brands fa-twitter"></i></a>
                            </li>
                            <li>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>

                            </li>
                            <li>
                                <div className="text-white flex items-center justify-between border focus:ring-4 pr-3 focus:ring-blue-300 font-medium rounded-full text-sm   mb-2 cursor-pointer focus:outline-none ">
                                    <div className="relative object-contain w-10 h-10 overflow-hidden bg-gray-100 mr-2 rounded-full dark:bg-gray-600">
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wL6j1jY0c2Ov6YWdGDilHzZ7fnMtZxB7bw&usqp=CAU' className="absolute w-12 h-12 text-gray-400 -left-1" alt='' />
                                    </div>
                                    <p>
                                        500 <span className='text-green-600'>NANDI POINTS</span>
                                    </p>
                                </div>

                            </li>
                        </ul>
                    </div>
                    {isHamOpen && <div class="w-full" id="navbar-hamburger">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a class="block py-2 pl-3 pr-4 text-white  rounded " aria-current="page"><i className="fa-solid fa-paper-plane"></i></a>
                            </li>
                            <li>
                                <a class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><i className="fa-brands fa-discord"></i></a>
                            </li>
                            <li>
                                <a class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"><i className="fa-brands fa-twitter"></i></a>
                            </li>

                        </ul>
                    </div>}
                </div>
            </nav>
            <div className='h-96 max-sm:h-72 flex items-end max-sm:justify-center justify-end overflow-hidden object-contain object-center bg-no-repeat bg-center' style={{
                backgroundImage: `url('https://i.pinimg.com/originals/f1/88/c6/f188c68502ed808b7e8ce4a49a781000.jpg')`
            }}>
                <div className='my-5 max-sm:mx-2  mx-12'>

                    <button type="button" class="py-2.5 px-5 max-sm:px-1 max-sm:py-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit Cover Photo<i class="fa-regular fa-image ml-2"></i></button>
                    <button type="button" class="py-2.5 max-sm:px-1 max-sm:py-1 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit Profile<i class=" ml-2 fa-regular fa-pen-to-square"></i></button>
                </div>

            </div>
        </>
    )
}

export default NavBar
