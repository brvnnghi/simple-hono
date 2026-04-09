import type { FC } from 'hono/jsx'

type HomePageProps = {
  environment: string
  apiKeyPresent: string
}

export const HomePage: FC<HomePageProps> = ({ environment, apiKeyPresent }) => {
  return (
    <>
      {/* meta is here, but actually it'll be put in the layout head */}
      <title>Home</title>
      <meta
        name="description"
        content="Home page for the simple Hono JSX example."
      />

      <div className="space-y-6">
        {/* Similar to an EJS partial rendered inside a layout, but server-side JSX. */}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Hono JSX on the server
        </h1>
        <p className="text-lg leading-8 text-slate-600">
          This page is rendered on the server with{' '}
          <code className="rounded-md bg-indigo-50 px-1.5 py-0.5 text-sm text-indigo-700">
            c.render()
          </code>
          , which feels close to Express + EJS.
        </p>

        <p className="leading-7 text-slate-600">
          The structure is split into a route file and reusable JSX
          components. Hono does not require a controller layer.
        </p>
        <ul className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
          <li className="rounded-xl bg-white px-4 py-3 shadow-sm">
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Environment
            </span>
            <span className="mt-1 block font-medium text-slate-900">
              {environment}
            </span>
          </li>
          <li className="rounded-xl bg-white px-4 py-3 shadow-sm">
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              API key present
            </span>
            <span className="mt-1 block font-medium text-slate-900">
              {apiKeyPresent}
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}
