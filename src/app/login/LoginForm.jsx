'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemeber] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState(false);

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
      alert("Welcome! " + data.user.name);
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
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
        <input type="password" id="password" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} value={password} required />
        {passwordCheck ? <div className="text-red-500 text-sm mt-2">Password is incorrect</div> : null}
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" className="w-4 h-4 border rounded-sm bg-gray-700 border-gray-600 ring-offset-gray-800 focus:bg-primary" onChange={() => setRemeber(!remember)} />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">Remember me</label>
      </div>
      <button type="submit" className="text-white bg-primary focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-blue-700 cursor-pointer">Submit</button>
    </form>
  )
}
