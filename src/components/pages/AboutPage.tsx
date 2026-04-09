import type { FC } from 'hono/jsx'

export const AboutPage: FC = () => {
  return (
    <>
      <title>About</title>
      <meta
        name="description"
        content="About page for the simple Hono JSX example."
      />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            About
          </h1>
          <p className="leading-7 text-slate-600">
            This route uses the same server-side layout and navigation as the
            home page.
          </p>

          <p className="leading-7 text-slate-600">
            In Express + EJS terms, this is like rendering a different
            template into the same shared layout.
          </p>
          <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Route: /about
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Rendering: SSR + island
            </li>
          </ul>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
            <p className="mb-4 text-sm font-medium text-slate-600">
              Island example
            </p>
            <div data-island="rating-modal" />
          </div>
        </div>
      </section>

      <script type="module" src="/islands/about.js" />
    </>
  )
}
