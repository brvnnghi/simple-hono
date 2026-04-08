import type { FC } from 'hono/jsx'
import { Fragment } from 'hono/jsx'

export const AboutPage: FC = () => {
  return (
    <section className="card">
      <h1>About</h1>
      <p>
        This route uses the same server-side layout and navigation as the home
        page.
      </p>

      <Fragment>
        <p>
          In Express + EJS terms, this is like rendering a different template
          into the same shared layout.
        </p>
        <ul>
          <li>Route: /about</li>
          <li>Rendered on the server</li>
        </ul>
      </Fragment>
    </section>
  )
}
