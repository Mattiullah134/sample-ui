import React from 'react'
import HeroSecCard from './HeroSecCard'
import men1Img from '../assets/men1.jpg'
const Communities = () => {
    return (
        <div className='w-[100%] flex flex-wrap gap-1 max-sm:border-red-800 '>
            <HeroSecCard men1Img={men1Img} title={`Burna's World`} />
            <HeroSecCard men1Img={men1Img} title={`Arya the star`} />
            <HeroSecCard men1Img={men1Img} title={`Little Sims`} />
        </div>
    )
}

export default Communities
