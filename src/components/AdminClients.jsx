import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'

const clients = [
  { id: 'CL-001', name: 'Bright Smile Family Dentistry', location: 'Springfield, IL', doctor: 'Dr. Sarah Miller', cases: 12, revenue: '$24,500', status: 'VIP Client', avatar: 'BS', avatarColor: 'bg-primary-container text-on-primary-container' },
  { id: 'CL-002', name: 'Westside Orthodontics', location: 'Springfield, IL', doctor: 'Dr. Sarah Chen', cases: 8, revenue: '$18,200', status: 'Active', avatar: 'WO', avatarColor: 'bg-surface-container-highest text-on-surface-variant' },
  { id: 'CL-003', name: 'Downtown Dental', location: 'Springfield, IL', doctor: 'Dr. Greg Peters', cases: 5, revenue: '$12,800', status: 'Active', avatar: 'DD', avatarColor: 'bg-primary-container text-on-primary-container' },
  { id: 'CL-004', name: 'Peak Dental Labs', location: 'Springfield, IL', doctor: 'Dr. Alan Smyth', cases: 15, revenue: '$31,400', status: 'VIP Client', avatar: 'PD', avatarColor: 'bg-secondary-container text-on-secondary-container' },
  { id: 'CL-005', name: 'Apex Family Dental', location: 'Palo Alto, CA', doctor: 'Dr. Julian Vance', cases: 3, revenue: '$8,900', status: 'Active', avatar: 'AF', avatarColor: 'bg-surface-container-highest text-on-surface-variant' },
]

export default function AdminClients() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-lg flex-1">
            <h2 className="font-headline-md text-headline-md font-semibold text-primary">Clients</h2>
            <div className="relative w-96 max-w-full">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full bg-surface-container-low border-none rounded-full pl-xl pr-md py-xs font-body-sm text-body-sm focus:ring-1 focus:ring-primary"
                placeholder="Search dental offices..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm rounded hover:text-primary transition-colors text-on-surface-variant relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-sm rounded hover:text-primary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-variant ml-sm flex items-center justify-center overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDejkKf6eRFZN8fwKQaBBYJnTi7KaYVwOcWZVBab7jBijjvNUcUUOg2yjOFHseQt7ur8La7mZkBgTD0ZZap0xNBbqBArVqDcPKSjc0LajgHYTHCENpwfFdr_yaSL545que8YtIx0xr7eBbpeHgTzj_VPsFOxJxO8Wt6kl4Q237Mf0ociihD7ryBHiKF1ZPwY-OwXG8PKqgN3y-cA5ZpSHpLOQkypdRzwCz_J5x1BX9bLxRcgW2C6uBJeWCLrVOYPzmsHAj5LSxCZR7X"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-lg max-w-[1600px] mx-auto">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
              <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col gap-xs rounded-lg">
                <span className="text-on-surface-variant font-label-caps text-[10px]">TOTAL CLIENTS</span>
                <div className="flex items-baseline gap-sm">
                  <span className="text-display-lg font-bold text-primary">43</span>
                  <span className="text-xs text-secondary font-medium">+3 this month</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col gap-xs rounded-lg">
                <span className="text-on-surface-variant font-label-caps text-[10px]">ACTIVE CASES</span>
                <div className="flex items-baseline gap-sm">
                  <span className="text-display-lg font-bold text-primary">156</span>
                  <span className="text-xs text-on-surface-variant font-medium">Across all clients</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant p-md flex flex-col gap-xs rounded-lg">
                <span className="text-on-surface-variant font-label-caps text-[10px]">MONTHLY REVENUE</span>
                <div className="flex items-baseline gap-sm">
                  <span className="text-display-lg font-bold text-primary">$95,400</span>
                  <span className="text-xs text-secondary font-medium">+8.2%</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Link to="/admin/clients/add" className="bg-primary text-on-primary h-12 px-lg rounded-lg font-title-sm flex items-center gap-sm shadow-sm hover:brightness-110 active:scale-95 transition-all">
                  <span className="material-symbols-outlined">business_add</span>
                  Add Client
                </Link>
              </div>
            </div>

            {/* Clients Table */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <div className="flex gap-md">
                  <button className="px-md py-1.5 rounded-full border border-primary text-primary text-label-caps bg-primary/5">All Clients</button>
                  <button className="px-md py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-caps hover:bg-surface-container">VIP</button>
                  <button className="px-md py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-caps hover:bg-surface-container">Active</button>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="text-body-sm text-on-surface-variant">Sort by:</span>
                  <select className="bg-transparent border-none text-body-sm font-semibold text-primary focus:ring-0 cursor-pointer">
                    <option>Last Activity</option>
                    <option>Alphabetical</option>
                    <option>Revenue</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">
                      <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Client Name</th>
                      <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Location</th>
                      <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Primary Doctor</th>
                      <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Active Cases</th>
                      <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Monthly Revenue</th>
                      <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Status</th>
                      <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-surface-container transition-colors cursor-pointer group">
                        <td className="px-lg py-md">
                          <div className="flex items-center gap-md">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-label-caps ${client.avatarColor}`}>
                              {client.avatar}
                            </div>
                            <div>
                              <Link to={`/admin/clients/${client.id}`} className="font-title-sm text-body-md text-on-surface group-hover:text-primary transition-colors hover:underline">
                                {client.name}
                              </Link>
                              <p className="text-[12px] text-on-surface-variant">ID: #{client.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-lg py-md font-body-sm text-body-sm text-on-surface">{client.location}</td>
                        <td className="px-lg py-md font-body-sm text-body-sm text-on-surface">{client.doctor}</td>
                        <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">{client.cases}</td>
                        <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">{client.revenue}</td>
                        <td className="px-lg py-md">
                          {client.status === 'VIP Client' ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-container text-on-primary-container">
                              VIP Client
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                              Active
                            </span>
                          )}
                        </td>
                        <td className="px-lg py-md text-right">
                          <div className="flex justify-end gap-xs">
                            <Link to={`/admin/clients/${client.id}`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="View Client">
                              <span className="material-symbols-outlined text-sm">visibility</span>
                            </Link>
                            <Link to={`/admin/clients/${client.id}/edit`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="Edit Client">
                              <span className="material-symbols-outlined text-sm">edit</span>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="px-lg py-md bg-surface-container-lowest border-t border-outline-variant flex justify-between items-center">
                <p className="text-body-sm text-on-surface-variant">Showing 1 to 5 of 43 clients</p>
                <div className="flex gap-xs">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-xs font-bold">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-xs font-bold">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-xs font-bold">3</button>
                  <span className="px-xs flex items-end text-on-surface-variant">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-xs font-bold">9</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
