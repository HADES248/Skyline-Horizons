export default function Contact() {
  return (
    <div className="max-w-screen-2xl flex flex-col justify-center items-center mt-3 2xl:mx-auto">
      <div className="p-6 bg-gray-800 border-gray-700 rounded-lg shadow-lg w-[280px] sm:w-[430px]">
        <form className="mb-6 w-full max-w-sm 2xl:mx-auto">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">Your email</label>
            <input type="email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-200">Subject</label>
            <input type="text" id="subject" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-blue-500 focus:border-blue-500" placeholder="Let us know how we can help you" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">Your message</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border bg-gray-900 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className=" text-white w-1/2 bg-primary hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:bg-blue-700 focus:ring-offset-2 focus:ring-blue-500">Send message</button>
          </div>
        </form>
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

