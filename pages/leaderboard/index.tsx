import Header from '@/components/Header/Header'
import LeaderboardCard from '@/components/LeaderboardCard/LeaderboardCard'
import { db } from '@/firebaseConfig'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import React from 'react'

const Index = ({ leaderboardData }: any) => {
    return (
        <main className='bg-Lightest col-span-full lg:col-start-3 lg:col-end-13 flex flex-col items-center justify-start px-10'>
            <Header />

            <div className='w-full flex flex-col justify-start items-start space-y-5'>
                <h2 className='text-5xl my-5 text-Dark font-nunito font-semibold'> Leaderboard </h2>
                {leaderboardData[0] && leaderboardData?.map((userData: any) => {
                    return (
                        <LeaderboardCard
                            userData={userData}
                            firstPositionUserID={leaderboardData[0].userID}
                            secondPositionUserID={leaderboardData[1].userID}
                            thirdPositionUserID={leaderboardData[2].userID}
                            />
                    )
                })}
            </div>

        </main>
    )
}

export default Index



export const getServerSideProps = async () => {
    const usersQuery = query(collection(db, "users"), orderBy("userCoins", "desc"), limit(7))
    const leaderboardQuery = await getDocs(usersQuery)
    const leaderboardData: any[] = leaderboardQuery?.docs?.map((doc: any) => {
        return doc.data()
    })


    return {
        props: {
            leaderboardData
        }
    }

}