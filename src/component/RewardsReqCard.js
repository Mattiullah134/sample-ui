import React from 'react'

const RewardsReqCard = () => {
    return (

        <div class="max-w-sm p-6 max-md:text-center border border-gray-200 rounded-lg shadow dark:bg-[#23262f] dark:border-gray-700">
            <a href="#" class="inline-flex justify-center  w-full text-center px-3 py-3 text-sm font-medium text-center text-[#747b8d] bg-[#263d77] rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#263d77] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Verify & Claim Reward
            </a>

            <p class="mb-3 font-normal text-center mt-5 text-gray-700 dark:text-gray-400">By clicking "Verify & Claim Reward" you are agreeing to our <span className='text-[#1940ce]'>terms of service</span>.</p>
        </div>

    )
}

export default RewardsReqCard
