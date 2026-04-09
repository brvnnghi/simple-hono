import type { FC, PropsWithChildren } from 'hono/jsx'
import { SiteNavigation } from '../navigation/SiteNavigation'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
  const cssVersion = Math.random().toString(36).slice(2)

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={`/app.css?v=${cssVersion}`} />
      </head>
      <body className="min-h-screen bg-slate-100 text-slate-800 antialiased">
        <SiteNavigation />
        <main className="mx-auto max-w-5xl px-6 py-12 md:px-8">{children}</main>
      </body>
    </html>
  )
}
