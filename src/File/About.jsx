import React from 'react'
import Logo3 from '../assets/Foto9.svg'
import Logo1 from '../assets/Foto7.svg'
import Logo2 from '../assets/Foto10.svg'
import Logo4 from '../assets/Foto8.svg'
import Logo5 from '../assets/Foto11.svg'
import Logo6 from '../assets/Image.svg'
import Logo7 from '../assets/Image1.svg'
import Logo8 from '../assets/Image2.svg'
import Logo9 from '../assets/Image3.svg'
import Logo10 from '../assets/Image4.svg'
import Logo11 from '../assets/Image5.svg'

const About = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-blue-950 pb-16 px-4">
        <p className="text-white text-center font-bold py-4">About</p>
        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center py-2">
          We love to make great
        </h1>
        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          things, things that matter.
        </h1>
        <h2 className="text-white text-lg sm:text-xl lg:text-2xl text-center py-1 mt-6">
          Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage
        </h2>
        <h2 className="text-white text-lg sm:text-xl lg:text-2xl text-center">
          innovator success deployment non-disclosure.
        </h2>
      </div>

      {/* Логотипы */}
      <div className="flex flex-wrap justify-center gap-10 py-16 px-4">
        <div className="flex flex-col gap-10">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
        </div>
        <div>
          <img src={Logo3} alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <img src={Logo5} alt="" />
          <img src={Logo4} alt="" />
        </div>
      </div>

      {/* Our story */}
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="text-gray-400">Our story</p>
        <h1 className="text-2xl sm:text-3xl font-bold py-5">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <p className="text-gray-700">
          Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
          Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking
          holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment
          bootstrapping business-to-consumer.
        </p>
      </div>

      {/* Our numbers */}
      <div className="py-20 bg-blue-950 px-4">
        <p className="text-center text-white pb-6">Our numbers</p>
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center pt-14">
          <div>
            <h1 className="text-green-500 text-5xl sm:text-6xl lg:text-7xl font-bold">120m</h1>
            <p className="text-white text-lg sm:text-xl pt-3">Cool feature title</p>
          </div>
          <div>
            <h1 className="text-green-500 text-5xl sm:text-6xl lg:text-7xl font-bold">10.000</h1>
            <p className="text-white text-lg sm:text-xl pt-3">Cool feature title</p>
          </div>
          <div>
            <h1 className="text-green-500 text-5xl sm:text-6xl lg:text-7xl font-bold">240</h1>
            <p className="text-white text-lg sm:text-xl pt-3">Cool feature title</p>
          </div>
        </div>
      </div>

      {/* Our team */}
      <div className="max-w-screen-lg mx-auto px-4 py-16">
        <p className="text-gray-400">Our team</p>
        <h1 className="text-2xl sm:text-3xl font-bold py-5">The leadership team</h1>
        <p className="text-gray-700">
          Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
          Traction stock user experience deployment beta innovator incubator focus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-screen-lg mx-auto px-4 pb-16 text-center">
        <div>
          <img src={Logo6} alt="" className="mx-auto" />
          <h2 className="text-xl sm:text-2xl font-bold py-3">Michael Scott</h2>
          <p className="text-gray-400">General Manager</p>
        </div>
        <div>
          <img src={Logo7} alt="" className="mx-auto" />
          <h2 className="text-xl sm:text-2xl font-bold py-3">Michael Scott</h2>
          <p className="text-gray-400">General Manager</p>
        </div>
        <div>
          <img src={Logo8} alt="" className="mx-auto" />
          <h2 className="text-xl sm:text-2xl font-bold py-3">Michael Scott</h2>
          <p className="text-gray-400">General Manager</p>
        </div>
      </div>

      {/* Our values */}
      <div className="bg-blue-950 px-4">
        <div className="max-w-screen-lg mx-auto py-16">
          <p className="text-white">Our values</p>
          <h1 className="text-2xl sm:text-3xl font-bold py-5 text-white">Things in we believe</h1>
          <p className="text-white">
            Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
            Traction stock user experience deployment beta innovator incubator focus.
          </p>
        </div>

        <div className="max-w-screen-lg mx-auto flex flex-col gap-16 pb-16">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src={Logo9} alt="" className="w-20 h-20" />
            <div>
              <h1 className="text-xl text-white font-bold py-3">We are committed.</h1>
              <p className="text-white">
                Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src={Logo10} alt="" className="w-20 h-20" />
            <div>
              <h1 className="text-xl text-white font-bold py-3">We are responsible.</h1>
              <p className="text-white">
                Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src={Logo11} alt="" className="w-20 h-20" />
            <div>
              <h1 className="text-xl text-white font-bold py-3">We aim for progress.</h1>
              <p className="text-white">
                Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
