

import dinnerHero from '@/app/asset/dinner-party/DinnerParty_Hero.jpg'
import Image from 'next/image'


import React from 'react'

const DinnerHero = () => {
  return (
    <section className=' lg:mb-10 mb-5'>
    <div className=" mx-auto flex flex-col  py-2 justify-center items-center scroll-smooth hover:scroll-auto">
    <Image
      className="lg:w-[90%] lg:h-[90vh] md:w-3/6 w-[90%] mb-5 md:mb-5 lg:object-cover lg:object-center rounded"
      alt="hero"
      src={dinnerHero}
      height={800} width={800} />
      </div>
      <div className=' lg:w-[60%] w-[90%] mx-auto border border-x-0 border-y-gray-500 lg:my-10'>
        <h3 className='uppercase font-semibold text-lg text-center lg:py-10 py-7'>
        dinner party 
        </h3>
        <h2 className='font-serif font-normal lg:text-5xl text-3xl text-center lg:pb-10 pb-7 text-black'>
        An Acquolina dinner party is the perfect blend of your vision and our passion.
          </h2>
      </div>
  </section>
  )
}

export default DinnerHero
