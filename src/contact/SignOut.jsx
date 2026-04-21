import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/AuthProvider'

function SignOut() {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gray-200'>

      <div className='bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6 w-96'>

        <h2 className='text-2xl font-semibold'>تسجيل الخروج</h2>

        <p className='text-gray-600 text-center'>
          هل أنت متأكد أنك تريد تسجيل الخروج؟
        </p>

        <div className='flex gap-4 w-full'>

          <button
            onClick={handleLogout}
            className='bg-red-600 text-white px-6 py-3 rounded-lg w-full hover:bg-red-700'
          >
            نعم، تسجيل خروج
          </button>

          <button
            onClick={() => navigate(-1)}
            className='bg-gray-300 px-6 py-3 rounded-lg w-full hover:bg-gray-400'
          >
            إلغاء
          </button>

        </div>

      </div>

    </div>
  )
}

export default SignOut