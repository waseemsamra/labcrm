import { useState, useEffect } from 'react'

export default function AdminInviteUser({ onClose }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    permissions: {
      approveDesigns: false,
      viewPayInvoices: false,
      managePatientRecords: false,
    },
  })

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const roles = [
    { value: 'dentist', label: 'Dentist', description: 'Clinical lead, full access to patient cases and approvals.', icon: 'medical_services' },
    { value: 'manager', label: 'Office Manager', description: 'Administrative oversight, billing, and team management.', icon: 'manage_accounts' },
    { value: 'assistant', label: 'Dental Assistant', description: 'Case creation, scanning, and patient data entry.', icon: 'health_metrics' },
    { value: 'billing', label: 'Billing Specialist', description: 'Focus on invoices, statements, and financial reports.', icon: 'payments' },
  ]

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-inverse-surface/40 backdrop-blur-sm p-4">
      <div className="bg-surface w-full max-w-[640px] rounded-xl shadow-2xl overflow-hidden border border-outline-variant flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-surface px-xl py-lg border-b border-outline-variant flex justify-between items-center">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Invite New User</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Add staff to Global Dental Lab</p>
          </div>
          <button onClick={onClose} className="text-on-surface-variant hover:text-primary transition-colors p-1">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Step Progress Indicator */}
        <div className="flex px-xl py-md bg-surface-container-low border-b border-outline-variant items-center justify-center gap-xl">
          <div className="flex items-center gap-sm">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-caps font-bold transition-colors ${step === 1 ? 'bg-primary text-white' : step > 1 ? 'bg-surface-container-low text-primary' : 'border border-outline-variant text-on-surface-variant'}`}>
              {step > 1 ? <span className="material-symbols-outlined text-[18px]">check</span> : 1}
            </div>
            <span className="text-label-caps font-label-caps text-on-surface-variant">Basic Info</span>
          </div>
          <div className="h-px bg-outline-variant w-12"></div>
          <div className="flex items-center gap-sm">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-caps font-bold transition-colors ${step === 2 ? 'bg-primary text-white' : step > 2 ? 'bg-surface-container-low text-primary' : 'border border-outline-variant text-on-surface-variant'}`}>
              {step > 2 ? <span className="material-symbols-outlined text-[18px]">check</span> : 2}
            </div>
            <span className="text-label-caps font-label-caps text-on-surface-variant">Role</span>
          </div>
          <div className="h-px bg-outline-variant w-12"></div>
          <div className="flex items-center gap-sm">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-label-caps font-bold transition-colors ${step === 3 ? 'bg-primary text-white' : 'border border-outline-variant text-on-surface-variant'}`}>
              3
            </div>
            <span className="text-label-caps font-label-caps text-on-surface-variant">Access</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-xl">
          <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-xl">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-lg animate-in fade-in duration-200">
                <div className="space-y-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="full-name">Full Name</label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-md font-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    id="full-name"
                    placeholder="e.g. Michael Smith"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="space-y-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Professional Email</label>
                  <input
                    className="w-full border border-outline-variant rounded-lg p-md font-body-md focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    id="email"
                    placeholder="m.smith@dentistry.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Role Selection */}
            {step === 2 && (
              <div className="grid grid-cols-1 gap-md animate-in fade-in duration-200">
                {roles.map((role) => (
                  <label
                    key={role.value}
                    className={`relative flex p-md border rounded-xl cursor-pointer transition-all group ${formData.role === role.value ? 'border-primary bg-surface-container-low' : 'border-outline-variant hover:border-primary'}`}
                  >
                    <input
                      className="sr-only"
                      name="user-role"
                      type="radio"
                      value={role.value}
                      checked={formData.role === role.value}
                      onChange={() => setFormData({ ...formData, role: role.value })}
                    />
                    <div className="flex gap-md items-center w-full">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined">{role.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-body-md font-semibold text-on-surface">{role.label}</p>
                        <p className="font-body-sm text-on-surface-variant">{role.description}</p>
                      </div>
                      <div className={`${formData.role === role.value ? 'block' : 'hidden group-has-[:checked]:block'}`}>
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            )}

            {/* Step 3: Granular Permissions */}
            {step === 3 && (
              <div className="grid grid-cols-1 gap-y-lg animate-in fade-in duration-200">
                {[
                  { key: 'approveDesigns', label: 'Approve Designs', description: 'Confirm digital wax-ups and restorations' },
                  { key: 'viewPayInvoices', label: 'View & Pay Invoices', description: 'Full access to billing records' },
                  { key: 'managePatientRecords', label: 'Manage Patient Records', description: 'Edit case files and scan data' },
                ].map((perm) => (
                  <div key={perm.key} className="flex items-center justify-between p-md bg-surface-container-low rounded-lg">
                    <div>
                      <p className="font-body-md font-medium text-on-surface">{perm.label}</p>
                      <p className="font-body-sm text-on-surface-variant">{perm.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={formData.permissions[perm.key]}
                        className="sr-only custom-toggle"
                        type="checkbox"
                        onChange={() => setFormData({ ...formData, permissions: { ...formData.permissions, [perm.key]: !formData.permissions[perm.key] } })}
                      />
                      <div className="w-10 h-6 bg-surface-container-highest rounded-full transition-colors toggle-bg flex items-center px-1">
                        <div className={`toggle-dot w-4 h-4 bg-white rounded-full transition-transform duration-200 ${formData.permissions[perm.key] ? 'translate-x-full' : ''}`}></div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>

        {/* Modal Footer */}
        <div className="bg-surface-container-lowest px-xl py-lg border-t border-outline-variant">
          <div className="flex justify-between items-center gap-md">
            <div className="flex items-center gap-sm text-on-surface-variant max-w-[50%]">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <p className="text-[11px] leading-tight opacity-75">
                Invitation links expire in 48h. All data transmissions are HIPAA compliant and encrypted.
              </p>
            </div>
            <div className="flex gap-md">
              {step > 1 && (
                <button onClick={prevStep} className="px-lg py-sm rounded-lg font-label-caps text-on-surface-variant border border-outline-variant hover:bg-surface-container-low transition-all" type="button">
                  Back
                </button>
              )}
              {step < 3 && (
                <button onClick={nextStep} className="px-xl py-sm rounded-lg font-label-caps bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center gap-sm" type="button">
                  Next
                </button>
              )}
              {step === 3 && (
                <button className="px-xl py-sm rounded-lg font-label-caps bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center gap-sm" type="button">
                  Send Invitation
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
