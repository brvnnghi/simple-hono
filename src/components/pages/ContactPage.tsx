import type { FC } from 'hono/jsx'

export const ContactPage: FC = () => {
  return (
    <>
      {/* meta is here, but actually it'll be put in the layout head */}
      <title>Contact</title>
      <meta
        name="description"
        content="Contact page for the simple Hono JSX example."
      />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Contact
          </h1>
          <p className="leading-7 text-slate-600">
            This page stays server-rendered, but it includes one small client
            island below.
          </p>

          <p className="leading-7 text-slate-600">
            The page content, layout, and navigation come from the server. Only
            the counter widget mounts in the browser.
          </p>
          <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Route: /contact
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Rendering: SSR + island
            </li>
          </ul>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
            <p className="mb-4 text-sm font-medium text-slate-600">
              Island example
            </p>
            <div data-island="contact-counter" />
          </div>
        </div>
      </section>

      <script type="module" src="/islands/contact.js" />
    </>
  )
}
