import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function ClientSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { label: 'Dashboard', icon: 'dashboard', href: '/client/Dashboard' },
    { label: 'Cases', icon: 'work', href: '/client/Cases' },
    { label: 'Approvals', icon: 'verified', href: '/client/Approvals' },
    { label: 'Invoices', icon: 'receipt_long', href: '/client/invoices' },
    { label: 'Patient Records', icon: 'groups', href: '/client/PatientRecords' },
  ]

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface border-r border-outline-variant flex flex-col py-md z-40 hidden md:flex">
      <div className="px-md mb-xl">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">Client Portal</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">Client View</p>
      </div>

      <nav className="flex-1 space-y-1">
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
        <div className="flex items-center gap-3 p-2 bg-surface-container-low rounded-lg">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-outline-variant">
            <img
              className="w-full h-full object-cover"
              src="/images/tech-profile.jpg"
              alt="Client profile"
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
