import { Link } from 'react-router-dom'

export default function Billing() {
  return (
    <div className="flex-1 max-w-[1600px] mx-auto p-lg w-full">
      {/* Header & Primary Actions */}
      <header className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-headline-md text-headline-md text-primary">Billing & Invoice Management</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Review financial performance and manage client receivables.</p>
        </div>
        <a href="/billing/create">
          <button className="flex items-center gap-2 px-lg py-sm bg-primary text-on-primary font-semibold rounded shadow-sm hover:shadow-md transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
            <span className="font-body-md">Create New Invoice</span>
          </button>
        </a>
      </header>

      {/* Metrics Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-md mb-xl">
        <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-primary bg-surface-container p-2 rounded-lg" data-icon="account_balance_wallet">account_balance_wallet</span>
            <span className="text-error font-label-caps">+2.4%</span>
          </div>
          <p className="font-label-caps text-on-surface-variant">Total Outstanding</p>
          <p className="font-headline-md text-headline-md text-on-surface">$142,850.00</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-secondary bg-secondary-container/20 p-2 rounded-lg" data-icon="trending_up">trending_up</span>
            <span className="text-secondary font-label-caps">+12.8%</span>
          </div>
          <p className="font-label-caps text-on-surface-variant">Revenue this Month</p>
          <p className="font-headline-md text-headline-md text-on-surface">$58,210.45</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-tertiary-container bg-tertiary-fixed p-2 rounded-lg" data-icon="pending_actions">pending_actions</span>
          </div>
          <p className="font-label-caps text-on-surface-variant">Pending Invoices</p>
          <p className="font-headline-md text-headline-md text-on-surface">34</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl">
          <div className="flex justify-between items-start mb-sm">
            <span className="material-symbols-outlined text-outline bg-surface-variant p-2 rounded-lg" data-icon="schedule">schedule</span>
            <span className="text-secondary font-label-caps">-1.5d</span>
          </div>
          <p className="font-label-caps text-on-surface-variant">Avg. Days to Pay</p>
          <p className="font-headline-md text-headline-md text-on-surface">18.5 Days</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-xl flex flex-wrap items-center gap-md">
        <div className="flex-1 min-w-[300px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg font-body-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
            placeholder="Search by Dental Office or Invoice #..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-sm">
          <span className="font-label-caps text-on-surface-variant whitespace-nowrap">Filter By:</span>
          <select className="bg-surface border border-outline-variant rounded-lg font-body-sm px-sm py-2 outline-none focus:ring-1 focus:ring-primary">
            <option>All Dental Offices</option>
            <option>Bright Smile Family</option>
            <option>Westside Orthodontics</option>
            <option>Peak Dental Labs</option>
          </select>
          <select className="bg-surface border border-outline-variant rounded-lg font-body-sm px-sm py-2 outline-none focus:ring-1 focus:ring-primary">
            <option>All Time</option>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
          </select>
          <select className="bg-surface border border-outline-variant rounded-lg font-body-sm px-sm py-2 outline-none focus:ring-1 focus:ring-primary">
            <option>All Statuses</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
        <button className="flex items-center gap-1 text-primary font-body-sm font-semibold px-md py-2 hover:bg-surface-container rounded-lg transition-colors">
          <span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
          Advanced
        </button>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Invoice Table */}
        <section className="col-span-12 xl:col-span-9 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <div className="px-md py-sm border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
            <h3 className="font-title-sm text-title-sm">Invoice Management</h3>
            <div className="flex gap-sm">
              <button className="material-symbols-outlined p-1 text-on-surface-variant hover:text-primary transition-colors" data-icon="download">download</button>
              <button className="material-symbols-outlined p-1 text-on-surface-variant hover:text-primary transition-colors" data-icon="print">print</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-bright border-b border-outline-variant">
                  <th className="px-md py-3 font-label-caps text-on-surface-variant">Invoice #</th>
                  <th className="px-md py-3 font-label-caps text-on-surface-variant">Date</th>
                  <th className="px-md py-3 font-label-caps text-on-surface-variant">Dental Office</th>
                  <th className="px-md py-3 font-label-caps text-on-surface-variant">Case #</th>
                  <th className="px-md py-3 font-label-caps text-on-surface-variant text-right">Amount</th>
                  <th className="px-md py-3 font-label-caps text-on-surface-variant">Status</th>
                  <th className="px-md py-3 font-label-caps text-on-surface-variant text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-md py-4">
                    <Link to={`/billing/invoice/${encodeURIComponent('INV-2024-890')}`} className="font-data-tabular text-primary font-bold hover:underline">INV-2024-890</Link>
                  </td>
                  <td className="px-md py-4 font-body-sm">Oct 24, 2023</td>
                  <td className="px-md py-4">
                    <div className="font-body-sm font-semibold">Bright Smile Family</div>
                    <div className="text-[11px] text-on-surface-variant">Dr. Miller</div>
                  </td>
                  <td className="px-md py-4 font-data-tabular">#77215</td>
                  <td className="px-md py-4 font-data-tabular text-right font-bold">$1,450.00</td>
                  <td className="px-md py-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-secondary-container/30 text-on-secondary-container">PAID</span>
                  </td>
                  <td className="px-md py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="material-symbols-outlined text-[18px] text-outline hover:text-primary" data-icon="visibility">visibility</button>
                      <button className="material-symbols-outlined text-[18px] text-outline hover:text-primary" data-icon="file_download">file_download</button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-md py-4">
                    <Link to={`/billing/invoice/${encodeURIComponent('INV-2024-891')}`} className="font-data-tabular text-primary font-bold hover:underline">INV-2024-891</Link>
                  </td>
                  <td className="px-md py-4 font-body-sm">Oct 25, 2023</td>
                  <td className="px-md py-4">
                    <div className="font-body-sm font-semibold">Westside Orthodontics</div>
                    <div className="text-[11px] text-on-surface-variant">Dr. Sarah Chen</div>
                  </td>
                  <td className="px-md py-4 font-data-tabular">#77218</td>
                  <td className="px-md py-4 font-data-tabular text-right font-bold">$3,120.50</td>
                  <td className="px-md py-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-surface-container-highest text-on-surface-variant">PENDING</span>
                  </td>
                  <td className="px-md py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="material-symbols-outlined text-[18px] text-primary" data-icon="forward_to_inbox">forward_to_inbox</button>
                      <button className="material-symbols-outlined text-[18px] text-outline hover:text-primary" data-icon="visibility">visibility</button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-md py-4">
                    <Link to={`/billing/invoice/${encodeURIComponent('INV-2024-885')}`} className="font-data-tabular text-primary font-bold hover:underline">INV-2024-885</Link>
                  </td>
                  <td className="px-md py-4 font-body-sm">Oct 12, 2023</td>
                  <td className="px-md py-4">
                    <div className="font-body-sm font-semibold">Downtown Dental</div>
                    <div className="text-[11px] text-on-surface-variant">Dr. Greg Peters</div>
                  </td>
                  <td className="px-md py-4 font-data-tabular">#77102</td>
                  <td className="px-md py-4 font-data-tabular text-right font-bold">$980.00</td>
                  <td className="px-md py-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-error-container text-on-error-container">OVERDUE</span>
                  </td>
                  <td className="px-md py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="material-symbols-outlined text-[18px] text-error" data-icon="notification_important">notification_important</button>
                      <button className="material-symbols-outlined text-[18px] text-outline hover:text-primary" data-icon="visibility">visibility</button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors group">
                  <td className="px-md py-4">
                    <Link to={`/billing/invoice/${encodeURIComponent('INV-2024-892')}`} className="font-data-tabular text-primary font-bold hover:underline">INV-2024-892</Link>
                  </td>
                  <td className="px-md py-4 font-body-sm">Oct 26, 2023</td>
                  <td className="px-md py-4">
                    <div className="font-body-sm font-semibold">Peak Dental Labs</div>
                    <div className="text-[11px] text-on-surface-variant">Dr. Alan Smyth</div>
                  </td>
                  <td className="px-md py-4 font-data-tabular">#77225</td>
                  <td className="px-md py-4 font-data-tabular text-right font-bold">$2,215.00</td>
                  <td className="px-md py-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-surface-container-highest text-on-surface-variant">PENDING</span>
                  </td>
                  <td className="px-md py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <button className="material-symbols-outlined text-[18px] text-outline hover:text-primary" data-icon="visibility">visibility</button>
                      <button className="material-symbols-outlined text-[18px] text-outline hover:text-primary" data-icon="file_download">file_download</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-md py-sm bg-surface-bright flex justify-between items-center border-t border-outline-variant">
            <span className="font-body-sm text-on-surface-variant">Showing 1-10 of 254 invoices</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <button className="px-3 py-1 border border-outline-variant rounded bg-primary text-on-primary">1</button>
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">2</button>
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">3</button>
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        {/* Sidebar Sections */}
        <div className="col-span-12 xl:col-span-3 space-y-md">
          {/* Aging Accounts */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
            <h3 className="font-title-sm text-title-sm mb-md flex items-center justify-between">
              Aging Accounts
              <span className="material-symbols-outlined text-outline cursor-help" data-icon="info">info</span>
            </h3>
            <div className="space-y-sm">
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-body-sm text-on-surface-variant">30-60 Days</span>
                <div className="flex-1 mx-4 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{ width: '65%' }}></div>
                </div>
                <span className="font-data-tabular font-bold">$42,100</span>
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-body-sm text-on-surface-variant">60-90 Days</span>
                <div className="flex-1 mx-4 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-error/60" style={{ width: '25%' }}></div>
                </div>
                <span className="font-data-tabular font-bold">$18,450</span>
              </div>
              <div className="flex justify-between items-center group cursor-pointer">
                <span className="font-body-sm text-on-surface-variant">90+ Days</span>
                <div className="flex-1 mx-4 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-error" style={{ width: '10%' }}></div>
                </div>
                <span className="font-data-tabular font-bold">$7,200</span>
              </div>
            </div>
            <button className="w-full mt-md py-2 text-primary font-body-sm font-semibold border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
              View Aging Report
            </button>
          </section>

          {/* Recent Payments */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
            <h3 className="font-title-sm text-title-sm mb-md">Recent Payments</h3>
            <div className="space-y-md">
              <div className="flex items-start gap-sm">
                <div className="w-10 h-10 rounded bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body-sm font-semibold truncate">Westside Orthodontics</p>
                  <p className="font-label-caps text-[10px] text-on-surface-variant">ACH PAYMENT • 2H AGO</p>
                </div>
                <p className="font-data-tabular text-secondary font-bold">+$2,400</p>
              </div>
              <div className="flex items-start gap-sm">
                <div className="w-10 h-10 rounded bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body-sm font-semibold truncate">Downtown Dental</p>
                  <p className="font-label-caps text-[10px] text-on-surface-variant">CARD PAYMENT • 5H AGO</p>
                </div>
                <p className="font-data-tabular text-secondary font-bold">+$850</p>
              </div>
              <div className="flex items-start gap-sm">
                <div className="w-10 h-10 rounded bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body-sm font-semibold truncate">Bright Smile Family</p>
                  <p className="font-label-caps text-[10px] text-on-surface-variant">CHECK #4402 • 1D AGO</p>
                </div>
                <p className="font-data-tabular text-secondary font-bold">+$1,220</p>
              </div>
            </div>
          </section>

          {/* Quick Insight */}
          <div className="rounded-xl overflow-hidden relative p-md bg-primary text-on-primary">
            <div className="relative z-10">
              <h4 className="font-title-sm text-title-sm mb-xs">Optimization Tip</h4>
              <p className="font-body-sm opacity-90 leading-relaxed">
                Clients using <strong>Auto-Pay</strong> settle invoices 40% faster. Enable Auto-Pay invitations for Westside Orthodontics?
              </p>
              <button className="mt-md px-md py-2 bg-on-primary text-primary font-bold rounded-lg text-sm active:scale-95 transition-transform">
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
