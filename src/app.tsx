import { Hono } from 'hono'

// import routes
import siteRoute from './routes/siteRoute'
import appRoute from './routes/appRoute'

// import layout
import { jsxRenderer } from 'hono/jsx-renderer'
import { SiteLayout } from './components/layouts/SiteLayout'

const app = new Hono<{ Bindings: Env }>()

app.use(
  '*',
  jsxRenderer(({ children }) => {
    return <SiteLayout>{children}</SiteLayout>
  })
)

app.route('/', siteRoute)
app.route('/app', appRoute)

export default app
