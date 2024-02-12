import Image from 'next/image'
import acquo from '../../asset/main/acquo.jpg'


const Herodiv = () => {
  return (
    
    <div className=" mx-auto flex flex-col  py-10 lg:justify-center  items-center hover:scroll-auto scroll-smooth">
  <Image
    className="lg:w-[1480px] lg:h-[400px] md:w-3/6  mb-5 md:mb-5  object-cover object-center rounded"
    alt="hero"
    src={acquo}
    height={400} width={1480} 
  />
  
</div>

  )
}

export default Herodiv
