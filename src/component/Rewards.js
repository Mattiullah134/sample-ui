import React from 'react'
import RewardsCard from './RewardsCard'
import cardImage from '../assets/men1.jpg'
const Rewards = () => {
    return (
        <div className='flex flex-wrap gap-8 max-sm:flex-col max-sm:items-center justify-start max-md:justify-center'>
            <RewardsCard cardImage={cardImage} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />
            <RewardsCard cardImage={cardImage} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />
            <RewardsCard cardImage={cardImage} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />
            <RewardsCard cardImage={cardImage} title={'50 Minutes or 5GB Airtime & Data'} sponseredLogo={'https://www.ubagroup.com/wp-content/uploads/2018/06/UBA-Logo.svg'} />
            <RewardsCard cardImage={cardImage} title={'50 Minutes or 5GB Airtime & Data'} sponseredLogo={'https://www.vectorlogo.zone/logos/edgewall_trac/edgewall_trac-ar21.svg'} />
            <RewardsCard cardImage={cardImage} title={'50 Minutes or 5GB Airtime & Data'} points={'500'} pointShort={'PTS'} />

        </div>
    )
}

export default Rewards
