import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
import men1Img from '../assets/men1.jpg'

const MyNandi = () => {

    return (
        <div className='text-white w-[80%] flex flex-col  max-sm:items-center items-start'>
            <div className="mynandiBanner max-md:w-[100%] max-sm:w-[100%] max-md:ml-auto max-md:  border-slate-50 bg-gradient-to-br from-purple-900 to-black w-[100%]  h-96 rounded-lg p-5 max-sm:h-auto ml-0">
                <div className="flex flex-col h-full justify-between items-center">
                    <div className="logo flex justify-center items-center border-4 text-center p-2 border-gray-500 w-32 h-32 rounded-full">
                        <img src="https://static.currency.com/img/media/bitcoin.dd8a16.png" className="h-full " alt="Flowbite Logo" />
                    </div>
                    <p>👑Level 1</p>
                    <div className='flex gap-10 md:gap-2 max-sm:gap-5 mt-5 items-center max-sm:flex-col m-auto text-center mx-auto '>
                        <div className='text-center md:px-6 max-sm:px-1'>
                            <p className='max-sm:text-xs'>DAILY STREAK</p>
                            <p className='text-6xl font-light max-sm:text-3xl '>1</p>
                        </div>
                        <div className='text-center md:border-x-2 md:px-10 max-sm:px-1'>
                            <p className='max-sm:text-xs'>TOTAL SCORE</p>
                            <p className='text-6xl font-light max-sm:text-3xl'>32</p>
                        </div>
                        <div className='text-center md:px-6 max-sm:px-1 '>
                            <p className='max-sm:text-xs'>REFERALLS</p>
                            <p className='text-6xl font-light max-sm:text-3xl'>12</p>
                        </div>

                    </div>
                    <button type="button" className="py-2.5 bg-white text-black mt-3  px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:bg-transparent focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">REEDEM REWARDS</button>
                </div>
            </div>
            <p className='w-[70%] max-sm:w-[100%]  mt-5'>You've token the first step in an existing journey, complete your profile and explore the platform to earn Nandi Points, unlocking more perks as you advance through the levels</p>
            <div className='nandiContainer w-[100%] flex gap-16 max-sm:flex-col  max-sm:gap-10 justify-start flex-wrap items-center overflow-x-scroll '>

                <div className="max-w-sm p-6  max-md:w-[80%] w-[28%]   rounded-xl shadow dark:bg-[#23262f] mt-10 dark:border-gray-500 flex flex-col text-center items-center justify-center">
                    <a href="#">
                        <h5 className="mb-2 text-center text-m font-bold tracking-tight text-gray-900 dark:text-white  m-auto">Sign up to <div>Nandi</div></h5>
                    </a>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-10 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 text-2xl">20 <div className='text-xs font-semibold'>Pints Won</div></button>
                    <button type="button" className=" bg-white focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5  mb-2 text-blue-600 mt-5"><i className="fa-regular fa-circle-check mr-2 m-auto"></i>Completed</button>


                </div>
                <div className="max-w-sm p-6   max-md:w-[80%] w-[28%]  text-m rounded-xl shadow dark:bg-[#23262f] mt-10 dark:border-gray-500 flex flex-col text-center items-center justify-center">
                    <a href="#">
                        <h5 className="mb-2 text-center text-l font-bold tracking-tight text-gray-900 dark:text-white  m-auto">Complete <div>Your Profile</div></h5>
                    </a>

                    <button type="button" className="text-white bg-black font-medium rounded-lg text-2xl px-10 py-2.5  mb-2  focus:outline-none dark:focus:ring-blue-800 mt-5">20 <div className='text-xs font-semibold'>Pints Won</div></button>
                    <button type="button" className=" bg-transparent border focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5  mb-2 text-white mt-5"><i className="fa-regular fa-clock mr-2"></i>Pending</button>



                </div>
                <div className=" p-6  max-md:w-[80%] w-[28%]   rounded-xl shadow dark:bg-[#23262f] mt-10 dark:border-gray-500 flex flex-col text-center items-center justify-center">
                    <a href="#">
                        <h5 className="mb-2 text-center text-l font-bold tracking-tight text-gray-900 dark:text-white  m-auto">Sign up to <div>Nandi</div></h5>
                    </a>

                    <button type="button" className="text-white bg-black font-medium rounded-lg text-2xl px-10 py-2.5  mb-2  focus:outline-none dark:focus:ring-blue-800 mt-5">20 <div className='text-xs font-semibold'>Pints Won</div></button>
                    <button type="button" className=" bg-transparent border focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5  mb-2 text-white mt-5"><i className="fa-regular fa-clock mr-2"></i>Pending</button>



                </div>


            </div>
            <div className='w-[100%] '>

                <h1 className='text-start text-3xl my-5'>Your Activity</h1>
                <div className='flex w-[100%]  gap-16 max-sm:flex-col max-md:flex-col max-sm:gap-10  flex-wrap justify-start items-center'>
                    <div className="max-w-sm p-6   w-[28%] max-md:w-[80%]   rounded-xl shadow dark:bg-[#23262f] mt-10 dark:border-gray-500 flex flex-col text-center items-center justify-center">
                        <a href="#">
                            <h5 className="mb-2 text-center text-m font-bold tracking-tight text-gray-900 dark:text-white  border-2  w-20 h-20 flex items-center justify-center rounded-full  m-auto">1</h5>
                        </a>
                        <p className="text-white   font-medium rounded-lg  px-5 py-2.5  mb-2   focus:outline-none  mt-5 text-xl">Weekly streak1</p>

                        <button type="button" className=" bg-transparent border focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5  mb-2 text-white mt-5"><i className="fa-regular fa-clock mr-2"></i>View</button>


                    </div>
                    <div className="max-w-sm p-6  w-[28%] max-md:w-[80%]   rounded-xl shadow dark:bg-[#23262f] mt-10 dark:border-gray-500 flex flex-col text-center items-center justify-center">
                        <a href="#">
                            <h5 className="mb-2 text-center text-m font-bold tracking-tight text-gray-900 dark:text-white  border-2  w-20 h-20 flex items-center justify-center rounded-full  m-auto">1</h5>
                        </a>
                        <p className="text-white   font-medium rounded-lg  px-5 py-2.5  mb-2   focus:outline-none  mt-5 text-xl">LIKES</p>

                        <button type="button" className=" bg-transparent border focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5  mb-2 text-white mt-5"><i className="fa-regular fa-clock mr-2"></i>View</button>


                    </div>
                    <div className="max-w-sm p-6   w-[28%] max-md:w-[80%]   rounded-xl shadow dark:bg-[#23262f] mt-10 dark:border-gray-500 flex flex-col text-center items-center justify-center">
                        <a href="#">
                            <h5 className="mb-2 text-center text-m font-bold tracking-tight text-gray-900 dark:text-white  border-2  w-20 h-20 flex items-center justify-center rounded-full  m-auto">1</h5>
                        </a>
                        <p className="text-white   font-medium rounded-lg  px-5 py-2.5  mb-2   focus:outline-none  mt-5 text-xl">SHARES</p>

                        <button type="button" className=" bg-transparent border focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5  mb-2 text-white mt-5"><i className="fa-regular fa-clock mr-2"></i>View</button>


                    </div>
                </div>
            </div>
            <div className='my-5' >
                <i className="fa-sharp fa-solid fa-arrow-left mr-5 cursor-pointer "></i>
                <i className="fa-sharp fa-solid fa-arrow-right border p-2 rounded-full cursor-pointer"></i>
            </div>
            <div className=''>

                <a href="#" className="flex flex-col items-center gap-20 border border-gray-200 rounded-lg shadow md:flex-row   dark:border-gray-700 bg-[#23262f] ">

                    <img className="object-cover max-sm:w-[100%] w-[30%] rounded-t-lg h-96 md:h-auto  md:rounded-none md:rounded-l-lg" src={men1Img} alt="" />
                    <div className="flex  flex-col justify-between  text-center  max-sm:w-[80%]  leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white text-center">Latest Points</h5>
                        <p className="mb-3 font-normal  text-white">Friday 11 March 2023<div>Signed up for Nandi</div></p>
                        <button type="button" className="text-white bg-[#1647fb] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-32 text-center font-medium rounded-lg mx-auto px-5 py-2.5  mb-2 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 mt-5 text-2xl">20 <div className='text-xs font-semibold'>Pints Won</div></button>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default MyNandi