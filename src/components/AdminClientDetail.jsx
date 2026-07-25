import AdminSidebar from './AdminSidebar'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const clients = {
  'CL-001': {
    name: 'Bright Smile Family Dentistry',
    accountId: '#BSFD-9921',
    doctor: 'Dr. Miller',
    phone: '(555) 123-4567',
    email: 'contact@brightsmile.com',
    address: '123 Wellness Way, Suite 400',
    status: 'Active / Good Standing',
    totalCasesYTD: 142,
    lifetimeRevenue: '$84,205.00',
    currentBalance: '$2,410.50',
    avgDaysToPay: '14.2 Days',
  },
  'CL-002': {
    name: 'Modern Dental Arts',
    accountId: '#MDA-1024',
    doctor: 'Dr. Michael Chen',
    phone: '(555) 123-4568',
    email: 'contact@moderndentalarts.com',
    address: '456 Oak Ave, Bellevue, WA 98004',
    status: 'Active / Good Standing',
    totalCasesYTD: 98,
    lifetimeRevenue: '$62,400.00',
    currentBalance: '$1,850.00',
    avgDaysToPay: '16.8 Days',
  },
  'CL-003': {
    name: 'Oak Lane Orthodontics',
    accountId: '#OLO-7731',
    doctor: 'Dr. Elena Rodriguez',
    phone: '(555) 123-4569',
    email: 'contact@oaklaneortho.com',
    address: '789 Pine St, Portland, OR 97201',
    status: 'On Hold',
    totalCasesYTD: 45,
    lifetimeRevenue: '$38,900.00',
    currentBalance: '$12,400.00',
    avgDaysToPay: '32.5 Days',
  },
  'CL-004': {
    name: 'Peak View Dentistry',
    accountId: '#PVD-4455',
    doctor: 'Dr. James Wilson',
    phone: '(555) 123-4570',
    email: 'contact@peakview.com',
    address: '321 Cedar Rd, Tacoma, WA 98401',
    status: 'VIP Client',
    totalCasesYTD: 210,
    lifetimeRevenue: '$125,600.00',
    currentBalance: '$0.00',
    avgDaysToPay: '10.2 Days',
  },
}

export default function AdminClientDetail() {
  const { clientId } = useParams()
  const client = clients[clientId] || clients['CL-001']
  const [activeTab, setActiveTab] = useState('account')
  const [inviteOpen, setInviteOpen] = useState(false)
  const [inviteSent, setInviteSent] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [userPermissions, setUserPermissions] = useState({
    'Dr. Miller': { approveDesigns: true, viewBilling: true, editPatients: true, notifications: true },
    'Sarah Jenkins': { approveDesigns: false, viewBilling: true, editPatients: true, notifications: true },
  })
  const [tempPermissions, setTempPermissions] = useState({})

  const tabs = [
    { id: 'cases', label: 'Case History' },
    { id: 'billing', label: 'Billing & Invoices' },
    { id: 'account', label: 'Account Settings / Users' },
  ]

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-lg">
          <div className="max-w-[1440px] mx-auto space-y-lg">
            {/* Account Header & Metrics Section */}
            <div className="grid grid-cols-12 gap-lg">
              {/* Practice Profile Card */}
              <div className="col-span-12 lg:col-span-8 p-lg rounded-xl bg-surface-container-lowest border border-outline-variant flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-sm mb-xs">
                      <h2 className="font-display-lg text-display-lg text-on-surface">{client.name}</h2>
                      <span className="px-sm py-xs bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-full flex items-center gap-xs">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        {client.status}
                      </span>
                    </div>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-md">Account ID: {client.accountId} • {client.doctor} (Primary)</p>
                    <div className="flex flex-wrap gap-md">
                      <div className="flex items-center gap-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">call</span>
                        <span className="font-data-tabular text-data-tabular">{client.phone}</span>
                      </div>
                      <div className="flex items-center gap-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                        <span className="font-data-tabular text-data-tabular">{client.email}</span>
                      </div>
                      <div className="flex items-center gap-xs text-on-surface-variant">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                        <span className="font-data-tabular text-data-tabular">{client.address}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-xl border border-outline-variant bg-surface overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAshYmn3lu_CxoHPJ5YjyTaMxjqt5yg7hxlvjgEVm9owSPt5myveBIBgO0LvCiyrPJagqzY0LEqPH6iZ0SAWbm5uTzr473GjbtbeV_CVUD446YNmTO4yMi-0AOAXImbaj0NLCIuF4mz1u3GWwvj_xtNXb5tBG3qMgkt6EH7hJIZUWEfjdO8i5NxBHyKgI6IYuShczVDtLZXebiwXItBUuF78bZH1UVOwwVXkjAY8x7xcYQm9opF3aw6S0eIGgB5QQR4VktuBCjShoxV"
                      alt="Office"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Actions */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-md">
                <Link to="/admin/billing/create">
                  <button className="group flex items-center justify-between p-md bg-primary text-on-primary rounded-xl hover:bg-primary-container transition-all">
                    <span className="font-label-caps text-label-caps">Create New Case</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </Link>
                <div className="grid grid-cols-2 gap-md">
                  <button className="flex flex-col items-center justify-center p-md bg-surface-container-highest text-on-surface border border-outline-variant rounded-xl hover:bg-surface-container-high transition-all gap-sm text-center">
                    <span className="material-symbols-outlined">receipt</span>
                    <span className="font-label-caps text-[11px]">Generate Statement</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-md bg-surface-container-highest text-on-surface border border-outline-variant rounded-xl hover:bg-surface-container-high transition-all gap-sm text-center">
                    <span className="material-symbols-outlined">chat</span>
                    <span className="font-label-caps text-[11px]">Contact Office</span>
                  </button>
                </div>
                <Link to={`/admin/clients/${clientId}/edit`}>
                  <button className="p-md bg-surface-container-lowest text-on-surface border border-outline-variant rounded-xl hover:border-primary transition-all font-label-caps text-label-caps text-center">
                    Edit Account Details
                  </button>
                </Link>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
              <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl">
                <div className="text-on-surface-variant font-label-caps text-label-caps mb-xs uppercase tracking-widest">Total Cases YTD</div>
                <div className="text-headline-md font-headline-md text-primary">{client.totalCasesYTD}</div>
                <div className="mt-sm flex items-center text-[12px] text-secondary font-medium">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +12% from last year
                </div>
              </div>
              <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl">
                <div className="text-on-surface-variant font-label-caps text-label-caps mb-xs uppercase tracking-widest">Lifetime Revenue</div>
                <div className="text-headline-md font-headline-md text-primary">{client.lifetimeRevenue}</div>
                <div className="mt-sm flex items-center text-[12px] text-on-surface-variant">
                  Since Jan 2021
                </div>
              </div>
              <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl">
                <div className="text-on-surface-variant font-label-caps text-label-caps mb-xs uppercase tracking-widest">Current Balance</div>
                <div className="text-headline-md font-headline-md text-on-surface">{client.currentBalance}</div>
                <div className="mt-sm flex items-center text-[12px] text-error font-medium">
                  Due in 4 days
                </div>
              </div>
              <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl">
                <div className="text-on-surface-variant font-label-caps text-label-caps mb-xs uppercase tracking-widest">Avg. Days to Pay</div>
                <div className="text-headline-md font-headline-md text-on-surface">{client.avgDaysToPay}</div>
                <div className="mt-sm flex items-center text-[12px] text-secondary font-medium">
                  Tier 1 (Reliable)
                </div>
              </div>
            </div>

            {/* Main Content Area: Tabs and Notes */}
            <div className="grid grid-cols-12 gap-lg">
              {/* Tabbed Content Area */}
              <div className="col-span-12 xl:col-span-9 bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col min-h-[500px]">
                <div className="flex border-b border-outline-variant">
                  <button
                    onClick={() => setActiveTab('cases')}
                    className={`px-lg py-md font-title-sm text-title-sm transition-colors ${activeTab === 'cases' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    Case History
                  </button>
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`px-lg py-md font-title-sm text-title-sm transition-colors ${activeTab === 'billing' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    Billing & Invoices
                  </button>
                  <button
                    onClick={() => setActiveTab('account')}
                    className={`px-lg py-md font-title-sm text-title-sm transition-colors ${activeTab === 'account' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    Account Settings / Users
                  </button>
                </div>
                <div className="p-md overflow-x-auto">
                  {activeTab === 'account' && (
                    <div className="p-lg space-y-xl">
                      <section>
                        <div>
                          <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Office Settings</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                            <div className="flex flex-col gap-xs">
                              <label className="text-label-caps font-label-caps text-on-surface-variant">Office Name</label>
                              <input className="p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-0 text-body-md" type="text" defaultValue={client.name} />
                            </div>
                            <div className="flex flex-col gap-xs">
                              <label className="text-label-caps font-label-caps text-on-surface-variant">Primary Doctor</label>
                              <input className="p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-0 text-body-md" type="text" defaultValue={client.doctor} />
                            </div>
                            <div className="flex flex-col gap-xs">
                              <label className="text-label-caps font-label-caps text-on-surface-variant">Tax ID / EIN</label>
                              <input className="p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-0 text-body-md" type="text" defaultValue={client.accountId} />
                            </div>
                            <div className="flex flex-col gap-xs">
                              <label className="text-label-caps font-label-caps text-on-surface-variant">Default Shipping Method</label>
                              <select className="p-md border border-outline-variant rounded-lg focus:border-primary focus:ring-0 text-body-md">
                                <option>FedEx Overnight</option>
                                <option>Local Courier</option>
                                <option>UPS Ground</option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-lg flex justify-end">
                            <button className="px-lg py-sm bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:opacity-90">Save Changes</button>
                          </div>
                        </div>
                      </section>
                      <hr className="border-outline-variant" />
                      <section>
                        <div className="flex justify-between items-center mb-md">
                          <h3 className="font-headline-md text-headline-md text-on-surface">User Management</h3>
                          <button onClick={() => setInviteOpen(true)} className="flex items-center gap-xs px-md py-sm border border-primary text-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container/10 transition-all">
                            <span className="material-symbols-outlined text-[18px]">person_add</span>
                            Invite New User
                          </button>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="text-label-caps font-label-caps text-on-surface-variant border-b border-outline-variant">
                                <th className="pb-sm px-sm">User</th>
                                <th className="pb-sm px-sm">Role</th>
                                <th className="pb-sm px-sm text-center">Approve Designs</th>
                                <th className="pb-sm px-sm text-center">View Billing</th>
                                <th className="pb-sm px-sm text-center">Edit Patients</th>
                                <th className="pb-sm px-sm"></th>
                              </tr>
                            </thead>
                            <tbody className="text-body-sm font-body-sm text-on-surface divide-y divide-[#F1F5F9]">
                              <tr className="hover:bg-surface-container transition-colors">
                                <td className="py-md px-sm">
                                  <div className="font-medium">Dr. Miller</div>
                                  <div className="text-[12px] text-on-surface-variant">miller@brightsmile.com</div>
                                </td>
                                <td className="py-md px-sm">Owner / Dentist</td>
                                <td className="py-md px-sm text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
                                <td className="py-md px-sm text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
                                <td className="py-md px-sm text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
                                <td className="py-md px-sm text-right"><button onClick={() => { setInviteOpen(true); setEditingUser({ name: 'Dr. Miller', email: 'miller@brightsmile.com', role: 'Owner / Dentist' }); setTempPermissions(userPermissions['Dr. Miller']) }} className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">edit</button></td>
                              </tr>
                              <tr className="hover:bg-surface-container transition-colors">
                                <td className="py-md px-sm">
                                  <div className="font-medium">Sarah Jenkins</div>
                                  <div className="text-[12px] text-on-surface-variant">s.jenkins@brightsmile.com</div>
                                </td>
                                <td className="py-md px-sm">Office Manager</td>
                                <td className="py-md px-sm text-center"><span className="material-symbols-outlined text-outline-variant">cancel</span></td>
                                <td className="py-md px-sm text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
                                <td className="py-md px-sm text-center"><span className="material-symbols-outlined text-secondary">check_circle</span></td>
                                <td className="py-md px-sm text-right"><button onClick={() => { setInviteOpen(true); setEditingUser({ name: 'Sarah Jenkins', email: 's.jenkins@brightsmile.com', role: 'Office Manager' }); setTempPermissions(userPermissions['Sarah Jenkins']) }} className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">edit</button></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </div>
                  )}
                  {activeTab === 'cases' && (
                    <div className="p-lg">
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Case History</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-surface border-b border-outline-variant">
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">CASE ID</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">PATIENT</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">RESTORATION TYPE</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">MATERIAL</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px] text-right">UNIT PRICE</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">STATUS</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-outline-variant">
                            <tr className="hover:bg-tertiary-fixed transition-colors">
                              <td className="px-md py-4 font-data-tabular text-primary font-bold">#20442-A</td>
                              <td className="px-md py-4 text-body-sm">Elena Rodriguez</td>
                              <td className="px-md py-4 text-body-sm">Zirconia Crown (Single)</td>
                              <td className="px-md py-4"><span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">KATANA STML</span></td>
                              <td className="px-md py-4 text-right font-data-tabular">$185.00</td>
                              <td className="px-md py-4"><span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">COMPLETED</span></td>
                            </tr>
                            <tr className="hover:bg-tertiary-fixed transition-colors">
                              <td className="px-md py-4 font-data-tabular text-primary font-bold">#20445-C</td>
                              <td className="px-md py-4 text-body-sm">Marcus Chen</td>
                              <td className="px-md py-4 text-body-sm">e.max Press Inlay</td>
                              <td className="px-md py-4"><span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">Lithium Disilicate</span></td>
                              <td className="px-md py-4 text-right font-data-tabular">$162.00</td>
                              <td className="px-md py-4"><span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-primary-container text-on-primary-container">IN PRODUCTION</span></td>
                            </tr>
                            <tr className="hover:bg-tertiary-fixed transition-colors">
                              <td className="px-md py-4 font-data-tabular text-primary font-bold">#20451-B</td>
                              <td className="px-md py-4 text-body-sm">Sarah Jenkins</td>
                              <td className="px-md py-4 text-body-sm">Screw-Retained Bridge (3-unit)</td>
                              <td className="px-md py-4"><span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">Zirconia Multi</span></td>
                              <td className="px-md py-4 text-right font-data-tabular">$540.00</td>
                              <td className="px-md py-4"><span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-surface-container-high text-on-surface-variant">PENDING</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {activeTab === 'billing' && (
                    <div className="p-lg">
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Billing & Invoices</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-surface border-b border-outline-variant">
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">INVOICE #</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">DATE</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">AMOUNT</th>
                              <th className="px-md py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">STATUS</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-outline-variant">
                            <tr className="hover:bg-tertiary-fixed transition-colors">
                              <td className="px-md py-4 font-data-tabular text-primary font-bold">INV-2024-890</td>
                              <td className="px-md py-4 text-body-sm">Oct 24, 2023</td>
                              <td className="px-md py-4 text-right font-data-tabular">$1,450.00</td>
                              <td className="px-md py-4"><span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">PAID</span></td>
                            </tr>
                            <tr className="hover:bg-tertiary-fixed transition-colors">
                              <td className="px-md py-4 font-data-tabular text-primary font-bold">INV-2024-891</td>
                              <td className="px-md py-4 text-body-sm">Oct 25, 2023</td>
                              <td className="px-md py-4 text-right font-data-tabular">$3,120.50</td>
                              <td className="px-md py-4"><span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-surface-container-high text-on-surface-variant">PENDING</span></td>
                            </tr>
                            <tr className="hover:bg-tertiary-fixed transition-colors">
                              <td className="px-md py-4 font-data-tabular text-primary font-bold">INV-2024-885</td>
                              <td className="px-md py-4 text-body-sm">Oct 12, 2023</td>
                              <td className="px-md py-4 text-right font-data-tabular">$980.00</td>
                              <td className="px-md py-4"><span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-error-container text-on-error-container">OVERDUE</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Internal Notes Section */}
              <div className="col-span-12 xl:col-span-3 flex flex-col gap-lg">
                <div className="p-lg bg-surface-container-highest border border-outline-variant rounded-xl">
                  <div className="flex items-center gap-sm mb-md text-primary">
                    <span className="material-symbols-outlined">description</span>
                    <h3 className="font-title-sm text-title-sm">Internal Office Notes</h3>
                  </div>
                  <div className="space-y-md">
                    <div className="p-sm bg-surface-container-lowest border border-outline-variant rounded-lg relative">
                      <p className="text-body-sm text-on-surface italic">"Prefer shade A2 for all anterior crowns unless specified. Dr. Miller prefers a light texture on incisal edges."</p>
                      <div className="mt-sm text-[10px] text-on-surface-variant flex justify-between">
                        <span>Added by Sarah (Senior Tech)</span>
                        <span>Oct 12, 2023</span>
                      </div>
                    </div>
                    <div className="p-sm bg-surface-container-lowest border border-outline-variant rounded-lg relative">
                      <p className="text-body-sm text-on-surface">"Always call the office manager (Karen) for payment approvals over $5k."</p>
                      <div className="mt-sm text-[10px] text-on-surface-variant flex justify-between">
                        <span>Added by Billing Dept</span>
                        <span>Sep 05, 2023</span>
                      </div>
                    </div>
                    <textarea className="w-full mt-lg p-md text-body-sm border-outline-variant rounded-lg focus:border-primary focus:ring-0 placeholder:text-on-surface-variant/50 min-h-[100px] resize-none" placeholder="Add a new internal note..."></textarea>
                    <button className="w-full py-sm bg-on-surface text-surface rounded-lg font-label-caps text-label-caps hover:opacity-90">Post Note</button>
                  </div>
                </div>

                {/* Case Progress Tracker */}
                <div className="p-lg bg-surface-container-lowest border border-outline-variant rounded-xl">
                  <h3 className="font-title-sm text-title-sm mb-md">Quick Summary</h3>
                  <div className="space-y-sm">
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Intake Status</span>
                      <span className="font-semibold text-secondary">Verified</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="flex justify-between items-center text-body-sm pt-xs">
                      <span className="text-on-surface-variant">Production Load</span>
                      <span className="font-semibold text-primary">Heavy</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {inviteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-md">
            <div className="bg-surface-container-lowest w-full max-w-[640px] rounded-xl shadow-2xl overflow-hidden border border-outline-variant">
              <div className="bg-surface px-xl py-lg border-b border-outline-variant flex justify-between items-start">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    {editingUser ? 'Edit User Permissions' : 'Invite New User'}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {editingUser ? `Update permissions for ${editingUser.name}` : `Add a staff member to ${client.name}`}
                  </p>
                </div>
                <button onClick={() => { setInviteOpen(false); setInviteSent(false); setEditingUser(null) }} className="text-on-surface-variant hover:text-primary transition-colors p-1">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {!inviteSent ? (
                <form className="p-xl space-y-xl" onSubmit={(e) => { e.preventDefault(); if (editingUser) { setUserPermissions({ ...userPermissions, [editingUser.name]: tempPermissions }) }; setInviteSent(true) }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="space-y-sm">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="full-name">Full Name</label>
                      <input className="w-full border border-outline-variant rounded-lg p-md font-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant" id="full-name" placeholder="e.g. Michael Smith" type="text" defaultValue={editingUser?.name || ''} readOnly={!!editingUser} />
                    </div>
                    <div className="space-y-sm">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Professional Email</label>
                      <input className="w-full border border-outline-variant rounded-lg p-md font-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant" id="email" placeholder="m.smith@dentistry.com" type="email" defaultValue={editingUser?.email || ''} readOnly={!!editingUser} />
                    </div>
                  </div>
                  {!editingUser && (
                    <div className="space-y-sm">
                      <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="role">Job Role</label>
                      <div className="relative">
                        <select className="w-full appearance-none border border-outline-variant rounded-lg p-md font-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all bg-surface-container-lowest cursor-pointer" id="role">
                          <option disabled selected value="">Select user role...</option>
                          <option value="dentist">Dentist</option>
                          <option value="manager">Office Manager</option>
                          <option value="assistant">Dental Assistant</option>
                          <option value="billing">Billing Specialist</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-md border-t border-outline-variant">
                    <h3 className="font-title-sm text-title-sm mb-md flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                      Access Permissions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-md gap-x-xl">
                      <div className="flex items-center justify-between group cursor-pointer">
                        <div>
                          <p className="font-body-md text-body-md font-medium">Approve Designs</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Confirm digital wax-ups and restorations</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only custom-toggle" type="checkbox" checked={tempPermissions.approveDesigns || false} onChange={(e) => setTempPermissions({ ...tempPermissions, approveDesigns: e.target.checked })} />
                          <div className="w-10 h-6 bg-surface-container-highest rounded-full transition-colors toggle-bg flex items-center px-1">
                            <div className="toggle-dot w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between group cursor-pointer">
                        <div>
                          <p className="font-body-md text-body-md font-medium">View & Pay Invoices</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Full access to billing records</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only custom-toggle" type="checkbox" checked={tempPermissions.viewBilling || false} onChange={(e) => setTempPermissions({ ...tempPermissions, viewBilling: e.target.checked })} />
                          <div className="w-10 h-6 bg-surface-container-highest rounded-full transition-colors toggle-bg flex items-center px-1">
                            <div className="toggle-dot w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between group cursor-pointer">
                        <div>
                          <p className="font-body-md text-body-md font-medium">Manage Patient Records</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Edit case files and scan data</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only custom-toggle" type="checkbox" checked={tempPermissions.editPatients || false} onChange={(e) => setTempPermissions({ ...tempPermissions, editPatients: e.target.checked })} />
                          <div className="w-10 h-6 bg-surface-container-highest rounded-full transition-colors toggle-bg flex items-center px-1">
                            <div className="toggle-dot w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between group cursor-pointer">
                        <div>
                          <p className="font-body-md text-body-md font-medium">Case Notifications</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">SMS/Email status alerts</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input className="sr-only custom-toggle" type="checkbox" checked={tempPermissions.notifications || false} onChange={(e) => setTempPermissions({ ...tempPermissions, notifications: e.target.checked })} />
                          <div className="w-10 h-6 bg-surface-container-highest rounded-full transition-colors toggle-bg flex items-center px-1">
                            <div className="toggle-dot w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-md rounded-lg flex gap-md items-start">
                    <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {editingUser
                        ? `Permission changes for ${editingUser.name} will be saved immediately.`
                        : `The user will receive an email to set up their password and complete their profile. This invitation links them directly to the <span className="font-semibold">{client.name}</span> workspace.`}
                    </p>
                  </div>

                  <div className="flex justify-end gap-md pt-md border-t border-outline-variant">
                    <button type="button" onClick={() => { setInviteOpen(false); setInviteSent(false); setEditingUser(null) }} className="px-xl py-sm rounded-lg font-label-caps text-on-surface-variant border border-outline-variant hover:bg-surface-container-low transition-all active:scale-95">
                      Cancel
                    </button>
                    <button type="submit" className="px-xl py-sm rounded-lg font-label-caps bg-primary text-on-primary hover:bg-primary-container transition-all active:scale-95 flex items-center gap-sm">
                      {editingUser ? 'Update Permissions' : 'Send Invitation'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-xl flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-secondary text-[64px] mb-md">check_circle</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                    {editingUser ? 'Permissions Updated' : 'Invitation Sent'}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                    {editingUser
                      ? `Permissions for ${editingUser.name} have been updated successfully.`
                      : `An invitation has been sent to the user. They will receive an email with instructions to join <span className="font-semibold">{client.name}</span>.`}
                  </p>
                  <button onClick={() => { setInviteOpen(false); setInviteSent(false); setEditingUser(null) }} className="mt-lg px-xl py-sm rounded-lg font-label-caps bg-primary text-on-primary hover:bg-primary-container transition-all active:scale-95">
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
