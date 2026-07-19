'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactData = { email, subject, description };

    const response = await fetch('/api/contact', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData)
    });
    
    if (response.ok) {
      setEmail("");
      setSubject("");
      setDescription("");
      alert("Query Enlisted Successfully!");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="mb-2 h-[64px]">
        <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-paper">Your email</label>
        <input type="email" id="email" className="text-sm rounded-lg block w-full p-2.5 bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow" placeholder="name@company.com" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />
      </div>
      <div className="mb-4 h-[72px]">
        <label htmlFor="subject" className="block mb-1.5 text-sm font-medium text-paper">Subject</label>
        <input type="text" id="subject" className="text-sm rounded-lg block w-full p-2.5 bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow" placeholder="Let us know how we can help you" autoComplete="off" onChange={(e) => setSubject(e.target.value)} value={subject} required />
      </div>
      {/* Set an explicit height for the textarea zone */}
      <div className="mb-3 h-[116px]">
        <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-paper">Your message</label>
        <textarea id="message" rows={3} className="block p-2.5 w-full text-sm rounded-lg bg-ink border border-white/10 placeholder-mist-dim text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-shadow resize-none" placeholder="Your message..." required onChange={(e) => setDescription(e.target.value)} value={description} />
      </div>
      <div className="flex justify-center items-center h-[25px]">
        <button type="submit" className="w-full sm:w-1/2 text-ink bg-gold hover:bg-gold-soft font-semibold rounded-lg text-sm px-5 py-2.5 cursor-pointer transition-colors duration-300">Send message</button>
      </div>
    </form>
  );
}
