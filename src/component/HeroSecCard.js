import React from 'react'
const HeroSecCard = ({ men1Img, title, tag }) => {
    return (

        <div className=" max-sm:bg-slate-50 gap-10 bg-transparent max-sm:w-[50%] mt-5 w-[33%]">
            <div href="/" className='overflow-hidden'>
                <img className="rounded-lg m-auto h-80 max-sm:w-[80%]" src={men1Img} alt="" />
            </div>
            <div className="p-5">
                <a href="/">
                    <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a ><hr />
                <div className='flex justify-between mt-2'>

                    <a className="mb-3 font-normal text-gray-700 dark:text-gray-200"><i className="fa-solid fa-chart-pie mr-2" ></i><span className=' text-gray-600 mr-1'>2,000</span>/<span className='ml-1 font-bold'>5,000 Spots</span></a>
                    <p className='text-gray-700 font-normal text-sm '>Trending<i className="fa-sharp fa-solid fa-fire ml-2" style={{ color: '#E25822' }}></i></p>


                </div>
            </div >
        </div >

    )
}

export default HeroSecCard
