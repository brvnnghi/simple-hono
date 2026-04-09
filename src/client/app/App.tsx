import { useEffect, useState } from 'hono/jsx'

const questions = [
  {
    prompt: 'What does SSR mean here?',
    options: [
      'Server-side rendering',
      'Static style registry',
      'Single screen router',
    ],
    correctAnswer: 'Server-side rendering',
  },
  {
    prompt: 'What is the Contact page showing?',
    options: ['Full CSR', 'SSR + island', 'Only API JSON'],
    correctAnswer: 'SSR + island',
  },
  {
    prompt: 'Which route is fully client-rendered?',
    options: ['/about', '/contact', '/app/quiz'],
    correctAnswer: '/app/quiz',
  },
] as const

// The client app reads the current browser path and decides which screen to show.
const getCurrentPath = () => window.location.pathname

function AppHome({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Client route example
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Tiny client router
        </h1>
        <p className="max-w-3xl leading-7 text-slate-600">
          This is the <code>/app</code> entry screen. Clicking the button below
          uses the History API to switch to <code>/app/quiz</code> without a
          full page reload.
        </p>
      </div>

      <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          Route: /app
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          Rendering: full CSR
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onNavigate('/app/quiz')}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Go to /app/quiz
        </button>
        <a
          href="/contact"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Back to SSR + island
        </a>
      </div>
    </section>
  )
}

function QuizPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const question = questions[step]
  const isLastQuestion = step === questions.length - 1

  const submitAnswer = () => {
    if (!selectedAnswer) {
      return
    }

    const nextScore =
      score + (selectedAnswer === question.correctAnswer ? 1 : 0)

    setScore(nextScore)
    setSelectedAnswer(null)

    if (isLastQuestion) {
      setShowResult(true)
      return
    }

    setStep((current) => current + 1)
  }

  const restartQuiz = () => {
    setStep(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Client route example
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Quiz app
          </h1>
          <button
            type="button"
            onClick={() => onNavigate('/app')}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Back to /app
          </button>
        </div>
        <p className="max-w-3xl leading-7 text-slate-600">
          This view is handled by the same client app, but the URL changes to{' '}
          <code>/app/quiz</code>.
        </p>
      </div>

      <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          Route: /app/quiz
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          Rendering: full CSR + client routing
        </div>
      </div>

      {showResult ? (
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-2xl font-semibold text-slate-900">
            Quiz complete
          </h2>
          <p className="leading-7 text-slate-600">
            You scored {score} out of {questions.length}.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={restartQuiz}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Restart quiz
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/app')}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Leave quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500">
              Question {step + 1} of {questions.length}
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">
              {question.prompt}
            </h2>
          </div>

          <div className="grid gap-3">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedAnswer(option)}
                  className={
                    isSelected
                      ? 'rounded-2xl border border-slate-900 bg-slate-900 px-4 py-3 text-left text-sm font-medium text-white'
                      : 'rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100'
                  }
                >
                  {option}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={submitAnswer}
            disabled={!selectedAnswer}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition enabled:hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {isLastQuestion ? 'Finish quiz' : 'Next question'}
          </button>
        </div>
      )}
    </section>
  )
}

export function App() {
  // This is the client-side "route state" for the small /app area.
  const [path, setPath] = useState(getCurrentPath())

  useEffect(() => {
    // Keep the UI in sync when the user uses the browser back/forward buttons.
    const onPopState = () => setPath(getCurrentPath())

    window.addEventListener('popstate', onPopState)

    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.title = path === '/app/quiz' ? 'Quiz' : 'App'
  }, [path])

  const onNavigate = (nextPath: string) => {
    if (window.location.pathname === nextPath) {
      return
    }

    // Update the URL without a full page reload, then re-render the app view.
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:px-8">
      {/* Client responsibility: choose which /app screen to show from the URL. */}
      {path === '/app/quiz' ? (
        <QuizPage onNavigate={onNavigate} />
      ) : (
        <AppHome onNavigate={onNavigate} />
      )}
    </main>
  )
}
