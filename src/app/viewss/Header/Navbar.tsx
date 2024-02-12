
import logo from "@/app/asset/logo/opal.png"
import Link from "next/link"
import Image from "next/image"
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {
  return (
    <nav>
        <div className="navbar bg-white/30">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="text-2xl lg:hidden">
        <GiHamburgerMenu></GiHamburgerMenu>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>About</a></li>
      <li><a>Client</a></li>

      <li tabIndex={0}>
        <details>
          <summary>Gallery</summary>
          <ul className="p-2">
            <li><a>wedding</a></li>
            <li><a>Dinner party</a></li>
            <li><a>cocktail party</a></li>
           
          </ul>
        </details>
      </li>
      <li><a>Press</a></li>
      <li><a>contact</a></li>
      <li><a>opal to-go </a></li>
      </ul>
    </div>
    
      <Image src={logo} alt="" width={150} height={150} className="hidden lg:block pl-4" /> 
    
  </div>
  <div className="navbar-center ">
  <Image src={logo} alt="" width={100} height={100} className=" block lg:hidden" /> 
    <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li ><Link href='/' className="hover:text-orange-400 duration-300 uppercase">About</Link></li>
      <li><Link href='MyClient' className="hover:text-orange-400 duration-300 uppercase">client</Link></li>

      <li tabIndex={0}>
        <details>
          <summary className="hover:text-orange-400 duration-300 uppercase">Gallery</summary>
          <ul className="p-2">
            <li><Link href='wedding' className="hover:text-orange-400 duration-300 uppercase">wedding</Link></li>
            <li><Link href='dinner' className="hover:text-orange-400 duration-300 uppercase">dinner party</Link></li>
            <li><Link href='#' className="hover:text-orange-400 duration-300 uppercase">cocktail</Link></li>
          
          </ul>
        </details>
      </li>
      <li><Link href='#' className="hover:text-orange-400 duration-300 uppercase">press</Link></li>
      <li><Link href='#' className="hover:text-orange-400 duration-300 uppercase">contact</Link></li>
      <li><Link href='#' className="hover:text-orange-400 duration-300 uppercase">acq to-go</Link></li>
    </ul>

    </div>
  </div>
  {/* <div className="navbar-end">
  <label tabIndex={0} className=" pr-4">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-orange-400 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item hover:bg-black hover:text-white font-semibold">8</span>
        </div>
      </label>
     
  </div> */}
</div>
    </nav>
  )
}

export default Navbar
