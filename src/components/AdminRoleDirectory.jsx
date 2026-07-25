import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'

const roles = [
  { id: 1, name: 'Lab Owner', icon: 'corporate_fare', color: 'bg-primary-fixed text-primary', assignedUsers: 48, status: 'SYSTEM CORE', statusColor: 'bg-secondary-fixed text-on-secondary-fixed-variant', description: 'Full administrative access to lab settings, billing, case management, and staff directories.' },
  { id: 2, name: 'Office Manager', icon: 'manage_accounts', color: 'bg-secondary-fixed text-secondary', assignedUsers: 112, status: 'SYSTEM CORE', statusColor: 'bg-secondary-fixed text-on-secondary-fixed-variant', description: 'Management of case intake, scheduling, invoicing, and client communications. No system-wide admin privileges.' },
  { id: 3, name: 'Senior Technician', icon: 'biotech', color: 'bg-tertiary-fixed text-tertiary', assignedUsers: 342, status: 'PRODUCTION', statusColor: 'bg-primary-fixed text-on-primary-fixed-variant', description: 'Production workflow management, quality control approval, and technical case oversight.' },
  { id: 4, name: 'Clinical Client', icon: 'clinical_notes', color: 'bg-surface-variant text-on-surface-variant', assignedUsers: 746, status: 'PORTAL', statusColor: 'bg-secondary-fixed text-on-secondary-fixed-variant', description: 'Access for dental practices to submit cases, track progress, download files, and pay invoices.' },
]

export default function AdminRoleDirectory() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Content Canvas */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-xl space-y-xl">
          {/* Page Header Section */}
          <div className="flex justify-between items-end">
            <div className="space-y-sm">
              <div className="flex items-center gap-sm text-primary">
                <span className="material-symbols-outlined">admin_panel_settings</span>
                <span className="font-label-caps tracking-widest uppercase">Global Admin Suite</span>
              </div>
              <h2 className="font-display-lg text-display-lg text-on-surface">System Role Directory</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl">Configure and manage organizational access levels. Roles define the granular permissions and functional boundaries for every user within the DentalLink ecosystem.</p>
            </div>
            <Link to="/admin/settings/roles/new" className="bg-primary hover:bg-primary-container text-on-primary px-lg py-md rounded-xl font-title-sm flex items-center gap-sm transition-all shadow-sm active:scale-[0.98]">
              <span className="material-symbols-outlined">add_circle</span>
              Add New Role
            </Link>
          </div>

          {/* Dashboard Stats Summary (Bento Minimal) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center gap-md">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">shield_person</span>
              </div>
              <div>
                <p className="font-label-caps text-on-surface-variant">Active Roles</p>
                <p className="font-headline-md text-on-surface">12</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center gap-md">
              <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <p className="font-label-caps text-on-surface-variant">Total Users</p>
                <p className="font-headline-md text-on-surface">1,248</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center gap-md">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <p className="font-label-caps text-on-surface-variant">Custom Roles</p>
                <p className="font-headline-md text-on-surface">4</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex items-center gap-md">
              <div className="w-12 h-12 bg-surface-variant rounded-lg flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined">security_update_good</span>
              </div>
              <div>
                <p className="font-label-caps text-on-surface-variant">Compliance</p>
                <p className="font-headline-md text-on-surface">100%</p>
              </div>
            </div>
          </div>

          {/* Role Directory Table */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-lg py-md font-label-caps text-on-surface-variant uppercase tracking-wider">Role Name</th>
                    <th className="px-lg py-md font-label-caps text-on-surface-variant uppercase tracking-wider">Scope & Permissions</th>
                    <th className="px-lg py-md font-label-caps text-on-surface-variant uppercase tracking-wider text-center">Assigned Users</th>
                    <th className="px-lg py-md font-label-caps text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="px-lg py-md font-label-caps text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {roles.map((role) => (
                    <tr key={role.id} className="hover:bg-surface-container transition-colors group">
                      <td className="px-lg py-lg">
                        <div className="flex items-center gap-md">
                          <div className={`w-8 h-8 rounded ${role.color} flex items-center justify-center`}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{role.icon}</span>
                          </div>
                          <span className="font-title-sm text-on-surface">{role.name}</span>
                        </div>
                      </td>
                      <td className="px-lg py-lg max-w-md">
                        <p className="font-body-sm text-on-surface-variant">{role.description}</p>
                      </td>
                      <td className="px-lg py-lg text-center">
                        <span className="font-data-tabular bg-primary-fixed text-primary px-md py-1 rounded-full">{role.assignedUsers}</span>
                      </td>
                      <td className="px-lg py-lg">
                        <span className={`px-sm py-1 rounded-full ${role.statusColor} font-label-caps text-[10px]`}>{role.status}</span>
                      </td>
                      <td className="px-lg py-lg text-right">
                        <div className="flex justify-end gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link to={`/admin/settings/roles/${role.id}/edit`} className="p-2 text-primary hover:bg-primary-fixed rounded transition-colors" title="Edit Role">
                            <span className="material-symbols-outlined">edit</span>
                          </Link>
                          <button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded transition-colors" title="Delete Role">
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Visual Decorative Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
            <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant p-xl">
              <div className="relative z-10 space-y-md">
                <h3 className="font-headline-md text-on-surface">Security Insights</h3>
                <p className="font-body-md text-on-surface-variant max-w-2xl">Advanced audit logging is currently active for all Role changes. Ensure that the 'Principal of Least Privilege' is applied to new custom roles to maintain HIPAA compliance.</p>
                <button className="text-primary font-title-sm flex items-center gap-xs hover:underline">
                  View Security Audit Log
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontSize: '180px' }}>shield_lock</span>
              </div>
            </div>
            <div className="bg-primary text-on-primary rounded-xl p-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <p className="font-label-caps text-on-primary-container">Role Suggestion</p>
                <h3 className="font-title-sm mt-xs">Need a 'Junior Technician' role?</h3>
                <p className="font-body-sm text-primary-fixed mt-sm">Quickly clone permissions from the 'Senior Technician' role and adjust constraints.</p>
              </div>
              <button className="relative z-10 w-fit bg-on-primary text-primary px-md py-sm rounded-lg font-label-caps active:scale-95 transition-transform mt-4">
                Clone Role
              </button>
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
