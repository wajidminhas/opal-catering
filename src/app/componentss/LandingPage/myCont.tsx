import Image from "next/image"
import Ginvera from '../../asset/main/Ginevra.jpg'

const MyCont = () => {
  return (
    <div className=" flex ">
     <div className="w-[500px] h-[400pxpx] ">
        <Image src={Ginvera} alt="Ginvera"></Image>
     </div>

     
        <Image src={Ginvera} alt="Ginvera"></Image>
        <Image src={Ginvera} alt="Ginvera"></Image>
    
    
    </div>
  )
}

export default MyCont
