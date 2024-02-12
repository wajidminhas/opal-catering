import Image from "next/image"
import fun from '../../asset/main/FUN00422.jpg'

const Content = () => {
  return (

      <div className="text-gray-600 body-font">
  <div className="container flex flex-wrap px-5 -py-5 md:my-5 mx-auto justify-around items-center">
    <div className="md:w-1/2 md:pr-12 md:py-10 md:border-r md:border-b-0 mb-5 md:mb-0 pb-3 -mt-2 px-4 border-b border-gray-200">
      <h1 className="sm:text-3xl text-2xl font-medium py-2 title-font mb-2 text-gray-900">
      Celebrazione!
Italian hospitality at its finest.
      </h1>
      <p className="leading-relaxed text-base">
      Acquolina approaches each event with the special attention it deserves.
       We shell work with you every step of the way, bringing with us our innate
        sense of sophistication and elegance. We specialize in upscale cocktails,
         seated and buffet dinners, weddings, galas and charity events. 
         With fundamentals in traditional Italian cooking, we customize 
         every menu for each occasion and ensure that you receive the finest in Italian hospitality. 
      </p>
      <a className="text-indigo-500 inline-flex items-center mt-4">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div >
    <div className="lg:w-[400px] lg:h-[400px] md:w-3/6 w-5/6 mb-5  object-cover object-center rounded">
    <Image src={fun} alt="funImage">

    </Image>
  </div>
</div>
</div>

    
  )
}

export default Content
