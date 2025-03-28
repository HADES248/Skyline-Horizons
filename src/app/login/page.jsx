import Link from "next/link"
export default function LogIn() {
  return (
    <div>
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <img src="sign-in.jpg" className="h-[565px] hidden sm:block sm:w-[400px] lg:w-[600px] xl:w-[850px] object-cover"/>
        <div className="md:w-1/2 flex justify-center items-center mt-3 flex-col ml-4 md:ml-6 pr-6 mr-6 p-6 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 border-gray-700 rounded-xl shadow-lg">
          <h1 className="2xl">Login to Skyline Horizons</h1>
          <form className="max-w-lg w-full mt-5 rounded-lg">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
              <input type="password" id="password" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800 focus:bg-primary" required />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="text-white bg-primary focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-blue-700 cursor-pointer">Submit</button>
          </form>
          <Link href='/signup' className="hover:text-primary mt-2">Don't have an account?</Link>
        </div>
      </div>
    </div>
  )
}
