import React from 'react'
import { Link } from 'react-router-dom'
const PageHeroSection = () => {
    return (
        <div className='h-96 max-sm:h-72 flex items-end max-sm:justify-center justify-end overflow-hidden object-contain object-center bg-no-repeat bg-center' style={{
            backgroundImage: `url('https://i.pinimg.com/originals/f1/88/c6/f188c68502ed808b7e8ce4a49a781000.jpg')`
        }}>
            <div className='my-5 max-sm:mx-2  mx-12'>

                <button type="button" className="py-2.5 px-5 max-sm:px-1.5 max-sm:py-1.5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200  focus:ring-gray-700   text-gray-400  border-gray-600  hover:text-white  hover:bg-gray-700">Edit Cover Photo<i className="fa-regular fa-image ml-2"></i></button>
                <Link to={'/editprofile'} type="button" className="py-2.5 max-sm:px-1.5 max-sm:py-1.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200  focus:ring-gray-700  text-gray-400  border-gray-600  hover:text-white  hover:bg-gray-700">Edit Profile<i className=" ml-2 fa-regular fa-pen-to-square"></i></Link>
            </div>

        </div>
    )
}

export default PageHeroSection
