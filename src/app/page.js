'use client';
import Image from 'next/image';
import Footer from '../components/Footer';
import Card from "../components/Card";
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <>
      <div className="container flex flex-col lg:flex-row items-center justify-between">
        <div className="w-auto lg:w-[70%] mx-auto">
          <Image
            src="/front-page.jpg"
            alt="home image"
            width={1150}
            height={764}
            quality={100}
            priority={true}
            className="lg:rounded-br-xl 2xl:rounded-b-xl" />
        </div>
        <div className="md:w-1/2 flex justify-center items-center flex-col ml-4 md:ml-10 pr-6">
          <h1 className="text-xl md:text-2xl mt-5 font-bold">Welcome to Skyline Horizons</h1>

          <SearchBar />

          <div className="flex justify-between flex-col sm:flex-row gap-5 mt-10">
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1000+</dt>
              <dd>Premium Houses</dd>
            </div>
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 text-3xl font-extrabold">80%</dt>
              <dd >Properties Sold!</dd>
            </div>
            <div className="flex flex-col items-start justify-center">
              <dt className="mb-2 text-3xl font-extrabold">20+</dt>
              <dd >Awards Won</dd>
            </div>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4 justify-items-center items-center mt-14 mb-10">
        <div className="w-[180px] lg:w-[220px]">
          <Image src="/no-broker.svg"
            width={250}
            height={250}
            alt="no-broker logo"
          />
        </div>
        <div className="w-[180px] lg:w-[220px]">
          <Image src="/realty.png"
            width={250}
            height={250}
            alt="realty logo"
          />
        </div>
        <div className="w-[180px] lg:w-[220px]">
          <Image src="/zillow.svg"
            width={250}
            height={250}
            alt="zillow logo"
          />
        </div>
        <div className="w-[180px] lg:w-[220px]">
          <Image src="/equinix.png"
            width={250}
            height={250}
            alt="equinix logo"
          />
        </div>
      </div>
      <div className="container">
        <h1 className="font-bold mt-10 mb-12 ml-7 sm:ml-10 underline underline-offset-2 decoration-4 decoration-primary text-white tracking-wide">
          Most Popular Residences
        </h1>

        {/* Houses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 justify-center items-center w-[95%] mx-auto">
          {/* Loading Houses */}
          <Card />
        </div>

        {/* Reviews */}
        <div className="m-4">
          <h1 className="flex justify-center items-center font-bold mb-7 underline underline-offset-2 decoration-4 decoration-primary text-white tracking-wide">
            Reviews
          </h1>

          <div className="grid mb-8 shadow-lg md:shadow-xs rounded-xl bg-gradient-to-br from-primary to-cyan-600 md:mb-12 md:grid-cols-2">
            <figure className="flex flex-col items-center justify-center p-8 text-center border-b rounded-tl-lg md:rounded-ss-lg md:border-e border-gray-300 bg-transparent">
              <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-300">
                <h3 className="text-lg font-semibold text-white">Exceptional User Experience and Intuitive Design</h3>
                <p className="my-2">The website offers a seamless browsing experience with user-friendly navigation. It simplifies property searches effectively.&#34;</p>
              </blockquote>
              <Image
                src="/rating-45.png"
                className="w-36 mb-8"
                width={80}
                height={80}
                quality={100}
                alt='ratings 4.5' />
              <figcaption className="flex items-center justify-center">
                <div className="font-medium text-white">
                  <div>Jack Quad</div>
                  <div className="text-sm text-gray-300">Buyer</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center border-b md:rounded-se-lg border-gray-300 bg-transparent">
              <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-300">
                <h3 className="text-lg font-semibold text-white">Solid foundation for any transaction</h3>
                <p className="my-2">Whether you&#39;re buying or renting a property, their procedure is seamless!</p>
              </blockquote>
              <Image
                src="/rating-50.png"
                className="w-36 mb-8"
                width={80}
                height={80}
                quality={100}
                alt='ratings 5' />
              <figcaption className="flex items-center justify-center">
                <div className=" font-medium text-white ms-3">
                  <div>Willam Dafoe</div>
                  <div className="text-sm text-gray-300">Buyer</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center border-b md:rounded-es-lg md:border-b-0 md:border-e border-gray-300 bg-transparent">
              <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-300">
                <h3 className="text-lg font-semibold text-white">Comprehensive Property Information and Transparency</h3>
                <p className="my-2">Provides accurate details about properties. The transparency builds trust and ensures informed decision-making for buyers and renters.&#34;</p>
              </blockquote>
              <Image
                src="/rating-50.png"
                className="w-36 mb-8"
                width={80}
                height={80}
                quality={100}
                alt='ratings 5.0 1' />
              <figcaption className="flex items-center justify-center">
                <div className="font-medium text-white">
                  <div>Chandler Bing</div>
                  <div className="text-sm text-gray-300">Renter</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center rounded-b-lg md:rounded-se-lg bg-tranparent">
              <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-300">
                <h3 className="text-lg font-semibold text-white">Efficient Collaborating</h3>
                <p className="my-2">Facilitates direct communication with property owners and agents. This feature saves time and eliminates unnecessary brokerage fees.&#34;</p>
              </blockquote>
              <Image
                src="/rating-40.png"
                className="w-36 mb-8"
                width={80}
                height={80}
                quality={100}
                alt='ratings 4.0' />
              <figcaption className="flex items-center justify-center">
                <div className="font-medium text-white">
                  <div>Joey Tribbiani</div>
                  <div className="text-sm text-gray-300">Property Seller</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
