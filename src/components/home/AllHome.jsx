import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import Sidebar from '../Sidebar'
import NavBar from '../NavBar'
import HeroSection from './HeroSection'
import ProgramsSection from './ProgramsSection'
import TeachersSection from './TeachersSection'
import StudySystemSection from './StudySystemSection'
import PricingSection from './PricingSection'
import Footer from './Footer'

function AllHome() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className='flex h-screen overflow-hidden' dir="rtl">

      {/* الجزء الخاص بالسيد بار إذا كان مسجل دخول */}
      {isLoggedIn && (
        <div className='h-full shadow-lg'> 
          <Sidebar />
        </div>
      )}

      {/* الجزء الخاص بالمحتوى اليمين (NavBar + Sections) */}
      <div className='flex-1 flex flex-col overflow-y-auto bg-gray-50'>
        <NavBar />

        {/* السكرول هيكون هنا بس والمحتوى هيتحرك بحرية */}
        <main className='w-full'>
          <HeroSection />
          <ProgramsSection />
          <TeachersSection />
          <StudySystemSection />
          <PricingSection />
          <Footer />
        </main>
      </div>

    </div>
  )
}

export default AllHome