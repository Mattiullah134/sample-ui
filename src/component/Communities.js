import React from 'react'
import HeroSecCard from './HeroSecCard'
import men1Img from '../assets/cardimg20.jpeg'
import men2Img from '../assets/cardimg21.jpeg'
import men3Img from '../assets/cardimg22.jpeg'
const Communities = () => {
    return (
        <div className='w-[100%] flex flex-wrap gap-1 max-sm:justify-center '>
            <HeroSecCard men1Img={men1Img} title={`Burna's World`} />
            <HeroSecCard men1Img={men2Img} title={`Arya the star`} />
            <HeroSecCard men1Img={men3Img} title={`Little Sims`} />
        </div>
    )
}

export default Communities
