import { Gift } from "lucide-react"
import { motion } from "framer-motion"

export default function RewardSection({ score, restart }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="glass-card p-10 rounded-[32px] border border-pink-500/30 
      shadow-[0_0_60px_rgba(236,72,153,0.15)] 
      relative overflow-hidden text-center"
    >

      {/* Soft background glows */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500"></div>

      {/* Gift Icon */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative mb-8 flex justify-center"
      >
        <Gift className="w-18 h-18 text-pink-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.7)]" />
      </motion.div>

      <h2 className="text-4xl font-extrabold mb-3 text-white tracking-tight">
        You Passed!
      </h2>

      <p className="text-gray-400 mb-10 font-medium text-lg">
        Your score: {score}/3
      </p>

      {/* Premium Floating Coupon */}
      <motion.div
        whileHover={{ rotate: 0, scale: 1.03 }}
        initial={{ rotate: 2 }}
        className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a]
        border-2 border-dashed border-pink-500/70
        rounded-2xl p-8 mb-10
        shadow-[0_15px_35px_-5px_rgba(236,72,153,0.25)]
        hover:shadow-[0_20px_60px_-5px_rgba(236,72,153,0.4)]
        transition-all duration-500
        cursor-pointer overflow-hidden"
      >

        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-4 uppercase tracking-widest">
            Naughty Coupon
          </h3>

          <p className="text-gray-200 text-sm mb-6 font-medium leading-relaxed">
            Good for 1 entire evening of absolutely whatever you want.
          </p>

          <div className="border-t border-pink-500/20 pt-4">
            <p className="text-xs text-pink-300/70 italic">
              *Terms & Conditions: I must see me your secret colour which we are talking about. Expires never.*
            </p>
          </div>
        </div>
      </motion.div>

      <p className="text-base text-gray-300 mb-10 leading-relaxed">
        These past two months have been magic, and the best moment of our relationship is you doing bachi act in front of me and specialy while we eat something like samosa and the special one ganne ka juice. I can’t wait for all the months to come. ❤️
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={restart}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full 
        text-sm font-semibold text-gray-300 
        bg-white/5 hover:bg-white/10 
        border border-white/10 hover:border-pink-500/40 
        transition-all duration-300"
      >
        Replay the magic
      </motion.button>

    </motion.div>
  )
}