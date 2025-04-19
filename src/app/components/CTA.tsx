'use client'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('Thanks for signing up!')
    setEmail('')
  }

  return (
    <section className="py-16 bg-indigo-50 text-center px-4">
      <h2 className="text-3xl font-semibold mb-4">Get Early Access</h2>
      <p className="mb-6 text-lg">Join our waitlist to try MemoTag early.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          required
          className="px-4 py-2 rounded-lg border w-full"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">Join Waitlist</button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </section>
  )
}
