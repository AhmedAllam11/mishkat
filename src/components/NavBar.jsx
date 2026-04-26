import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { NavLink } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

function NavBar() {
  const { isLoggedIn, userName } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='bg-gray-100 border-b p-4'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />

        {!isLoggedIn && (
          <button className='md:hidden p-2 border rounded' onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        )}

        <ul className='hidden md:flex gap-8'>
          {NavLink.map(link => (
            <li key={link.id}>
              <Link to={link.path} className='hover:text-blue-600 transition'>{link.name}</Link>
            </li>
          ))}
        </ul>

        {isLoggedIn ? (
          <span className='text-lg'>أهلاً بك 👋 {userName}</span>
        ) : (
          <div className='hidden md:flex gap-3'>
            <button onClick={() => navigate('/login')} className='px-4 py-2 border rounded-lg'>تسجيل دخول</button>
            <button onClick={() => navigate('/register')} className='px-4 py-2 bg-green-600 text-white rounded-lg'>إنشاء حساب</button>
          </div>
        )}
      </div>

      {!isLoggedIn && menuOpen && (
        <ul className='flex flex-col mt-4 gap-2 md:hidden'>
          {NavLink.map(link => (
            <li key={link.id}>
              <Link to={link.path} onClick={() => setMenuOpen(false)} className='block px-3 py-2 rounded hover:bg-gray-200'>{link.name}</Link>
            </li>
          ))}
          <div className='flex flex-col gap-2 mt-2'>
            <button onClick={() => navigate('/login')} className='px-4 py-2 border rounded-lg'>تسجيل دخول</button>
            <button onClick={() => navigate('/register')} className='px-4 py-2 bg-green-600 text-white rounded-lg'>إنشاء حساب</button>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;