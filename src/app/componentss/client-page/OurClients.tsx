
import Image, { StaticImageData } from "next/image"
import client from "@/app/componentss/client-page/client"



const OurClients = () => {
  return (
<section className="lg:m-3 m-2 lg:pb-12 pb-4 ">
    <h3 className="text-xl ">Here are some notable clients we’ve worked with over the years:</h3>
    <div className="w-[100%] min-h-[100vh] grid lg:grid-cols-6 md:grid-col-4 grid-col-3   ">
        {
            client.map((image:StaticImageData)=>(
                <div  className="">
            <Image src={image} alt="clients" className="min-w-[100%] min-h-[100%] " />
          </div>
            ))
        }
    </div>
</section>
  )
}

export default OurClients
