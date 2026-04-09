import { useState } from 'hono/jsx'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:px-8">
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Client-only route
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Full Hono client component
          </h1>
          <p className="max-w-3xl leading-7 text-slate-600">
            This entire route is rendered in the browser with{' '}
            <code>hono/jsx/dom</code>. Hono only serves the minimal HTML shell
            and the static assets.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            Route: /app
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            Rendering: client only
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Count: {count}
        </button>
      </section>
    </main>
  )
}
