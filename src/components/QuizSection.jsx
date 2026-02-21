import { useState } from "react"
import { motion } from "framer-motion"
import { Flame, CheckCircle2, XCircle } from "lucide-react"
import { quizData } from "../data/quizData"

export default function QuizSection({ step, setStep, score, setScore }) {
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const index = step - 2
  const question = quizData[index]
  const progress = ((index + 1) / quizData.length) * 100

  const handleSelect = (idx, isCorrect) => {
    if (showResult) return

    setSelected(idx)
    setShowResult(true)

    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    setTimeout(() => {
      setStep(prev => prev + 1)
      setSelected(null)
      setShowResult(false)
    }, 2200)
  }

  return (
    <div className="glass-card p-10 rounded-[32px] w-full max-w-xl relative">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs tracking-widest text-pink-500 font-bold uppercase">
          Question {index + 1} of {quizData.length}
        </span>

        <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10">
          <Flame className="w-4 h-4 text-orange-500" />
          Spicy Level: High
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-8">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-rose-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Question */}
      <h2 className="text-3xl font-extrabold text-white mb-10 leading-snug">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-5">
        {question.options.map((opt, idx) => {

          let base =
            "w-full text-left p-5 rounded-2xl border transition-all duration-300 relative"

          if (!showResult) {
            base +=
              " bg-white/5 border-white/10 hover:border-pink-500/50 hover:bg-white/10"
          } else if (idx === selected) {
            base += opt.isCorrect
              ? " bg-green-500/10 border-green-500 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              : " bg-red-500/10 border-red-500 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
          } else if (opt.isCorrect) {
            base += " bg-green-500/5 border-green-500/30 text-green-300"
          } else {
            base += " opacity-40 border-transparent"
          }

          return (
            <motion.button
              key={idx}
              whileHover={{ scale: showResult ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              disabled={showResult}
              onClick={() => handleSelect(idx, opt.isCorrect)}
              className={base}
            >
              <div className="flex justify-between items-center">
                <span>{opt.text}</span>

                {showResult && idx === selected && (
                  opt.isCorrect
                    ? <CheckCircle2 className="w-5 h-5 text-green-400" />
                    : <XCircle className="w-5 h-5 text-red-400" />
                )}
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Reaction Message */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4 text-center"
        >
          <p className={`font-semibold text-lg ${
            question.options[selected].isCorrect
              ? "text-pink-400"
              : "text-gray-400"
          }`}>
            {question.options[selected].response}
          </p>
        </motion.div>
      )}
    </div>
  )
}