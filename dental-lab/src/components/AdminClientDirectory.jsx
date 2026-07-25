import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'

const clients = [
  { id: 'CL-001', name: 'Bright Smile Family Dental', location: 'Seattle, WA • NW Territory', doctor: 'Dr. Sarah Jenkins', cases: 12, balance: '$4,820.00', remakeRate: '0.8%', remakeColor: 'text-secondary', status: 'Active', avatar: 'BP', avatarColor: 'bg-primary-fixed text-primary' },
  { id: 'CL-002', name: 'Modern Dental Arts', location: 'Bellevue, WA • NW Territory', doctor: 'Dr. Michael Chen', cases: 8, balance: '$1,250.50', remakeRate: '4.2%', remakeColor: 'text-error', status: 'Active', avatar: 'MD', avatarColor: 'bg-tertiary-fixed text-tertiary' },
  { id: 'CL-003', name: 'Oak Lane Orthodontics', location: 'Portland, OR • SW Territory', doctor: 'Dr. Elena Rodriguez', cases: 0, balance: '$12,400.00', remakeRate: 'N/A', remakeColor: 'text-on-surface-variant', status: 'On Hold', avatar: 'OL', avatarColor: 'bg-error-container text-error' },
  { id: 'CL-004', name: 'Peak View Dentistry', location: 'Tacoma, WA • NW Territory', doctor: 'Dr. James Wilson', cases: 24, balance: '$0.00', remakeRate: '1.2%', remakeColor: 'text-secondary', status: 'Active', avatar: 'PV', avatarColor: 'bg-primary-fixed text-primary' },
]

export default function AdminClientDirectory() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar Header */}
        <header className="flex justify-between items-center w-full px-xl h-20 sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-xl flex-1">
            <h2 className="font-headline-md text-headline-md font-bold text-primary shrink-0">Client Directory</h2>
            <div className="relative w-full max-w-md hidden md:block">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full bg-surface-container border border-outline-variant rounded-full py-sm pl-xl pr-md text-body-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Search by office or doctor..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <Link to="/admin/clients/add" className="bg-primary text-on-primary font-label-caps text-label-caps px-lg py-sm rounded-full flex items-center gap-xs hover:opacity-90 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Add New Client
            </Link>
            <div className="h-8 w-[1px] bg-outline-variant mx-sm"></div>
            <button className="text-on-surface-variant p-xs hover:bg-surface-container-high rounded transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant p-xs hover:bg-surface-container-high rounded transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="w-10 h-10 rounded-full border-2 border-primary-container p-0.5 ml-xs">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXnK-YOaQP6_G04kB7vjkXgUg5Q6OYQE644AiUFWWepIjyn4uHYygwAfaybArVv5zazsknAuVfeRxervlUvNI1LUNDB0HTtogCLKCvjxlfbS4LP10FquMQjdi0NUzWgJr3LiHIOaSKlwpiiryahTYotaCvEoJl4yjOPJltDga7jWs322r3FJaq9Eh4h3b_SbxX5bKTtS0AKcjHw4CbPPjl-kcliw2Jur5n_myhY8EJNNbGKh1b0zXrswJQjSAcc0GRbbVJOZhBjZTp"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="flex-1 overflow-y-auto p-xl">
          {/* Filters & Stats Row */}
          <div className="flex flex-wrap items-end justify-between gap-lg mb-xl">
            <div className="flex gap-md">
              <div className="space-y-sm">
                <label className="font-label-caps text-[10px] text-outline uppercase px-xs">Territory</label>
                <select className="bg-surface-container-lowest border border-outline-variant text-body-sm px-md py-sm pr-xl rounded-lg focus:ring-1 focus:ring-primary appearance-none">
                  <option>All Territories</option>
                  <option>Northwest Metro</option>
                  <option>Southwest Metro</option>
                  <option>East Coast Regional</option>
                  <option>Midwest Hub</option>
                </select>
              </div>
              <div className="space-y-sm">
                <label className="font-label-caps text-[10px] text-outline uppercase px-xs">Account Health</label>
                <select className="bg-surface-container-lowest border border-outline-variant text-body-sm px-md py-sm pr-xl rounded-lg focus:ring-1 focus:ring-primary appearance-none">
                  <option>All Health Statuses</option>
                  <option>Excellent (&gt;98% Yield)</option>
                  <option>At Risk (Remake &gt;5%)</option>
                  <option>Delinquent Payments</option>
                </select>
              </div>
              <div className="space-y-sm flex items-end">
                <button className="flex items-center gap-xs text-primary font-label-caps text-label-caps border border-primary px-lg py-sm rounded-lg hover:bg-primary-container hover:bg-opacity-10 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  More Filters
                </button>
              </div>
            </div>
            <div className="flex gap-xl bg-surface-container-low px-lg py-md rounded-xl border border-outline-variant border-opacity-50">
              <div className="text-center px-md border-r border-outline-variant">
                <p className="text-outline font-label-caps text-[10px] uppercase">Total Clients</p>
                <p className="font-headline-md text-headline-md text-on-surface">142</p>
              </div>
              <div className="text-center px-md border-r border-outline-variant">
                <p className="text-outline font-label-caps text-[10px] uppercase">Active Cases</p>
                <p className="font-headline-md text-headline-md text-primary">318</p>
              </div>
              <div className="text-center px-md">
                <p className="text-outline font-label-caps text-[10px] uppercase">Avg. Remake</p>
                <p className="font-headline-md text-headline-md text-secondary">1.8%</p>
              </div>
            </div>
          </div>

          {/* Client Directory Table */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container border-b border-outline-variant">
                    <th className="px-lg py-md font-label-caps text-label-caps text-outline">Office Name</th>
                    <th className="px-lg py-md font-label-caps text-label-caps text-outline">Primary Doctor</th>
                    <th className="px-lg py-md font-label-caps text-label-caps text-outline">Active Cases</th>
                    <th className="px-lg py-md font-label-caps text-label-caps text-outline text-right">Balance</th>
                    <th className="px-lg py-md font-label-caps text-label-caps text-outline text-center">Remake Rate</th>
                    <th className="px-lg py-md font-label-caps text-label-caps text-outline">Status</th>
                    <th className="px-lg py-md font-label-caps text-label-caps text-outline"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-surface-container-low transition-colors group">
                      <td className="px-lg py-md">
                        <div className="flex items-center gap-md">
                          <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-xs ${client.avatarColor}`}>
                            {client.avatar}
                          </div>
                          <div>
                            <Link to={`/admin/clients/${client.id}`} className="font-body-md text-body-md font-semibold text-on-surface hover:text-primary transition-colors">
                              {client.name}
                            </Link>
                            <p className="text-xs text-outline">{client.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface-variant">{client.doctor}</td>
                      <td className="px-lg py-md">
                        <span className="inline-flex items-center px-sm py-xs rounded bg-primary-container text-on-primary-container text-xs font-bold">
                          {client.cases} Active
                        </span>
                      </td>
                      <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface-variant text-right">{client.balance}</td>
                      <td className="px-lg py-md text-center">
                        <span className={`font-data-tabular text-data-tabular ${client.remakeColor} font-bold`}>{client.remakeRate}</span>
                      </td>
                      <td className="px-lg py-md">
                        <span className={`inline-flex items-center gap-xs px-sm py-xs rounded text-[11px] font-bold uppercase ${
                          client.status === 'Active'
                            ? 'bg-secondary-container bg-opacity-20 text-on-secondary-container'
                            : 'bg-error-container bg-opacity-30 text-on-error-container'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${client.status === 'Active' ? 'bg-secondary' : 'bg-error'}`}></span>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-lg py-md text-right">
                        <Link to={`/admin/clients/${client.id}`} className="p-xs text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                          <span className="material-symbols-outlined">more_vert</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="bg-surface-container-low px-lg py-md flex items-center justify-between border-t border-outline-variant">
              <p className="text-body-sm text-on-surface-variant">Showing <span className="font-bold">1-10</span> of 142 clients</p>
              <div className="flex gap-xs">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high text-on-surface-variant transition-colors disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary font-body-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high text-on-surface-variant transition-colors font-body-sm">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high text-on-surface-variant transition-colors font-body-sm">3</button>
                <span className="px-xs flex items-end pb-1">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high text-on-surface-variant transition-colors font-body-sm">15</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high text-on-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Territory Map Context */}
          <div className="mt-xl grid grid-cols-1 md:grid-cols-3 gap-lg">
            <div className="md:col-span-2 bg-surface-container-low border border-outline-variant rounded-xl p-lg relative overflow-hidden h-64">
              <div className="relative z-10">
                <h3 className="font-title-sm text-title-sm text-on-surface mb-xs">Territory Saturation</h3>
                <p className="text-body-sm text-on-surface-variant">Active offices across primary service regions.</p>
              </div>
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk-AnRrJnJWGSHPlbaRQnZ2Aw7LMQc3KGGGxzaOS0GcD8sUVFvaxYuunnHVzzdZuwvcueXqs1ULQC3PiXv0Fcq5SNoLLeNqqp1K-GL8jf7AiuaO1dTU4xpuevR1JtGY7LxnqLknSSgiTu7JG9dJJqzdG8pA5apPFzLCWAGL4rVTbRjrlzj1Xzcm0NvReeU2LRd1StNnG3B9QvrfhSfiHa-Ij6qOAXx12-MsNKsCISZ9gy2GHikS21PBAjv9KwfysLdPu9TYP_zvubm"
                  alt="Territory map"
                />
              </div>
              <div className="absolute bottom-lg right-lg z-10 flex gap-md">
                <div className="bg-surface-container-lowest p-md rounded shadow-sm border border-outline-variant">
                  <p className="text-[10px] text-outline font-bold uppercase">NW Metro</p>
                  <p className="text-title-sm text-primary">64 Offices</p>
                </div>
                <div className="bg-surface-container-lowest p-md rounded shadow-sm border border-outline-variant">
                  <p className="text-[10px] text-outline font-bold uppercase">Growth Rate</p>
                  <p className="text-title-sm text-secondary">+12% YoY</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg flex flex-col justify-between">
              <div>
                <h3 className="font-title-sm text-title-sm text-on-surface mb-xs">Account Lifecycle</h3>
                <p className="text-body-sm text-on-surface-variant">Client distribution by partnership length.</p>
              </div>
              <div className="space-y-md mt-md">
                <div className="space-y-xs">
                  <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                    <span>New (0-6mo)</span>
                    <span>18%</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="bg-primary-fixed-dim h-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
                <div className="space-y-xs">
                  <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                    <span>Established (1-3yr)</span>
                    <span>45%</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="space-y-xs">
                  <div className="flex justify-between text-xs font-bold text-on-surface-variant">
                    <span>Legacy (3yr+)</span>
                    <span>37%</span>
                  </div>
                  <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '37%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
