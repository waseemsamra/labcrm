export default function CaseApprovals() {
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar Component */}
      <header className="flex justify-between items-center w-full px-lg h-16 sticky top-0 z-50 bg-white border-b border-outline-variant">
        <div className="flex items-center gap-md">
          <span className="font-title-sm text-title-sm font-bold text-primary">DentaLab Portal</span>
        </div>
        <div className="flex items-center gap-lg">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary">help</span>
            <span className="font-body-md text-body-md text-on-surface-variant">Support</span>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
          </div>
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/images/doc-avatar.jpg"
                alt="Dr. Julian Vance"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-lg md:p-xl space-y-lg">
        {/* Page Header & Stats Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
          <div>
            <h2 className="font-display-lg text-display-lg text-on-surface">Case Approvals</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Review and sign off on pending restoration designs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
            <div className="bg-white p-md border border-outline-variant rounded-lg flex flex-col items-center min-w-[140px]">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Pending</span>
              <span className="font-headline-md text-headline-md text-primary">12</span>
            </div>
            <div className="bg-white p-md border border-outline-variant rounded-lg flex flex-col items-center min-w-[140px]">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Urgent</span>
              <span className="font-headline-md text-headline-md text-error">03</span>
            </div>
            <div className="bg-white p-md border border-outline-variant rounded-lg flex flex-col items-center min-w-[140px]">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Avg. Time</span>
              <span className="font-headline-md text-headline-md text-secondary">4.2h</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-md py-md bg-surface-container-lowest rounded-lg">
          <div className="flex gap-sm overflow-x-auto pb-xs md:pb-0">
            <button className="px-lg py-sm bg-primary text-on-primary rounded-full font-label-caps text-label-caps whitespace-nowrap">All Cases</button>
            <button className="px-lg py-sm bg-surface-container border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps whitespace-nowrap hover:bg-primary-fixed transition-colors">Urgent</button>
            <button className="px-lg py-sm bg-surface-container border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps whitespace-nowrap hover:bg-primary-fixed transition-colors">Standard</button>
            <button className="px-lg py-sm bg-surface-container border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps whitespace-nowrap hover:bg-primary-fixed transition-colors">Awaiting Feedback</button>
          </div>
          <div className="flex items-center gap-sm px-md py-sm bg-white border border-outline-variant rounded-xl w-full md:w-auto">
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="border-none focus:ring-0 bg-transparent text-body-sm p-0 w-full md:w-64"
              placeholder="Search Patient or Case ID..."
              type="text"
            />
          </div>
        </div>

        {/* Approvals Grid (Bento style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">
          {/* Urgent Case Card */}
          <div className="bg-white border-2 border-error-container rounded-xl flex flex-col overflow-hidden group hover:border-primary transition-all">
            <div className="relative h-48 overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/approval-3d-render.jpg"
                alt="Dental scan"
              />
              <div className="absolute top-md left-md">
                <span className="bg-error text-on-error px-md py-xs rounded-full font-label-caps text-[10px] uppercase tracking-wider">Urgent</span>
              </div>
              <div className="absolute bottom-md right-md bg-white/90 backdrop-blur-md px-sm py-xs rounded flex items-center gap-xs">
                <span className="material-symbols-outlined text-error text-sm">schedule</span>
                <span className="font-data-tabular text-data-tabular text-error">4 Days in Queue</span>
              </div>
            </div>
            <div className="p-md flex-grow">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <p className="font-label-caps text-label-caps text-outline">#DL-45122</p>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Eleanor Shellstrop</h3>
                </div>
                <span className="font-body-sm text-body-sm text-primary font-bold">Zirconia Crown</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Upper right molar (#3). Shade A2. Digital scan received 03/24. Precise margin fit required.</p>
            </div>
            <div className="p-md border-t border-outline-variant grid grid-cols-2 gap-md">
              <button className="py-sm bg-surface-container-low text-on-surface border border-outline-variant rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors">Request Change</button>
              <button className="py-sm bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-colors">Approve</button>
            </div>
          </div>

          {/* Standard Case Card */}
          <div className="bg-white border border-outline-variant rounded-xl flex flex-col overflow-hidden group hover:border-primary transition-all">
            <div className="relative h-48 overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/approval-scan.jpg"
                alt="Dental scan"
              />
              <div className="absolute top-md left-md">
                <span className="bg-secondary text-on-secondary px-md py-xs rounded-full font-label-caps text-[10px] uppercase tracking-wider">Standard</span>
              </div>
              <div className="absolute bottom-md right-md bg-white/90 backdrop-blur-md px-sm py-xs rounded flex items-center gap-xs">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">schedule</span>
                <span className="font-data-tabular text-data-tabular text-on-surface-variant">1 Day in Queue</span>
              </div>
            </div>
            <div className="p-md flex-grow">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <p className="font-label-caps text-label-caps text-outline">#DL-45125</p>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Chidi Anagonye</h3>
                </div>
                <span className="font-body-sm text-body-sm text-primary font-bold">E.max Veneer</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Central Incisors (#8, #9). Bleach shade BL2. Minimal prep design confirmed.</p>
            </div>
            <div className="p-md border-t border-outline-variant grid grid-cols-2 gap-md">
              <button className="py-sm bg-surface-container-low text-on-surface border border-outline-variant rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors">Request Change</button>
              <button className="py-sm bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-colors">Approve</button>
            </div>
          </div>

          {/* Awaiting Feedback Card */}
          <div className="bg-white border border-outline-variant rounded-xl flex flex-col overflow-hidden group hover:border-primary transition-all">
            <div className="relative h-48 overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/invoice-scan1.jpg"
                alt="Dental scan"
              />
              <div className="absolute top-md left-md">
                <span className="bg-tertiary text-on-tertiary px-md py-xs rounded-full font-label-caps text-[10px] uppercase tracking-wider">Awaiting Feedback</span>
              </div>
              <div className="absolute bottom-md right-md bg-white/90 backdrop-blur-md px-sm py-xs rounded flex items-center gap-xs">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">schedule</span>
                <span className="font-data-tabular text-data-tabular text-on-surface-variant">2 Days in Queue</span>
              </div>
            </div>
            <div className="p-md flex-grow">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <p className="font-label-caps text-label-caps text-outline">#DL-45118</p>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Tahani Al-Jamil</h3>
                </div>
                <span className="font-body-sm text-body-sm text-primary font-bold">CoCr Partial</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Mandibular framework. Note on distal extension clasps from Dr. Smith.</p>
            </div>
            <div className="p-md border-t border-outline-variant grid grid-cols-2 gap-md">
              <button className="py-sm bg-surface-container-low text-on-surface border border-outline-variant rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors">View Comments</button>
              <button className="py-sm bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-colors">Re-Approve</button>
            </div>
          </div>

          {/* Another Urgent Case */}
          <div className="bg-white border-2 border-error-container rounded-xl flex flex-col overflow-hidden group hover:border-primary transition-all lg:col-span-1">
            <div className="relative h-48 overflow-hidden bg-surface-container-low">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/invoice-scan2.jpg"
                alt="Dental scan"
              />
              <div className="absolute top-md left-md">
                <span className="bg-error text-on-error px-md py-xs rounded-full font-label-caps text-[10px] uppercase tracking-wider">Urgent</span>
              </div>
              <div className="absolute bottom-md right-md bg-white/90 backdrop-blur-md px-sm py-xs rounded flex items-center gap-xs">
                <span className="material-symbols-outlined text-error text-sm">schedule</span>
                <span className="font-data-tabular text-data-tabular text-error">5 Days in Queue</span>
              </div>
            </div>
            <div className="p-md flex-grow">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <p className="font-label-caps text-label-caps text-outline">#DL-45130</p>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Jason Mendoza</h3>
                </div>
                <span className="font-body-sm text-body-sm text-primary font-bold">Screw-Retained Bridge</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">3-Unit bridge (#19-21). Titanium base. Verification jig requested by clinic.</p>
            </div>
            <div className="p-md border-t border-outline-variant grid grid-cols-2 gap-md">
              <button className="py-sm bg-surface-container-low text-on-surface border border-outline-variant rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors">Request Change</button>
              <button className="py-sm bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-colors">Approve</button>
            </div>
          </div>

          {/* Summary List View */}
          <div className="bg-white border border-outline-variant rounded-xl flex flex-col lg:col-span-2 overflow-hidden">
            <div className="p-md border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
              <h4 className="font-title-sm text-title-sm text-on-surface">Upcoming Approvals</h4>
              <button className="text-primary font-label-caps text-label-caps hover:underline">View All</button>
            </div>
            <div className="divide-y divide-outline-variant">
              {/* Row 1 */}
              <div className="p-md flex items-center justify-between hover:bg-tertiary-fixed transition-colors">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 rounded bg-surface-container border border-outline-variant overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src="/images/approval-thumb1.jpg" alt="Case preview" />
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-outline">#DL-45135</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Janet Dell-Harriman</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="font-body-sm text-body-sm text-on-surface">Surgical Guide</p>
                  <p className="font-data-tabular text-data-tabular text-outline">Due in 2h</p>
                </div>
                <div className="flex gap-sm">
                  <button className="p-sm text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-sm text-primary hover:text-primary-container transition-colors">
                    <span className="material-symbols-outlined">check_circle</span>
                  </button>
                </div>
              </div>
              {/* Row 2 */}
              <div className="p-md flex items-center justify-between hover:bg-tertiary-fixed transition-colors">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 rounded bg-surface-container border border-outline-variant overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src="/images/approval-thumb2.jpg" alt="Case preview" />
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-outline">#DL-45140</p>
                    <p className="font-body-sm text-body-sm text-on-surface font-semibold">Michael Realman</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="font-body-sm text-body-sm text-on-surface">Gold Inlay</p>
                  <p className="font-data-tabular text-data-tabular text-outline">Due in 5h</p>
                </div>
                <div className="flex gap-sm">
                  <button className="p-sm text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-sm text-primary hover:text-primary-container transition-colors">
                    <span className="material-symbols-outlined">check_circle</span>
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
