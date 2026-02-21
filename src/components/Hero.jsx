import { Heart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero({ next }) {
  return (
    <div className="glass-card p-10 rounded-[32px] relative overflow-hidden text-center">

      {/* Soft radial glow behind heart */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div className="w-72 h-72 bg-pink-500/20 rounded-full blur-3xl mt-[-80px]" />
      </div>

      {/* Heart Icon */}
      <div className="relative flex justify-center mb-8">
        <Heart className="w-20 h-20 text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]" />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-4 text-gradient">
        Happy More Than 2 Months! Bubu🥂
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 text-lg mb-2">
        Because 2 months have 60 days we are spend more than that, Time flies when you're having fun...
      </p>

      <p className="text-pink-400 italic text-sm mb-10">
        (and doing some great things 😁😌🫣)
      </p>

      {/* Premium Button */}
      <motion.button
        onClick={next}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="
          relative w-full py-5 rounded-2xl 
          font-bold text-lg text-white
          bg-gradient-to-r from-pink-500 to-rose-500
          shadow-[0_0_40px_rgba(236,72,153,0.4)]
          hover:shadow-[0_0_70px_rgba(236,72,153,0.7)]
          transition-all duration-500
        "
      >
        <span className="flex items-center justify-center gap-3">
          Click to undress... I mean, unpack my feelings
          <ArrowRight className="w-5 h-5" />
        </span>
      </motion.button>

    </div>
  )
}