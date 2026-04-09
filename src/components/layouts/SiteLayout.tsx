import type { FC, PropsWithChildren } from 'hono/jsx'
import { SiteNavigation } from '../navigation/SiteNavigation'

type SiteLayoutProps = PropsWithChildren

export const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/app.css" />
      </head>
      <body>
        <SiteNavigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
