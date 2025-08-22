import Foto from '../assets/Foto.png'
import Logo1 from '../assets/Logo2.svg'
import Logo2 from '../assets/Logo3.svg'
import Logo3 from '../assets/Logo4.svg'
import End from './End'
import Work from './Work'

const First = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-950">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 gap-10">
          {/* Текст */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Save time by building fast with Boldo Template
            </h1>
            <h3 className="text-white py-6 lg:py-10 text-base sm:text-lg w-full lg:w-3/4 mx-auto lg:mx-0">
              Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="text-white rounded-3xl w-48 sm:w-56 py-2 bg-green-400 hover:bg-green-500 transition">
                Buy template
              </button>
              <button className="text-white rounded-3xl border-2 border-white w-48 sm:w-56 py-2 hover:bg-white hover:text-blue-950 transition">
                Explore
              </button>
            </div>
          </div>

          {/* Картинка */}
          <div className="lg:w-1/2 flex justify-center">
            <img className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" src={Foto} alt="Hero" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center py-16 px-6">
        <h3 className="font-bold text-lg sm:text-xl py-2">Our Services</h3>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          Handshake infographic mass market
        </h1>
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          crowdfunding iteration.
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-24 py-10 text-center lg:text-left">
        <div>
          <img className="mx-auto lg:mx-0" src={Logo1} alt="Logo1" />
          <h1 className="text-xl lg:text-2xl py-3">Cool feature title</h1>
          <h3 className="text-gray-500 max-w-xs mx-auto lg:mx-0">
            Learning curve network effects return on investment.
          </h3>
        </div>

        <div>
          <img className="mx-auto lg:mx-0" src={Logo2} alt="Logo2" />
          <h1 className="text-xl lg:text-2xl py-3">Even cooler feature</h1>
          <h3 className="text-gray-500 max-w-xs mx-auto lg:mx-0">
            Learning curve network effects return on investment.
          </h3>
        </div>

        <div>
          <img className="mx-auto lg:mx-0" src={Logo3} alt="Logo3" />
          <h1 className="text-xl lg:text-2xl py-3">Cool feature title</h1>
          <h3 className="text-gray-500 max-w-xs mx-auto lg:mx-0">
            Learning curve network effects return on investment.
          </h3>
        </div>
      </div>

      {/* Work & End Sections */}
      <div className="">
        <Work />
      </div>
      <div className="">
        <End />
      </div>
    </>
  )
}

export default First
