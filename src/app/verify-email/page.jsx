export default function VerifyEmailPage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-ink text-paper px-6 z-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative w-full max-w-md p-10 bg-ink-2 border border-white/[0.06] rounded-2xl shadow-2xl shadow-black/40 text-center">
        <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>

        <span className="spec-mono text-xs tracking-[0.2em] text-gold uppercase">One more step</span>
        <h1 className="font-display text-2xl font-semibold text-paper mt-2 mb-4">
          Verify your email
        </h1>

        <p className="text-mist leading-relaxed mb-5">
          We&rsquo;ve sent a verification link to your email. Please check your inbox and click the link to continue.
        </p>

        <p className="text-sm text-mist-dim">
          Didn&rsquo;t receive it? Check your spam folder.
        </p>
      </div>
    </div>
  );
}