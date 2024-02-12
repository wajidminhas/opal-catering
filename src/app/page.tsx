import Image from 'next/image'
import HeroSection from './componentss/LandingPage/HeroSection'
import Content from './componentss/LandingPage/Content'
import OurProduct from './componentss/LandingPage/OurProduct'
import MyCont from './componentss/LandingPage/myCont'
import Perfect from './componentss/LandingPage/Perfect'
import Acuqa from './componentss/LandingPage/Acuqa'
import Offers from './componentss/LandingPage/Offers'
import LpMail from './componentss/LandingPage/LpMail'
import Gallery from './componentss/LandingPage/Gallery'
import Footer from './viewss/Footer'

export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>
    <Content></Content>
    <OurProduct></OurProduct> 
    {/* <MyCont></MyCont> */}
    <Perfect></Perfect>
    <Acuqa></Acuqa>
    <Offers></Offers>
    <LpMail />
    <Gallery />
    {/* <Footer /> */}
   </div>
  )
}
