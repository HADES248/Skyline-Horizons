import SignupForm from "./SignupForm"

export default function SignUp() {
  return (
    <div className="container flex flex-col justify-center items-center h-[565px]">
      <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 border-gray-700 
      rounded-lg shadow-lg w-[90%] sm:w-[44%]">
        <h1 className="inline text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 font-semibold">
          Find Your Horizon!
        </h1>
        <SignupForm />
      </div>
    </div>
  )
}

