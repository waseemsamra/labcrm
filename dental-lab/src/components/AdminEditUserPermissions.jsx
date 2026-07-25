import AdminSidebar from './AdminSidebar'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const users = [
  { id: 1, initials: 'AD', name: 'Alex Dumont', email: 'alex.d@globaldentallab.com', role: 'Senior Technician', office: '3D Printing Hub', status: 'Active', statusColor: 'bg-green-100 text-green-700', lastLogin: '2 hours ago' },
  { id: 2, initials: 'MK', name: 'Dr. Marcus Kane', email: 'm.kane@kaneortho.com', role: 'Client (Practitioner)', office: 'Kane Orthodontics', status: 'Active', statusColor: 'bg-green-100 text-green-700', lastLogin: '10 mins ago' },
  { id: 3, initials: 'LW', name: 'Linda White', email: 'l.white@globaldentallab.com', role: 'Receptionist', office: 'Front Office', status: 'Inactive', statusColor: 'bg-amber-100 text-amber-700', lastLogin: '4 days ago' },
  { id: 4, initials: 'TC', name: 'Thomas Chen', email: 't.chen@globaldentallab.com', role: 'Junior Technician', office: 'Main Lab', status: 'Pending', statusColor: 'bg-blue-100 text-blue-700', lastLogin: 'Never' },
  { id: 5, initials: 'JS', name: 'Julia Santos', email: 'j.santos@globaldentallab.com', role: 'Lab Owner', office: 'Management', status: 'Active', statusColor: 'bg-green-100 text-green-700', lastLogin: 'Just now' },
]

const roles = [
  { value: 'administrator', label: 'Administrator', description: 'Full access to billing, user management, and clinical records.' },
  { value: 'clinical_staff', label: 'Clinical Staff', description: 'Access to cases and imaging. No billing or user management access.' },
  { value: 'billing_manager', label: 'Billing Manager', description: 'Access to invoices and payments. Restricted clinical case data.' },
]

export default function AdminEditUserPermissions() {
  const { userId } = useParams()
  const [activeTab, setActiveTab] = useState('general')
  const [formData, setFormData] = useState({
    fullName: 'Dr. Miller',
    clinicalTitle: 'Lead Dentist / Practice Owner',
    phone: '(555) 987-6543',
    language: 'English (US)',
    role: 'administrator',
    permissions: {
      approveTreatmentDesigns: true,
      modifyPatientRecords: true,
      directLabCommunication: true,
      viewFinancialLedger: false,
      downloadHighResScans: true,
      archiveCompletedCases: false,
      requestEmergencyReworks: true,
      manageOfficeStaffUsers: true,
    },
  })

  const updatePermission = (key) => {
    setFormData({
      ...formData,
      permissions: {
        ...formData.permissions,
        [key]: !formData.permissions[key],
      },
    })
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="h-16 flex justify-between items-center w-full px-lg bg-surface border-b border-outline-variant shrink-0">
          <div className="flex items-center gap-lg">
            <span className="text-title-sm font-title-sm font-bold text-primary">DentalLink CRM</span>
            <nav className="hidden md:flex items-center gap-md">
              <Link to="/admin" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Dashboard</Link>
              <Link to="/admin/cases" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Cases</Link>
              <Link to="/admin/billing" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors">Billing</Link>
              <span className="text-primary border-b-2 border-primary font-body-md text-body-md">Accounts</span>
            </nav>
          </div>
          <div className="flex items-center gap-md">
            <div className="relative group">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer p-sm hover:bg-surface-container rounded-full">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer p-sm hover:bg-surface-container rounded-full">settings</span>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDakTq5gRjUWj5KvojaXWq9c23Tmm4_sOJnRkDu7TfO1DvImfuKDs1bX9Waop9NbzJjvlZBy7OPtZFUn7OhGyUtJRn5uhay_2_8BSn4SYHRIjpMcHX2xN-theyXlZ9QLd-hRsDYap8SYMFP6qd6qEHh2dBwVOSwP-xHmFLNAvs7rJIITd-rC1-AQscKKtWjceZr255X_y2SfYHlweN8XJaAG513NDvDUytJ97BaGBAiQ4szccEUtFrfZLSqMIusDhHnFfhesfTp63RD" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#fcfdff]">
          <div className="p-lg lg:py-xl">
            {/* Back Button & Breadcrumbs */}
            <div className="flex items-center gap-sm mb-lg text-on-surface-variant font-label-caps text-label-caps">
              <Link to="/admin/settings/users" className="hover:text-primary flex items-center gap-xs">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to Users
              </Link>
              <span className="opacity-30">/</span>
              <span>User Profile</span>
              <span className="opacity-30">/</span>
              <span className="text-on-surface">Permissions</span>
            </div>

            {/* User Profile Header */}
            <div className="p-lg rounded-2xl bg-surface border border-outline-variant clinical-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-md mb-xl">
              <div className="flex items-center gap-lg">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-headline-md font-bold">
                    SM
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-surface border-2 border-surface p-xs">
                    <div className="w-full h-full bg-secondary rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-md mb-xs">
                    <h2 className="font-display-lg text-[28px] leading-tight text-on-surface">Dr. Miller</h2>
                    <span className="px-sm py-xs bg-secondary-container text-on-secondary-container font-label-caps text-[11px] rounded-full uppercase tracking-wider font-bold">Verified Practitioner</span>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-body-md">Primary Account Owner • <span className="font-medium text-on-surface">miller@brightsmile.com</span></p>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <button className="px-lg py-md border border-outline-variant text-on-surface font-label-caps text-label-caps rounded-xl hover:bg-surface-container-low transition-all">
                  Discard Changes
                </button>
                <button onClick={() => { const toast = document.getElementById('savePermToast'); if (toast) { toast.classList.remove('translate-y-24', 'opacity-0'); toast.classList.add('translate-y-0', 'opacity-100'); setTimeout(() => { toast.classList.add('translate-y-24', 'opacity-0'); toast.classList.remove('translate-y-0', 'opacity-100'); }, 3000); } } } className="px-xl py-md bg-primary text-on-primary font-label-caps text-label-caps rounded-xl hover:bg-primary-container transition-all shadow-md shadow-primary/20">
                  Save Permissions
                </button>
              </div>
            </div>

            {/* Integrated Permissions Flow */}
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden clinical-shadow">
              {/* Navigation Tabs */}
              <div className="flex border-b border-outline-variant bg-surface-container-low/30 overflow-x-auto">
                <button onClick={() => setActiveTab('general')} className={`px-lg py-md border-b-2 flex items-center gap-sm transition-colors ${activeTab === 'general' ? 'border-primary text-primary font-title-sm text-title-sm' : 'text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm border-transparent'}`}>
                  <span className="material-symbols-outlined text-[20px]">person</span> General Info
                </button>
                <button onClick={() => setActiveTab('roles')} className={`px-lg py-md border-b-2 flex items-center gap-sm transition-colors ${activeTab === 'roles' ? 'border-primary text-primary font-title-sm text-title-sm' : 'text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm border-transparent'}`}>
                  <span className="material-symbols-outlined text-[20px]">security</span> Account Roles
                </button>
                <button onClick={() => setActiveTab('permissions')} className={`px-lg py-md border-b-2 flex items-center gap-sm transition-colors ${activeTab === 'permissions' ? 'border-primary text-primary font-title-sm text-title-sm' : 'text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm border-transparent'}`}>
                  <span className="material-symbols-outlined text-[20px]">tune</span> Granular Permissions
                </button>
              </div>

              {/* Tab Content: Scrollable Sections */}
              <div className="p-lg space-y-xl">
                {activeTab === 'general' && (
                  <section id="general-info">
                    <div className="flex items-center gap-sm mb-lg">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">badge</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">General Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                      <div className="flex flex-col gap-xs">
                        <label className="text-label-caps font-label-caps text-on-surface-variant ml-1">Full Legal Name</label>
                        <input className="p-md border border-outline-variant rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 text-body-md transition-all" type="text" value="Dr. Steven Miller" readOnly />
                      </div>
                      <div className="flex flex-col gap-xs">
                        <label className="text-label-caps font-label-caps text-on-surface-variant ml-1">Clinical Title</label>
                        <input className="p-md border border-outline-variant rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 text-body-md transition-all" type="text" value="Lead Dentist / Practice Owner" readOnly />
                      </div>
                      <div className="flex flex-col gap-xs">
                        <label className="text-label-caps font-label-caps text-on-surface-variant ml-1">Direct Phone</label>
                        <input className="p-md border border-outline-variant rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 text-body-md transition-all" type="text" value="(555) 987-6543" readOnly />
                      </div>
                      <div className="flex flex-col gap-xs">
                        <label className="text-label-caps font-label-caps text-on-surface-variant ml-1">System Language</label>
                        <select className="p-md border border-outline-variant rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 text-body-md transition-all bg-white" value="English (US)" readOnly>
                          <option>English (US)</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                    </div>
                  </section>
                )}

                {activeTab === 'roles' && (
                  <section id="account-roles">
                    <div className="flex items-center gap-sm mb-lg">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">Account Roles</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                      {roles.map((role) => (
                        <div
                          key={role.value}
                          className={`p-lg rounded-xl border-2 flex flex-col gap-sm relative cursor-pointer transition-all ${formData.role === role.value ? 'border-primary bg-primary-fixed/20' : 'border-outline-variant hover:border-outline'}`}
                          onClick={() => setFormData({ ...formData, role: role.value })}
                        >
                          {formData.role === role.value && (
                            <div className="absolute top-4 right-4 text-primary">
                              <span className="material-symbols-outlined text-[24px]">check_circle</span>
                            </div>
                          )}
                          <span className="font-label-caps text-primary uppercase font-bold text-[11px] tracking-widest">{formData.role === role.value ? 'Selected' : ''}</span>
                          <h4 className="font-title-sm text-on-surface">{role.label}</h4>
                          <p className="text-body-sm text-on-surface-variant">{role.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeTab === 'permissions' && (
                  <section id="granular-permissions">
                    <div className="flex items-center justify-between mb-lg">
                      <div className="flex items-center gap-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">visibility_lock</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface">Granular Permissions</h3>
                      </div>
                      <span className="text-body-sm text-on-surface-variant italic">Refined access control for internal & external collaborators</span>
                    </div>

                    <div className="space-y-sm">
                      {/* Client-Side Highlight Group */}
                      <div className="p-lg bg-surface-container-low/40 rounded-2xl border-2 border-dashed border-primary/20">
                        <div className="flex items-center gap-md mb-md">
                          <span className="px-sm py-1 bg-primary text-on-primary font-label-caps text-[10px] rounded uppercase font-bold tracking-widest">Client-Side Control</span>
                          <h4 className="font-title-sm text-primary">External Collaboration Tools</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-xl gap-y-md">
                          {[
                            { key: 'approveTreatmentDesigns', label: 'Approve Treatment Designs', description: 'User can sign off on digital clinical plans' },
                            { key: 'modifyPatientRecords', label: 'Modify Patient Records', description: 'Permission to edit patient history and scans' },
                            { key: 'directLabCommunication', label: 'Direct Lab Communication', description: 'Enables chat with lab technicians directly' },
                            { key: 'viewFinancialLedger', label: 'View Financial Ledger', description: 'Access to practice-wide billing data' },
                          ].map((perm) => (
                            <label key={perm.key} className="flex items-center justify-between p-md bg-surface border border-outline-variant rounded-xl hover:shadow-sm transition-all cursor-pointer group">
                              <div className="flex flex-col">
                                <span className="font-medium text-on-surface group-hover:text-primary transition-colors">{perm.label}</span>
                                <span className="text-[12px] text-on-surface-variant">{perm.description}</span>
                              </div>
                              <input
                                checked={formData.permissions[perm.key]}
                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary transition-all"
                                type="checkbox"
                                onChange={() => updatePermission(perm.key)}
                              />
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Standard Permissions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-xl gap-y-md px-md pt-md">
                        {[
                          { key: 'downloadHighResScans', label: 'Download High-Res Scans' },
                          { key: 'archiveCompletedCases', label: 'Archive Completed Cases' },
                          { key: 'requestEmergencyReworks', label: 'Request Emergency Reworks' },
                          { key: 'manageOfficeStaffUsers', label: 'Manage Office Staff Users' },
                        ].map((perm) => (
                          <div key={perm.key} className="flex items-center justify-between py-md border-b border-outline-variant/30">
                            <span className="font-body-md text-on-surface">{perm.label}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                checked={formData.permissions[perm.key]}
                                className="sr-only peer"
                                type="checkbox"
                                onChange={() => updatePermission(perm.key)}
                              />
                              <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-lg p-md bg-surface-container-high/20 border border-outline-variant rounded-xl flex items-start gap-md">
              <span className="material-symbols-outlined text-secondary">info</span>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                <span className="font-bold text-on-surface">Note on Data Security:</span> Adjusting these permissions may affect the user's ability to view HIPAA-compliant materials. Ensure clinical staff have only the access necessary for their specific diagnostic role.
              </p>
            </div>
          </div>
        </div>

        {/* Toast */}
        <div className="fixed bottom-lg right-lg bg-inverse-surface text-inverse-on-surface px-lg py-md rounded-xl shadow-2xl flex items-center gap-md transform translate-y-24 opacity-0 transition-all duration-300 z-50" id="savePermToast">
          <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
          <span className="font-body-md">User permissions updated successfully.</span>
        </div>
      </main>
    </div>
  )
}
