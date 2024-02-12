
import dinner1A from '@/app/asset/dinner-party/dinner-1A.jpeg'
import dinner2A from '@/app/asset/dinner-party/dinner-2A.jpg'
import dinner1B from '@/app/asset/dinner-party/DinnerParty_1B.jpg'
import dinner2B from '@/app/asset/dinner-party/DinnerParty_2B.jpg'
import dinner1C from '@/app/asset/dinner-party/DinnerParty_1C.jpg'
import dinner2C from '@/app/asset/dinner-party/DinnerParty_2C.jpg'
import Image from 'next/image'

import React from 'react'

const DinnerGallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* 1st div of A  */}
          <div className="lg:w-2/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={dinner1A}
            />
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={dinner2A}
            />
          </div>
          {/* 2nd div B  */}

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={dinner1B}
            />
          </div>

          <div className="lg:w-2/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={dinner2B}
            />
          </div>

          {/* 3rd image C  */}

          <div className="lg:w-2/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={dinner1C}
            />
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={dinner2C}
            />
          </div>
        
         
        </div>
        
      </div>
    </section>
  )
}

export default DinnerGallery
