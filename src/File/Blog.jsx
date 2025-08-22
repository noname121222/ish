import React from 'react'
import Foto from '../assets/Mount.svg'
import Foto1 from '../assets/Log.svg'
import Logo9 from '../assets/Foto3.svg'
import Logo10 from '../assets/Foto4.svg'
import Logo11 from '../assets/Foto5.svg'
import Logo12 from '../assets/Logos4.svg'
import Logo13 from '../assets/Logos5.svg'
import Logo14 from '../assets/Logos6.svg'
import Foto2 from '../assets/Log1.svg'
import Foto3 from '../assets/Log2.svg'
import Foto4 from '../assets/Log3.svg'

const Blog = () => {
  return (
    <>
      {/* Шапка */}
      <div className="text-center bg-blue-950 py-10">
        <p className="text-white">Blog</p>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
          Thoughts and words
        </h1>
      </div>

      {/* Первый блок */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-20 py-14">
        <div className="flex-shrink-0">
          <img src={Foto} alt="Main blog" className="w-full max-w-md rounded-lg" />
        </div>
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base">
            <p className="font-medium">Category</p>
            <p className="text-gray-400">November 22, 2021</p>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold py-5 leading-snug">
            Pitch termsheet backing validation focus release.
          </h1>
          <div className="flex items-center gap-3">
            <img src={Foto1} alt="Author" className="w-10 h-10 rounded-full" />
            <p className="font-medium">Chandler Bing</p>
          </div>
        </div>
      </div>

      {/* Latest news */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-6 lg:px-20 pt-10">
        Latest news
      </h1>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20 py-14">
        {/* Карточка 1 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={Logo9} alt="" className="w-full" />
          <div className="p-4">
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="font-bold text-black">Category</span>
              <span>November 22, 2021</span>
            </div>
            <h1 className="text-lg font-semibold mt-3">
              Pitch termsheet backing validation focus release.
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <img src={Logo12} alt="" className="w-8 h-8 rounded-full" />
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={Logo10} alt="" className="w-full" />
          <div className="p-4">
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="font-bold text-black">Category</span>
              <span>November 22, 2021</span>
            </div>
            <h1 className="text-lg font-semibold mt-3">
              Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <img src={Logo13} alt="" className="w-8 h-8 rounded-full" />
              <p>Rachel Green</p>
            </div>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={Logo11} alt="" className="w-full" />
          <div className="p-4">
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="font-bold text-black">Category</span>
              <span>November 22, 2021</span>
            </div>
            <h1 className="text-lg font-semibold mt-3">
              Beta prototype sales iPad gen-z marketing network effects value proposition
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <img src={Logo14} alt="" className="w-8 h-8 rounded-full" />
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
      </div>

      {/* Вторая сетка */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20 pb-14">
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={Foto2} alt="" className="w-full" />
          <div className="p-4">
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="font-bold text-black">Category</span>
              <span>November 22, 2021</span>
            </div>
            <h1 className="text-lg font-semibold mt-3">
              Pitch termsheet backing validation focus release.
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <img src={Logo12} alt="" className="w-8 h-8 rounded-full" />
              <p>Chandler Bing</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={Foto3} alt="" className="w-full" />
          <div className="p-4">
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="font-bold text-black">Category</span>
              <span>November 22, 2021</span>
            </div>
            <h1 className="text-lg font-semibold mt-3">
              Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <img src={Logo13} alt="" className="w-8 h-8 rounded-full" />
              <p>Rachel Green</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={Foto4} alt="" className="w-full" />
          <div className="p-4">
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="font-bold text-black">Category</span>
              <span>November 22, 2021</span>
            </div>
            <h1 className="text-lg font-semibold mt-3">
              Beta prototype sales iPad gen-z marketing network effects value proposition
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <img src={Logo14} alt="" className="w-8 h-8 rounded-full" />
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
