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
            This is another server-rendered page using the same layout and
            shared nav.
          </p>

          <p className="leading-7 text-slate-600">
            You could add a form here later, but for now this is just a clean
            template example.
          </p>
          <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Route: /contact
            </li>
            <li className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              Same layout, new content
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
