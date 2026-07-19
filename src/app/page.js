'use client';
import Image from 'next/image';
import Footer from '../components/Footer';
import SearchBar from '@/components/SearchBar';
import HouseList from './HouseList';

const stats = [
  { value: '1000+', label: 'Premium homes' },
  { value: '80%', label: 'Properties sold' },
  { value: '20+', label: 'Awards won' },
];

const reviews = [
  {
    title: 'Exceptional experience, intuitive design',
    quote: 'The website offers a seamless browsing experience with user-friendly navigation. It simplifies property searches effectively.',
    rating: 'https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405249/rating-45_e9g5pf.png',
    name: 'Jack Quad',
    role: 'Buyer',
  },
  {
    title: 'Solid foundation for any transaction',
    quote: "Whether you're buying or renting a property, their process is seamless.",
    rating: 'https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405249/rating-50_sx3gqf.png',
    name: 'William Dafoe',
    role: 'Buyer',
  },
  {
    title: 'Transparent, accurate listings',
    quote: 'Provides accurate details about properties. The transparency builds trust and helps buyers decide with confidence.',
    rating: 'https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405249/rating-50_sx3gqf.png',
    name: 'Chandler Bing',
    role: 'Renter',
  },
  {
    title: 'Direct, efficient collaboration',
    quote: 'Facilitates direct communication with property owners and agents, saving time and eliminating unnecessary brokerage fees.',
    rating: 'https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405248/rating-40_diobjy.png',
    name: 'Joey Tribbiani',
    role: 'Property seller',
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO — night ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink via-ink to-ink-2">
        <div className="pointer-events-none absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
        <div className="container relative flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-6 pt-10 lg:pt-16 pb-16">
          <div className="w-full lg:w-[55%]">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
              <Image
                src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405253/front-page_k9xcmr.jpg"
                alt="Modern home at dusk"
                width={1150}
                height={764}
                quality={100}
                priority={true}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-6">
            <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">
              Premium real estate
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] text-paper mb-5">
              Find your place<br />on the horizon
            </h1>
            <p className="text-mist text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Browse premium houses and villas, connect directly with owners and agents, and close with confidence.
            </p>

            <SearchBar />

            <dl className="flex flex-wrap justify-center text-center lg:justify-start lg:text-left gap-x-10 gap-y-6 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center lg:items-start">
                  <dt className="spec-mono text-3xl font-semibold text-gold mb-1">{stat.value}</dt>
                  <dd className="text-sm text-mist-dim">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ PARTNER LOGOS ============ */}
      <section className="bg-ink-2 border-y border-white/[0.06]">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 justify-items-center items-center py-12">
          <div className="w-full max-w-[170px] flex items-center justify-center p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-300">
            <Image
              src="no-broker.svg"
              width={250}
              height={250}
              alt="No Broker logo"
              className="grayscale brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
          <div className="w-full max-w-[170px] flex items-center justify-center p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-300">
            <Image
              src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405249/realty_qir6ec.png"
              width={250}
              height={250}
              alt="Realty logo"
              className="grayscale brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
          <div className="w-full max-w-[170px] flex items-center justify-center p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-300">
            <Image
              src="zillow.svg"
              width={250}
              height={250}
              alt="Zillow logo"
              className="grayscale brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
          <div className="w-full max-w-[170px] flex items-center justify-center p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-300">
            <Image
              src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405244/equinix_c2lb4p.png"
              width={250}
              height={250}
              alt="Equinix logo"
              className="grayscale brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      {/* ============ POPULAR RESIDENCES — night ============ */}
      <section className="bg-ink">
        <div className="container pt-14 pb-16">
          <div className="flex items-end justify-between mb-10 px-2">
            <div>
              <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Curated listings</span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper mt-2">
                Most popular residences
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <HouseList />
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="bg-ink">
        <div className="container py-16">
          <div className="text-center mb-10">
            <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Word on the street</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper mt-2">Reviews</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col p-8 rounded-2xl bg-ink-2 border border-white/[0.06] hover:border-gold/30 transition-colors duration-300"
              >
                <span className="font-display text-4xl text-gold/70 leading-none mb-3">&ldquo;</span>
                <blockquote className="mb-6">
                  <h3 className="font-display text-lg font-semibold text-paper mb-2">{review.title}</h3>
                  <p className="text-mist text-sm leading-relaxed">{review.quote}</p>
                </blockquote>
                <figcaption className="mt-auto flex items-center justify-between pt-4 border-t border-white/[0.08]">
                  <div>
                    <div className="font-medium text-paper text-sm">{review.name}</div>
                    <div className="text-xs text-mist-dim">{review.role}</div>
                  </div>
                  <div className="bg-transparent rounded-md px-1.5 py-1">
                    <Image
                      src={review.rating}
                      className="w-20 h-auto"
                      width={80}
                      height={20}
                      quality={100}
                      alt={`Rating for ${review.name}`}
                    />
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}