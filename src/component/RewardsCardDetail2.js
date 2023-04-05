import React from 'react'
import cardDetailImg from '../assets/posterimg16.jpeg';
import maraLogo from '../assets/maraLogo.png';
import RewCardRequi from './RewCardRequi';
import cryptoWallet from '../assets/cryptoWallet.png'
import RewardsReqCard from './RewardsReqCard';
import { Link } from 'react-router-dom';

const RewardsCardDetail2 = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <Link to={'/rewards'} type="button" className="text-gray-900 bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm max-sm:px-2 px-5 py-2.5 max-sm:mr-0.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 "><i className="fa-solid fa-arrow-left mr-3 text-gray-400"></i>Rewards</Link>
            <div className='flex gap-10 max-md:flex-col max-md:items-center'>
                <div className='left w-[50%] rounded'>
                    <img className='rounded-xl' src={cardDetailImg} alt="" />
                </div>
                <div className='right max-sm:w-[95%]'>
                    <div className='flex gap-12'>
                        <div>
                            <h1 className='text-white font-bold max-sm:text-xl text-5xl'>Redeem Reward</h1>
                            <div className='flex items-center my-8 max-sm:gap-10 gap-32'>
                                <div className='flex items-center gap-3 '>

                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wL6j1jY0c2Ov6YWdGDilHzZ7fnMtZxB7bw&usqp=CAU' className="rounded-full w-8 h-8 text-gray-400 -left-1" alt='' />
                                    <p className='text-white font-semibold '>Kidcadder</p>
                                </div>
                                <div>
                                    <button className='border-2 rounded-md py-1 px-2 text-white max-sm:font-normal font-bold'>200 REDEEMED</button>
                                </div>
                            </div>
                            <p className='text-gray-600 font-semibold  '>Complete the requirements below to redeem 1 digital art and print from kidcadaver</p>

                        </div>
                        <div className='max-sm:hidden max-md:hidden'>
                            <div className='bg-white mb-5 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full font-semibold text-xl'>
                                <i className="fa-solid fa-xmark text-gray-600"></i>
                            </div>
                            <div className='border-2 mb-5 cursor-pointer border-[#333742] w-12 h-12 flex items-center justify-center rounded-full font-semibold text-xl'>
                                <i className="fa-sharp fa-solid fa-upload text-gray-500"></i>
                            </div>
                            <div className='border-2 mb-5 cursor-pointer bg-[#23262f] border-[#333742] w-12 h-12 flex items-center justify-center rounded-full font-semibold text-xl'>
                                <i className="fa-solid fa-heart  text-pink-500"></i>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-[#23262f] dark:border-gray-700">
                        <a href="#" class="inline-flex items-center px-3 py-3 text-md font-medium  text-white bg-[#45b26b] w-full flex justify-center rounded-full">
                            You've Reedemed Your Rewards
                        </a>
                        <div className='dark:text-[#494d5a] mt-5 p-5  font-semibold shadow-lg rounded-lg'   >
                            <h1 className='text-white text-2xl font-bold'>Eric Weche</h1>
                            <p className='text-[#757c8e]'>0xc4c16ab5ac7d...b21a</p>
                            <div className='flex items-center gap-5 mt-5 mb-5'>
                                <img src="https://static.currency.com/img/media/bitcoin.dd8a16.png" className="w-9 h-9 " alt="Flowbite Logo" />
                                <div>
                                    <p className='font-semibold text-[#757c8e]'>Rewards Balance</p>
                                    <h1 className='text-2xl text-white'>500</h1>
                                </div>
                            </div>
                            <a type="button" className="text-white border-2 border-gray-800 focus:outline-none hover:bg-gray-500 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm max-sm:px-2 px-5 py-2.5 max-sm:mr-0.5 mr-2 mb-2 flex justify-center cursor-pointer w-full dark:border-gray-600 dark:hover:bg-gray-700 ">Reedem Reward</a>
                        </div>
                        <p class="mb-3 mt-3 font-normal text-center font-semibold text-[#757c8e] ">You are welcome to logout to and disconnect your wallet.Your entry will still be saved and you can log back in anytime</p>
                    </div>

                </div>
            </div>
        </div >
    )
}


export default RewardsCardDetail2
