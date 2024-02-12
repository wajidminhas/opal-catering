
import Image from "next/image"
import NYLP from '@/app/asset/logo/NYPL.png'


const Library = () => {
  return (
    <section className="">
       <div className="lg:my-20 md:my-16 my-4 ">

            <div className="bg-green-300 w-[60%] mx-auto border border-x-0 border-t-6  ">
                <Image src={NYLP} alt="New Yark Library" className="min-h-[100%] min-w-[100$] border-b-0"/>
            </div>
            <div className="w-[60%] mx-auto py-5 text-center border border-x-0 border-b-6  ">
                <h3 className="font-semibold font-mono py-6">“Acquolina has been a trusted vendor and friend of The Library for several years, delivering
                     wonderful food and impeccable back of house service to rental events of varying size and scale.”</h3>
                <p className="lg:text-lg  font-serif">— Emily Esposito, Director of Special Events, New York Public Library </p>
            </div>
       </div>
       
    </section>
  )
}

export default Library
