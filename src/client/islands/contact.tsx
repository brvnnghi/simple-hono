import { render } from 'hono/jsx/dom'
import { ContactCounter } from './ContactCounter'

const rootElement = document.querySelector<HTMLElement>(
  '[data-island="contact-counter"]'
)

if (rootElement) {
  render(<ContactCounter />, rootElement)
}
