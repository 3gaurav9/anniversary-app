import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BackgroundAnimation from "./components/BackgroundAnimation"
import Hero from "./components/Hero"
import SweetSection from "./components/SweetSection"
import QuizSection from "./components/QuizSection"
import RewardSection from "./components/RewardSection"

export default function App() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1220] to-[#020617] text-gray-200 flex items-center justify-center p-6 relative overflow-hidden">

      <BackgroundAnimation />

      <div className="relative w-full max-w-xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {step === 0 && <Hero next={() => setStep(1)} />}
            {step === 1 && <SweetSection next={() => setStep(2)} />}
            {step >= 2 && step <= 4 && (
              <QuizSection
                step={step}
                setStep={setStep}
                score={score}
                setScore={setScore}
              />
            )}
            {step === 5 && (
              <RewardSection
                score={score}
                restart={() => {
                  setStep(0)
                  setScore(0)
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}