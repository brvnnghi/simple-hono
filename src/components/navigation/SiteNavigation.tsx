import type { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/app', label: 'App' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const SiteNavigation: FC = () => {
  // gives the component access to the current Hono request context
  const c = useRequestContext()
  const pathname = new URL(c.req.url).pathname

  return (
    <nav
      className="border-b border-slate-200 bg-white/85 backdrop-blur-md"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <strong className="text-sm font-semibold tracking-[0.02em] text-slate-900">
          Simple Hono
        </strong>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === '/app' && pathname.startsWith('/app/'))
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white'
                    : 'rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200 hover:text-slate-900'
                }
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
