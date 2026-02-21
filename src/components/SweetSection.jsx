export default function SweetSection({ next }) {
  return (
    <div className="glass-card p-8 rounded-3xl max-w-md w-full text-center fade-in-up">
      <h2 className="text-2xl font-bold mb-6 text-white">
        More Than 60 Days of Us
      </h2>

      <p className="text-gray-300 mb-6">
        Every day with you has been special. (As you said and want)
      </p>

      <button
        onClick={next}
        className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition font-semibold"
      >
        Start Quiz
      </button>
    </div>
  )
}