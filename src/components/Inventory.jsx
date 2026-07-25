import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen overflow-y-auto custom-scrollbar p-lg">
        <div className="max-w-[1600px] mx-auto space-y-lg">
          {/* Dashboard Header */}
          <div className="flex justify-between items-end mb-xl mt-md">
            <div>
              <h2 className="font-display-lg text-display-lg text-primary">Inventory Management</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Real-time stock monitoring and procurement control</p>
            </div>
            <div className="flex gap-md">
              <button className="flex items-center gap-sm px-lg py-md border border-primary text-primary rounded-lg font-title-sm text-title-sm hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined">shopping_cart</span>
                Quick Reorder
              </button>
              <button className="flex items-center gap-sm px-lg py-md bg-primary text-on-primary rounded-lg font-title-sm text-title-sm hover:opacity-90 shadow-sm transition-all">
                <span className="material-symbols-outlined">add_box</span>
                Add Item
              </button>
            </div>
          </div>

          {/* Summary Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <span className="p-sm bg-primary-fixed rounded-lg">
                  <span className="material-symbols-outlined text-primary">payments</span>
                </span>
                <span className="text-on-secondary-container bg-secondary-container px-sm py-xs rounded text-[12px] font-bold">+2.4% vs last month</span>
              </div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Total Stock Value</p>
              <h3 className="font-display-lg text-display-lg text-on-surface">$142,850.00</h3>
              <p className="font-body-sm text-body-sm text-outline">Across 1,204 tracked SKUs</p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <span className="p-sm bg-error-container rounded-lg">
                  <span className="material-symbols-outlined text-error">warning</span>
                </span>
                <span className="text-error bg-error-container px-sm py-xs rounded text-[12px] font-bold">Action Required</span>
              </div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Critical Low Stock</p>
              <h3 className="font-display-lg text-display-lg text-on-surface">14 Items</h3>
              <p className="font-body-sm text-body-sm text-outline">Estimated impact: 8 delayed cases</p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <span className="p-sm bg-surface-container-high rounded-lg">
                  <span className="material-symbols-outlined text-on-surface">local_shipping</span>
                </span>
              </div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Pending Orders</p>
              <h3 className="font-display-lg text-display-lg text-on-surface">06 Shipments</h3>
              <p className="font-body-sm text-body-sm text-outline">2 arriving today by 4:00 PM</p>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-t-xl p-md flex flex-wrap items-center gap-md">
            <div className="flex-1 min-w-[200px] relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">filter_list</span>
              <input
                className="w-full border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-sm text-body-sm"
                placeholder="Filter by category or material..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-sm">
              <label className="font-label-caps text-label-caps text-outline">CATEGORY:</label>
              <select className="bg-surface border border-outline-variant rounded-lg px-md py-2 font-body-sm text-body-sm outline-none">
                <option>All Categories</option>
                <option>Zirconia Blocks</option>
                <option>Porcelain Powder</option>
                <option>Implant Abutments</option>
              </select>
            </div>
            <div className="flex items-center gap-sm">
              <label className="font-label-caps text-label-caps text-outline">SUPPLIER:</label>
              <select className="bg-surface border border-outline-variant rounded-lg px-md py-2 font-body-sm text-body-sm outline-none">
                <option>All Suppliers</option>
                <option>Ivoclar</option>
                <option>Dentsply Sirona</option>
                <option>Straumann</option>
              </select>
            </div>
            <button className="flex items-center gap-sm text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm border border-outline-variant rounded-lg px-md py-2">
              <span className="material-symbols-outlined">download</span>
              Export CSV
            </button>
          </div>

          {/* Materials Table */}
          <div className="bg-surface-container-lowest border-x border-b border-outline-variant rounded-b-xl overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant">SKU</th>
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant">MATERIAL NAME</th>
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant">CATEGORY</th>
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant">SUPPLIER</th>
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant text-center">CURRENT STOCK</th>
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant">UNIT</th>
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant">STATUS</th>
                    <th className="p-md font-label-caps text-label-caps text-on-surface-variant">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group">
                    <td className="p-md font-data-tabular text-data-tabular">ZB-9920-LX</td>
                    <td className="p-md">
                      <div className="font-title-sm text-title-sm text-primary">Zirconia HT Plus Blocks</div>
                      <div className="text-[12px] text-outline">Multi-layer 98mm x 14mm</div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">Zirconia Blocks</td>
                    <td className="p-md font-body-sm text-body-sm">Ivoclar Vivadent</td>
                    <td className="p-md text-center">
                      <span className="font-data-tabular text-data-tabular">42</span>
                      <div className="w-full bg-surface-container-high h-1 rounded-full mt-1">
                        <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">pcs</td>
                    <td className="p-md">
                      <span className="status-pill bg-secondary-container text-on-secondary-container">In Stock</span>
                    </td>
                    <td className="p-md">
                      <Link to="/admin/inventory/edit" className="text-outline hover:text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">edit</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group">
                    <td className="p-md font-data-tabular text-data-tabular">PP-441-EMAX</td>
                    <td className="p-md">
                      <div className="font-title-sm text-title-sm text-primary">IPS e.max Ceram Powder</div>
                      <div className="text-[12px] text-outline">A2 Dentin 20g</div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">Porcelain Powder</td>
                    <td className="p-md font-body-sm text-body-sm">Ivoclar Vivadent</td>
                    <td className="p-md text-center">
                      <span className="font-data-tabular text-data-tabular">3</span>
                      <div className="w-full bg-surface-container-high h-1 rounded-full mt-1">
                        <div className="bg-error h-full rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">vials</td>
                    <td className="p-md">
                      <span className="status-pill bg-error-container text-error">Low Stock</span>
                    </td>
                    <td className="p-md">
                      <Link to="/admin/inventory/edit" className="text-outline hover:text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">edit</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group">
                    <td className="p-md font-data-tabular text-data-tabular">IA-STR-NC-33</td>
                    <td className="p-md">
                      <div className="font-title-sm text-title-sm text-primary">Variobase NC Abutment</div>
                      <div className="text-[12px] text-outline">D 3.3mm, H 3.5mm</div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">Implant Abutments</td>
                    <td className="p-md font-body-sm text-body-sm">Straumann</td>
                    <td className="p-md text-center">
                      <span className="font-data-tabular text-data-tabular">12</span>
                      <div className="w-full bg-surface-container-high h-1 rounded-full mt-1">
                        <div className="bg-primary h-full rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">units</td>
                    <td className="p-md">
                      <span className="status-pill bg-secondary-container text-on-secondary-container">In Stock</span>
                    </td>
                    <td className="p-md">
                      <Link to="/admin/inventory/edit" className="text-outline hover:text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">edit</span>
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group bg-surface-container-low">
                    <td className="p-md font-data-tabular text-data-tabular">AL-RES-CL-01</td>
                    <td className="p-md">
                      <div className="font-title-sm text-title-sm text-primary">Formlabs Clear Resin</div>
                      <div className="text-[12px] text-outline">V4 Cartridge 1L</div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">3D Print Materials</td>
                    <td className="p-md font-body-sm text-body-sm">Bego USA</td>
                    <td className="p-md text-center">
                      <span className="font-data-tabular text-data-tabular">0</span>
                      <div className="w-full bg-surface-container-high h-1 rounded-full mt-1">
                        <div className="bg-error h-full rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">Ltr</td>
                    <td className="p-md">
                      <span className="status-pill bg-surface-variant text-on-surface-variant border border-outline-variant">Out of Stock</span>
                    </td>
                    <td className="p-md">
                      <button className="bg-primary text-on-primary text-[11px] px-2 py-1 rounded font-bold uppercase tracking-wider">Reorder</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors cursor-pointer group">
                    <td className="p-md font-data-tabular text-data-tabular">MW-TI-G5-98</td>
                    <td className="p-md">
                      <div className="font-title-sm text-title-sm text-primary">Titanium Grade 5 Disk</div>
                      <div className="text-[12px] text-outline">98mm x 18mm</div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">Milling Metal</td>
                    <td className="p-md font-body-sm text-body-sm">Argen</td>
                    <td className="p-md text-center">
                      <span className="font-data-tabular text-data-tabular">8</span>
                      <div className="w-full bg-surface-container-high h-1 rounded-full mt-1">
                        <div className="bg-primary h-full rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </td>
                    <td className="p-md font-body-sm text-body-sm">pcs</td>
                    <td className="p-md">
                      <span className="status-pill bg-secondary-container text-on-secondary-container">In Stock</span>
                    </td>
                    <td className="p-md">
                      <Link to="/admin/inventory/edit" className="text-outline hover:text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">edit</span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="p-md flex justify-between items-center bg-surface-container-lowest">
              <span className="font-body-sm text-body-sm text-outline">Showing 1-5 of 1,204 items</span>
              <div className="flex items-center gap-xs">
                <button className="p-sm text-outline hover:bg-surface-container-high rounded transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded font-bold text-[13px]">1</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded font-bold text-[13px]">2</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded font-bold text-[13px]">3</button>
                <span className="px-sm">...</span>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-high rounded font-bold text-[13px]">241</button>
                <button className="p-sm text-outline hover:bg-surface-container-high rounded transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Inventory Log / Activity */}
          <div className="mt-xl grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
              <div className="flex justify-between items-center mb-md">
                <h4 className="font-title-sm text-title-sm text-primary">Recent Inventory Activity</h4>
                <button className="text-primary font-label-caps text-label-caps hover:underline">View All Log</button>
              </div>
              <div className="space-y-md">
                <div className="flex items-start gap-md pb-md border-b border-outline-variant">
                  <div className="p-sm bg-secondary-container rounded-full">
                    <span className="material-symbols-outlined text-on-secondary-container text-sm">add</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-sm text-body-sm">Stock In: <span className="font-bold">ZB-9920-LX (20 units)</span></p>
                    <p className="text-[12px] text-outline">Handled by James Miller • 14 mins ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-md pb-md border-b border-outline-variant">
                  <div className="p-sm bg-error-container rounded-full">
                    <span className="material-symbols-outlined text-error text-sm">remove</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-sm text-body-sm">Stock Out: <span className="font-bold">PP-441-EMAX (2 vials)</span></p>
                    <p className="text-[12px] text-outline">Used for Case #8291 • 1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="p-sm bg-surface-container-high rounded-full">
                    <span className="material-symbols-outlined text-on-surface text-sm">local_shipping</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-body-sm text-body-sm">Order Placed: <span className="font-bold">IPS e.max Ceram Bulk Order</span></p>
                    <p className="text-[12px] text-outline">Authorized by Dr. Thorne • 3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-md">
                  <span className="material-symbols-outlined text-primary text-3xl">qr_code_scanner</span>
                </div>
                <h4 className="font-title-sm text-title-sm text-on-surface">Inventory Terminal</h4>
                <p className="font-body-sm text-body-sm text-outline mb-lg max-w-[300px]">Use the mobile app to scan material barcodes for instant stock updates on the floor.</p>
                <button className="bg-on-surface text-surface px-xl py-md rounded-lg font-title-sm text-title-sm hover:opacity-90 transition-opacity">Launch Scanner</button>
              </div>
              <div className="absolute bottom-0 right-0 p-lg opacity-10">
                <span className="material-symbols-outlined text-[120px]">inventory</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
