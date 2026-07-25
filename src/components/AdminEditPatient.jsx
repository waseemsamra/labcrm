import AdminSidebar from './AdminSidebar'
import { useParams, Link } from 'react-router-dom'

const patients = {
  'DP-8821': {
    name: 'Eleanor Harper',
    dob: '1982-05-12',
    gender: 'Female',
    phone: '(555) 012-3456',
    email: 'e.vance@dentalcare.com',
    insurance: 'MetLife Preferred Platinum',
    address: '123 Oak Street, Suite 100, Springfield, IL 62701',
    emergencyContact: 'John Harper (Spouse) - (555) 012-3457',
    status: 'VIP Client',
  },
  'DP-9042': {
    name: 'Marcus Aris',
    dob: '1995-12-04',
    gender: 'Male',
    phone: '(555) 012-3458',
    email: 'm.aris@email.com',
    insurance: 'Delta Dental Premier',
    address: '456 Pine Ave, Springfield, IL 62702',
    emergencyContact: 'Jane Aris (Mother) - (555) 012-3459',
    status: 'Active',
  },
  'DP-7731': {
    name: 'Sarah Liao',
    dob: '1974-07-28',
    gender: 'Female',
    phone: '(555) 012-3460',
    email: 's.liao@email.com',
    insurance: 'Cigna Dental',
    address: '789 Maple Dr, Springfield, IL 62703',
    emergencyContact: 'Tom Liao (Spouse) - (555) 012-3461',
    status: 'Active',
  },
  'DP-8119': {
    name: 'Julian Thompson',
    dob: '2001-01-15',
    gender: 'Male',
    phone: '(555) 012-3462',
    email: 'j.thompson@email.com',
    insurance: 'Aetna Dental',
    address: '321 Elm St, Springfield, IL 62704',
    emergencyContact: 'Mary Thompson (Mother) - (555) 012-3463',
    status: 'Active',
  },
  'DP-5520': {
    name: 'Rebecca Davis',
    dob: '1968-02-19',
    gender: 'Female',
    phone: '(555) 012-3464',
    email: 'r.davis@email.com',
    insurance: 'Humana Dental',
    address: '654 Cedar Ln, Springfield, IL 62705',
    emergencyContact: 'Robert Davis (Spouse) - (555) 012-3465',
    status: 'VIP Client',
  },
}

export default function AdminEditPatient() {
  const { patientId } = useParams()
  const patient = patients[patientId] || patients['DP-8821']

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-lg flex-1">
            <h2 className="font-headline-md text-headline-md font-semibold text-primary">Edit Patient</h2>
            <div className="relative w-96 max-w-full">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full bg-surface-container-low border-none rounded-full pl-xl pr-md py-xs font-body-sm text-body-sm focus:ring-1 focus:ring-primary"
                placeholder="Search patients..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm rounded hover:text-primary transition-colors text-on-surface-variant relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-sm rounded hover:text-primary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-variant ml-sm flex items-center justify-center overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDejkKf6eRFZN8fwKQaBBYJnTi7KaYVwOcWZVBab7jBijjvNUcUUOg2yjOFHseQt7ur8La7mZkBgTD0ZZap0xNBbqBArVqDcPKSjc0LajgHYTHCENpwfFdr_yaSL545que8YtIx0xr7eBbpeHgTzj_VPsFOxJxO8Wt6kl4Q237Mf0ociihD7ryBHiKF1ZPwY-OwXG8PKqgN3y-cA5ZpSHpLOQkypdRzwCz_J5x1BX9bLxRcgW2C6uBJeWCLrVOYPzmsHAj5LSxCZR7X"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-lg max-w-[1600px] mx-auto">
            {/* Page Header & Breadcrumbs */}
            <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
              <div>
                <nav className="flex items-center gap-xs text-on-surface-variant mb-xs">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider">Patients</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Edit Patient</span>
                </nav>
                <h1 className="font-display-lg text-display-lg text-on-surface">Edit Patient</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Update patient information and clinical preferences.</p>
              </div>
              <div className="flex gap-md">
                <Link to={`/admin/patients/${patientId}`} className="px-lg py-md rounded-lg border border-outline text-on-surface font-title-sm text-title-sm hover:bg-surface-container-low transition-colors duration-200">
                  Cancel
                </Link>
                <button className="px-xl py-md rounded-lg bg-primary text-on-primary font-title-sm text-title-sm hover:opacity-90 transition-opacity shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
              {/* Left Column: Patient Form */}
              <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-xl">
                <form className="space-y-xl">
                  <div className="border-b border-outline-variant pb-md mb-lg">
                    <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">person_add</span>
                      Primary Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="first-name">First Name</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="first-name" placeholder="e.g. Jonathan" type="text" defaultValue={patient.name.split(' ')[0]} />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="last-name">Last Name</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="last-name" placeholder="e.g. Miller" type="text" defaultValue={patient.name.split(' ')[1] || ''} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="patient-id">Patient ID (MRN)</label>
                      <div className="relative">
                        <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="patient-id" placeholder="DP-XXXX-XXXX" type="text" defaultValue={patientId} />
                        <span className="absolute right-md top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">fingerprint</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="dob">Date of Birth</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="dob" type="date" defaultValue={patient.dob} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="gender">Gender</label>
                      <select className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0 appearance-none" id="gender" defaultValue={patient.gender.toLowerCase()}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">Email Address (Optional)</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="email" placeholder="patient@example.com" type="email" defaultValue={patient.email} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="phone">Primary Phone</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="phone" placeholder="(555) 000-0000" type="tel" defaultValue={patient.phone} />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="insurance">Insurance Provider</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="insurance" placeholder="e.g. Delta Dental" type="text" defaultValue={patient.insurance} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="address">Address</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="address" placeholder="123 Main St, City, State ZIP" type="text" defaultValue={patient.address} />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="emergency">Emergency Contact</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="emergency" placeholder="Name - (555) 000-0000" type="text" defaultValue={patient.emergencyContact} />
                    </div>
                  </div>

                  <div className="border-b border-outline-variant pb-md mb-lg pt-xl">
                    <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">medical_information</span>
                      Clinical Preferences &amp; Notes
                    </h2>
                  </div>

                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="clinical-notes">Clinical Preferences</label>
                    <textarea className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0 resize-none" id="clinical-notes" placeholder="Describe any specific lab preferences, allergy warnings, or anatomical considerations for this patient..." rows={6}></textarea>
                    <p className="text-on-surface-variant font-body-sm text-[12px] mt-1">Information entered here will be visible to lab technicians on all cases associated with this patient.</p>
                  </div>

                  <div className="flex md:hidden flex-col gap-md pt-lg">
                    <button className="w-full py-md rounded-lg bg-primary text-on-primary font-title-sm text-title-sm">Save Changes</button>
                    <Link to={`/admin/patients/${patientId}`} className="w-full py-md rounded-lg border border-outline text-on-surface font-title-sm text-title-sm text-center">Cancel</Link>
                  </div>
                </form>
              </div>

              {/* Right Column: Sidebar / Context */}
              <div className="lg:col-span-4 space-y-lg">
                <div className="bg-surface border border-outline-variant rounded-xl p-lg">
                  <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm mb-md">
                    <span className="material-symbols-outlined text-on-surface-variant">info</span>
                    Data Privacy Notice
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    All patient data is encrypted in transit and at rest. Please ensure the Patient ID (MRN) matches your local EHR system to maintain consistency across records.
                  </p>
                  <div className="mt-lg pt-md border-t border-outline-variant">
                    <a className="text-primary font-label-caps text-label-caps flex items-center gap-xs hover:underline uppercase tracking-tight" href="#">
                      Review HIPAA Compliance
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>

                <div className="bg-primary-container/10 border border-primary/20 rounded-xl p-lg">
                  <div className="flex gap-md">
                    <span className="material-symbols-outlined text-primary text-display-lg">verified_user</span>
                    <div>
                      <h3 className="font-title-sm text-title-sm text-on-surface mb-sm">Verification</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Once saved, this patient profile can be used to immediately initiate high-precision 3D scans and dental lab orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
