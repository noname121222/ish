import React from 'react'
import { Link } from 'react-router-dom'

const End = () => {
  return (
    <div className="pt-14 px-4 sm:px-8 lg:px-14">
      <div className="bg-blue-950 pb-10 rounded-xl">
        
        {/* Заголовок */}
        <div className="text-center py-10 sm:py-14 px-4">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            An enterprise template to ramp up your company website
          </h1>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
            up your company website
          </h1>
        </div>

        {/* Кнопка */}
        <div className="flex justify-center">
          <Link to="/fourth">
            <button className="text-white bg-green-400 py-2 px-10 sm:px-16 lg:px-20 rounded-3xl hover:bg-green-500 transition">
              Start now
            </button>
          </Link>
        </div>
      </div>

      <div className="py-5"></div>
    </div>
  )
}

export default End
