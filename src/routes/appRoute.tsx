import { Hono } from 'hono'

const appRoute = new Hono<{ Bindings: Env }>()

appRoute.get('/', (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>App</title>
        <meta
          name="description"
          content="Client-rendered Hono app mounted from a minimal server shell."
        />
        <link rel="stylesheet" href="/app.css" />
      </head>
      <body className="min-h-screen bg-slate-100 text-slate-800 antialiased">
        <main id="app-root" />
        <script type="module" src="/app/app.js" />
      </body>
    </html>
  )
})

export default appRoute
