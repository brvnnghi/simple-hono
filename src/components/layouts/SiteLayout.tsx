import type { FC, PropsWithChildren } from 'hono/jsx'
import { SiteNavigation } from '../navigation/SiteNavigation'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          :root {
            color-scheme: light;
            font-family: system-ui, sans-serif;
          }

          body {
            margin: 0;
            background: #f5f7fb;
            color: #1f2937;
          }

          main {
            max-width: 720px;
            margin: 0 auto;
            padding: 48px 24px;
          }

          .site-nav {
            border-bottom: 1px solid #e5e7eb;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
          }

          .site-nav__inner {
            max-width: 720px;
            margin: 0 auto;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }

          .site-nav__brand {
            font-size: 0.95rem;
            letter-spacing: 0.02em;
          }

          .site-nav__links {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }

          .site-nav__link {
            color: #4b5563;
            text-decoration: none;
            padding: 8px 12px;
            border-radius: 999px;
          }

          .site-nav__link.is-active {
            background: #1f2937;
            color: white;
          }

          .card {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
          }

          .home-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.6fr) minmax(240px, 0.9fr);
            gap: 24px;
            align-items: start;
          }

          .home-grid__aside {
            position: sticky;
            top: 24px;
          }

          .home-grid__eyebrow {
            margin-top: 0;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            font-size: 0.75rem;
            color: #6b7280;
          }

          code {
            background: #eef2ff;
            padding: 0.15rem 0.35rem;
            border-radius: 6px;
          }

          @media (max-width: 720px) {
            .home-grid {
              grid-template-columns: 1fr;
            }

            .home-grid__aside {
              position: static;
            }
          }
        `}</style>
      </head>
      <body>
        <SiteNavigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
