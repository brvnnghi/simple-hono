import { render } from 'hono/jsx/dom'
import { App } from './App'

const rootElement = document.getElementById('app-root')

if (rootElement) {
  render(<App />, rootElement)
}
