import { Hono } from 'hono'

const app = new Hono<{ Bindings: Env }>()

app.get('/', async (c) => {
  const key = c.env.API_KEY;
  const value = c.env.ENVIRONMENT
  return c.json({ key, value })
})

export default app