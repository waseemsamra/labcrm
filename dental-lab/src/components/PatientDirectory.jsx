import { Link } from 'react-router-dom'

export default function PatientDirectory() {
  return (
    <main className="flex-grow min-h-screen">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface border-b border-outline-variant px-lg py-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-lg">
            <span className="font-display-lg text-display-lg text-primary">Patient Directory</span>
            <div className="relative w-96 hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-body-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="Search by name, ID or DOB..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant mx-sm"></div>
            <div className="flex items-center gap-sm">
              <div className="w-10 h-10 rounded-full border border-outline-variant overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/images/doc-avatar.jpg"
                  alt="Dr. Julian Vance"
                />
              </div>
              <div className="hidden lg:block">
                <p className="font-title-sm text-label-caps leading-tight">Dr. Julian Vance</p>
                <p className="text-xs text-on-surface-variant">Dental Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="p-lg">
        {/* Quick Stats / Filters Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
          <div className="bg-surface border border-outline-variant p-md flex flex-col gap-xs rounded-lg">
            <span className="text-on-surface-variant font-label-caps text-[10px]">TOTAL PATIENTS</span>
            <div className="flex items-baseline gap-sm">
              <span className="text-display-lg font-bold text-primary">1,248</span>
              <span className="text-xs text-secondary font-medium">+12 this month</span>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-md flex flex-col gap-xs rounded-lg">
            <span className="text-on-surface-variant font-label-caps text-[10px]">ACTIVE CASES</span>
            <div className="flex items-baseline gap-sm">
              <span className="text-display-lg font-bold text-primary">42</span>
              <span className="text-xs text-on-surface-variant font-medium">8 pending lab</span>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-md flex flex-col gap-xs rounded-lg">
            <span className="text-on-surface-variant font-label-caps text-[10px]">LAST 7 DAYS</span>
            <div className="flex items-baseline gap-sm">
              <span className="text-display-lg font-bold text-primary">18</span>
              <span className="text-xs text-on-surface-variant font-medium">Appointments</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Link to="/client/PatientRecords/add" className="bg-primary text-on-primary h-12 px-lg rounded-lg font-title-sm flex items-center gap-sm shadow-sm hover:brightness-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined">person_add</span>
              New Patient
            </Link>
          </div>
        </div>

        {/* Directory Table */}
        <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
          <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
            <div className="flex gap-md">
              <button className="px-md py-1.5 rounded-full border border-primary text-primary text-label-caps bg-primary/5">All Patients</button>
              <button className="px-md py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-caps hover:bg-surface-container">Active</button>
              <button className="px-md py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-caps hover:bg-surface-container">New</button>
            </div>
            <div className="flex items-center gap-sm">
              <span className="text-body-sm text-on-surface-variant">Sort by:</span>
              <select className="bg-transparent border-none text-body-sm font-semibold text-primary focus:ring-0 cursor-pointer">
                <option>Last Activity</option>
                <option>Alphabetical</option>
                <option>Age</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Patient Name</th>
                  <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Date of Birth</th>
                  <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Last Case Date</th>
                  <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase">Active Cases</th>
                  <th className="px-lg py-4 font-label-caps text-label-caps text-on-surface-variant uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {/* Row 1 */}
                <tr className="hover:bg-[#E8F1F8] transition-colors cursor-pointer group">
                  <td className="px-lg py-md">
                    <Link to={`/client/PatientRecords/DP-8821`} className="flex items-center gap-md">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-caps">EH</div>
                      <div>
                        <p className="font-title-sm text-body-md text-on-surface group-hover:text-primary transition-colors">Eleanor Harper</p>
                        <p className="text-[12px] text-on-surface-variant">ID: #DP-8821</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">May 12, 1982</td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Oct 24, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                      2 Active
                    </span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <Link to={`/client/PatientRecords/DP-8821`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="View Records">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </Link>
                      <Link to={`/client/PatientRecords/DP-8821/edit`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="Edit Profile">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </Link>
                    </div>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-[#E8F1F8] transition-colors cursor-pointer group">
                  <td className="px-lg py-md">
                    <Link to={`/client/PatientRecords/DP-9042`} className="flex items-center gap-md">
                      <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-label-caps">MA</div>
                      <div>
                        <p className="font-title-sm text-body-md text-on-surface group-hover:text-primary transition-colors">Marcus Aris</p>
                        <p className="text-[12px] text-on-surface-variant">ID: #DP-9042</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Dec 04, 1995</td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Nov 02, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                      No active
                    </span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <Link to={`/client/PatientRecords/DP-9042`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="View Records">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </Link>
                      <Link to={`/client/PatientRecords/DP-9042/edit`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="Edit Profile">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </Link>
                    </div>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-[#E8F1F8] transition-colors cursor-pointer group">
                  <td className="px-lg py-md">
                    <Link to={`/client/PatientRecords/DP-7731`} className="flex items-center gap-md">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-label-caps">SL</div>
                      <div>
                        <p className="font-title-sm text-body-md text-on-surface group-hover:text-primary transition-colors">Sarah Liao</p>
                        <p className="text-[12px] text-on-surface-variant">ID: #DP-7731</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Jul 28, 1974</td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Oct 30, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                      1 Active
                    </span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <Link to={`/client/PatientRecords/DP-7731`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="View Records">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </Link>
                      <Link to={`/client/PatientRecords/DP-7731/edit`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="Edit Profile">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </Link>
                    </div>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-[#E8F1F8] transition-colors cursor-pointer group">
                  <td className="px-lg py-md">
                    <Link to={`/client/PatientRecords/DP-8119`} className="flex items-center gap-md">
                      <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-label-caps">JT</div>
                      <div>
                        <p className="font-title-sm text-body-md text-on-surface group-hover:text-primary transition-colors">Julian Thompson</p>
                        <p className="text-[12px] text-on-surface-variant">ID: #DP-8119</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Jan 15, 2001</td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Sep 14, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                      No active
                    </span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <Link to={`/client/PatientRecords/DP-8119`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="View Records">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </Link>
                      <Link to={`/client/PatientRecords/DP-8119/edit`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="Edit Profile">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </Link>
                    </div>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-[#E8F1F8] transition-colors cursor-pointer group">
                  <td className="px-lg py-md">
                    <Link to={`/client/PatientRecords/DP-5520`} className="flex items-center gap-md">
                      <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold text-label-caps">RD</div>
                      <div>
                        <p className="font-title-sm text-body-md text-on-surface group-hover:text-primary transition-colors">Rebecca Davis</p>
                        <p className="text-[12px] text-on-surface-variant">ID: #DP-5520</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Feb 19, 1968</td>
                  <td className="px-lg py-md font-data-tabular text-data-tabular text-on-surface">Oct 11, 2023</td>
                  <td className="px-lg py-md">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                      3 Active
                    </span>
                  </td>
                  <td className="px-lg py-md text-right">
                    <div className="flex justify-end gap-xs">
                      <Link to={`/client/PatientRecords/DP-5520`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="View Records">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </Link>
                      <Link to={`/client/PatientRecords/DP-5520/edit`} className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-all text-on-surface-variant" title="Edit Profile">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="px-lg py-md bg-surface border-t border-outline-variant flex justify-between items-center">
            <p className="text-body-sm text-on-surface-variant">Showing 1 to 5 of 1,248 patients</p>
            <div className="flex gap-xs">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-xs font-bold">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-xs font-bold">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-xs font-bold">3</button>
              <span className="px-xs flex items-end text-on-surface-variant">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all text-xs font-bold">250</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contextual Assistant/Info Bar */}
        <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="bg-surface-container p-lg rounded-xl border border-primary/10 flex items-start gap-md">
            <div className="p-2 bg-primary/10 text-primary rounded">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            </div>
            <div>
              <h3 className="font-title-sm text-primary mb-1">Quick Patient Import</h3>
              <p className="text-body-sm text-on-surface-variant">You can bulk import patient records via CSV or sync directly with your Practice Management Software (PMS) under Clinical Settings.</p>
              <button className="mt-md text-primary font-semibold text-xs flex items-center gap-1 hover:underline">
                Access Sync Settings
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="bg-surface-container-high p-lg rounded-xl border border-secondary/10 flex items-start gap-md">
            <div className="p-2 bg-secondary/10 text-secondary rounded">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div>
              <h3 className="font-title-sm text-secondary mb-1">Secure Record Access</h3>
              <p className="text-body-sm text-on-surface-variant">All patient data is encrypted. Actions performed on this directory are logged for HIPAA compliance and clinical auditing.</p>
              <button className="mt-md text-secondary font-semibold text-xs flex items-center gap-1 hover:underline">
                View Compliance Log
                <span className="material-symbols-outlined text-xs">history</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </main>
    )
  }
