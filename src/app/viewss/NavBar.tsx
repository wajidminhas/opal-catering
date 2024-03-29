import Image from "next/image";
import Link from "next/link";
import logo from "../asset/logo/logo.png";
import logo1 from "../asset/logo/logo1.jpeg";

const NavBar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image src={logo1} alt="logo" className="w-[100px] h-[100px]" />

            <span className="ml-3 text-xl"></span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/MyClient" className="mr-5 hover:text-gray-900">
              Client
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Gallery
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Press
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
         
        </div>
      </header>
    </div>
  );
};

export default NavBar;
