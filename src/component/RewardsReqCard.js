import React from 'react'

const RewardsReqCard = () => {
    return (

        <div className="max-w-sm p-6 max-md:text-center border border-gray-200 rounded-lg shadow  bg-[#23262f]  border-gray-700">
            <a href="#" className="inline-flex justify-center  w-full text-center px-3 py-3 text-sm font-medium text-center text-[#747b8d] bg-[#263d77] rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  bg-[#263d77]  hover:bg-blue-700  focus:ring-blue-800">
                Verify & Claim Reward
            </a>

            <p className="mb-3 font-normal text-center mt-5 text-gray-700  text-gray-400">By clicking "Verify & Claim Reward" you are agreeing to our <span className='text-[#1940ce]'>terms of service</span>.</p>
        </div>

    )
}

export default RewardsReqCard
