import Image from "next/image";
import hero from '@/app/asset/client page/hero-client.jpg'





const ClientHero = () => {

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex  lg:py-4 md:py-2 py-2 items-center justify-center flex-col">
        <Image
          className="lg:w-[100%] lg:h-[90vh] md:w-[100%] md-h-[80vh] w-full mb-10 object-cover object-center rounded"
          alt="hero"
          src={hero}
        />
      </div>
    </section>
  );
};

export default ClientHero;
