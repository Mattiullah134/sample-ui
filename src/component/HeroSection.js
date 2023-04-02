import React from 'react'
import men1Img from '../assets/men1.jpg'
import Communities from './Communities'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import MyNandi from './MyNandi';
const HeroSection = () => {
    const location = useLocation();
    const active = 'bg-white';
    console.log(location.pathname);
    return (
        <>



            <div className='w-[80%]  max-sm:w-[100%] max-md:flex-col ml-auto pt-10 '>
                <nav className='overflow-y-auto flex ml-4'>
                    <Link to={'/'} type="button" class={`text-gray-500 ${location.pathname === '/' ? active : ''} hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all    max-sm:px1 max-sm:mr-1 `}>Communities</Link>
                    <button type="button" class={` text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all    max-sm:px1 max-sm:mr-1 `}>Waitlists</button>
                    <button type="button" class={`text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all    max-sm:px1 max-sm:mr-1 `}>Cowries</button>
                    <Link to={'/mynandi'} type="button" class={`text-gray-500 hover:bg-white ${location.pathname === '/mynandi' ? active : ''}  font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all    max-sm:px1 max-sm:mr-1 `}>Nandi</Link>

                    <button type="button" class={`text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all    max-sm:px1 max-sm:mr-1 `}>Rewards</button>
                    <button type="button" class={`text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all    max-sm:px1 max-sm:mr-1 `}>Following</button>
                    <button type="button" class={`text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all    max-sm:px1 max-sm:mr-1 `}>Followers</button>



                </nav>
                <div className='flex max-sm:flex-col  gap-3 flex-wrap items-center justify-start '>
                    <div class="p-5 shadow-2xl sm:absolute left-0  w-56 max-sm:mx-auto  top-72 max-w-sm bg-white border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700">

                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={men1Img} alt="" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Eric Weche</h5>
                            <span class="font-semibold text-white">Oxc4c16a645...b21a</span>
                            <p class="text-sm mt-5 text-center text-gray-500">A contemporary digital artist from Kinshasa. Upcomming gallery solo show in Germany</p>
                            <p class="text-sm mt-5 text-center text-white text-bo"><i class="fa-solid fa-house mr-3"></i><span>https://www.figma...</span></p>
                            <div className='flex gap-8 items-center mt-10 text-gray-500'>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                            <hr className='text-white' />
                            <p className='text-gray-500 font-semibold text-sm mt-10'>Member since Mar 15 , 2021</p>
                        </div>
                    </div>
                    <Routes>
                        <Route exat path='/' element={<Communities />} />
                        <Route exat path='/mynandi' element={<MyNandi />} />
                    </Routes>
                </div>
            </div>


        </>
    )
}

export default HeroSection
