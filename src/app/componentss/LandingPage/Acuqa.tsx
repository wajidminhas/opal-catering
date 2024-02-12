 

 import React from 'react'
 import Image from 'next/image'
 import Acquolina from '../../asset/main/Acquolina.jpg'
 
 const Acuqa = () => {
   return (
    <div className=" mx-auto flex flex-col  py-2 justify-center items-center scroll-smooth hover:scroll-auto">
    <Image
      className="lg:w-[1480px] lg:h-[400px] md:w-3/6 w-5/6 mb-5 md:mb-5 object-cover object-center rounded"
      alt="hero"
      src={Acquolina}
      height={400} width={1480} 
    />
    
  </div>
  
   )
 }
 
 export default Acuqa
 