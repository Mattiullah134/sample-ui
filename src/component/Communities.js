import React from 'react'
import HeroSecCard from './HeroSecCard'
import men1Img from '../assets/men1.jpg'
const Communities = () => {
    return (
        <>
            <HeroSecCard men1Img={men1Img} title={`Burna's World`} />
            <HeroSecCard men1Img={men1Img} title={`Arya the star`} />
            <HeroSecCard men1Img={men1Img} title={`Little Sims`} />
        </>
    )
}

export default Communities
