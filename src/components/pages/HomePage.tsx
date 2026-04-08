import type { FC } from 'hono/jsx'
import { Fragment } from 'hono/jsx'

type HomePageProps = {
  environment: string
  apiKeyPresent: string
}

export const HomePage: FC<HomePageProps> = ({ environment, apiKeyPresent }) => {
  return (
    <section className="card">
      {/* Similar to an EJS partial rendered inside a layout, but server-side JSX. */}
      <h1>Hono JSX on the server</h1>
      <p>
        This page is rendered on the server with <code>c.render()</code>, which
        feels close to Express + EJS.
      </p>

      <Fragment>
        <p>
          The structure is split into a route file and reusable JSX components.
          Hono does not require a controller layer.
        </p>
        <ul>
          <li>Environment: {environment}</li>
          <li>API key present: {apiKeyPresent}</li>
        </ul>
      </Fragment>
    </section>
  )
}
