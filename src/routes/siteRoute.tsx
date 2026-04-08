import { Hono } from 'hono'
import { HomeLayout } from '../components/layouts/HomeLayout'
import { AboutPage } from '../components/pages/AboutPage'
import { ContactPage } from '../components/pages/ContactPage'
import { HomePage } from '../components/pages/HomePage'

const siteRoute = new Hono<{ Bindings: Env }>()

siteRoute.get('/', (c) => {
  // Similar to `res.render(...)` in Express, but the JSX component stays in Hono.
  const environment = c.env.ENVIRONMENT ?? 'unknown'
  const apiKeyPresent = c.env.API_KEY ? 'yes' : 'no'

  return c.render(
    <HomeLayout title="Home">
      <HomePage environment={environment} apiKeyPresent={apiKeyPresent} />
    </HomeLayout>
  )
})

siteRoute.get('/about', (c) => {
  return c.render(<AboutPage />)
})

siteRoute.get('/contact', (c) => {
  return c.render(<ContactPage />)
})

export default siteRoute
