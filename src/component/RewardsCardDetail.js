import React from 'react'
import cardDetailImg from '../assets/cardDetailImg.jpg';
import maraLogo from '../assets/maraLogo.png';
import RewCardRequi from './RewCardRequi';
import cryptoWallet from '../assets/cryptoWallet.png'
import RewardsReqCard from './RewardsReqCard';
import { Link } from 'react-router-dom';

const RewardsCardDetail = () => {
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
                            <p className='text-gray-600 font-semibold md:w-96 '>Complete the requirements below to redeem 1 digital art and print from kidcadaver</p>
                            <div className='flex items-center my-10'>
                                <p className='text-white text-xl'>Sponsored by</p>
                                <img className='w-16' src={maraLogo} alt="" />
                                <p className='text-white font-bold text-2xl'>mara</p>
                            </div>
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
                    <div>
                        <h1 className='text-white border-b border-[#333742] pb-6 text-xl font-bold mb-5'>Requirements</h1>
                        <RewCardRequi logo={cryptoWallet} title={'Crypto Wallet'} para={'Connect to your crypto wallet'} />
                        <RewCardRequi icon={<i className="fa-brands fa-twitter text-white font-bold max-sm:text-xl text-4xl"></i>} title={'Twitter'} para={'Follow Kidcadaver on Twitter'} />
                        <RewCardRequi icon={<i className="fa-brands fa-telegram text-white font-bold max-sm:text-xl text-4xl"></i>} title={'Telegram'} para={'Join Kidcadaver on Telegram'} />
                        <RewCardRequi icon={<i className="fa-brands fa-discord text-white font-bold max-sm:text-xl text-3xl"></i>} title={'Discord'} para={`Join Kidcadaver's Discord channel`} />
                        <RewardsReqCard />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RewardsCardDetail
