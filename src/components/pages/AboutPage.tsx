import type { FC } from 'hono/jsx'

export const AboutPage: FC = () => {
  return (
    <>
      <title>About</title>
      <meta
        name="description"
        content="About page for the simple Hono JSX example."
      />

      <section className="card">
        <div className="page-copy">
          <h1>About</h1>
          <p>
            This route uses the same server-side layout and navigation as the
            home page.
          </p>

          <p>
            In Express + EJS terms, this is like rendering a different
            template into the same shared layout.
          </p>
          <ul>
            <li>Route: /about</li>
            <li>Rendered on the server</li>
          </ul>
        </div>
      </section>
    </>
  )
}
