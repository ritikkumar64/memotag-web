'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-gray-100">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">
        AI for Dementia Care
      </motion.h1>
      <p className="text-xl mb-6 max-w-2xl">Revolutionizing elderly care with personalized AI tracking and insights.</p>
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition">Request Demo</button>
    </section>
  )
}
