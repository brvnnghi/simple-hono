import { useState } from 'hono/jsx'

export function ContactCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Contact counter island
        </h2>
        <p className="text-sm leading-6 text-slate-600">
          This widget is mounted with <code>hono/jsx/dom</code> inside an
          otherwise server-rendered page.
        </p>
        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}
