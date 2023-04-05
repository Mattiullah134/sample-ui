import React from 'react'

const EditProfileNavBar = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-center border-b max-md:px-20 max-sm:px-5 border-gray-200 dark:border-gray-700 px-32 py-5'>

                <button type="button" className=" bg-transparent border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm max-sm:px-2 px-5 py-2.5 max-sm:mr-0.5 mr-2 mb-2  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 "><i className="fa-solid fa-arrow-left mr-3 text-gray-400"></i>Back to Profile</button>
                <div className='flex gap-5 items-center max-sm:hidden'>

                    <p className='text-gray-400 cursor-pointer font-semibold'>Profile</p>
                    <i className="fa-solid fa-arrow-right text-gray-400 cursor-pointer"></i>
                    <p className='text-white cursor-pointer font-semibold'>Edit Profile</p>
                </div>
            </div>
        </div>
    )
}

export default EditProfileNavBar
