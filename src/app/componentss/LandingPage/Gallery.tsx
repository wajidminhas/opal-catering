import Image from "next/image";
import img from '../../asset/Gallery/img.jpeg'
import image2 from '../../asset/Gallery/image2.jpeg'
import image3 from '../../asset/Gallery/image3.jpeg'
import image4 from '../../asset/Gallery/image4.jpeg'
import image5 from '../../asset/Gallery/image5.jpeg'
import image6 from '../../asset/Gallery/image6.jpeg'
import image7 from '../../asset/Gallery/image7.jpeg'
import image8 from '../../asset/Gallery/image8.jpeg'
import image9 from '../../asset/Gallery/image9.jpeg'
import image10 from '../../asset/Gallery/image10.jpeg'
import logo from '../../asset/logo/logo.png'

const Gallery = () => {
  return (
    <section className="text-gray-600 bg-gray-100 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap p-1-m-4">
          <div className="lg:w-1/4 md:w-1/2  w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={img}
              />
            </a>
          </div>
          {/* img 2 */}
          <div className="lg:w-1/4 md:w-1/2 p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image2}
              />
            </a>
          </div>
          {/* image3  */}
          <div className="lg:w-1/4 md:w-1/2 p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image3}
              />
            </a>
          </div>
          {/* image 4 */}
          <div className="lg:w-1/4 md:w-1/2 p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image4}
              />
            </a>
          </div>
          {/* image 5 */}
          <div className="lg:w-1/4 md:w-1/2 p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image5}
              />
            </a>
          </div>
          {/* image 6 */}
          <div className="lg:w-1/4 md:w-1/2 p-1  w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image6}
              />
            </a>
          </div>
          {/* image 7 */}
          <div className="lg:w-1/4 md:w-1/2 p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image7}
              />
            </a>
          </div>
          {/* image 8 */}
          <div className="lg:w-1/4 md:w-1/2 p-1  w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image8}
              />
            </a>
          </div>
          {/* image 9 */}
          <div className="lg:w-1/4 md:w-full p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image9}
              />
            </a>
          </div>
          {/* image 10 */}
          <div className="lg:w-1/4 md:w-full p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={image10}
              />
            </a>
          </div>
          {/* image 11 */}
          <div className="lg:w-1/4 md:w-full p-1 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={logo}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
