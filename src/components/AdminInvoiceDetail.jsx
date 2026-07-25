import AdminSidebar from './AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminInvoiceDetail() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center w-full px-lg h-16 bg-surface border-b border-outline-variant shrink-0">
          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input
                className="w-full bg-surface-container border-none rounded-full pl-10 pr-4 py-2 text-body-sm focus:ring-2 focus:ring-primary"
                placeholder="Search invoices, cases, patients..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant active:opacity-80">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center space-x-2 pl-4 border-l border-outline-variant">
              <div className="text-right hidden sm:block">
                <p className="font-body-sm font-bold text-primary">Dr. Julian Vance</p>
                <p className="text-[11px] font-label-caps text-on-surface-variant">Apex Family Dental</p>
              </div>
              <img
                className="w-10 h-10 rounded-full border border-outline-variant object-cover"
                src="/images/doc-avatar.jpg"
                alt="Dr. Julian Vance"
              />
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-lg">
          {/* Breadcrumbs / Back */}
          <div className="flex items-center space-x-2 mb-6 text-on-surface-variant">
            <Link to="/admin/billing" className="flex items-center hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span className="font-label-caps ml-1">Back to Ledger</span>
            </Link>
            <span className="text-outline">/</span>
            <span className="font-label-caps text-outline">Invoices</span>
            <span className="text-outline">/</span>
            <span className="font-label-caps text-on-surface font-bold">INV-2024-0812</span>
          </div>

          <div className="grid grid-cols-12 gap-gutter">
            {/* Invoice Detail Card */}
            <div className="col-span-12 lg:col-span-9 space-y-gutter">
              {/* Invoice Header Section */}
              <div className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h1 className="font-display-lg text-display-lg text-on-surface">INV-2024-0812</h1>
                      <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-[11px] font-bold">PAID</span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant">Issued on August 12, 2024 • Due on August 26, 2024</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-all font-label-caps border border-outline-variant">
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>Download PDF</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-all font-label-caps border border-outline-variant">
                      <span className="material-symbols-outlined text-[18px]">print</span>
                      <span>Print</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-on-primary rounded-lg transition-all font-label-caps shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                      <span>Email to Office</span>
                    </button>
                    <Link to="/admin/billing/invoice/INV-2024-0812/edit" className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors border border-outline-variant">
                      <span className="material-symbols-outlined">edit</span>
                    </Link>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-8 border-b border-outline-variant">
                  {/* Lab Info */}
                  <div>
                    <h3 className="font-label-caps text-on-surface-variant mb-4 pb-2 border-b border-surface-container-high">FROM: LABORATORY</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[28px]">precision_manufacturing</span>
                      </div>
                      <div className="text-body-sm space-y-1">
                        <p className="font-bold text-on-surface">CoreLab Precision Systems</p>
                        <p className="text-on-surface-variant">1200 Innovation Way, Suite 400</p>
                        <p className="text-on-surface-variant">San Francisco, CA 94105</p>
                        <p className="text-primary pt-1 font-medium">accounts@corelabprecision.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Practice Info */}
                  <div>
                    <h3 className="font-label-caps text-on-surface-variant mb-4 pb-2 border-b border-surface-container-high">BILL TO: PRACTICE</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[28px]">account_balance</span>
                      </div>
                      <div className="text-body-sm space-y-1">
                        <p className="font-bold text-on-surface">Apex Family Dental</p>
                        <p className="text-on-surface-variant">Attn: Dr. Julian Vance</p>
                        <p className="text-on-surface-variant">450 Medical Plaza Dr.</p>
                        <p className="text-on-surface-variant">Palo Alto, CA 94304</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Breakdown Table */}
                <div className="mt-8">
                  <h3 className="font-label-caps text-on-surface-variant mb-4">CASE BREAKDOWN</h3>
                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-[900px]">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-surface border-b border-outline-variant">
                            <th className="px-4 py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">CASE ID</th>
                            <th className="px-4 py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">PATIENT</th>
                            <th className="px-4 py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">RESTORATION TYPE</th>
                            <th className="px-4 py-3 font-label-caps text-on-surface-variant font-bold text-[11px]">MATERIAL</th>
                            <th className="px-4 py-3 font-label-caps text-on-surface-variant font-bold text-[11px] text-right">UNIT PRICE</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant">
                          <tr className="hover:bg-tertiary-fixed transition-colors">
                            <td className="px-4 py-4 font-data-tabular text-primary font-bold">#20442-A</td>
                            <td className="px-4 py-4 text-body-sm">Elena Rodriguez</td>
                            <td className="px-4 py-4 text-body-sm">Zirconia Crown (Single)</td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">KATANA STML</span>
                            </td>
                            <td className="px-4 py-4 text-right font-data-tabular">$185.00</td>
                          </tr>
                          <tr className="hover:bg-tertiary-fixed transition-colors">
                            <td className="px-4 py-4 font-data-tabular text-primary font-bold">#20445-C</td>
                            <td className="px-4 py-4 text-body-sm">Marcus Chen</td>
                            <td className="px-4 py-4 text-body-sm">e.max Press Inlay</td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">Lithium Disilicate</span>
                            </td>
                            <td className="px-4 py-4 text-right font-data-tabular">$162.00</td>
                          </tr>
                          <tr className="hover:bg-tertiary-fixed transition-colors">
                            <td className="px-4 py-4 font-data-tabular text-primary font-bold">#20451-B</td>
                            <td className="px-4 py-4 text-body-sm">Sarah Jenkins</td>
                            <td className="px-4 py-4 text-body-sm">Screw-Retained Bridge (3-unit)</td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">Zirconia Multi</span>
                            </td>
                            <td className="px-4 py-4 text-right font-data-tabular">$540.00</td>
                          </tr>
                          <tr className="hover:bg-tertiary-fixed transition-colors">
                            <td className="px-4 py-4 font-data-tabular text-primary font-bold">#20459-F</td>
                            <td className="px-4 py-4 text-body-sm">David Thompson</td>
                            <td className="px-4 py-4 text-body-sm">Night Guard (3D Printed)</td>
                            <td className="px-4 py-4">
                              <span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">KeySplint Soft</span>
                            </td>
                            <td className="px-4 py-4 text-right font-data-tabular">$95.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-label-caps text-on-surface-variant">INTERNAL NOTES</h3>
                  <button className="text-primary font-label-caps text-[11px] font-bold hover:underline">Add Note</button>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-primary">
                    <div className="flex justify-between mb-1">
                      <span className="text-[11px] font-bold text-on-surface">Admin: Sarah K.</span>
                      <span className="text-[11px] text-on-surface-variant">Aug 13, 10:15 AM</span>
                    </div>
                    <p className="text-body-sm">Practice requested standard shipping for this batch. Discount applied as per Q3 agreement.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Sidebar Content */}
            <div className="col-span-12 lg:col-span-3 space-y-gutter">
              {/* Financial Summary */}
              <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-sm">
                <h3 className="font-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  FINANCIAL SUMMARY
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="font-data-tabular">$982.00</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Discounts (Bulk Tier 1)</span>
                    <span className="font-data-tabular text-secondary">-$49.10</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Shipping & Handling</span>
                    <span className="font-data-tabular">$12.50</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-on-surface-variant">Sales Tax (8.5%)</span>
                    <span className="font-data-tabular">$79.31</span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant flex justify-between items-end">
                    <span className="font-bold text-on-surface">Total Amount Due</span>
                    <span className="font-headline-md text-headline-md text-primary">$1,024.71</span>
                  </div>
                </div>
              </div>

              {/* Payment History Card */}
              <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-sm">
                <h3 className="font-label-caps text-on-surface-variant mb-4 flex items-center">
                  <span className="material-symbols-outlined text-[18px] mr-2">history</span>
                  Payment History
                </h3>
                <div className="space-y-4 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-outline-variant"></div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 w-6 h-6 bg-secondary text-on-secondary rounded-full flex items-center justify-center z-10">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <div className="text-body-sm">
                      <p className="font-bold text-on-surface">$1,024.71 Paid</p>
                      <p className="text-on-surface-variant text-[12px]">Aug 15, 2024</p>
                      <p className="text-[12px] bg-secondary-container px-2 py-0.5 rounded inline-block mt-1">ACH • Ref: 88291</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-body-sm text-on-surface-variant">Remaining Balance</span>
                    <span className="font-bold text-on-surface">$0.00</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Scan/Case Details Quick Access */}
              <div className="bg-surface border border-outline-variant rounded-xl p-md shadow-sm overflow-hidden">
                <h3 className="font-label-caps text-on-surface-variant mb-4">SCAN VISUALS</h3>
                <div className="space-y-2">
                  <div className="aspect-video bg-surface rounded-lg border border-outline-variant relative group cursor-pointer overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" src="/images/invoice-scan1.jpg" alt="Dental scan" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-label-caps text-[10px] font-bold">VIEW SCAN #20442</span>
                    </div>
                  </div>
                  <div className="aspect-video bg-surface rounded-lg border border-outline-variant relative group cursor-pointer overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform group-hover:scale-110" src="/images/invoice-scan2.jpg" alt="Dental scan" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-label-caps text-[10px] font-bold">VIEW SCAN #20451</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 text-primary font-label-caps text-[11px] font-bold hover:bg-surface-container-high rounded transition-colors">View All Case Assets</button>
              </div>

              {/* Help / Support */}
              <div className="bg-primary-container text-on-primary-container rounded-xl p-md shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="material-symbols-outlined">help</span>
                  <span className="font-bold text-body-sm">Billing Support</span>
                </div>
                <p className="text-[12px] opacity-90 mb-4">Have questions regarding this invoice or applied discounts?</p>
                <button className="w-full py-2 bg-on-primary-container text-primary rounded-lg font-bold text-[11px] font-label-caps">CHAT WITH ACCOUNTS</button>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  )
}
