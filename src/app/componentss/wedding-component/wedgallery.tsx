import wed1A from "@/app/asset/wedding/Wedding_1A.jpg";
import wed2A from "@/app/asset/wedding/Wedding_2A.jpg";
import wed1B from "@/app/asset/wedding/Wedding_1B.jpg";
import wed2B from "@/app/asset/wedding/Wedding_2B.jpg";
import wed1C from "@/app/asset/wedding/Wedding_1C.jpg";
import wed2C from "@/app/asset/wedding/Wedding_2C.jpg";
import wedheroend from "@/app/asset/wedding/Wedding_hero-Djpg.jpg";
import Image from "next/image";
import React from "react";

const Wedgallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* 1st div of A  */}
          <div className="lg:w-2/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={wed1A}
            />
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={wed2A}
            />
          </div>
          {/* 2nd div B  */}

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={wed1B}
            />
          </div>

          <div className="lg:w-2/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={wed2B}
            />
          </div>

          {/* 3rd image C  */}

          <div className="lg:w-2/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={wed1C}
            />
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <Image
              alt="gallery"
              className=" inset-0 w-full h-full object-cover object-center"
              src={wed2C}
            />
          </div>
          <div className=" mx-auto flex flex-col p-4 py-10 lg:justify-center  items-center hover:scroll-auto scroll-smooth">
            <Image
              className="lg:w-[1480px] lg:h-[550px] md:w-3/6   md:mb-5   object-cover object-center rounded"
              alt="hero"
              src={wedheroend}
              height={400}
              width={1480}
            />
          </div>
         
        </div>
        
      </div>
    </section>
  );
};

export default Wedgallery;
