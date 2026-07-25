import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminSidebar() {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <aside className="flex flex-col h-screen w-64 bg-surface-container-low border-r border-outline-variant py-lg px-md shrink-0 fixed left-0 top-0 z-40">
      <div className="flex items-center gap-sm mb-xl">
        <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
        </div>
        <div>
          <h1 className="font-title-sm text-title-sm text-on-surface">DentaLink Pro</h1>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">Central Laboratory</p>
        </div>
      </div>

      <nav className="flex-1 space-y-unit">
        <Link to="/admin" className="flex items-center gap-md px-md py-sm rounded bg-surface-container-highest text-primary font-semibold transition-all duration-200">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-caps text-label-caps">Dashboard</span>
        </Link>
        <Link to="/admin/cases" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200">
          <span className="material-symbols-outlined">folder_shared</span>
          <span className="font-label-caps text-label-caps">Cases</span>
        </Link>
        <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200" href="#">
          <span className="material-symbols-outlined">factory</span>
          <span className="font-label-caps text-label-caps">Production</span>
        </a>
        <Link to="/admin/suppliers" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200">
          <span className="material-symbols-outlined">local_shipping</span>
          <span className="font-label-caps text-label-caps">Supplier</span>
        </Link>
        <Link to="/admin/inventory" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="font-label-caps text-label-caps">Inventory</span>
        </Link>
        <Link to="/admin/billing" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-caps text-label-caps">Billing</span>
        </Link>
        <Link to="/admin/patients" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-caps text-label-caps">Patients</span>
        </Link>
        <Link to="/admin/clients" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-label-caps text-label-caps">Clients</span>
        </Link>
        <Link to="/admin/roles" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200">
          <span className="material-symbols-outlined">admin_panel_settings</span>
          <span className="font-label-caps text-label-caps">Roles</span>
        </Link>
        <div>
          <button
            className="flex items-center justify-between w-full gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-caps text-label-caps">Settings</span>
            </div>
            <span className="material-symbols-outlined text-[18px] transition-transform duration-200" style={{ transform: settingsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              expand_more
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${settingsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-12 pr-md py-1 space-y-1">
              <Link to="/admin/locations" className="block py-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
                Location management
              </Link>
              <Link to="/admin/settings/users" className="block py-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
                User & Access Control
              </Link>
              <div className="pl-4 space-y-1">
                <Link to="/admin/settings/roles/matrix" className="block py-1 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
                  Roles Matrix
                </Link>
              </div>
              <Link to="/admin/settings/roles" className="block py-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">
                Roles & Permissions
              </Link>
              <a className="block py-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">
                Case & Order Logistics
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-auto space-y-unit border-t border-outline-variant pt-lg">
        <Link to="/admin/cases/intake" className="block">
          <button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container py-sm px-md rounded font-semibold hover:opacity-90 transition-opacity mb-md">
            <span className="material-symbols-outlined text-sm">add</span>
            <span className="font-label-caps text-label-caps">New Case</span>
          </button>
        </Link>
        <button onClick={() => navigate('/login')} className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container transition-all duration-200 w-full text-left">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-caps text-label-caps">Logout</span>
        </button>
      </div>
    </aside>
  )
}
