import { auth } from '@/firebaseConfig'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'


const LessonCard = ({ lesson }: any) => {
    const [user] = useAuthState(auth)
    const router = useRouter()

    return (
        <div
            onClick={() => {
                if (user) {
                    router.push(`/lesson/${lesson?.lessonID}`)
                } else if (!user) {
                    alert("Sign in first")
                }
            }}
            className='w-full h-28 flex justify-start items-center rounded-md bg-gray-200 p-3 hover:cursor-pointer space-x-3'>

            {lesson?.lessonLogos[0] && (
                <Image
                    src={lesson.lessonLogos[Math.floor(Math.random() * 2)] || "https://firebasestorage.googleapis.com/v0/b/metaverse-for-learners.appspot.com/o/lessonLogos%2FGroup%2054.png?alt=media&token=34ccbec7-2daa-4552-9e78-1ac6004c38db"}
                    alt="lessonLogo"
                    width={100}
                    height={100}
                    className="w-24 h-24"
                />
            )}
            <h6 className='font-nunito_sans text-sm sm:text-lg md:text-xl text-Dark font-bold'>{lesson.lessonTitle}</h6>
        </div>
    )
}

export default LessonCard