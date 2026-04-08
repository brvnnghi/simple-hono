import type { FC } from 'hono/jsx'
import { Fragment } from 'hono/jsx'

export const ContactPage: FC = () => {
  return (
    <section className="card">
      <h1>Contact</h1>
      <p>
        This is another server-rendered page using the same layout and shared
        nav.
      </p>

      <Fragment>
        <p>
          You could add a form here later, but for now this is just a clean
          template example.
        </p>
        <ul>
          <li>Route: /contact</li>
          <li>Same layout, new content</li>
        </ul>
      </Fragment>
    </section>
  )
}
