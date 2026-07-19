import Link from "next/link"
import Image from "next/image"
import SignInForm from "./SignInForm"

export default function SignIn() {
  return (
    <div className="h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden flex items-center bg-ink">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-6">
        <div className="hidden sm:block w-full lg:w-[48%]">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
            <Image
              src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405247/log-in_hyvjnl.jpg"
              alt="Sign-In image"
              width={800}
              height={565}
              quality={100}
              priority={true}
              className="w-full h-[320px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </div>

        <div className="w-full sm:w-[85%] lg:w-[38%] p-6 sm:p-8 bg-ink-2 border border-white/[0.06] rounded-2xl shadow-xl shadow-black/30">
          <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Welcome back</span>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-paper mt-2 mb-1">
            Sign in to Skyline Horizons
          </h1>
          <p className="text-mist-dim text-sm mb-2">Pick up where you left off.</p>

          <SignInForm />

          <Link href='/signup' className="block text-center text-sm text-mist hover:text-gold transition-colors mt-5">
            Don&rsquo;t have an account? <span className="text-gold">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}