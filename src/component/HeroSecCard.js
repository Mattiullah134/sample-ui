import React from 'react'
const HeroSecCard = ({ men1Img, title, tag }) => {
    return (

        <div class="max-w-sm bg-transparent max-sm:w-[100%] mt-5 w-[35%]">
            <div href="/" className='overflow-hidden'>
                <img class="rounded-lg m-auto h-80 max-sm:w-[80%]" src={men1Img} alt="" />
            </div>
            <div class="p-5">
                <a href="/">
                    <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a ><hr />
                <div className='flex justify-between mt-2'>

                    <a class="mb-3 font-normal text-gray-700 dark:text-gray-200"><i class="fa-solid fa-chart-pie mr-2" ></i><span className=' text-gray-600 mr-1'>2,000</span>/<span className='ml-1 font-bold'>5,000 Spots</span></a>
                    <p className='text-gray-700 font-normal text-sm '>Trending<i class="fa-sharp fa-solid fa-fire ml-2" style={{ color: '#E25822' }}></i></p>


                </div>
            </div >
        </div >

    )
}

export default HeroSecCard
