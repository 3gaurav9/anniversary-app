import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export default function BackgroundAnimation() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${8 + Math.random() * 6}s`,
      delay: `${Math.random() * 5}s`,
      size: `${14 + Math.random() * 24}px`
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(h => (
        <Heart
          key={h.id}
          className="absolute text-pink-500/25 heart-float drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]"
          style={{
            left: h.left,
            bottom: "-40px",
            width: h.size,
            height: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay,
            fill: "currentColor"
          }}
        />
      ))}
    </div>
  )
}