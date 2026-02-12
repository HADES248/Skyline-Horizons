'use client';
import { UserContext } from "@/context/user";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";

export default function SignupForm() {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [userExists, setUserExists] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await authClient.signUp.email({
      name: username,
      email: email,
      password: password,
      callbackURL: "/",
    }, {
      onRequest: () => {
        console.log('making request...')
      }, onSuccess: () => {
        console.log('Request Successful');
      },
      onError: (ctx) => {
        console.log('Error!', ctx)
      }
    });
    setUser(data.user);
    redirect('/');
  }

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github"
    })
  }


  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-6 group">
        <input type="text" id="fullName" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete="off" onChange={(e) => setUserName(e.target.value)} value={username} required />

        <label htmlFor="fullName" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>

      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />

        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>

        {userExists ? <div className="text-red-500 text-sm mt-2">User already exists</div> : null}
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input type={showPassword ? 'text' : 'password'} id="password" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setPassword(e.target.value)} value={password} required />

        <div className="absolute z-20 top-1/3 right-0 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ?
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="img" aria-label="Visibility Icon" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M8 2.008c3.934 0 6.473 3.129 7.455 4.583l.043.064C15.713 6.97 16 7.391 16 8s-.287 1.03-.502 1.345l-.043.064c-.982 1.454-3.521 4.583-7.455 4.583S1.527 10.863.545 9.41l-.043-.064C.287 9.03 0 8.609 0 8s.287-1.03.502-1.345l.043-.064C1.527 5.137 4.066 2.008 8 2.008ZM9.13 4.13A5.147 5.147 0 0 0 8 4.005C5.75 4.005 3.927 5.794 3.927 8c0 2.206 1.824 3.995 4.073 3.995 2.25 0 4.073-1.789 4.073-3.995 0-2.206-1.824-3.995-4.073-3.995.378 0 .756.045 1.13.126ZM8 10.996c1.687 0 3.055-1.341 3.055-2.996S9.687 5.004 8 5.004 4.945 6.345 4.945 8 6.313 10.996 8 10.996Z" clipRule="evenodd"></path>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="img" aria-label="Visibility On Icon" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M14.601 1.266a1.03 1.03 0 0 0-1.433.049L1.704 13.486a.987.987 0 0 0 .062 1.407 1.03 1.03 0 0 0 1.433-.049l1.793-1.904A7.348 7.348 0 0 0 8 13.587c3.934 0 6.473-3.133 7.455-4.59l.043-.063c.215-.316.502-.737.502-1.347s-.287-1.03-.502-1.346l-.043-.065a12.85 12.85 0 0 0-1.949-2.275l1.157-1.228a.987.987 0 0 0-.062-1.407Zm-2.93 4.585-.764.81c.096.292.148.603.148.926 0 1.657-1.368 3-3.055 3-.246 0-.485-.028-.714-.082l-.763.81c.458.176.956.272 1.477.272 2.25 0 4.073-1.79 4.073-4 0-.622-.145-1.211-.403-1.736ZM8 1.587c.919 0 1.762.171 2.526.452L8.98 3.68A5.13 5.13 0 0 0 8 3.587c-2.25 0-4.073 1.79-4.073 4 0 .435.07.853.201 1.245l-1.985 2.107A13.06 13.06 0 0 1 .545 8.998l-.043-.064C.287 8.618 0 8.197 0 7.587s.287-1.03.502-1.346l.043-.065C1.527 4.72 4.066 1.587 8 1.587Zm0 2c.327 0 .654.034.978.095l-.016.017A4.155 4.155 0 0 0 8 3.587Zm0 1c.041 0 .083 0 .124.002L4.966 7.942a2.978 2.978 0 0 1-.02-.355c0-1.657 1.367-3 3.054-3Z" clipRule="evenodd"></path>
            </svg>
          }
        </div>

        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input type="tel" id="phone" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete="off" onChange={(e) => setPhone(e.target.value)} value={phone} required />

        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>

      </div>
      <div className="flex justify flex-col justify-center items-center mt-6">
        <button className="relative inline-flex items-center justify-center p-0.5 ml-1 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white">
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gray-800 rounded-md group-hover:bg-transparent cursor-pointer">
            Submit
          </span>
        </button>
        <div className="block mb-2">OR</div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <button
          type="button"
          className="text-white hover:text-gray-800 bg-primary hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#4285F4]/55 me-2 mb-2 cursor-pointer"
          onClick={handleGoogleSignIn}
        >
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
          </svg>
          Sign in with Google
        </button>
        <button
          type="button"
          className="text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-[#050708]/30 me-2 mb-2 cursor-pointer"
          onClick={handleGithubSignIn}>
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
          </svg>
          Sign in with Github
        </button>
      </div>
    </form>
  )
}
