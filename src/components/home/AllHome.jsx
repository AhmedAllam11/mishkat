import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import Sidebar from '../Sidebar'
import NavBar from '../NavBar'
import HeroSection from './HeroSection'
import AllContact from '../../contact/AllContact'
import AbutTeacher from './AbutTeacher'
import AboutSection from './AboutSection'

function AllHome() {
  const { isLoggedIn, login } = useContext(AuthContext)

  return (
    // 1. h-screen تضمن إن الصفحة واخدة طول الشاشة
    // 2. overflow-hidden تمنع السكرول في الصفحة كاملة عشان السكرول يكون للمحتوى بس
    <div className='flex h-screen overflow-hidden'>

      {/* الجزء الخاص بالسيد بار */}
      {isLoggedIn && (
        <div className='h-full shadow-lg'> 
          <Sidebar />
        </div>
      )}

      {/* الجزء الخاص بالمحتوى اليمين (NavBar + Sections) */}
      <div className='flex-1 flex flex-col overflow-y-auto'>
        <NavBar />

        {/* السكرول هيكون هنا بس والمحتوى هيتحرك بحرية */}
        <main className='p-4'>
          <HeroSection />
          <AboutSection />
          <AbutTeacher />
        </main>
      </div>

    </div>
  )
}

export default AllHome