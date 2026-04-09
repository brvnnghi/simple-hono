import { useState } from 'hono/jsx'

const ratingOptions = ['1', '2', '3', '4', '5'] as const

export function RatingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState<string | null>(null)

  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">
            About rating modal island
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            This island owns its own UI state, including opening and closing a
            small modal.
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Rate this page
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Modal island
                </p>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Rate the About page
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  Pick a score to visualize a second independent island on an
                  SSR page.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {ratingOptions.map((option) => {
                  const isSelected = rating === option

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setRating(option)}
                      className={
                        isSelected
                          ? 'rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white'
                          : 'rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100'
                      }
                    >
                      {option}
                    </button>
                  )
                })}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {rating ? `Selected rating: ${rating}/5` : 'No rating selected yet.'}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Close modal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRating(null)
                    setIsOpen(false)
                  }}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
