import AdminSidebar from './AdminSidebar'

export default function AdminRoleMatrix() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg h-16 sticky top-0 z-50">
          <div className="flex items-center gap-md">
            <span className="font-display-lg text-display-lg text-primary">DentalLink CRM</span>
            <div className="h-6 w-[1px] bg-outline-variant mx-sm"></div>
            <span className="font-title-sm text-title-sm text-on-surface-variant">Security & Permissions</span>
          </div>
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low transition-colors p-sm rounded-full">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low transition-colors p-sm rounded-full">help</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low transition-colors p-sm rounded-full">settings</button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ1ADhRY7cSH6uMxJmjPY8VVkWFXCGKviDdhWqXkp9f1W1nWIX5aJ6vyyd53WYyRJCYE0lEhHKbYnX912J_dDqpIssyAx8eVF3mjwDs2jltDllVZxXx2XXxINe7UoGDP5-tGiNuTAMfKhKyjgmR23MoNM0HQjLLkdcAntDZaY1h4i_m6j4SWXTizXD7SDNPPO1Jeq5zq7jCtYW5cVDOa83fCbRkMklLqVxn_00NX65a7QWhzY3hfI384C1PwFTX6Ss4ItbqnZAZOK_"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto custom-scrollbar p-lg">
          <div className="space-y-lg">
            {/* Page Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-display-lg text-display-lg text-on-surface">Role Permissions Matrix</h1>
                <p className="text-on-surface-variant mt-xs">Comprehensive bird's-eye view of system access across all clinical and administrative roles.</p>
              </div>
              <div className="flex gap-sm">
                <button className="flex items-center gap-xs px-md py-sm border border-outline text-on-surface rounded-lg hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  <span className="font-label-caps text-label-caps">Export PDF</span>
                </button>
                <button onClick={() => { const toast = document.getElementById('saveToast'); if (toast) { toast.classList.remove('translate-y-24', 'opacity-0'); toast.classList.add('translate-y-0', 'opacity-100'); setTimeout(() => { toast.classList.add('translate-y-24', 'opacity-0'); toast.classList.remove('translate-y-0', 'opacity-100'); }, 3000); } } } className="flex items-center gap-xs px-lg py-sm bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity shadow-sm ring-1 ring-primary/20">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                  <span className="font-label-caps text-label-caps">Save Changes</span>
                </button>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-surface-container-low rounded-lg p-md flex items-start gap-md border border-outline-variant">
              <span className="material-symbols-outlined text-primary mt-xs">verified_user</span>
              <div>
                <h4 className="font-title-sm text-primary text-[14px]">Clinical Security Protocol Active</h4>
                <p className="text-body-sm text-on-surface-variant">Access modifications are logged in the secure audit trail. High-risk permissions (Delete, Approve) require multi-factor authentication for administrators.</p>
              </div>
            </div>

            {/* Permissions Matrix Table */}
            <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="bg-surface-container-high">
                      <th className="sticky-col p-lg border-b border-outline-variant w-1/4 bg-surface-container-high shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <div className="flex flex-col">
                          <span className="font-label-caps text-label-caps text-primary uppercase">Permission Scope</span>
                          <span className="text-[10px] text-on-surface-variant font-normal">Functional Category Matrix</span>
                        </div>
                      </th>
                      <th className="p-lg border-b border-outline-variant text-center w-1/8">
                        <div className="flex flex-col items-center gap-xs">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                          </div>
                          <span className="font-title-sm text-[14px]">Lab Owner</span>
                        </div>
                      </th>
                      <th className="p-lg border-b border-outline-variant text-center w-1/8">
                        <div className="flex flex-col items-center gap-xs">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[20px]">manage_accounts</span>
                          </div>
                          <span className="font-title-sm text-[14px]">Manager</span>
                        </div>
                      </th>
                      <th className="p-lg border-b border-outline-variant text-center w-1/8">
                        <div className="flex flex-col items-center gap-xs">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
                          </div>
                          <span className="font-title-sm text-[14px]">Assistant</span>
                        </div>
                      </th>
                      <th className="p-lg border-b border-outline-variant text-center w-1/8">
                        <div className="flex flex-col items-center gap-xs">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-[20px]">stethoscope</span>
                          </div>
                          <span className="font-title-sm text-[14px]">Dental Client</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {/* Category: Case Management */}
                    <tr className="bg-surface-container-low">
                      <td className="sticky-col px-lg py-sm font-label-caps text-label-caps text-on-surface-variant bg-surface-container-low shadow-[2px_0_4px_rgba(0,0,0,0.05)]" colSpan="5">Case Management</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="sticky-col px-lg py-md border-r border-outline-variant bg-surface shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <p className="font-title-sm text-[15px] text-on-surface">View Case Details</p>
                        <p className="text-body-sm text-on-surface-variant">View patient names and scan data</p>
                      </td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="sticky-col px-lg py-md border-r border-outline-variant bg-surface shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <p className="font-title-sm text-[15px] text-on-surface">Approve Designs</p>
                        <p className="text-body-sm text-on-surface-variant">Final clinical sign-off for manufacturing</p>
                      </td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                    </tr>

                    {/* Category: Financial Control */}
                    <tr className="bg-surface-container-low">
                      <td className="sticky-col px-lg py-sm font-label-caps text-label-caps text-on-surface-variant bg-surface-container-low shadow-[2px_0_4px_rgba(0,0,0,0.05)]" colSpan="5">Financial Control</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="sticky-col px-lg py-md border-r border-outline-variant bg-surface shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <p className="font-title-sm text-[15px] text-on-surface">View Invoices</p>
                        <p className="text-body-sm text-on-surface-variant">Access billing history and ledger</p>
                      </td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="sticky-col px-lg py-md border-r border-outline-variant bg-surface shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <p className="font-title-sm text-[15px] text-on-surface">Issue Refunds</p>
                        <p className="text-body-sm text-on-surface-variant">Process credit notes and cash back</p>
                      </td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                    </tr>

                    {/* Category: Inventory */}
                    <tr className="bg-surface-container-low">
                      <td className="sticky-col px-lg py-sm font-label-caps text-label-caps text-on-surface-variant bg-surface-container-low shadow-[2px_0_4px_rgba(0,0,0,0.05)]" colSpan="5">Inventory Management</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="sticky-col px-lg py-md border-r border-outline-variant bg-surface shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <p className="font-title-sm text-[15px] text-on-surface">Adjust Stock Levels</p>
                        <p className="text-body-sm text-on-surface-variant">Modify physical counts for dental materials</p>
                      </td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                    </tr>

                    {/* Category: User Settings */}
                    <tr className="bg-surface-container-low">
                      <td className="sticky-col px-lg py-sm font-label-caps text-label-caps text-on-surface-variant bg-surface-container-low shadow-[2px_0_4px_rgba(0,0,0,0.05)]" colSpan="5">User Settings & Administration</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="sticky-col px-lg py-md border-r border-outline-variant bg-surface shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <p className="font-title-sm text-[15px] text-on-surface">Delete Users</p>
                        <p className="text-body-sm text-on-surface-variant text-error font-medium">Revoke system access permanently</p>
                      </td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-error check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>dangerous</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="sticky-col px-lg py-md border-r border-outline-variant bg-surface shadow-[2px_0_4px_rgba(0,0,0,0.05)]">
                        <p className="font-title-sm text-[15px] text-on-surface">Access Audit Logs</p>
                        <p className="text-body-sm text-on-surface-variant">View detailed activity forensics</p>
                      </td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-secondary check-icon transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                      <td className="text-center permission-cell"><span className="material-symbols-outlined text-outline transition-transform">circle</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Footer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="bg-surface p-md rounded-xl border border-outline-variant flex gap-md items-center shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary-fixed">admin_panel_settings</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Active Roles</p>
                  <p className="font-headline-md text-headline-md">12 Standard</p>
                </div>
              </div>
              <div className="bg-surface p-md rounded-xl border border-outline-variant flex gap-md items-center shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-fixed">vpn_key</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Unique Scopes</p>
                  <p className="font-headline-md text-headline-md">84 Permissions</p>
                </div>
              </div>
              <div className="bg-surface p-md rounded-xl border border-outline-variant flex gap-md items-center shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-fixed">update</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Last Revision</p>
                  <p className="font-headline-md text-headline-md">Oct 24, 2023</p>
                </div>
              </div>
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
