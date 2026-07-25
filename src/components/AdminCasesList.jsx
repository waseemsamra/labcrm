import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

const adminCasesData = [
  {
    id: '#DP-88290',
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
    source: 'Tech Portal',
  },
  {
    id: '#DP-88301',
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
    source: 'Client Portal',
  },
  {
    id: '#DP-88305',
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
    source: 'Tech Portal',
  },
  {
    id: '#DP-88312',
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
    source: 'Client Portal',
  },
  {
    id: '#DP-88315',
    patient: 'James Wilson',
    initials: 'JW',
    clinic: 'Peak Dental Labs',
    location: 'Denver, CO',
    type: 'PFM Bridge',
    stage: 'Milling',
    stageColor: 'bg-primary-container/10 text-primary',
    assignee: 'M. Torres',
    avatar: '/images/tech-avatar.jpg',
    due: 'Oct 25, 2023',
    dueSub: '4 days away',
    urgent: false,
    source: 'Tech Portal',
  },
  {
    id: '#DP-88318',
    patient: 'Elena Rodriguez',
    initials: 'ER',
    clinic: 'Bright Smile Family',
    location: 'Miami, FL',
    type: 'Orthodontic Aligner',
    stage: 'Design',
    stageColor: 'bg-surface-container-highest/50 text-tertiary',
    assignee: 'A. Patel',
    avatar: '/images/tech-avatar2.jpg',
    due: 'Oct 27, 2023',
    dueSub: '6 days away',
    urgent: false,
    source: 'Client Portal',
  },
]

export default function AdminCasesList() {
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [materialFilter, setMaterialFilter] = useState('All Materials')
  const [sourceFilter, setSourceFilter] = useState('All Sources')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCases = adminCasesData.filter((c) => {
    if (statusFilter !== 'All Statuses' && c.stage !== statusFilter) return false
    if (materialFilter !== 'All Materials' && !c.type.toLowerCase().includes(materialFilter.toLowerCase())) return false
    if (sourceFilter !== 'All Sources' && c.source !== sourceFilter) return false
    if (searchQuery && !c.id.toLowerCase().includes(searchQuery.toLowerCase()) && !c.patient.toLowerCase().includes(searchQuery.toLowerCase()) && !c.clinic.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar p-lg ml-64">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-xl mt-md">
          <div>
            <h1 className="font-display-lg text-display-lg text-primary">All Cases</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Cross-portal case overview from technicians and clients</p>
          </div>
          <div className="flex gap-md">
            <button className="flex items-center gap-sm px-lg py-md border border-primary text-primary rounded-lg font-title-sm text-title-sm hover:bg-primary-fixed transition-colors">
              <span className="material-symbols-outlined">download</span>
              Export CSV
            </button>
            <Link to="/cases/intake">
              <button className="flex items-center gap-sm px-lg py-md bg-primary text-on-primary rounded-lg font-title-sm text-title-sm hover:opacity-90 shadow-sm transition-all">
                <span className="material-symbols-outlined">add_box</span>
                New Case
              </button>
            </Link>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-xl">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex items-center gap-md">
            <div className="w-12 h-12 bg-primary-container/20 text-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Total Cases</p>
              <p className="text-headline-md font-headline-md">124</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex items-center gap-md">
            <div className="w-12 h-12 bg-secondary-container/20 text-secondary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">fact_check</span>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Tech Portal</p>
              <p className="text-headline-md font-headline-md">78</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex items-center gap-md">
            <div className="w-12 h-12 bg-surface-container-high text-on-surface rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Client Portal</p>
              <p className="text-headline-md font-headline-md">46</p>
            </div>
          </div>
          <div className="bg-surface-container-lowest border-l-4 border-l-error border border-outline-variant rounded-xl p-lg flex items-center gap-md">
            <div className="w-12 h-12 bg-error-container/20 text-error rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">error</span>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Overdue</p>
              <p className="text-headline-md font-headline-md text-error">8</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-xl">
          <div className="flex flex-wrap items-center gap-md">
            <div className="flex-1 min-w-[240px] relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-sm text-body-sm"
                placeholder="Search by Case ID, Patient, or Clinic..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-label-caps text-outline uppercase px-1">Case Status</label>
              <select
                className="bg-surface border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm text-on-surface-variant focus:ring-primary focus:border-primary"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Statuses</option>
                <option>Intake</option>
                <option>CAD/CAM</option>
                <option>Ceramics</option>
                <option>QC Review</option>
                <option>Shipped</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-label-caps text-outline uppercase px-1">Material Type</label>
              <select
                className="bg-surface border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm text-on-surface-variant focus:ring-primary focus:border-primary"
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
              <label className="text-[10px] font-label-caps text-outline uppercase px-1">Source</label>
              <select
                className="bg-surface border border-outline-variant rounded-lg px-3 py-1.5 text-body-sm text-on-surface-variant focus:ring-primary focus:border-primary"
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
              >
                <option>All Sources</option>
                <option>Tech Portal</option>
                <option>Client Portal</option>
              </select>
            </div>
            <div className="ml-auto self-end">
              <button className="bg-surface-container-high text-on-surface px-4 py-1.5 rounded-lg text-body-sm font-semibold hover:bg-surface-container-highest transition-colors">
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Cases Table */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low">
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Case ID</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Patient</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Clinic & Location</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Type / Material</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Stage</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Source</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Assignee</th>
                  <th className="px-md py-3 text-label-caps font-label-caps text-outline uppercase">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filteredCases.map((c) => (
                  <tr key={c.id} className="hover:bg-surface-container transition-colors group">
                    <td className="px-md py-4">
                      <Link to={`/admin/cases/${encodeURIComponent(c.id)}`} className="flex items-center gap-2 text-primary hover:underline">
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
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${c.source === 'Tech Portal' ? 'bg-primary-container/10 text-primary' : 'bg-secondary-container/20 text-secondary'}`}>
                        {c.source}
                      </span>
                    </td>
                    <td className="px-md py-4">
                      {c.unassigned ? (
                        <div className="flex items-center gap-2 text-outline italic">
                          <span className="material-symbols-outlined text-[18px]">person_add</span>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-md bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
            <span className="text-body-sm text-on-surface-variant">Showing {filteredCases.length} of {adminCasesData.length} cases</span>
            <div className="flex items-center gap-2">
              <button className="p-1 border border-outline-variant rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <span className="px-3 text-body-sm font-semibold">1</span>
              <button className="p-1 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
