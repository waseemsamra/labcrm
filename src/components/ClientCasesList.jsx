import { useState } from 'react'
import { Link } from 'react-router-dom'

const casesData = [
  {
    id: 'DP-88290',
    patient: 'Mark Benson',
    initials: 'MB',
    clinic: 'Riverside Dental',
    location: 'Portland, OR',
    type: 'Zirconia Crown',
    stage: 'CAD/CAM',
    stageColor: 'bg-secondary-container/20 text-secondary',
    assignee: 'L. Chen',
    avatar: '/images/tech-avatar.jpg',
    due: 'Today, 4:00 PM',
    dueSub: '2h 15m left',
    dueColor: 'text-error',
    urgent: true,
  },
  {
    id: 'DP-88301',
    patient: 'Sarah Davis',
    initials: 'SD',
    clinic: 'Metro Health',
    location: 'Chicago, IL',
    type: 'IPS e.max Veneer',
    stage: 'Intake',
    stageColor: 'bg-surface-container-highest/50 text-tertiary',
    assignee: 'D. Smith',
    avatar: '/images/tech-avatar2.jpg',
    due: 'Oct 24, 2023',
    dueSub: '3 days away',
    urgent: false,
  },
  {
    id: 'DP-88305',
    patient: 'Robert Jones',
    initials: 'RJ',
    clinic: 'Smile Design',
    location: 'Austin, TX',
    type: 'Titanium Implant',
    stage: 'QC Review',
    stageColor: 'bg-primary-container/10 text-primary',
    assignee: 'J. Doe',
    avatar: '/images/tech-avatar2.jpg',
    due: 'Tomorrow',
    dueSub: '22h remaining',
    urgent: false,
  },
  {
    id: 'DP-88312',
    patient: 'Karen Lee',
    initials: 'KL',
    clinic: 'City Dental Group',
    location: 'Seattle, WA',
    type: 'Partial Denture',
    stage: 'Ceramics',
    stageColor: 'bg-tertiary-container/10 text-tertiary-container',
    assignee: null,
    due: 'Oct 26, 2023',
    dueSub: '5 days away',
    urgent: false,
    unassigned: true,
  },
]

export default function ClientCasesList() {
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [materialFilter, setMaterialFilter] = useState('All Materials')
  const [clinicianFilter, setClinicianFilter] = useState('All Clinicians')
  const [priority, setPriority] = useState('Normal')

  return (
    <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* TopAppBar */}
      <header className="w-full h-16 flex justify-between items-center px-lg sticky top-0 z-40 bg-surface-bright border-b border-outline-variant">
        <div className="flex items-center gap-md flex-1 max-w-xl">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
            <input
              className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-body-sm focus:ring-2 focus:ring-primary-container"
              placeholder="Search Case ID, Patient, or Clinic..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-lg">
          <nav className="hidden md:flex gap-md">
            <span className="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-label-caps cursor-pointer">CASES LIST</span>
            <span className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps cursor-pointer">CALENDAR</span>
            <span className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps cursor-pointer">REPORTS</span>
          </nav>
          <div className="flex items-center gap-sm">
            <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors relative">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant mx-2"></div>
            <div className="flex items-center gap-sm cursor-pointer hover:opacity-80 transition-opacity">
              <div className="text-right hidden sm:block">
                <p className="text-label-caps font-label-caps text-on-surface">Alex Rivera</p>
                <p className="text-[10px] text-outline">Lab Manager</p>
              </div>
              <img
                className="w-9 h-9 rounded-full border border-outline-variant object-cover"
                src="/images/tech-avatar.jpg"
                alt="Lab manager"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-lg flex flex-col gap-lg custom-scrollbar">
        {/* Operational Insights Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex items-center gap-md">
            <div className="w-12 h-12 bg-primary-container/20 text-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-outline">Active Cases</p>
              <p className="text-headline-md font-headline-md">124</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl border-l-4 border-l-error border border-outline-variant flex items-center gap-md">
            <div className="w-12 h-12 bg-error-container/20 text-error rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined" data-icon="error">error</span>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-outline">Overdue Today</p>
              <p className="text-headline-md font-headline-md text-error">8</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex items-center gap-md">
            <div className="w-12 h-12 bg-secondary-container/20 text-secondary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-outline">Awaiting QC</p>
              <p className="text-headline-md font-headline-md">15</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant flex items-center gap-md">
            <div className="w-12 h-12 bg-tertiary-container/20 text-tertiary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined" data-icon="shipped">local_shipping</span>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-outline">Ready to Ship</p>
              <p className="text-headline-md font-headline-md">6</p>
            </div>
          </div>
        </div>

        {/* Filters Area */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <div className="flex flex-wrap items-center gap-md">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-label-caps text-outline uppercase px-1">Case Status</label>
              <select
                className="bg-surface-bright border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm text-on-surface-variant focus:ring-primary focus:border-primary"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Statuses</option>
                <option>Intake</option>
                <option>CAD/CAM</option>
                <option>Ceramics</option>
                <option>QC</option>
                <option>Shipped</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-label-caps text-outline uppercase px-1">Material Type</label>
              <select
                className="bg-surface-bright border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm text-on-surface-variant focus:ring-primary focus:border-primary"
                value={materialFilter}
                onChange={(e) => setMaterialFilter(e.target.value)}
              >
                <option>All Materials</option>
                <option>Zirconia</option>
                <option>IPS e.max</option>
                <option>Titanium</option>
                <option>PFM</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-label-caps text-outline uppercase px-1">Clinician</label>
              <select
                className="bg-surface-bright border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm text-on-surface-variant focus:ring-primary focus:border-primary"
                value={clinicianFilter}
                onChange={(e) => setClinicianFilter(e.target.value)}
              >
                <option>All Clinicians</option>
                <option>Dr. Sarah Miller</option>
                <option>Dr. James Wilson</option>
                <option>Dr. Elena Costa</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-label-caps text-outline uppercase px-1">Priority</label>
              <div className="flex gap-1">
                <button
                  className={`px-3 py-1.5 border rounded-lg text-body-sm transition-colors ${
                    priority === 'Low'
                      ? 'border-outline-variant text-on-surface-variant hover:bg-surface-container'
                      : 'border-outline-variant text-error hover:bg-error/5'
                  }`}
                  onClick={() => setPriority('Low')}
                >
                  Low
                </button>
                <button
                  className={`px-3 py-1.5 border rounded-lg text-body-sm transition-colors ${
                    priority === 'Normal'
                      ? 'border-primary/30 bg-primary-container/10 text-primary font-semibold'
                      : 'border-outline-variant text-on-surface-variant hover:bg-surface-container'
                  }`}
                  onClick={() => setPriority('Normal')}
                >
                  Normal
                </button>
                <button
                  className={`px-3 py-1.5 border rounded-lg text-body-sm transition-colors ${
                    priority === 'Urgent'
                      ? 'border-outline-variant text-error hover:bg-error/5'
                      : 'border-outline-variant text-on-surface-variant hover:bg-surface-container'
                  }`}
                  onClick={() => setPriority('Urgent')}
                >
                  Urgent
                </button>
              </div>
            </div>
            <div className="ml-auto self-end flex gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg border border-outline-variant transition-colors">
                <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
              </button>
              <button className="bg-surface-container-high text-on-surface px-4 py-1.5 rounded-lg text-body-sm font-semibold hover:bg-surface-container-highest transition-colors">
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Case List Table */}
        <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low">
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Case ID</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Patient</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Clinic & Location</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Type / Material</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Stage</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Assignee</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Due Date</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {casesData.map((c) => (
                  <tr key={c.id} className="hover:bg-tertiary-fixed/30 transition-colors group">
                    <td className="px-md py-4">
                      <Link to={`/client/Cases/${c.id}`} className="flex items-center gap-2 text-primary hover:underline">
                        {c.urgent && <span className="w-1.5 h-1.5 bg-error rounded-full animate-pulse"></span>}
                        <span className={`text-data-tabular font-data-tabular font-semibold ${c.urgent ? 'text-error' : 'text-on-surface'}`}>{c.id}</span>
                      </Link>
                    </td>
                    <td className="px-md py-4">
                      <div className="flex items-center gap-sm">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${c.unassigned ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-primary-container text-on-primary-container'}`}>
                          {c.initials}
                        </div>
                        <p className="text-body-sm font-semibold">{c.patient}</p>
                      </div>
                    </td>
                    <td className="px-md py-4">
                      <div className="text-body-sm">
                        <p className="font-semibold">{c.clinic}</p>
                        <p className="text-[11px] text-outline">{c.location}</p>
                      </div>
                    </td>
                    <td className="px-md py-4">
                      <span className="text-body-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">{c.type}</span>
                    </td>
                    <td className="px-md py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${c.stageColor} text-[11px] font-bold`}>
                        <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                        {c.stage}
                      </span>
                    </td>
                    <td className="px-md py-4">
                      {c.unassigned ? (
                        <div className="flex items-center gap-2 text-outline italic">
                          <span className="material-symbols-outlined text-[18px]" data-icon="person_add">person_add</span>
                          <span className="text-body-sm">Unassigned</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <img className="w-6 h-6 rounded-full border border-outline-variant" src={c.avatar} alt="Avatar" />
                          <span className="text-body-sm">{c.assignee}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-md py-4">
                      <div className="text-body-sm">
                        <p className={`font-semibold ${c.dueColor || ''}`}>{c.due}</p>
                        <p className={`text-[11px] ${c.dueColor ? 'text-error font-bold italic' : 'text-outline'}`}>{c.dueSub}</p>
                      </div>
                    </td>
                    <td className="px-md py-4">
                      <div className="flex gap-1 justify-end">
                        <Link to={`/client/Cases/${c.id}`} className="p-1.5 text-primary hover:bg-primary-container/10 rounded transition-colors" title="Open Details">
                          <span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
                        </Link>
                        <button className="p-1.5 text-outline hover:bg-surface-container rounded transition-colors" title="Quick Update">
                          <span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="p-md bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
            <span className="text-body-sm text-on-surface-variant">Showing 1 to 4 of 124 active cases</span>
            <div className="flex items-center gap-2">
              <button className="p-1 border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              <span className="px-3 text-body-sm font-semibold">1</span>
              <button className="p-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
