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

      <section className="card">
        <div className="page-copy">
          <h1>Contact</h1>
          <p>
            This is another server-rendered page using the same layout and
            shared nav.
          </p>

          <p>
            You could add a form here later, but for now this is just a clean
            template example.
          </p>
          <ul>
            <li>Route: /contact</li>
            <li>Same layout, new content</li>
          </ul>
        </div>
      </section>
    </>
  )
}
