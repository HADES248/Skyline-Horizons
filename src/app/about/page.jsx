import Link from "next/link"

export default function About() {
  return (
    <>
      <div className="max-w-screen-2xl flex justify-center flex-col-reverse lg:flex-row items-center 2xl:mx-auto">
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl mb-6"><b>About Us</b></h1>
          <p>At Skyline Horizons, we are more than just a real estate company; we are your trusted partner in navigating the dynamic and ever-evolving property market. With a keen eye for detail and a commitment to excellence, we specialize in connecting you with your dream home, office space, or investment property.</p>
        </div>
        <img className="w-5xl lg:w-[650px] xl:w-[800px] lg:rounded-bl-xl 2xl:rounded-b-xl" src="about-page.jpg" alt="" />
      </div>
      <div className="max-w-screen-2xl mt-4 2xl:mx-auto p-8">
        <h1 className="text-2xl flex justify-center items-center mb-8 pt-8 border-t-1"><b>Why Skyline Horizons?</b></h1>
        <p className="mb-2">
          <b>Expertise:</b> Our team of seasoned professionals brings years of industry experience, extensive market knowledge, and a deep understanding of real estate trends.
        </p>
        <p className="mb-2">
          <b>Personalized Service:</b> We take the time to get to know our clients, offering tailored advice and solutions that align with their goals and preferences.
        </p>
        <p className="mb-2">
          <b>Transparency:</b> At Skyline Horizons, honesty and transparency are the cornerstones of our business. We keep you informed every step of the way, ensuring complete clarity in all our dealings.
        </p>
        <p>
          <b>Innovation:</b> We leverage the latest technology and innovative strategies to provide our clients with a competitive edge in the property market.
        </p>
        <h1 className="text-2xl flex justify-center mt-4 mb-4"><b>Get in Touch</b></h1>
        <p>Whether you are buying, selling, or renting, Skyline Horizons is here to assist you. <Link href="/contact" className="underline underline-offset-2 hover:text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          Contact us</Link> today and let us help you find your horizon.</p>
      </div>

    </>
  )
}


