import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function Admin() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="flex min-h-screen text-on-surface">
      <AdminSidebar />

      {/* Main Workspace */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-lg">
            <h2 className="font-headline-md text-headline-md font-bold text-primary">Global Admin Panel</h2>
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input
                className="bg-surface-container-low border-none rounded-full pl-xl pr-lg py-1.5 text-body-sm focus:ring-1 focus:ring-primary w-64"
                placeholder="Global search..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm rounded hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-sm rounded hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">help</span>
            </button>
            <button className="p-sm rounded hover:bg-surface-container-low transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant mx-sm"></div>
            <div className="flex items-center gap-sm cursor-pointer hover:bg-surface-container-low p-xs rounded transition-colors">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzr7dcoWMb9gVd_hmaK_r_NDC170vX4038Mp1eTp_WqcMSwKJreyr9wGuP-XTPcoUgSj0v-M8FJwNq8KYwRRsRCl6IRA0JJaXOgcKq8UeMKmZmDdILJCzGm5FyVIagDoNKtSYxPf7A_LQOB3JnIGATb99lddEbUUZrB-8oHGnkQph6wW_2ayUHZPus-DIQuMro7pFnW87zUi_gVRc1u_x3hbnZC9Eg4Vd9kwr2lWmH0aA0Sk_2MY0GqbGN0m8bTu-9OjK3ePTaHSNU"
                alt="Admin User"
              />
              <span className="font-label-caps text-label-caps text-on-surface">Admin User</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-lg space-y-lg flex-1">
          {/* System Overview Metrics */}
          <section className="grid grid-cols-2 md:grid-cols-5 gap-md">
            <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant flex flex-col justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Active Locations</span>
              <div className="flex items-end justify-between mt-sm">
                <span className="font-display-lg text-display-lg text-primary">42</span>
                <span className="text-secondary font-semibold text-xs flex items-center">+2 <span className="material-symbols-outlined text-xs">arrow_upward</span></span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant flex flex-col justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Global Users</span>
              <div className="flex items-end justify-between mt-sm">
                <span className="font-display-lg text-display-lg text-primary">1,240</span>
                <span className="text-secondary font-semibold text-xs flex items-center">8.2% <span className="material-symbols-outlined text-xs">trending_up</span></span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant flex flex-col justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Open Cases</span>
              <div className="flex items-end justify-between mt-sm">
                <span className="font-display-lg text-display-lg text-primary">8,421</span>
                <span className="bg-primary-container text-on-primary-container px-1.5 py-0.5 rounded text-[10px] font-bold">LIVE</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant flex flex-col justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Inventory Health</span>
              <div className="flex items-end justify-between mt-sm">
                <span className="font-display-lg text-display-lg text-secondary">94%</span>
                <div className="w-12 h-1 bg-outline-variant rounded-full overflow-hidden mb-2">
                  <div className="bg-secondary h-full w-[94%]"></div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant flex flex-col justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant">System Uptime</span>
              <div className="flex items-end justify-between mt-sm">
                <span className="font-display-lg text-display-lg text-primary">99.9%</span>
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
          </section>

          {/* Control Hub Grid & System Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
            {/* Left: Control Hub Grid (8 columns) */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-md">
              {/* Location Management */}
              <Link to="/admin/locations" className="block">
                <div className="control-card bg-surface-container-lowest p-lg rounded-xl flex flex-col cursor-pointer">
                  <div className="flex justify-between items-start mb-md">
                    <div className="p-sm bg-surface-container rounded-lg">
                      <span className="material-symbols-outlined text-primary">hub</span>
                    </div>
                    <span className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">14 Labs</span>
                  </div>
                  <h3 className="font-title-sm text-title-sm mb-xs">Location Management</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">Manage lab facilities, partner clinics, and overseas logistics hubs.</p>
                  <div className="mt-lg flex items-center justify-between text-primary font-semibold text-xs">
                    <span>Open Directory</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* User & Access Control */}
              <div className="control-card bg-surface-container-lowest p-lg rounded-xl flex flex-col cursor-pointer">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-sm bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                  </div>
                  <span className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">1,240 Total</span>
                </div>
                <h3 className="font-title-sm text-title-sm mb-xs">User &amp; Access Control</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">Global directory, role permissions matrix, and invitation life-cycle.</p>
                <div className="mt-lg flex items-center justify-between text-primary font-semibold text-xs">
                  <span>Manage RBAC</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>

              {/* Case & Order Logistics */}
              <div className="control-card bg-surface-container-lowest p-lg rounded-xl flex flex-col cursor-pointer">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-sm bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                  </div>
                  <span className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">8,421 In-Flight</span>
                </div>
                <h3 className="font-title-sm text-title-sm mb-xs">Case &amp; Order Logistics</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">Master oversight of global case volume, batches, and tracking.</p>
                <div className="mt-lg flex items-center justify-between text-primary font-semibold text-xs">
                  <span>Global Tracker</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>

              {/* Inventory & Supply Chain */}
              <div className="control-card bg-surface-container-lowest p-lg rounded-xl flex flex-col cursor-pointer">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-sm bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">inventory</span>
                  </div>
                  <span className="bg-error-container text-on-error-container font-data-tabular text-data-tabular px-2 py-1 rounded">3 Low Stock</span>
                </div>
                <h3 className="font-title-sm text-title-sm mb-xs">Inventory &amp; Supply</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">Stock monitoring, material libraries, and supplier contracts.</p>
                <div className="mt-lg flex items-center justify-between text-primary font-semibold text-xs">
                  <span>Check Inventory</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>

              {/* Financial Management */}
              <div className="control-card bg-surface-container-lowest p-lg rounded-xl flex flex-col cursor-pointer">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-sm bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">account_balance</span>
                  </div>
                  <span className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">$142k Due</span>
                </div>
                <h3 className="font-title-sm text-title-sm mb-xs">Financial Oversight</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">Global billing, automated invoicing, and credit management.</p>
                <div className="mt-lg flex items-center justify-between text-primary font-semibold text-xs">
                  <span>Financial Dashboard</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>

              {/* System Configuration */}
              <div className="control-card bg-surface-container-lowest p-lg rounded-xl flex flex-col cursor-pointer">
                <div className="flex justify-between items-start mb-md">
                  <div className="p-sm bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">settings_applications</span>
                  </div>
                  <span className="bg-surface-container text-primary font-data-tabular text-data-tabular px-2 py-1 rounded">v2.4.1</span>
                </div>
                <h3 className="font-title-sm text-title-sm mb-xs">System Config</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">Production rules, notification hooks, and API integrations.</p>
                <div className="mt-lg flex items-center justify-between text-primary font-semibold text-xs">
                  <span>Advanced Settings</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>

            {/* Right: Activity & Maintenance (4 columns) */}
            <div className="col-span-12 lg:col-span-4 space-y-md">
              {/* System Activity Feed */}
              <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant h-[440px] flex flex-col">
                <div className="flex items-center justify-between mb-lg">
                  <h3 className="font-title-sm text-title-sm">System Activity</h3>
                  <button className="text-primary font-semibold text-xs hover:underline">View All</button>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar space-y-md pr-sm">
                  <div className="flex gap-md">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </div>
                      <div className="absolute top-8 left-4 w-px h-full bg-outline-variant"></div>
                    </div>
                    <div className="flex-1 pb-md">
                      <p className="font-body-sm text-body-sm"><span className="font-bold">Admin</span> updated Material Library</p>
                      <p className="text-xs text-on-surface-variant">2 mins ago • Global Catalog</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">add_business</span>
                      </div>
                      <div className="absolute top-8 left-4 w-px h-full bg-outline-variant"></div>
                    </div>
                    <div className="flex-1 pb-md">
                      <p className="font-body-sm text-body-sm"><span className="font-bold">Admin</span> updated Material Library</p>
                      <p className="text-xs text-on-surface-variant">2 mins ago • Global Catalog</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-sm">add_business</span>
                      </div>
                      <div className="absolute top-8 left-4 w-px h-full bg-outline-variant"></div>
                    </div>
                    <div className="flex-1 pb-md">
                      <p className="font-body-sm text-body-sm"><span className="font-bold">Admin</span> updated Material Library</p>
                      <p className="text-xs text-on-surface-variant">2 mins ago • Global Catalog</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
                        <span className="material-symbols-outlined text-sm">warning</span>
                      </div>
                      <div className="absolute top-8 left-4 w-px h-full bg-outline-variant"></div>
                    </div>
                    <div className="flex-1 pb-md">
                      <p className="font-body-sm text-body-sm"><span className="font-bold">Admin</span> updated Material Library</p>
                      <p className="text-xs text-on-surface-variant">2 mins ago • Global Catalog</p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">group_add</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-body-sm text-body-sm">12 new users onboarded via <span className="font-bold">Euro-Portal</span></p>
                      <p className="text-xs text-on-surface-variant">5 hours ago • Onboarding</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance & Security */}
              <div className="bg-on-background text-on-primary p-lg rounded-xl border border-outline shadow-lg">
                <div className="flex items-center gap-sm mb-md">
                  <span className="material-symbols-outlined text-secondary-fixed">shield</span>
                  <h3 className="font-title-sm text-title-sm">Security &amp; Health</h3>
                </div>
                <ul className="space-y-sm mb-lg">
                  <li className="flex items-center justify-between text-body-sm">
                    <span className="text-on-surface-variant">Last Backup</span>
                    <span className="font-data-tabular">Today, 04:00 AM</span>
                  </li>
                  <li className="flex items-center justify-between text-body-sm">
                    <span className="text-on-surface-variant">SSL Status</span>
                    <span className="text-secondary font-bold">ACTIVE</span>
                  </li>
                  <li className="flex items-center justify-between text-body-sm">
                    <span className="text-on-surface-variant">Threat Level</span>
                    <span className="text-on-primary-container bg-primary-container px-2 rounded-full text-xs">NORMAL</span>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-sm">
                  <button className="bg-tertiary-container py-2 rounded text-xs font-semibold hover:bg-tertiary transition-colors">Audit Logs</button>
                  <button className="bg-primary py-2 rounded text-xs font-semibold hover:bg-primary-container transition-colors">Run Diagnostics</button>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization / Global Distribution Placeholder */}
          <section className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant overflow-hidden relative min-h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-xl z-10">
              <div>
                <h3 className="font-title-sm text-title-sm">Global Distribution</h3>
                <p className="text-body-sm text-on-surface-variant">Real-time case flow across primary laboratory nodes.</p>
              </div>
              <div className="flex gap-sm">
                <span className="flex items-center gap-xs text-xs font-semibold"><div className="w-2 h-2 rounded-full bg-primary"></div> Digital Scans</span>
                <span className="flex items-center gap-xs text-xs font-semibold"><div className="w-2 h-2 rounded-full bg-secondary"></div> Physical Impressions</span>
              </div>
            </div>
            {/* Map Simulation */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-TPJB7OuwX3rwyqkQPIfVLUYNJpFbh4JtvIeZaHeLvNrPzuObQgb-F1D5Koii73yyD_fcffrxusxk-EcQumJEbwQPdc16JrDcai09bwAGFtDzOm1Id7e7FtT3Mknz_snnqU3YZ3PTqWgVTmRxcc0FW3MwWcrGDwQx54RHhFemSN3mmHHUQnlxP717Rs6Z9NB51jZ23HqT3bb37jyXAtAMoebRCkketxABZyv7SNAz8FglftipA0gQz7bSkWg6K8jtD7Z8NtOo_ri3')" }}></div>
            <div className="flex-1 flex items-center justify-center relative z-10">
              {/* Placeholder for a complex D3 chart or interactive map */}
              <div className="w-full max-w-4xl h-48 border-b-2 border-outline-variant flex items-end justify-between px-xl">
                <div className="w-12 bg-primary rounded-t-sm" style={{ height: '60%' }}></div>
                <div className="w-12 bg-secondary rounded-t-sm" style={{ height: '40%' }}></div>
                <div className="w-12 bg-primary rounded-t-sm" style={{ height: '80%' }}></div>
                <div className="w-12 bg-secondary rounded-t-sm" style={{ height: '55%' }}></div>
                <div className="w-12 bg-primary rounded-t-sm" style={{ height: '70%' }}></div>
                <div className="w-12 bg-secondary rounded-t-sm" style={{ height: '30%' }}></div>
                <div className="w-12 bg-primary rounded-t-sm" style={{ height: '90%' }}></div>
                <div className="w-12 bg-secondary rounded-t-sm" style={{ height: '45%' }}></div>
                <div className="w-12 bg-primary rounded-t-sm" style={{ height: '65%' }}></div>
                <div className="w-12 bg-secondary rounded-t-sm" style={{ height: '50%' }}></div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer / Technical Specs */}
        <footer className="px-lg py-md border-t border-outline-variant bg-surface-container-low flex justify-between items-center text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
          <div className="flex gap-lg">
            <span>Server ID: DX-ADMIN-01</span>
            <span>Region: AWS-USE-1</span>
            <span>Latency: 24ms</span>
          </div>
          <div className="flex gap-lg">
            <span>© 2024 DentaLink Solutions</span>
            <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
            <span className="text-primary cursor-pointer hover:underline">Support Desk</span>
          </div>
        </footer>
      </main>
    </div>
  )
}
