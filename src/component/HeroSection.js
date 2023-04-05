import React from 'react'
import men1Img from '../assets/men1.jpg'
import Communities from './Communities'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import MyNandi from './MyNandi';
import Rewards from './Rewards';
const HeroSection = () => {
    const location = useLocation();
    const active = 'bg-white';

    return (
        <>



            <div className='w-[70%] max-md:pl-5 max-sm:w-[100%]  max-md:w-[60%]   max-md:flex-col ml-auto pt-10 '>
                <div className="p-5 shadow-2xl sm:absolute left-0  max-md:left-8  w-56 max-sm:mx-auto  top-72 max-w-sm  border border-gray-200 rounded-2xl dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={men1Img} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Eric Weche</h5>
                        <span className="font-semibold text-white">Oxc4c16a645...b21a</span>
                        <p className="text-sm mt-5 text-center text-gray-500">A contemporary digital artist from Kinshasa. Upcomming gallery solo show in Germany</p>
                        <p className="text-sm mt-5 text-center text-white text-bo"><i className="fa-solid fa-house mr-3"></i><span>https://www.figma...</span></p>
                        <div className='flex gap-8 items-center mt-10 text-gray-500'>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <hr className='text-white' />
                        <p className='text-gray-500 font-semibold text-sm mt-10'>Member since Mar 15 , 2021</p>
                    </div>
                </div>
                <nav className='overflow-y-auto flex ml-4'>
                    <Link to={'/'} type="button" className={`text-gray-500 ${location.pathname === '/' ? active : ''} hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all max-md:mr-0    max-sm:px1 max-sm:mr-1 `}>Communities</Link>
                    <button type="button" className={` text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all max-md:mr-0    max-sm:px1 max-sm:mr-1 `}>Waitlists</button>
                    <button type="button" className={`text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all max-md:mr-0    max-sm:px1 max-sm:mr-1 `}>Cowries</button>
                    <Link to={'/mynandi'} type="button" className={`text-gray-500 hover:bg-white ${location.pathname === '/mynandi' ? active : ''}  font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all max-md:mr-0    max-sm:px1 max-sm:mr-1 `}>Nandi</Link>

                    <Link to={'/rewards'} type="button" className={`text-gray-500 hover:bg-white ${location.pathname === '/rewards' ? active : ''}  font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all max-md:mr-0    max-sm:px1 max-sm:mr-1 `}>Rewards</Link>
                    <button type="button" className={`text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all max-md:mr-0    max-sm:px1 max-sm:mr-1 `}>Following</button>
                    <button type="button" className={`text-gray-500 hover:bg-white   font-medium rounded-full text-sm px-3 py-2 mr-2 mb-2 transition-all max-md:mr-0    max-sm:px1 max-sm:mr-1 `}>Followers</button>



                </nav>
                <div className='flex max-sm:flex-col  gap-3 flex-wrap items-center justify-start '>

                    <Routes>
                        <Route exat path='/' element={<Communities />} />
                        <Route exat path='/mynandi' element={<MyNandi />} />
                        <Route exat path='/rewards' element={<Rewards />} />
                    </Routes>
                </div>
            </div>


        </>
    )
}

export default HeroSection
