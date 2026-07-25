import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function AdminCreateRole() {
  const [formData, setFormData] = useState({
    name: '',
    referenceCode: '',
    description: '',
    permissions: {
      viewCases: false,
      editCaseProgress: false,
      deleteRecords: false,
      viewInvoices: false,
      issueRefunds: false,
      manageLabFees: false,
      adjustStockLevels: false,
      manageSuppliers: false,
      approvePurchases: false,
      manageUsers: false,
      systemSettings: false,
    },
  })

  const togglePermission = (key) => {
    setFormData({
      ...formData,
      permissions: { ...formData.permissions, [key]: !formData.permissions[key] },
    })
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full px-lg h-16 sticky top-0 z-30 bg-surface border-b border-outline-variant">
          <div className="flex items-center gap-2">
            <span className="text-on-surface-variant font-body-md text-body-md">Settings</span>
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            <span className="text-on-surface-variant font-body-md text-body-md">Roles & Permissions</span>
            <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
            <span className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md">Create Role</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-2 rounded-full transition-colors">notifications</button>
            <button className="material-symbols-outlined text-primary hover:bg-surface-container-low p-2 rounded-full transition-colors">help</button>
            <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9mSy0M3Vtb_IsCGFWr8e7JbSOnl7iunppBeetch2FuCdC3spKQ233VpqWMWsOULu00TtDCM4uNlMRvxA-Hq2_40KEx8V8QEAK_QLBz3TBZLdatLtdIaWV-3D3rINXaBKi64EVO9fpKf7E8q8FmrbNpkYHjt5TR6j9xWHpoR06YvuIBkBwXBEvE5VaQwpyNhpB7jpWjP2y8V6QqjvLsrgNEC3QrmVnYGXP8sDUlXtPu6EAi9Ctpb4m-MIqtdxxpfx8z071NQX7XAQE" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Configuration Header */}
        <div className="px-xl py-lg flex justify-between items-end border-b border-outline-variant bg-white">
          <div>
            <h2 className="font-display-lg text-display-lg text-primary tracking-tight">Create New Role</h2>
            <p className="text-on-surface-variant font-body-sm text-body-sm mt-1">Define a new role and assign permissions for your team.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/roles" className="px-6 py-2 rounded-lg border border-outline text-on-surface-variant hover:bg-surface-container-low font-label-caps text-label-caps transition-all">
              Cancel
            </Link>
            <button onClick={() => { const toast = document.getElementById('saveRoleToast'); if (toast) { toast.classList.remove('translate-y-24', 'opacity-0'); toast.classList.add('translate-y-0', 'opacity-100'); setTimeout(() => { toast.classList.add('translate-y-24', 'opacity-0'); toast.classList.remove('translate-y-0', 'opacity-100'); }, 3000); } } } className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-container font-label-caps text-label-caps shadow-sm transition-all">
              Save Role
            </button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="flex-1 overflow-hidden flex bg-surface">
          {/* Form & Permissions Column */}
          <div className="flex-1 overflow-y-auto p-xl">
            <div className="space-y-8 pb-12">
              {/* Basic Information Section */}
              <section className="bg-white p-lg rounded-xl border border-outline-variant">
                <h3 className="font-title-sm text-title-sm text-on-surface mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Role Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Role Name</label>
                    <input className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-body-md" type="text" placeholder="e.g. Junior Technician" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Internal Reference Code</label>
                    <input className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-body-md bg-surface-container-lowest" placeholder="e.g. LAB-JR-TECH-01" type="text" value={formData.referenceCode} onChange={(e) => setFormData({ ...formData, referenceCode: e.target.value })} />
                  </div>
                  <div className="col-span-full flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Description</label>
                    <textarea className="border border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-body-md" rows="3" placeholder="Describe the purpose and scope of this role..." value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                  </div>
                </div>
              </section>

              {/* Permission Groups */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    Permissions Matrix
                  </h3>
                </div>
                {/* Bento-ish Grid for Permissions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Case Management */}
                  <div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
                    <div className="bg-surface-container-low px-lg py-3 border-b border-outline-variant flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">folder_managed</span>
                      <span className="font-label-caps text-label-caps text-on-surface">Case Management</span>
                    </div>
                    <div className="p-lg space-y-4">
                      {[
                        { key: 'viewCases', label: 'View Cases' },
                        { key: 'editCaseProgress', label: 'Edit Case Progress' },
                        { key: 'deleteRecords', label: 'Delete Records' },
                      ].map((perm) => (
                        <label key={perm.key} className="flex items-center gap-3 cursor-pointer group">
                          <input checked={formData.permissions[perm.key]} className="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary" type="checkbox" onChange={() => togglePermission(perm.key)} />
                          <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">{perm.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Financials */}
                  <div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
                    <div className="bg-surface-container-low px-lg py-3 border-b border-outline-variant flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">payments</span>
                      <span className="font-label-caps text-label-caps text-on-surface">Financials</span>
                    </div>
                    <div className="p-lg space-y-4">
                      {[
                        { key: 'viewInvoices', label: 'View Invoices' },
                        { key: 'issueRefunds', label: 'Issue Refunds' },
                        { key: 'manageLabFees', label: 'Manage Lab Fees' },
                      ].map((perm) => (
                        <label key={perm.key} className="flex items-center gap-3 cursor-pointer group">
                          <input checked={formData.permissions[perm.key]} className="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary" type="checkbox" onChange={() => togglePermission(perm.key)} />
                          <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">{perm.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Inventory */}
                  <div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
                    <div className="bg-surface-container-low px-lg py-3 border-b border-outline-variant flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">inventory_2</span>
                      <span className="font-label-caps text-label-caps text-on-surface">Inventory</span>
                    </div>
                    <div className="p-lg space-y-4">
                      {[
                        { key: 'adjustStockLevels', label: 'Adjust Stock Levels' },
                        { key: 'manageSuppliers', label: 'Manage Suppliers' },
                        { key: 'approvePurchases', label: 'Approve Purchases' },
                      ].map((perm) => (
                        <label key={perm.key} className="flex items-center gap-3 cursor-pointer group">
                          <input checked={formData.permissions[perm.key]} className="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary" type="checkbox" onChange={() => togglePermission(perm.key)} />
                          <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">{perm.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Admin */}
                  <div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
                    <div className="bg-surface-container-low px-lg py-3 border-b border-outline-variant flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">admin_panel_settings</span>
                      <span className="font-label-caps text-label-caps text-on-surface">Admin</span>
                    </div>
                    <div className="p-lg space-y-4">
                      {[
                        { key: 'manageUsers', label: 'Manage Users' },
                        { key: 'systemSettings', label: 'System Settings' },
                      ].map((perm) => (
                        <label key={perm.key} className="flex items-center gap-3 cursor-pointer group opacity-60">
                          <input checked={formData.permissions[perm.key]} disabled className="w-5 h-5 rounded text-primary border-outline-variant focus:ring-primary cursor-not-allowed" type="checkbox" onChange={() => togglePermission(perm.key)} />
                          <span className="font-body-md text-body-md text-on-surface">{perm.label}</span>
                        </label>
                      ))}
                      <div className="flex items-center gap-2 p-2 bg-error-container/20 rounded border border-error-container/30">
                        <span className="material-symbols-outlined text-error text-[18px]">lock</span>
                        <p className="text-[11px] text-error leading-tight">Admin rights restricted to Lab Owner role only.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Role Preview Sidebar */}
          <aside className="w-80 border-l border-outline-variant bg-white flex flex-col">
            <div className="p-lg border-b border-outline-variant">
              <h3 className="font-title-sm text-title-sm text-on-surface">Role Preview</h3>
              <p className="text-[12px] text-on-surface-variant mt-1">Assign this role to staff members after creation.</p>
            </div>
            <div className="flex-1 overflow-y-auto p-lg space-y-4">
              <div className="pt-4">
                <button className="w-full py-2 border border-dashed border-outline rounded-lg text-outline font-label-caps text-label-caps hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Assign To Staff
                </button>
              </div>
            </div>
            <div className="p-lg bg-surface-container border-t border-outline-variant">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant">Access Score</span>
                <span className="font-bold text-primary">0%</span>
              </div>
              <div className="w-full bg-outline-variant rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full transition-all duration-300" style={{ width: '0%' }}></div>
              </div>
              <p className="text-[10px] text-on-surface-variant mt-3 text-center">Select permissions to calculate access score.</p>
            </div>
          </aside>
        </div>
      </main>

      {/* Toast */}
      <div className="fixed bottom-lg right-lg bg-inverse-surface text-inverse-on-surface px-lg py-md rounded-xl shadow-2xl flex items-center gap-md transform translate-y-24 opacity-0 transition-all duration-300 z-50" id="saveRoleToast">
        <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
        <span className="font-body-md">Role created successfully.</span>
      </div>
    </div>
  )
}
