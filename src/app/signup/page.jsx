import SignupForm from "./SignupForm"

export default function SignUp() {
  return (
    <div className="container flex flex-row justify-center items-center h-[565px]">
      <img className="hidden lg:block w-1/2" src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405257/signUp-page_eun6yz.png" alt="sign up image" />
      <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-gray-700 
      rounded-2xl shadow-lg w-[90%] sm:w-[44%]">
        <h1 className="inline text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600 font-semibold">
          Find Your Horizon!
        </h1>
        <SignupForm />
      </div>
    </div>
  )
}

