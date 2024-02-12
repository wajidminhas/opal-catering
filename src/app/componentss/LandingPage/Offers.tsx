

import Image from 'next/image'
import React from 'react'
import TNY from '../../asset/main/TNY.png'

const Offers = () => {
  return (
    <div className=" px-5 py-5 mx-auto flex flex-wrap">
        <div className='flex flex-col items-center justify-center w-1/3 md:py-5 mx-auto'>
  <h2 className="sm:text-3xl text-2xl text-gray-900 items-center justify-center font-medium font-serif text-center  title-font mb-2 md:w-2/5">
        <span className=''> Featured in</span>
        <Image src={TNY} alt='tny image' className='w-[300px] h-[200px] '></Image>
  </h2>
  </div>
  <div className="md:w-2/3 md:pl-6 md:py-5 px-3 lg:px-10 md:px-10">
    <p className="leading-relaxed items-start  text-4xl font-serif font-semibold ">
    Let’s talk about how we can make your next event unforgettable.
    </p>
    <div className="flex md:mt-4 mt-6">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
        Button
      </button>
      <a className="text-indigo-500 inline-flex items-center ml-4">
        Learn More
        
      </a>
    </div>
  </div>
</div>

  )
}

export default Offers
