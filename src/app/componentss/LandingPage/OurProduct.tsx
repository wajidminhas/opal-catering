import Image from 'next/image'
import Ginerva from '../../asset/main/Ginevra.jpg'
import Pasta from '../../asset/main/Pasta-Station-2.png'
import dining from '../../asset/main/dining.jpg'

import React from 'react'

const OurProduct = () => {
  return (
    <section className="text-gray-600  body-font">
  
      
     
        <div className="flex flex-col md:flex-row bg-gray-100 lg:flex-row  mt-5 lg:mt-48 gap-2 scroll-smooth hover:scroll-auto">
          <div className=" lg:w-4/4 md:w-2/3 ">
            <Image
              alt="gallery"
              className="w-[8000px] h-[500px] object-cover "
              src={Ginerva}
            />
          </div>
          <div className='flex flex-col w-4/4 '>
          <div className="">
            <Image
              alt="gallery"
              className=" object-cover w-[500px] h-[250px] "
              src={Pasta}
              // width={450}
              // height={450}
            />
          </div>
          <div className="">
            <Image
              alt="gallery"
              className="w-[500px] h-[250px]  "
              src={dining}
              width={400}
              height={400}
            />
          </div>
          </div>
       
      
    </div>
  </section>
  
  )
}

export default OurProduct
