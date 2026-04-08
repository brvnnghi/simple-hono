import type { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const SiteNavigation: FC = () => {
  // gives the component access to the current Hono request context
  const c = useRequestContext()
  const pathname = new URL(c.req.url).pathname

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <strong className="site-nav__brand">Simple Hono</strong>
        <div className="site-nav__links">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={isActive ? 'site-nav__link is-active' : 'site-nav__link'}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
