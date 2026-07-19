import Image from "next/image"
import Link from "next/link"

const features = [
  {
    title: "Expertise",
    description: "Our team of seasoned professionals brings years of industry experience, extensive market knowledge, and a deep understanding of real estate trends.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
  },
  {
    title: "Personalized Service",
    description: "We take the time to get to know our clients, offering tailored advice and solutions that align with their goals and preferences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "Honesty and transparency are the cornerstones of our business. We keep you informed every step of the way, ensuring complete clarity in all our dealings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We leverage the latest technology and innovative strategies to provide our clients with a competitive edge in the property market.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 9 21m0 0 5.25-7.5M9 21V3m6.75 4.5L21 3m0 0-5.25 4.5M21 3v18" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <div className="bg-ink">
      {/* ============ INTRO ============ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-0 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
        <div className="container relative flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-14 pt-12 lg:pt-16 pb-16">
          <div className="w-full lg:w-[52%]">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
              <Image
                src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405244/about-page_n4nibu.jpg"
                alt="Skyline Horizons office"
                width={1500}
                height={800}
                quality={100}
                priority={true}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
            </div>
          </div>

          <div className="w-full lg:w-[48%] flex flex-col items-center text-center">
            <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase mb-4">Who we are</span>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-paper mb-5">About us</h1>
            <p className="text-mist leading-relaxed max-w-md mx-auto">
              At Skyline Horizons, we&rsquo;re more than a real estate company &mdash; we&rsquo;re your trusted
              partner in navigating a dynamic property market. With a keen eye for detail and a commitment to
              excellence, we specialize in connecting you with your dream home, office space, or investment property.
            </p>
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="border-t border-white/[0.06] bg-ink-2/40">
        <div className="container py-16">
          <div className="text-center mb-12">
            <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Why choose us</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper mt-2">Why Skyline Horizons?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-6 rounded-2xl bg-ink-2 border border-white/[0.06] hover:border-gold/30 transition-colors duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-mist leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="container py-16">
        <div className="max-w-2xl mx-auto text-center p-10 rounded-2xl bg-gradient-to-br from-ink-2 to-ink-3 border border-white/[0.06]">
          <h2 className="font-display text-2xl font-semibold text-paper mb-3">Get in touch</h2>
          <p className="text-mist leading-relaxed mb-6">
            Whether you&rsquo;re buying, selling, or renting, Skyline Horizons is here to help you find your horizon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold hover:bg-gold-soft text-ink font-semibold text-sm transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}