"use client"

import React, { useState } from 'react'
import SearchBar from './SearchBar'
import HamBurgerMenu from './HamBurgerMenu'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { SignInWithGoogleFunction } from '@/utils/SignInWithGoogle'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebaseConfig'
import ProfileCard from '../Sidebars/RightSidebar/ProfileCard'
import Button from '../Button/Button'


const Header = () => {
  const [user, loading, error] = useAuthState(auth)
  const [isHamBurgerMenuVisible, setIsHamBurgerMenuVisible] = useState<boolean>(false)
  return (
    <header className='w-full h-20 flex justify-between lg:justify-center items-center space-x-2 px-3'>
      {/* Hamburger Icon */}
      {!isHamBurgerMenuVisible ? (
        <RxHamburgerMenu className='lg:hidden w-6 h-6 text-Dark hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
      ) : (
        <RxCross1 className='lg:hidden w-6 h-6 text-Dark hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
      )}


      <span>{null}</span>

      <SearchBar />

      {!user && (
        <Button
          onClick={SignInWithGoogleFunction}
        >
          Sign in
        </Button>
      )}

      {/* Sidebar */}
      <HamBurgerMenu isHamBurgerMenuVisible={isHamBurgerMenuVisible} setIsHamBurgerMenuVisible={setIsHamBurgerMenuVisible} />


      <ProfileCard />

    </header>
  )
}

export default Header