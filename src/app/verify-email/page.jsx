export default function VerifyEmailPage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-cyan-700 text-white px-6 z-10">

      <div className="bg-gray-900 p-10 rounded-xl text-center max-w-md">

        <h1 className="text-2xl font-bold mb-4">
          Verify Your Email
        </h1>

        <p className="text-gray-400 mb-6">
          We've sent a verification link to your email.
          Please check your inbox and click the link to continue.
        </p>

        <p className="text-sm text-gray-500">
          Didn’t receive it? Check your spam folder.
        </p>

      </div>

    </div>
  );
}
