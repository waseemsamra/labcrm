import AdminSidebar from './AdminSidebar'
import { useParams, Link } from 'react-router-dom'

const patients = {
  'DP-8821': {
    name: 'Eleanor Harper',
    dob: 'May 12, 1982',
    gender: 'Female',
    phone: '(555) 012-3456',
    email: 'e.vance@dentalcare.com',
    insurance: 'MetLife Preferred Platinum',
    address: '123 Oak Street, Suite 100, Springfield, IL 62701',
    emergencyContact: 'John Harper (Spouse) - (555) 012-3457',
    status: 'VIP Client',
    cases: 2,
    visits: 12,
    balance: '$450.00',
    lastVisit: 'Oct 24, 2023',
  },
  'DP-9042': {
    name: 'Marcus Aris',
    dob: 'Dec 04, 1995',
    gender: 'Male',
    phone: '(555) 012-3458',
    email: 'm.aris@email.com',
    insurance: 'Delta Dental Premier',
    address: '456 Pine Ave, Springfield, IL 62702',
    emergencyContact: 'Jane Aris (Mother) - (555) 012-3459',
    status: 'Active',
    cases: 0,
    visits: 5,
    balance: '$0.00',
    lastVisit: 'Nov 02, 2023',
  },
  'DP-7731': {
    name: 'Sarah Liao',
    dob: 'Jul 28, 1974',
    gender: 'Female',
    phone: '(555) 012-3460',
    email: 's.liao@email.com',
    insurance: 'Cigna Dental',
    address: '789 Maple Dr, Springfield, IL 62703',
    emergencyContact: 'Tom Liao (Spouse) - (555) 012-3461',
    status: 'Active',
    cases: 1,
    visits: 8,
    balance: '$120.00',
    lastVisit: 'Oct 30, 2023',
  },
  'DP-8119': {
    name: 'Julian Thompson',
    dob: 'Jan 15, 2001',
    gender: 'Male',
    phone: '(555) 012-3462',
    email: 'j.thompson@email.com',
    insurance: 'Aetna Dental',
    address: '321 Elm St, Springfield, IL 62704',
    emergencyContact: 'Mary Thompson (Mother) - (555) 012-3463',
    status: 'Active',
    cases: 0,
    visits: 3,
    balance: '$0.00',
    lastVisit: 'Sep 14, 2023',
  },
  'DP-5520': {
    name: 'Rebecca Davis',
    dob: 'Feb 19, 1968',
    gender: 'Female',
    phone: '(555) 012-3464',
    email: 'r.davis@email.com',
    insurance: 'Humana Dental',
    address: '654 Cedar Ln, Springfield, IL 62705',
    emergencyContact: 'Robert Davis (Spouse) - (555) 012-3465',
    status: 'VIP Client',
    cases: 3,
    visits: 24,
    balance: '$890.00',
    lastVisit: 'Oct 11, 2023',
  },
}

export default function AdminPatientDetail() {
  const { patientId } = useParams()
  const patient = patients[patientId] || patients['DP-8821']

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-lg flex-1">
            <h2 className="font-headline-md text-headline-md font-semibold text-primary">Patient Profile</h2>
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
            {/* Patient Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
              <div className="flex items-center gap-lg">
                <div className="w-20 h-20 rounded-xl bg-surface-container-highest flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-primary text-4xl">person</span>
                </div>
                <div>
                  <div className="flex items-center gap-md">
                    <h1 className="font-display-lg text-display-lg text-on-surface">{patient.name}</h1>
                    <span className="bg-surface-container px-sm py-xs rounded text-[11px] font-bold text-primary tracking-widest uppercase">{patient.status}</span>
                  </div>
                  <div className="flex gap-md text-on-surface-variant font-body-sm text-body-sm mt-xs">
                    <span>ID: #{patientId}</span>
                    <span>•</span>
                    <span>DOB: {patient.dob}</span>
                    <span>•</span>
                    <span>{patient.gender}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-sm">
                <Link to={`/admin/patients/${patientId}/edit`} className="flex items-center gap-sm px-md py-sm bg-surface border border-outline-variant hover:bg-surface-container transition-colors rounded-lg font-label-caps text-label-caps">
                  <span className="material-symbols-outlined text-md">edit</span>
                  Edit Patient
                </Link>
                <button className="flex items-center gap-sm px-md py-sm bg-primary text-on-primary hover:bg-primary-container transition-colors rounded-lg font-label-caps text-label-caps">
                  <span className="material-symbols-outlined text-md">add</span>
                  Create New Case
                </button>
              </div>
            </div>

            {/* Dashboard Grid Layout */}
            <div className="grid grid-cols-12 gap-lg">
              {/* Main Tabbed Content (Left Col) */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-lg">
                {/* Tabs Navigation */}
                <div className="border-b border-outline-variant flex gap-xl">
                  <button className="pb-md font-label-caps text-label-caps text-primary border-b-2 border-primary transition-all">Case History</button>
                  <button className="pb-md font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all">Clinical Notes</button>
                  <button className="pb-md font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all">Files &amp; Scans</button>
                </div>

                {/* Case History Content */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-surface-container-low border-b border-outline-variant">
                      <tr>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Case ID</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Date</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Restoration Type</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Status</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="px-md py-md font-data-tabular text-data-tabular">#DL-44910</td>
                        <td className="px-md py-md font-body-sm text-body-sm">Oct 24, 2023</td>
                        <td className="px-md py-md">
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm font-semibold">Zirconia Crown</span>
                            <span className="text-[11px] text-on-surface-variant">Tooth #14</span>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">COMPLETED</span>
                        </td>
                        <td className="px-md py-md text-right">
                          <button className="text-primary hover:underline font-label-caps text-[11px]">View File</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="px-md py-md font-data-tabular text-data-tabular">#DL-45122</td>
                        <td className="px-md py-md font-body-sm text-body-sm">Dec 02, 2023</td>
                        <td className="px-md py-md">
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm font-semibold">Implant Bridge</span>
                            <span className="text-[11px] text-on-surface-variant">Teeth #19-21</span>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-primary-container text-on-primary-container">IN PRODUCTION</span>
                        </td>
                        <td className="px-md py-md text-right">
                          <button className="text-primary hover:underline font-label-caps text-[11px]">Track</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="px-md py-md font-data-tabular text-data-tabular">#DL-42881</td>
                        <td className="px-md py-md font-body-sm text-body-sm">Aug 15, 2022</td>
                        <td className="px-md py-md">
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm font-semibold">Diagnostic Wax-up</span>
                            <span className="text-[11px] text-on-surface-variant">Full Arch Upper</span>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <span className="inline-flex items-center px-sm py-0.5 rounded-full text-[11px] font-bold bg-surface-container-high text-on-surface-variant">ARCHIVED</span>
                        </td>
                        <td className="px-md py-md text-right">
                          <button className="text-primary hover:underline font-label-caps text-[11px]">Details</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Visual Assets Section */}
                <div className="grid grid-cols-2 gap-md">
                  <div className="border border-outline-variant rounded-lg p-md bg-surface-container-lowest">
                    <div className="flex justify-between items-center mb-md">
                      <h3 className="font-title-sm text-title-sm text-on-surface">Recent Scans</h3>
                      <button className="text-primary text-[12px] font-bold hover:underline">Download All</button>
                    </div>
                    <div className="grid grid-cols-3 gap-sm">
                      <div className="aspect-square bg-surface-container rounded border border-outline-variant relative overflow-hidden group cursor-pointer">
                        <img className="w-full h-full object-cover" src="/images/approval-3d-render.jpg" alt="Dental scan" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <span className="material-symbols-outlined text-white">visibility</span>
                        </div>
                      </div>
                      <div className="aspect-square bg-surface-container rounded border border-outline-variant relative overflow-hidden group cursor-pointer">
                        <img className="w-full h-full object-cover" src="/images/approval-scan.jpg" alt="Dental scan" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <span className="material-symbols-outlined text-white">visibility</span>
                        </div>
                      </div>
                      <div className="aspect-square bg-surface-container rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-outline">add_a_photo</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-outline-variant rounded-lg p-md bg-surface-container-lowest">
                    <div className="flex justify-between items-center mb-md">
                      <h3 className="font-title-sm text-title-sm text-on-surface">Active Progression</h3>
                      <span className="text-[11px] font-bold text-on-surface-variant">STEP 3 OF 5</span>
                    </div>
                    <div className="flex items-center w-full gap-xs mt-lg">
                      <div className="h-2 flex-grow bg-primary rounded-full"></div>
                      <div className="h-2 flex-grow bg-primary rounded-full"></div>
                      <div className="h-2 flex-grow bg-primary rounded-full relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-primary">SCAN VALIDATED</div>
                      </div>
                      <div className="h-2 flex-grow bg-surface-container-highest rounded-full"></div>
                      <div className="h-2 flex-grow bg-surface-container-highest rounded-full"></div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-lg">Case #DL-45122 is currently in the **Milling** phase. Expected delivery: **Dec 12**.</p>
                  </div>
                </div>
              </div>

              {/* Patient Quick Info Sidebar (Right Col) */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-lg">
                {/* Alert/Allergies Section */}
                <div className="bg-error-container border border-error/20 rounded-lg p-md">
                  <div className="flex items-center gap-sm mb-sm">
                    <span className="material-symbols-outlined text-error">warning</span>
                    <h3 className="font-label-caps text-label-caps text-on-error-container">Critical Alerts</h3>
                  </div>
                  <ul className="flex flex-col gap-xs">
                    <li className="font-body-sm text-body-sm font-semibold text-on-error-container flex justify-between">
                      <span>Lidocaine Allergy</span>
                      <span className="material-symbols-outlined text-sm">priority_high</span>
                    </li>
                    <li className="font-body-sm text-body-sm text-on-error-container opacity-80">Severe reaction reported 2021.</li>
                  </ul>
                </div>

                {/* Demographics Card */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md">Patient Details</h3>
                  <div className="flex flex-col gap-md">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-outline uppercase tracking-wider">Primary Phone</span>
                        <span className="font-data-tabular text-data-tabular text-on-surface">{patient.phone}</span>
                      </div>
                      <button className="p-xs hover:bg-surface-container rounded transition-colors">
                        <span className="material-symbols-outlined text-sm text-primary">call</span>
                      </button>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-outline uppercase tracking-wider">Email Address</span>
                      <span className="font-body-sm text-body-sm text-on-surface">{patient.email}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-outline uppercase tracking-wider">Insurance Provider</span>
                      <span className="font-body-sm text-body-sm text-on-surface">{patient.insurance}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-outline uppercase tracking-wider">Address</span>
                      <span className="font-body-sm text-body-sm text-on-surface">{patient.address}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-outline uppercase tracking-wider">Emergency Contact</span>
                      <span className="font-body-sm text-body-sm text-on-surface">{patient.emergencyContact}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions Dashboard */}
                <div className="grid grid-cols-2 gap-sm">
                  <button className="flex flex-col items-center justify-center gap-xs p-md bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-primary">upload_file</span>
                    <span className="text-[11px] font-bold uppercase tracking-tighter">Upload Scan</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-xs p-md bg-surface-container-low border border-outline-variant rounded-lg hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-primary">print</span>
                    <span className="text-[11px] font-bold uppercase tracking-tighter">Print Summary</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
