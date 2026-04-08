import type { FC, PropsWithChildren } from 'hono/jsx'

type HomeLayoutProps = PropsWithChildren<{
  title: string
}>

export const HomeLayout: FC<HomeLayoutProps> = ({ title, children }) => {
  return (
    <div className="home-grid">
      <section className="card home-grid__main">{children}</section>

      <aside className="card home-grid__aside">
        <p className="home-grid__eyebrow">Two-column layout</p>
        <h2>{title}</h2>
        <p>
          This is a separate layout used only by the Home route. It shows how
          you can layer JSX layouts in Hono.
        </p>
        <p>
          In Express + EJS terms, this is like a page-specific wrapper around
          the shared site layout.
        </p>
      </aside>
    </div>
  )
}
