import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from './assets/Logo.svg'

const Layout = () => {
  return (
    <div> 
      <div className="bg-blue-950">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12 lg:px-24 py-6 lg:py-10">
          
          {/* Логотип */}
          <div className="mb-4 sm:mb-0">
            <img src={Logo} alt="Logo" className="w-28 sm:w-32 lg:w-40 2xl:w-56" />
          </div>

          {/* Навигация */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <Link to="/">
              <button className="w-24 sm:w-28 lg:w-32 2xl:w-40 font-bold text-base sm:text-lg lg:text-xl 2xl:text-2xl text-white hover:bg-white px-4 py-2 rounded-3xl hover:text-black focus:bg-white focus:text-black transition">
                Home
              </button>
            </Link>
            <Link to="/second">
              <button className="w-24 sm:w-28 lg:w-32 2xl:w-40 font-bold text-base sm:text-lg lg:text-xl 2xl:text-2xl text-white hover:bg-white px-4 py-2 rounded-3xl hover:text-black focus:bg-white focus:text-black transition">
                About
              </button>
            </Link>
            <Link to="/third">
              <button className="w-24 sm:w-28 lg:w-32 2xl:w-40 font-bold text-base sm:text-lg lg:text-xl 2xl:text-2xl text-white hover:bg-white px-4 py-2 rounded-3xl hover:text-black focus:bg-white focus:text-black transition">
                Blog
              </button>
            </Link>
            <Link to="/fourth">
              <button className="w-24 sm:w-28 lg:w-32 2xl:w-40 font-bold text-base sm:text-lg lg:text-xl 2xl:text-2xl text-white hover:bg-white px-4 py-2 rounded-3xl hover:text-black focus:bg-white focus:text-black transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Layout
