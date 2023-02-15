import Image from 'next/image'
import React from 'react'

const LeaderboardCard = ({ userData, firstPositionUserID, secondPositionUserID, thirdPositionUserID }: any) => {
    return (
        <div key={userData?.userID} className={` 
            ${firstPositionUserID === userData?.userID && "h-28"} 
            ${secondPositionUserID === userData?.userID && "h-24"} 
            ${thirdPositionUserID === userData?.userID && "h-20"} 
            w-full flex justify-between items-center space-x-4 px-5 py-3 rounded-md bg-Light`}>
            <h4 className='text-lg text-Dark font-nunito font-bold'> {userData?.userName} </h4>
            <span className='text-lg text-Brand font-nunito font-bold'> {userData?.userCoins} Coins </span>
        </div>
    )
}

export default LeaderboardCard