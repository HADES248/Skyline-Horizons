import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="container flex flex-col md:flex-row-reverse justify-between items-center">
      <div className="hidden md:inline w-[49%] mx-auto">
        <Image
          src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405257/contact-page_mj7iia.png"
          alt="home image"
          width={1176}
          height={980}
          quality={100}
          priority={true}
          className="lg:rounded-br-xl 2xl:rounded-b-xl" />
      </div>
      <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-gray-700 rounded-2xl shadow-lg w-[290px] mt-4 sm:w-[430px] sm:ml-6 xl:ml-16">
        <ContactForm />
        <div className="flex flex-col justify-center items-center">
          <p className="mb-2 text-lg sm:text-xl text-gray-200 inline">
            <a href="mailto:SkylineHorizons@gmail.com" className="hover:underline">SkylineHorizons@gmail.com</a>
          </p>
          <p className="text-lg sm:text-xl text-gray-200">
            <a href="tel:212-456-7890" className="hover:underline">212-456-7890</a>
          </p>
        </div>
      </div>
    </div>
  )
}

