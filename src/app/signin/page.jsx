import Link from "next/link"
import Image from "next/image"
import SignInForm from "./SignInForm"
export default function SignIn() {
  return (
    <div>
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <Image
          src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405247/log-in_hyvjnl.jpg"
          alt="Sign-In image"
          width={800}
          height={450}
          quality={100}
          priority={true}
          className="h-[565px] hidden sm:block sm:w-[50%] md:w-[60%]"
        />
        <div className="md:w-[40%] flex justify-center items-center mt-7.5 flex-col ml-4 md:ml-6 pr-6 mr-6 p-6 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 border-gray-700 rounded-2xl shadow-lg">
          <h1 className="2xl">Sign In to Skyline Horizons</h1>
          <SignInForm />
          <Link href='/signup' className="hover:text-primary mt-2">Don't have an account?</Link>
        </div>
      </div>
    </div>
  )
}
