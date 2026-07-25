import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const [alertsReviewed, setAlertsReviewed] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/billing') {
      return location.pathname === '/billing' || location.pathname.startsWith('/billing/create') || location.pathname.startsWith('/billing/invoice')
    }
    return location.pathname === path
  }

  const navItems = [
    { label: 'Cases', icon: 'work', href: '/cases' },
    { label: 'Billing', icon: 'payments', href: '/billing' },
    { label: 'Settings', icon: 'settings', href: '/settings' },
  ]

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant flex flex-col py-md z-40 hidden md:flex">
      <div className="px-md mb-xl">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">DentalPro CRM</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">Lab Technician View</p>
      </div>

      <nav className="flex-1 space-y-1">
        <Link
          to="/"
          className={`flex items-center px-md py-3 font-body-md transition-colors ${
            isActive('/')
              ? 'text-primary font-bold border-r-4 border-primary bg-secondary-container/20'
              : 'text-on-surface-variant hover:bg-surface-container-high'
          }`}
        >
          <span className="material-symbols-outlined mr-3">dashboard</span>
          Dashboard
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`flex items-center px-md py-3 font-body-md transition-colors ${
              isActive(item.href)
                ? 'text-primary font-bold border-r-4 border-primary bg-secondary-container/20'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <span className="material-symbols-outlined mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-md mt-auto pt-md">
        <Link to="/cases/intake" className="block w-full mb-xl">
          <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined">add</span>
            New Case
          </button>
        </Link>
        <div className="flex items-center gap-3 p-2 bg-surface-container-low rounded-lg">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-outline-variant">
            <img
              className="w-full h-full object-cover"
              src="/images/tech-profile.jpg"
              alt="Lab technician profile"
            />
          </div>
          <div className="overflow-hidden">
            <p className="text-body-sm font-bold truncate">Alex Chen</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Senior Tech</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
