'use client';
import { UserContext } from "@/context/user";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemeber] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
      remember
    }

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });

    if (response.ok) {
      const data = await response.json();
      setRemeber(true);
      setEmailCheck(false);
      setpasswordCheck(false);
      router.push("/");
      setUser(data.user);
      alert("Welcome! " + data.user.username);
    } else {
      const errorData = await response.json();
      if (errorData.message === "User Does not exist") {
        setEmailCheck(true);
      } else if (errorData.message === "Password is incorrect") {
        setpasswordCheck(true);
      }
    }
  }

  return (
    <form className="max-w-lg w-full mt-5 rounded-lg" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
        <input type="email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />
        {emailCheck ? <div className="text-red-500 text-sm mt-2">User Does not Exist</div> : null}
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-5 text-sm font-medium text-white">Your password</label>
        <div className="flex row relative justify-end items-center">
          <input type={showPassword ? 'text' : 'password'} id="password" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 absolute" onChange={(e) => setPassword(e.target.value)} value={password} required />
          <div className="z-10 pr-3.5" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ?
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="img" aria-label="Visibility Icon" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M8 2.008c3.934 0 6.473 3.129 7.455 4.583l.043.064C15.713 6.97 16 7.391 16 8s-.287 1.03-.502 1.345l-.043.064c-.982 1.454-3.521 4.583-7.455 4.583S1.527 10.863.545 9.41l-.043-.064C.287 9.03 0 8.609 0 8s.287-1.03.502-1.345l.043-.064C1.527 5.137 4.066 2.008 8 2.008ZM9.13 4.13A5.147 5.147 0 0 0 8 4.005C5.75 4.005 3.927 5.794 3.927 8c0 2.206 1.824 3.995 4.073 3.995 2.25 0 4.073-1.789 4.073-3.995 0-2.206-1.824-3.995-4.073-3.995.378 0 .756.045 1.13.126ZM8 10.996c1.687 0 3.055-1.341 3.055-2.996S9.687 5.004 8 5.004 4.945 6.345 4.945 8 6.313 10.996 8 10.996Z" clipRule="evenodd"></path>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="img" aria-label="Visibility On Icon" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M14.601 1.266a1.03 1.03 0 0 0-1.433.049L1.704 13.486a.987.987 0 0 0 .062 1.407 1.03 1.03 0 0 0 1.433-.049l1.793-1.904A7.348 7.348 0 0 0 8 13.587c3.934 0 6.473-3.133 7.455-4.59l.043-.063c.215-.316.502-.737.502-1.347s-.287-1.03-.502-1.346l-.043-.065a12.85 12.85 0 0 0-1.949-2.275l1.157-1.228a.987.987 0 0 0-.062-1.407Zm-2.93 4.585-.764.81c.096.292.148.603.148.926 0 1.657-1.368 3-3.055 3-.246 0-.485-.028-.714-.082l-.763.81c.458.176.956.272 1.477.272 2.25 0 4.073-1.79 4.073-4 0-.622-.145-1.211-.403-1.736ZM8 1.587c.919 0 1.762.171 2.526.452L8.98 3.68A5.13 5.13 0 0 0 8 3.587c-2.25 0-4.073 1.79-4.073 4 0 .435.07.853.201 1.245l-1.985 2.107A13.06 13.06 0 0 1 .545 8.998l-.043-.064C.287 8.618 0 8.197 0 7.587s.287-1.03.502-1.346l.043-.065C1.527 4.72 4.066 1.587 8 1.587Zm0 2c.327 0 .654.034.978.095l-.016.017A4.155 4.155 0 0 0 8 3.587Zm0 1c.041 0 .083 0 .124.002L4.966 7.942a2.978 2.978 0 0 1-.02-.355c0-1.657 1.367-3 3.054-3Z" clipRule="evenodd"></path>
              </svg>}
          </div>
        </div>
        {passwordCheck ? <div className="text-red-500 text-sm mt-5">Incorrect Password</div> : null}
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800 focus:bg-primary" onChange={() => setRemeber(!remember)} />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">Remember me</label>
      </div>
      <button type="submit" className="text-white hover:text-gray-800 bg-primary hover:bg-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer">Submit</button>
    </form>
  )
}
