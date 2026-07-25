import { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AddFacilityModal from './AddFacilityModal'

export default function LocationManagement() {
  const [searchValue, setSearchValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen overflow-y-auto custom-scrollbar p-lg">
          <div className="space-y-lg">
            {/* Page Header & CTA */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
              <div>
                <h1 className="font-display-lg text-display-lg text-on-background">Location Management</h1>
                <p className="text-on-surface-variant mt-xs">Oversee global facility operations and logistics hubs across the DentaLink network.</p>
              </div>
              <button
                className="bg-primary hover:bg-primary-container text-white px-lg py-sm rounded-lg flex items-center gap-sm transition-all font-semibold shadow-sm"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="material-symbols-outlined">add_location_alt</span>
                Add New Facility
              </button>
            </div>

            {/* Facility Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-white border border-outline-variant p-md flex items-center gap-md transition-all hover:border-primary">
                <div className="bg-primary-fixed p-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">location_city</span>
                </div>
                <div>
                  <p className="text-on-surface-variant text-label-caps font-label-caps">Total Locations</p>
                  <h3 className="text-headline-md font-bold text-on-surface">42</h3>
                </div>
              </div>
              <div className="bg-white border border-outline-variant p-md flex items-center gap-md transition-all hover:border-primary">
                <div className="bg-secondary-container p-sm rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <div>
                  <p className="text-on-surface-variant text-label-caps font-label-caps">Primary Labs</p>
                  <h3 className="text-headline-md font-bold text-on-surface">14</h3>
                </div>
              </div>
              <div className="bg-white border border-outline-variant p-md flex items-center gap-md transition-all hover:border-primary">
                <div className="bg-surface-container-high p-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <div>
                  <p className="text-on-surface-variant text-label-caps font-label-caps">Active Clinics</p>
                  <h3 className="text-headline-md font-bold text-on-surface">28</h3>
                </div>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="bg-white border border-outline-variant p-md flex flex-wrap gap-md items-center shadow-sm">
              <div className="flex-1 min-w-[240px] relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                <input
                  className="w-full pl-10 border-outline-variant rounded focus:ring-primary focus:border-primary text-body-sm"
                  placeholder="Search by name, ID or contact..."
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-sm">
                <select className="border-outline-variant rounded text-body-sm focus:ring-primary focus:border-primary">
                  <option>Facility Type (All)</option>
                  <option>Lab</option>
                  <option>Partner Clinic</option>
                  <option>Logistics Hub</option>
                </select>
                <select className="border-outline-variant rounded text-body-sm focus:ring-primary focus:border-primary">
                  <option>Region (All)</option>
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia</option>
                </select>
                <select className="border-outline-variant rounded text-body-sm focus:ring-primary focus:border-primary">
                  <option>Status (All)</option>
                  <option>Active</option>
                  <option>Maintenance</option>
                  <option>Inactive</option>
                </select>
              </div>
              <button className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-2 rounded hover:bg-surface-container-low">tune</button>
            </div>

            {/* Main Grid: Directory & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg">
              {/* Directory Table */}
              <div className="lg:col-span-3 bg-white border border-outline-variant shadow-sm overflow-hidden">
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-outline-variant">
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Facility Name & ID</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Type</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Status</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Region / TZ</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Capacity</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant">Contact</th>
                        <th className="px-md py-sm font-label-caps text-label-caps text-on-surface-variant text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                      <tr className="hover:bg-surface-container transition-colors group">
                        <td className="px-md py-md">
                          <div className="font-body-md font-semibold text-on-surface">CoreLab San Francisco</div>
                          <div className="text-[12px] text-on-surface-variant">SF-01</div>
                        </td>
                        <td className="px-md py-md">
                          <span className="text-body-sm text-on-surface-variant">Lab</span>
                        </td>
                        <td className="px-md py-md">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">Active</span>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">North America</div>
                          <div className="text-[11px] text-on-surface-variant">PST (GMT-8)</div>
                        </td>
                        <td className="px-md py-md w-32">
                          <div className="flex items-center gap-sm">
                            <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-data-tabular font-data-tabular">85%</span>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">Marcus Chen</div>
                          <div className="text-[11px] text-primary truncate">m.chen@dentalink.com</div>
                        </td>
                        <td className="px-md py-md text-right">
                          <div className="flex items-center justify-end gap-xs">
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded" title="Edit">edit</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded" title="Performance">monitoring</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded" title="Options">more_vert</button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors group">
                        <td className="px-md py-md">
                          <div className="font-body-md font-semibold text-on-surface">Nordic Dental Hub</div>
                          <div className="text-[12px] text-on-surface-variant">ST-04</div>
                        </td>
                        <td className="px-md py-md">
                          <span className="text-body-sm text-on-surface-variant">Hub</span>
                        </td>
                        <td className="px-md py-md">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">Maintenance</span>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">Europe</div>
                          <div className="text-[11px] text-on-surface-variant">CET (GMT+1)</div>
                        </td>
                        <td className="px-md py-md w-32">
                          <div className="flex items-center gap-sm">
                            <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500" style={{ width: '42%' }}></div>
                            </div>
                            <span className="text-data-tabular font-data-tabular">42%</span>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">Elena Berg</div>
                          <div className="text-[11px] text-primary truncate">e.berg@dentalink.eu</div>
                        </td>
                        <td className="px-md py-md text-right">
                          <div className="flex items-center justify-end gap-xs">
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">edit</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">monitoring</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">more_vert</button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors group">
                        <td className="px-md py-md">
                          <div className="font-body-md font-semibold text-on-surface">Tokyo Precision Lab</div>
                          <div className="text-[12px] text-on-surface-variant">TK-12</div>
                        </td>
                        <td className="px-md py-md">
                          <span className="text-body-sm text-on-surface-variant">Lab</span>
                        </td>
                        <td className="px-md py-md">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">Active</span>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">Asia</div>
                          <div className="text-[11px] text-on-surface-variant">JST (GMT+9)</div>
                        </td>
                        <td className="px-md py-md w-32">
                          <div className="flex items-center gap-sm">
                            <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: '92%' }}></div>
                            </div>
                            <span className="text-data-tabular font-data-tabular">92%</span>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">Kenji Sato</div>
                          <div className="text-[11px] text-primary truncate">k.sato@prec.jp</div>
                        </td>
                        <td className="px-md py-md text-right">
                          <div className="flex items-center justify-end gap-xs">
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">edit</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">monitoring</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">more_vert</button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors group">
                        <td className="px-md py-md">
                          <div className="font-body-md font-semibold text-on-surface">Berlin Partner Clinic</div>
                          <div className="text-[12px] text-on-surface-variant">BE-09</div>
                        </td>
                        <td className="px-md py-md">
                          <span className="text-body-sm text-on-surface-variant">Partner Clinic</span>
                        </td>
                        <td className="px-md py-md">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700">Inactive</span>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">Europe</div>
                          <div className="text-[11px] text-on-surface-variant">CET (GMT+1)</div>
                        </td>
                        <td className="px-md py-md w-32">
                          <div className="flex items-center gap-sm">
                            <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                              <div className="h-full bg-outline-variant" style={{ width: '0%' }}></div>
                            </div>
                            <span className="text-data-tabular font-data-tabular">0%</span>
                          </div>
                        </td>
                        <td className="px-md py-md">
                          <div className="text-body-sm">Dr. Otto Wagner</div>
                          <div className="text-[11px] text-primary truncate">otto@berlin-dental.de</div>
                        </td>
                        <td className="px-md py-md text-right">
                          <div className="flex items-center justify-end gap-xs">
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">edit</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">monitoring</button>
                            <button className="material-symbols-outlined p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-fixed transition-all rounded">more_vert</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Table Pagination */}
                <div className="px-md py-sm bg-surface-container-low border-t border-outline-variant flex items-center justify-between">
                  <span className="text-body-sm text-on-surface-variant">Showing 4 of 42 locations</span>
                  <div className="flex gap-sm">
                    <button className="px-3 py-1 border border-outline-variant rounded text-body-sm bg-white hover:bg-surface-container-high transition-colors">Previous</button>
                    <button className="px-3 py-1 bg-primary text-white rounded text-body-sm font-semibold">1</button>
                    <button className="px-3 py-1 border border-outline-variant rounded text-body-sm bg-white hover:bg-surface-container-high transition-colors">2</button>
                    <button className="px-3 py-1 border border-outline-variant rounded text-body-sm bg-white hover:bg-surface-container-high transition-colors">3</button>
                    <button className="px-3 py-1 border border-outline-variant rounded text-body-sm bg-white hover:bg-surface-container-high transition-colors">Next</button>
                  </div>
                </div>
              </div>

              {/* Map Preview Sidebar */}
              <div className="lg:col-span-1 space-y-lg">
                <div className="bg-white border border-outline-variant shadow-sm overflow-hidden flex flex-col h-full min-h-[400px]">
                  <div className="p-md border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
                    <h4 className="font-title-sm text-on-surface">Geographic Distribution</h4>
                    <span className="material-symbols-outlined text-primary">map</span>
                  </div>
                  <div className="flex-1 relative bg-surface-container">
                    <img
                      className="w-full h-full object-cover grayscale opacity-60"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXuDCDC0J-CisUYOXS5zNgwDosAKfOBR2y7PPgQJZsvjREZRgx8T5CZdlQuNLcv2PsxrJlBkUg43Rof_pv0mjJeVxnaMI-jVdMUpA5Bue9ioPZkUteuvH_B_RqaBcC0phZps1jlbnzrz2MfHoM6CFnQeLY66MjWcZDIz9moAlKhYi7lf14EfSCzJNzpU-QAFW_nKlxmVuPSQe_JYxVHo6keYnekyc7Mqy-YLKmqc658puZAj3uPwU2HVbVMzjR8aTSrk44SwDiuNv6"
                      alt="World Map"
                    />
                    {/* Simulated Pins */}
                    <div className="absolute top-[35%] left-[20%] group">
                      <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-md animate-pulse"></div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-on-background text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">San Francisco Lab</div>
                    </div>
                    <div className="absolute top-[30%] left-[48%] group">
                      <div className="w-3 h-3 bg-amber-500 rounded-full border-2 border-white shadow-md"></div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-on-background text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">Berlin Hub</div>
                    </div>
                    <div className="absolute top-[40%] left-[78%] group">
                      <div className="w-3 h-3 bg-primary rounded-full border-2 border-white shadow-md"></div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-on-background text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">Tokyo Lab</div>
                    </div>
                  </div>
                  <div className="p-md space-y-md">
                    <div className="space-y-sm">
                      <div className="flex justify-between text-label-caps font-label-caps text-on-surface-variant">
                        <span>NORTH AMERICA</span>
                        <span>12 LOCATIONS</span>
                      </div>
                      <div className="h-1 bg-surface-container rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-sm">
                      <div className="flex justify-between text-label-caps font-label-caps text-on-surface-variant">
                        <span>EUROPE</span>
                        <span>18 LOCATIONS</span>
                      </div>
                      <div className="h-1 bg-surface-container rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '43%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-sm">
                      <div className="flex justify-between text-label-caps font-label-caps text-on-surface-variant">
                        <span>ASIA PACIFIC</span>
                        <span>12 LOCATIONS</span>
                      </div>
                      <div className="h-1 bg-surface-container rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '29%' }}></div>
                      </div>
                    </div>
                  </div>
                  <button className="m-md p-2 text-primary font-semibold text-body-sm border border-primary border-dashed rounded hover:bg-primary-fixed transition-colors">
                    View Full Interactive Map
                  </button>
                </div>

                {/* Activity Ticker */}
                <div className="bg-white border border-outline-variant p-md shadow-sm">
                  <h4 className="font-title-sm text-on-surface mb-md">Operational Alerts</h4>
                  <div className="space-y-md">
                    <div className="flex gap-sm">
                      <span className="material-symbols-outlined text-amber-500 text-[20px]">warning</span>
                      <div>
                        <p className="text-body-sm font-semibold">Maintenance at ST-04</p>
                        <p className="text-[11px] text-on-surface-variant">HVAC system upgrade scheduled for tomorrow 08:00 UTC.</p>
                      </div>
                    </div>
                    <div className="flex gap-sm">
                      <span className="material-symbols-outlined text-primary text-[20px]">add_task</span>
                      <div>
                        <p className="text-body-sm font-semibold">New Partner Integrated</p>
                        <p className="text-[11px] text-on-surface-variant">Zurich Dental Clinic (CH-02) is now live on DentaLink.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <AddFacilityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    )
  }
