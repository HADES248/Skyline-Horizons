import Link from "next/link"
import Image from "next/image"
import LoginForm from "./LoginForm"
export default function LogIn() {
  return (
    <div>
      <div className="container flex flex-col sm:flex-row items-center justify-between overflow-x-hidden">
        <Image
          src="/log-in.jpg"
          alt="Log in image"
          width={1000}
          height={500}
          quality={100}
          priority={true}
          className="h-[565px] hidden sm:block sm:w-[50%] md:w-[60%] object-cover"
        />
        <div className="md:w-1/2 flex justify-center items-center mt-3 flex-col ml-4 md:ml-6 pr-6 mr-6 p-6 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 border-gray-700 rounded-xl shadow-lg">
          <h1 className="2xl">Login to Skyline Horizons</h1>
          <LoginForm />
          <Link href='/signup' className="hover:text-primary mt-2">Don't have an account?</Link>
        </div>
      </div>
    </div>
  )
}
