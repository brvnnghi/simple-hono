import type { FC, PropsWithChildren } from 'hono/jsx'

type HomeLayoutProps = PropsWithChildren<{
  title: string
}>

export const HomeLayout: FC<HomeLayoutProps> = ({ title, children }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.9fr)] lg:items-start">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] sm:p-8">
        {children}
      </section>

      <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.08)] lg:sticky lg:top-6">
        <p className="mt-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Two-column layout
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-4 leading-7 text-slate-600">
          This is a separate layout used only by the Home route. It shows how
          you can layer JSX layouts in Hono.
        </p>
        <p className="mt-4 leading-7 text-slate-600">
          In Express + EJS terms, this is like a page-specific wrapper around
          the shared site layout.
        </p>
      </aside>
    </div>
  )
}
