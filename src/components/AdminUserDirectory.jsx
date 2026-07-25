import AdminSidebar from './AdminSidebar'
import AdminInviteUser from './AdminInviteUser'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const users = [
  { id: 1, initials: 'AD', name: 'Alex Dumont', email: 'alex.d@globaldentallab.com', role: 'Senior Technician', office: '3D Printing Hub', status: 'Active', statusColor: 'bg-green-100 text-green-700', lastLogin: '2 hours ago' },
  { id: 2, initials: 'MK', name: 'Dr. Marcus Kane', email: 'm.kane@kaneortho.com', role: 'Client (Practitioner)', office: 'Kane Orthodontics', status: 'Active', statusColor: 'bg-green-100 text-green-700', lastLogin: '10 mins ago' },
  { id: 3, initials: 'LW', name: 'Linda White', email: 'l.white@globaldentallab.com', role: 'Receptionist', office: 'Front Office', status: 'Inactive', statusColor: 'bg-amber-100 text-amber-700', lastLogin: '4 days ago' },
  { id: 4, initials: 'TC', name: 'Thomas Chen', email: 't.chen@globaldentallab.com', role: 'Junior Technician', office: 'Main Lab', status: 'Pending', statusColor: 'bg-blue-100 text-blue-700', lastLogin: 'Never' },
  { id: 5, initials: 'JS', name: 'Julia Santos', email: 'j.santos@globaldentallab.com', role: 'Lab Owner', office: 'Management', status: 'Active', statusColor: 'bg-green-100 text-green-700', lastLogin: 'Just now' },
]

export default function AdminUserDirectory() {
  const [showInviteModal, setShowInviteModal] = useState(false)

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Content Canvas */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-lg bg-surface-container-lowest">
          {/* Page Header */}
          <div className="mb-lg flex justify-between items-end">
            <div>
              <h2 className="font-display-lg text-display-lg text-primary mb-1">User Directory</h2>
              <p className="text-body-md text-on-surface-variant">Manage clinical staff, technicians, and practitioner access.</p>
            </div>
            <div className="flex gap-sm">
              <button className="flex items-center gap-xs px-md py-sm border border-outline rounded-lg text-body-sm font-semibold hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export CSV
              </button>
              <button onClick={() => setShowInviteModal(true)} className="flex items-center gap-xs px-md py-sm bg-primary text-white rounded-lg text-body-sm font-semibold hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Invite New User
              </button>
            </div>
          </div>

          {/* Filters & Stats Bento */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
            <div className="md:col-span-1 bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-center">
              <span className="text-label-caps font-label-caps text-outline mb-1 uppercase">Total Users</span>
              <div className="flex items-baseline gap-sm">
                <span className="text-headline-md font-headline-md text-on-surface">142</span>
                <span className="text-xs text-primary font-bold">+12 this month</span>
              </div>
            </div>
            <div className="md:col-span-3 bg-surface border border-outline-variant rounded-xl p-md flex items-center gap-lg">
              <div className="flex-1">
                <label className="block text-[10px] font-bold uppercase text-outline mb-1">Filter by Role</label>
                <select className="w-full bg-transparent border-none text-body-sm font-semibold focus:ring-0 cursor-pointer">
                  <option>All Roles</option>
                  <option>Lab Owner</option>
                  <option>Senior Technician</option>
                  <option>Junior Technician</option>
                  <option>Receptionist</option>
                  <option>Client (Practitioner)</option>
                </select>
              </div>
              <div className="w-px h-8 bg-outline-variant"></div>
              <div className="flex-1">
                <label className="block text-[10px] font-bold uppercase text-outline mb-1">Account Status</label>
                <select className="w-full bg-transparent border-none text-body-sm font-semibold focus:ring-0 cursor-pointer">
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Pending Invite</option>
                  <option>Suspended</option>
                </select>
              </div>
              <div className="w-px h-8 bg-outline-variant"></div>
              <div className="flex-1">
                <label className="block text-[10px] font-bold uppercase text-outline mb-1">Office / Department</label>
                <select className="w-full bg-transparent border-none text-body-sm font-semibold focus:ring-0 cursor-pointer">
                  <option>All Locations</option>
                  <option>Main Lab (Chicago)</option>
                  <option>Satellite Office (NYC)</option>
                  <option>3D Printing Hub</option>
                  <option>Sterilization Dept</option>
                </select>
              </div>
              <button className="p-2 text-primary hover:bg-primary-container hover:text-white rounded transition-all">
                <span className="material-symbols-outlined">filter_list_off</span>
              </button>
            </div>
          </div>

          {/* High Density Data Table */}
          <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low border-b border-outline-variant">
                  <tr>
                    <th className="px-lg py-3 text-label-caps font-label-caps text-outline uppercase tracking-wider">
                      <div className="flex items-center gap-xs">
                        Name <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
                      </div>
                    </th>
                    <th className="px-lg py-3 text-label-caps font-label-caps text-outline uppercase tracking-wider">Role</th>
                    <th className="px-lg py-3 text-label-caps font-label-caps text-outline uppercase tracking-wider">Office/Dept</th>
                    <th className="px-lg py-3 text-label-caps font-label-caps text-outline uppercase tracking-wider">Status</th>
                    <th className="px-lg py-3 text-label-caps font-label-caps text-outline uppercase tracking-wider">Last Login</th>
                    <th className="px-lg py-3 text-label-caps font-label-caps text-outline uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-primary-fixed/10 transition-colors group">
                      <td className="px-lg py-3 whitespace-nowrap">
                        <div className="flex items-center gap-md">
                          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary text-xs border border-outline-variant">{user.initials}</div>
                          <div>
                            <div className="text-body-sm font-semibold text-on-surface">{user.name}</div>
                            <div className="text-[12px] text-outline">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-lg py-3 whitespace-nowrap">
                        <span className="text-data-tabular font-data-tabular text-on-surface">{user.role}</span>
                      </td>
                      <td className="px-lg py-3 whitespace-nowrap">
                        <span className="text-data-tabular font-data-tabular text-on-surface">{user.office}</span>
                      </td>
                      <td className="px-lg py-3 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase ${user.statusColor}`}>{user.status}</span>
                      </td>
                      <td className="px-lg py-3 whitespace-nowrap">
                        <span className="text-data-tabular font-data-tabular text-on-surface-variant">{user.lastLogin}</span>
                      </td>
                      <td className="px-lg py-3 whitespace-nowrap text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <Link to={`/admin/settings/users/${user.id}/permissions`} className="p-1.5 hover:bg-surface-container-high text-primary rounded" title="Edit Permissions">
                             <span className="material-symbols-outlined text-[18px]">verified_user</span>
                           </Link>
                           <button className="p-1.5 hover:bg-surface-container-high text-on-surface-variant rounded" title="Edit User">
                             <span className="material-symbols-outlined text-[18px]">edit</span>
                           </button>
                           <button className="p-1.5 hover:bg-surface-container-high text-primary rounded" title="Change Role">
                             <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                           </button>
                           <button className="p-1.5 hover:bg-surface-container-high text-on-surface-variant rounded" title="More Options">
                             <span className="material-symbols-outlined text-[18px]">more_vert</span>
                           </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="bg-surface border-t border-outline-variant px-lg py-3 flex items-center justify-between">
              <span className="text-body-sm text-on-surface-variant">Showing 1 to 5 of 142 users</span>
              <div className="flex gap-xs">
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded font-semibold text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low transition-colors font-semibold text-xs text-on-surface">2</button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low transition-colors font-semibold text-xs text-on-surface">3</button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Invite Modal */}
        {showInviteModal && (
          <AdminInviteUser onClose={() => setShowInviteModal(false)} />
        )}
      </main>
    </div>
  )
}
