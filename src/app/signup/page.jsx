import Image from "next/image"
import SignupForm from "./SignupForm"

export default function SignUp() {
  return (
    <div className="h-[calc(100dvh-4rem)] overflow-hidden bg-ink">
      <div className="container h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="hidden lg:block w-1/2">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
            <Image
              src="https://res.cloudinary.com/dy2p8ntuj/image/upload/v1757405257/signUp-page_eun6yz.png"
              alt="Sign up image"
              width={800}
              height={800}
              quality={100}
              className="w-full h-[420px] xl:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </div>

        <div className="w-[90%] sm:w-[70%] lg:w-1/2 max-h-full overflow-y-auto p-6 sm:p-8 bg-ink-2 border border-white/[0.06] rounded-2xl shadow-xl shadow-black/30">
          <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">Join us</span>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold mt-2 mb-1 bg-gradient-to-r from-gold-soft to-gold bg-clip-text text-transparent">
            Find your horizon
          </h1>
          <p className="text-mist-dim text-sm mb-2">Create an account to start browsing and listing homes.</p>

          <SignupForm />
        </div>
      </div>
    </div>
  )
}