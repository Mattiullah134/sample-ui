import React from 'react'
import RewardsCard from './RewardsCard'
import cardImage from '../assets/cardimg23.jpeg'
import cardImage1 from '../assets/cardimg11.jpeg'
import cardImage2 from '../assets/cardimg13.jpeg'
import cardImage3 from '../assets/cardimg14.jpeg'
import cardImage4 from '../assets/cardimg17.jpeg'
import cardImage5 from '../assets/cardimg12.jpeg'
const Rewards = () => {
    return (
        <div className='flex flex-wrap gap-8 max-sm:flex-col max-sm:items-center justify-start max-md:justify-center'>
            <RewardsCard cardImage={cardImage} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />
            <RewardsCard cardImage={cardImage1} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />
            <RewardsCard cardImage={cardImage2} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />
            <RewardsCard cardImage={cardImage3} title={'50 Minutes or 5GB Airtime & Data'} sponseredLogo={'https://www.ubagroup.com/wp-content/uploads/2018/06/UBA-Logo.svg'} />
            <RewardsCard cardImage={cardImage4} title={'50 Minutes or 5GB Airtime & Data'} sponseredLogo={'https://www.vectorlogo.zone/logos/edgewall_trac/edgewall_trac-ar21.svg'} />
            <RewardsCard cardImage={cardImage5} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />

        </div>
    )
}

export default Rewards
