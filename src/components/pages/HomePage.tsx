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

      <div className="home-copy">
        {/* Similar to an EJS partial rendered inside a layout, but server-side JSX. */}
        <h1>Hono JSX on the server</h1>
        <p>
          This page is rendered on the server with <code>c.render()</code>,
          which feels close to Express + EJS.
        </p>

        <p>
          The structure is split into a route file and reusable JSX
          components. Hono does not require a controller layer.
        </p>
        <ul>
          <li>Environment: {environment}</li>
          <li>API key present: {apiKeyPresent}</li>
        </ul>

        <p>
          I am using a regular <code>div</code> here instead of a Fragment
          for now, so the structure stays familiar.
        </p>
      </div>
    </>
  )
}
