
import React from 'react'
import Image from 'next/image'
import wedhero from '@/app/asset/wedding/wedshero.jpeg'

const WedHero = () => {
  return (
  <section className=' lg:mb-10'>
    <div className=" mx-auto flex flex-col  py-2 justify-center items-center scroll-smooth hover:scroll-auto">
    <Image
      className="lg:w-[90%] lg:h-[90vh] md:w-3/6 w-[90%] mb-5 md:mb-5 lg:object-cover lg:object-center rounded"
      alt="hero"
      src={wedhero}
      height={800} width={800} />
      </div>
      <div className=' lg:w-[70%] w-[90%] mx-auto bg-gray-300 border border-y-gray-500 lg:my-10'>
        <h3 className='uppercase font-semibold text-lg text-center lg:py-10 py-7'>wedding</h3>
        <h2 className='font-serif font-normal lg:text-5xl text-3xl text-center lg:pb-10 pb-7 text-black'>Let our food help you celebrate your special day.</h2>
      </div>
  </section>
  )
}

export default WedHero
