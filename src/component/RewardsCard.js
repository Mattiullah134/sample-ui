import React from 'react'
import { Link } from 'react-router-dom'
const RewardsCard = ({ cardImage, title, points, pointShort, sponseredLogo }) => {
    return (

        <Link to={'/editprofile'} className=" w-[28%] max-md:w-[40%] max-sm:w-[70%] my-6  shadow dark:border-gray-700">
            <div className='h-72 max-md:h-40 rounded-2xl overflow-hidden'>

                <a href="#">
                    <img className=" w-[100%] object-contain" src={cardImage} alt="" />
                </a>
            </div>
            <div className="">
                <a href="#">
                    <p className="mt-5 mb-3 text-md font-semibold  tracking-tight text-gray-900 dark:text-white">50 Minutes or 5GB Airtime & Data</p>
                </a> <hr className='bg-black ' />
                <div className='flex items-center justify-between mt-5'>

                    <button className="inline-flex  items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-l">
                        Reedem

                    </button>
                    {points && <p className='text-white text-sm'><span className='text-2xl mr-1 font-bold'>{points}</span> {pointShort}</p>}
                    {sponseredLogo && <div className='text-sm mr-1 text-gray-600 flex items-center'>sponsored by<img className='w-8 ml-3' src={sponseredLogo} /></div>}
                </div>
            </div>
        </Link>

    )
}

export default RewardsCard
