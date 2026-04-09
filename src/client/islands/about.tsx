import { render } from 'hono/jsx/dom'
import { RatingModal } from './RatingModal'

const rootElement = document.querySelector<HTMLElement>('[data-island="rating-modal"]')

if (rootElement) {
  render(<RatingModal />, rootElement)
}
