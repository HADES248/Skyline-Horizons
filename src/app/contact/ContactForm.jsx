'use client';
import { useState } from 'react'

export default function ContactForm() {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      email,
      subject,
      description,
    }

    const response = await fetch('/api/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactData)
    })
    if (response.ok) {
      setEmail("");
      setSubject("");
      setDescription("");
      alert("Query Enlisted Successfully!");
    }
  }

  return (

    <form className="mb-4 w-full max-w-sm 2xl:mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">Your email</label>
        <input type="email" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-200">Subject</label>
        <input type="text" id="subject" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-900 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-blue-500 focus:border-blue-500" placeholder="Let us know how we can help you" autoComplete="off" onChange={(e) => setSubject(e.target.value)} value={subject} required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">Your message</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border bg-gray-900 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..." required onChange={(e) => setDescription(e.target.value)} value={description} />
      </div>
      <div className="flex justify-center items-center">
        <button type="submit" className="w-1/2 text-white hover:text-gray-800 bg-primary hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 focus:bg-blue-700 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">Send message</button>
      </div>
    </form>
  )
}
