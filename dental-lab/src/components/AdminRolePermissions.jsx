import AdminSidebar from './AdminSidebar'

export default function AdminRolePermissions() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full px-lg h-16 sticky top-0 z-50 bg-surface border-b border-outline-variant">
          <div className="flex items-center gap-md">
            <span className="font-display-lg text-display-lg text-primary-container">DentalLink CRM</span>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-md px-md py-xs bg-surface-container-low rounded-xl border border-outline-variant">
              <span className="material-symbols-outlined text-outline">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-sm w-48" placeholder="Search cases..." type="text" />
            </div>
            <div className="flex items-center gap-sm">
              <button className="p-sm rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-sm rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">help</span>
              </button>
              <button className="p-sm rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWSkTWOfZNHj7oBNQzDnBDK9I1D2kAj73qShyf5-w-XHcj2QTP-tiIb7QGXqjrwBN2omBfz5X89DTCdERwdZMZfGeLvZ6OQAh1XOKsEtyeRACbbzIDP0AJfkjAzJNNIuW_brXn5dv2xKiTQlAtI5QipVpKGUyAqfF_gXCfcVvfm8nFs4r8mGds16R8GdzMeDRmM4dAUzLmVIr4uGqRDKikT39mjngKspaAy--taO-9dK7jk_Ro4_iDwJqE7zpyzQl3XzLvVbh6Qb81"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-surface">
          <div className="p-lg lg:p-xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-sm text-on-surface-variant text-body-sm mb-md">
              <span>Settings</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span>Roles & Permissions</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-primary font-medium">Assistant / Technician</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-end mb-xl">
              <div className="flex items-center gap-lg">
                <div className="w-16 h-16 rounded-xl bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px] text-primary">engineering</span>
                </div>
                <div>
                  <h1 className="font-display-lg text-display-lg text-on-surface">Assistant / Technician</h1>
                  <p className="text-on-surface-variant text-body-md mt-1">Configure global platform access and administrative rights for this role.</p>
                </div>
              </div>
              <div className="flex gap-md">
                <button className="px-lg py-md border border-outline text-on-surface rounded-lg font-label-caps text-label-caps hover:bg-surface-container hover:border-primary transition-all active:opacity-80">
                  Cancel
                </button>
                <button onClick={() => { const toast = document.getElementById('saveToast'); if (toast) { toast.classList.remove('translate-y-24', 'opacity-0'); toast.classList.add('translate-y-0', 'opacity-100'); setTimeout(() => { toast.classList.add('translate-y-24', 'opacity-0'); toast.classList.remove('translate-y-0', 'opacity-100'); }, 3000); } } } className="px-xl py-md bg-primary text-on-primary rounded-lg font-label-caps text-label-caps shadow-sm hover:opacity-95 transition-all active:scale-[0.98] flex items-center gap-sm">
                  <span className="material-symbols-outlined text-[18px]">save</span>
                  Save Changes
                </button>
              </div>
            </div>

            {/* Permissions Grid */}
            <div className="grid grid-cols-12 gap-lg">
              {/* Main Platform Permissions */}
              <section className="col-span-12 lg:col-span-8 space-y-lg">
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
                  <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md">
                    <span className="material-symbols-outlined text-primary">assignment</span>
                    <h3 className="font-title-sm text-title-sm">Operational Access</h3>
                  </div>
                  <div className="space-y-md">
                    <div className="flex items-center justify-between p-md hover:bg-surface-container-low rounded-lg transition-colors group">
                      <div className="flex gap-md">
                        <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">folder_open</span>
                        </div>
                        <div>
                          <div className="font-title-sm text-body-md font-semibold">Case Management</div>
                          <div className="text-body-sm text-on-surface-variant">View, edit, and track patient case progression.</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input checked className="sr-only permission-toggle" type="checkbox" />
                        <div className="w-11 h-6 bg-outline-variant rounded-full toggle-bg transition-colors"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform toggle-dot"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-md hover:bg-surface-container-low rounded-lg transition-colors group">
                      <div className="flex gap-md">
                        <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">cloud_upload</span>
                        </div>
                        <div>
                          <div className="font-title-sm text-body-md font-semibold">Media Uploads</div>
                          <div className="text-body-sm text-on-surface-variant">Upload X-rays, 3D scans, and clinical photographs.</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input checked className="sr-only permission-toggle" type="checkbox" />
                        <div className="w-11 h-6 bg-outline-variant rounded-full toggle-bg transition-colors"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform toggle-dot"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-md hover:bg-surface-container-low rounded-lg transition-colors group">
                      <div className="flex gap-md">
                        <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">sticky_note_2</span>
                        </div>
                        <div>
                          <div className="font-title-sm text-body-md font-semibold">Internal Notes</div>
                          <div className="text-body-sm text-on-surface-variant">Add and edit comments for lab-internal collaboration.</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input checked className="sr-only permission-toggle" type="checkbox" />
                        <div className="w-11 h-6 bg-outline-variant rounded-full toggle-bg transition-colors"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform toggle-dot"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg opacity-60">
                  <div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-md">
                    <div className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-error">lock</span>
                      <h3 className="font-title-sm text-title-sm">Restricted Access (Billing & Admin)</h3>
                    </div>
                    <span className="px-sm py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded uppercase">Owner Only</span>
                  </div>
                  <div className="space-y-md">
                    <div className="flex items-center justify-between p-md grayscale cursor-not-allowed">
                      <div className="flex gap-md">
                        <div className="w-10 h-10 rounded-lg bg-outline-variant flex items-center justify-center text-on-surface-variant">
                          <span className="material-symbols-outlined">receipt_long</span>
                        </div>
                        <div>
                          <div className="font-title-sm text-body-md font-semibold">View Invoices</div>
                          <div className="text-body-sm text-on-surface-variant">Access and view payment history and current invoices.</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center pointer-events-none">
                        <input className="sr-only permission-toggle" disabled type="checkbox" />
                        <div className="w-11 h-6 bg-outline-variant rounded-full toggle-bg"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-md grayscale cursor-not-allowed">
                      <div className="flex gap-md">
                        <div className="w-10 h-10 rounded-lg bg-outline-variant flex items-center justify-center text-on-surface-variant">
                          <span className="material-symbols-outlined">account_balance_wallet</span>
                        </div>
                        <div>
                          <div className="font-title-sm text-body-md font-semibold">Billing Management</div>
                          <div className="text-body-sm text-on-surface-variant">Modify credit cards and manage subscription tiers.</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center pointer-events-none">
                        <input className="sr-only permission-toggle" disabled type="checkbox" />
                        <div className="w-11 h-6 bg-outline-variant rounded-full toggle-bg"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-md grayscale cursor-not-allowed">
                      <div className="flex gap-md">
                        <div className="w-10 h-10 rounded-lg bg-outline-variant flex items-center justify-center text-on-surface-variant">
                          <span className="material-symbols-outlined">manage_accounts</span>
                        </div>
                        <div>
                          <div className="font-title-sm text-body-md font-semibold">User Management</div>
                          <div className="text-body-sm text-on-surface-variant">Invite, edit, or remove lab team members.</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center pointer-events-none">
                        <input className="sr-only permission-toggle" disabled type="checkbox" />
                        <div className="w-11 h-6 bg-outline-variant rounded-full toggle-bg"></div>
                        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Role Summary & Metadata */}
              <aside className="col-span-12 lg:col-span-4 space-y-lg">
                <div className="bg-surface-container-high border border-outline-variant rounded-xl p-lg shadow-sm">
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-md">Role Preview</h4>
                  <div className="flex items-center gap-md mb-lg">
                    <div className="w-12 h-12 rounded-full border-2 border-primary-container p-0.5">
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFgTxUh_XV1EEq-IJAShiyyp-cjLz0R0rOxrEK8nEyW7TO60mGXMXOKUaPZU8yLyLVNKw3_4C7eaWkTGOUKJEe_gwC_ahBl0msqr0G4PWlLP6UzrdWm4hRqUuR6xlSD2vD6PY2w7A6HZ3NkbPNvtKHVuf_gH2HlJzXIwgwubQl8wlLzps-pLC0ii8rFflC_wvCvHQSvqCu6DTVNCgcjztSDCcpAtDyry3iB2iIGQttBbrpNydtqkCXsRNqnZmR5OVm44EaEGkOtbCJ"
                        alt="User"
                      />
                    </div>
                    <div>
                      <div className="text-title-sm font-bold">Marcus Chen</div>
                      <div className="text-body-sm text-on-surface-variant">Junior Technician</div>
                    </div>
                  </div>
                  <div className="space-y-sm">
                    <div className="flex items-center gap-sm text-body-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Can edit 45 active cases</span>
                    </div>
                    <div className="flex items-center gap-sm text-body-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>Has clinical upload rights</span>
                    </div>
                    <div className="flex items-center gap-sm text-body-sm opacity-40">
                      <span className="material-symbols-outlined text-[18px]">block</span>
                      <span className="line-through">No financial visibility</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-md">Recent Modifications</h4>
                  <div className="space-y-md">
                    <div className="flex gap-sm">
                      <div className="w-1 bg-primary rounded-full"></div>
                      <div>
                        <div className="text-body-sm font-semibold">Permissions Reset</div>
                        <div className="text-[11px] text-on-surface-variant">By Admin Jane Doe • Oct 12, 14:20</div>
                      </div>
                    </div>
                    <div className="flex gap-sm">
                      <div className="w-1 bg-outline-variant rounded-full"></div>
                      <div>
                        <div className="text-body-sm font-semibold">Added 'Internal Notes'</div>
                        <div className="text-[11px] text-on-surface-variant">System Update • Oct 05, 09:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl p-lg flex gap-md">
                  <span className="material-symbols-outlined text-tertiary">info</span>
                  <p className="text-body-sm text-on-tertiary-fixed-variant leading-relaxed">
                    <strong>Pro-Tip:</strong> Changes to global roles will propagate to all assigned users instantly. We recommend notifying the team before major permission shifts.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </main>

        {/* Toast */}
        <div className="fixed bottom-lg right-lg bg-inverse-surface text-inverse-on-surface px-lg py-md rounded-xl shadow-2xl flex items-center gap-md transform translate-y-24 opacity-0 transition-all duration-300 z-50" id="saveToast">
          <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
          <span className="font-body-md">Role permissions updated successfully.</span>
        </div>
      </main>
    </div>
  )
}
