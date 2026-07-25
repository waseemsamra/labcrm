import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function SupplierManagement() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-lg flex-1">
            <h2 className="font-headline-md text-headline-md font-semibold text-primary">Supplier Directory</h2>
            <div className="relative w-96 max-w-full">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full bg-surface-container-low border-none rounded-full pl-xl pr-md py-xs font-body-sm text-body-sm focus:ring-1 focus:ring-primary"
                placeholder="Search suppliers, items, or POs..."
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
            <div className="flex justify-between items-end mb-lg">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Inventory Partners</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Verified Suppliers</h3>
              </div>
              <Link
                to="/admin/suppliers/add"
                className="bg-primary text-on-primary px-lg py-sm rounded-lg flex items-center gap-sm font-title-sm text-title-sm hover:opacity-90 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined">person_add</span>
                Add Supplier
              </Link>
            </div>

            {/* Bento Grid List + Quick View Panel */}
            <div className="flex gap-lg">
              {/* Left: Supplier List */}
              <section className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-gutter">
                  {/* Supplier Card 1 */}
                  <Link to="/admin/suppliers/ivoclar" className="block">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg cursor-pointer transition-all hover:border-primary">
                      <div className="flex justify-between items-start mb-md">
                        <div className="flex items-center gap-md">
                          <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>dentistry</span>
                          </div>
                          <div>
                            <h4 className="font-title-sm text-title-sm text-on-surface">Ivoclar</h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Primary: Sarah Jenkins</p>
                          </div>
                        </div>
                        <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded font-label-caps text-label-caps">98% ON-TIME</span>
                      </div>
                      <div className="grid grid-cols-3 gap-md border-t border-outline-variant pt-md">
                        <div>
                          <p className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE ORDERS</p>
                          <p className="font-title-sm text-title-sm text-on-surface">12</p>
                        </div>
                        <div>
                          <p className="font-label-caps text-label-caps text-on-surface-variant">AVG LEAD TIME</p>
                          <p className="font-title-sm text-title-sm text-on-surface">2.4 Days</p>
                        </div>
                        <div>
                          <p className="font-label-caps text-label-caps text-on-surface-variant">STATUS</p>
                          <div className="flex items-center gap-xs text-primary">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="font-data-tabular text-data-tabular">Operational</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Supplier Card 2 */}
                  <Link to="/admin/suppliers/dentsply" className="block">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg cursor-pointer transition-all hover:border-primary">
                    <div className="flex justify-between items-start mb-md">
                      <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                        </div>
                        <div>
                          <h4 className="font-title-sm text-title-sm text-on-surface">Dentsply Sirona</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Primary: Michael Chen</p>
                        </div>
                      </div>
                      <span className="bg-surface-container-high text-on-surface-variant px-sm py-xs rounded font-label-caps text-label-caps">92% ON-TIME</span>
                    </div>
                    <div className="grid grid-cols-3 gap-md border-t border-outline-variant pt-md">
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE ORDERS</p>
                        <p className="font-title-sm text-title-sm text-on-surface">08</p>
                      </div>
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">AVG LEAD TIME</p>
                        <p className="font-title-sm text-title-sm text-on-surface">4.1 Days</p>
                      </div>
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">STATUS</p>
                        <div className="flex items-center gap-xs text-secondary">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="font-data-tabular text-data-tabular">Operational</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>

                  {/* Supplier Card 3 */}
                  <Link to="/admin/suppliers/henry-schein" className="block">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg cursor-pointer transition-all hover:border-primary">
                    <div className="flex justify-between items-start mb-md">
                      <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary">medical_services</span>
                        </div>
                        <div>
                          <h4 className="font-title-sm text-title-sm text-on-surface">Henry Schein</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Primary: Elena Rodriguez</p>
                        </div>
                      </div>
                      <span className="bg-error-container text-on-error-container px-sm py-xs rounded font-label-caps text-label-caps">76% ON-TIME</span>
                    </div>
                    <div className="grid grid-cols-3 gap-md border-t border-outline-variant pt-md">
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE ORDERS</p>
                        <p className="font-title-sm text-title-sm text-on-surface">03</p>
                      </div>
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">AVG LEAD TIME</p>
                        <p className="font-title-sm text-title-sm text-on-surface">6.8 Days</p>
                      </div>
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">STATUS</p>
                        <div className="flex items-center gap-xs text-error">
                          <span className="w-2 h-2 rounded-full bg-error"></span>
                          <span className="font-data-tabular text-data-tabular">Delayed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>

                  {/* Supplier Card 4 */}
                  <Link to="/admin/suppliers/straumann" className="block">
                    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg cursor-pointer transition-all hover:border-primary">
                    <div className="flex justify-between items-start mb-md">
                      <div className="flex items-center gap-md">
                        <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary">biotech</span>
                        </div>
                        <div>
                          <h4 className="font-title-sm text-title-sm text-on-surface">Straumann Group</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Primary: David Weber</p>
                        </div>
                      </div>
                      <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded font-label-caps text-label-caps">99% ON-TIME</span>
                    </div>
                    <div className="grid grid-cols-3 gap-md border-t border-outline-variant pt-md">
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE ORDERS</p>
                        <p className="font-title-sm text-title-sm text-on-surface">24</p>
                      </div>
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">AVG LEAD TIME</p>
                        <p className="font-title-sm text-title-sm text-on-surface">1.8 Days</p>
                      </div>
                      <div>
                        <p className="font-label-caps text-label-caps text-on-surface-variant">STATUS</p>
                        <div className="flex items-center gap-xs text-primary">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                          <span className="font-data-tabular text-data-tabular">Operational</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </section>

              {/* Right: Quick View Panel */}
              <aside className="w-96 bg-surface-container-lowest border-l border-outline-variant flex flex-col">
                <div className="p-lg border-b border-outline-variant">
                  <div className="flex justify-between items-start mb-md">
                    <h3 className="font-title-sm text-title-sm text-on-surface">Supplier Profile</h3>
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-surface-variant rounded-full flex items-center justify-center mb-md border-2 border-primary-container p-sm">
                      <img
                        className="w-full h-full object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxvRnvwiTYtVj-TnuM9sloh2Q-12slruIhW1z9ZoQRE_ZKbrRSPt4OrrzO0gFCmCcLKkAkkEs0PBJo03K0rPF0kDscIWo-r41wN7AryirL8AmggVD-qMzWT3hDCZs_Yt2G0sx_yh3gN0lwAJYf3MUSmqPlvZ6SE7pqu7L4whcJqWGBKsohpQmzbeoLdaxKRc5XLX5Ndka7mD267kZo_GGFazYDox-ofqGWUID6VjyFNVx7wIYd4G-frmjwgjHdW7CaCVkinzXtzjY8"
                        alt="Ivoclar logo"
                      />
                    </div>
                    <h4 className="font-headline-md text-headline-md text-primary">Ivoclar</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Premium Ceramic & Composite Partner</p>
                    <div className="flex gap-sm">
                      <button className="bg-surface-container-high text-primary px-md py-xs rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all">MESSAGE</button>
                      <button className="bg-surface-container-high text-primary px-md py-xs rounded-full font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all">EDIT INFO</button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-lg space-y-xl">
                  {/* Performance Stats */}
                  <div>
                    <h5 className="font-label-caps text-label-caps text-on-surface-variant mb-md">LIFETIME PERFORMANCE</h5>
                    <div className="space-y-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-body-sm text-body-sm">Order Accuracy</span>
                        <span className="font-data-tabular text-data-tabular text-primary">99.2%</span>
                      </div>
                      <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: '99%' }}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-body-sm text-body-sm">Lead Time Stability</span>
                        <span className="font-data-tabular text-data-tabular text-primary">High</span>
                      </div>
                      <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                        <div className="bg-primary h-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Catalog Quick-View */}
                  <div>
                    <div className="flex justify-between items-center mb-md">
                      <h5 className="font-label-caps text-label-caps text-on-surface-variant">TOP CATALOG ITEMS</h5>
                      <button className="text-primary font-label-caps text-label-caps hover:underline">VIEW ALL</button>
                    </div>
                    <div className="space-y-sm">
                      <div className="flex items-center gap-md p-sm bg-surface-container-low rounded border border-transparent hover:border-outline-variant cursor-pointer group">
                        <div className="w-10 h-10 bg-white rounded border border-outline-variant flex items-center justify-center p-xs">
                          <img
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWric4B33QCx4Fhj2hvLAcHOuMyyFcbrZ2PTl1U0-UIk6OiXX6fXrTcGoHTCYZLyJgrua86VgYmxmCJYYVdqpPp5Fpi4n1CwnPkMSMdOUe4sjQee5lQ5I_H-Ybdz4suRjkLnKVDctGuxqTdAj1dHug653sw6FmngjOGXHBwUwZEMOsMrtBqTKhGQlj7JUBm0FstNA50f-e1fMp3G20WFEffmc-1TjF18s9ZVKBaM6dqxcagH-BCpQpdsdycCi0nXiUq7UjHrz7Ykb"
                            alt="Zirconia block"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-data-tabular text-data-tabular text-on-surface">IPS e.max ZirCAD</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">In Stock: 42 Units</p>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add_shopping_cart</span>
                      </div>
                      <div className="flex items-center gap-md p-sm bg-surface-container-low rounded border border-transparent hover:border-outline-variant cursor-pointer group">
                        <div className="w-10 h-10 bg-white rounded border border-outline-variant flex items-center justify-center p-xs">
                          <img
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDa6eDBrNoZT6WeqljDHizlo1iLUVa3tZ3Gji4-8-ACNmmmGzWV3yr5UIJ9tbVX4uDog1OMiYzVRQ-lkYDAT5N8KpKcOIewTqTx-MtZG_fmYmzZWnTLRyqpEik8Ihfm76eTQInluua__LgXamaxqwIxwQtd3Vnoxrj5n9u5Sq0pE1SmlmZ-uVv_APqE7jtkFtHw14boSrmzlo4slKfmjK00J0BHBpC4XYdbY50zksWz8qaOmVRwhIyeeh1SoskytIvoozNg47CVzpt"
                            alt="Ceramic ingot"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-data-tabular text-data-tabular text-on-surface">IPS Empress Direct</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">In Stock: 18 Units</p>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">add_shopping_cart</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Purchase Orders */}
                  <div>
                    <h5 className="font-label-caps text-label-caps text-on-surface-variant mb-md">RECENT PURCHASE ORDERS</h5>
                    <div className="space-y-sm">
                      <div className="p-sm bg-surface border border-outline-variant rounded flex justify-between items-center">
                        <div>
                          <p className="font-data-tabular text-data-tabular text-on-surface">PO-2024-0982</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 12, 2023</p>
                        </div>
                        <div className="text-right">
                          <p className="font-data-tabular text-data-tabular text-primary">$1,450.00</p>
                          <p className="font-label-caps text-label-caps text-secondary">SHIPPED</p>
                        </div>
                      </div>
                      <div className="p-sm bg-surface border border-outline-variant rounded flex justify-between items-center">
                        <div>
                          <p className="font-data-tabular text-data-tabular text-on-surface">PO-2024-0975</p>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 05, 2023</p>
                        </div>
                        <div className="text-right">
                          <p className="font-data-tabular text-data-tabular text-primary">$890.50</p>
                          <p className="font-label-caps text-label-caps text-on-surface-variant">RECEIVED</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-lg bg-surface-container-lowest border-t border-outline-variant">
                  <button className="w-full bg-primary text-on-primary py-md rounded font-title-sm text-title-sm hover:opacity-90 active:scale-95 transition-all">
                    Generate Order Report
                  </button>
                 </div>
                 </aside>
                    </div>
                  </div>
                </div>
      </main>
    </div>
  )
}
