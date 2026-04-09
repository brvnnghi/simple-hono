import { Hono } from 'hono'

const appRoute = new Hono<{ Bindings: Env }>()

// Server responsibility: return the same HTML shell for /app routes.
// The browser app decides which client-side screen to render after load.
const renderClientAppShell = (title: string, description: string) => {
  const assetVersion = Math.random().toString(36).slice(2)

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/app.css" />
      </head>
      <body className="min-h-screen bg-slate-100 text-slate-800 antialiased">
        <main id="app-root" />
        <script type="module" src={`/app/app.js?v=${assetVersion}`} />
      </body>
    </html>
  )
}

appRoute.get('/', (c) => {
  return c.html(
    renderClientAppShell(
      'App',
      'Client-rendered Hono app with a tiny in-browser router.'
    )
  )
})

appRoute.get('/quiz', (c) => {
  return c.html(
    renderClientAppShell('Quiz', 'Client-rendered Hono quiz example.')
  )
})

export default appRoute
