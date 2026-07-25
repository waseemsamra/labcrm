import { useParams, Link } from 'react-router-dom'

export default function ClientInvoiceDetail() {
  const { invoiceId } = useParams()

  const invoiceData = {
    'INV-2024-890': {
      number: 'INV-2024-890',
      status: 'PAID',
      date: 'Oct 24, 2023',
      due: 'Nov 07, 2023',
      dentalOffice: 'Bright Smile Family',
      doctor: 'Dr. Miller',
      caseId: '#77215',
      items: [
        { description: 'Zirconia Crown - Single Unit', amount: 520.00 },
        { description: 'Porcelain Fused to Metal Crown', amount: 620.00 },
        { description: 'Coping & Porcelain Layering', amount: 260.00 },
      ],
      subtotal: 1400.00,
      discount: 70.00,
      shipping: 20.00,
      tax: 100.00,
      total: 1450.00,
    },
    'INV-2024-891': {
      number: 'INV-2024-891',
      status: 'PENDING',
      date: 'Oct 25, 2023',
      due: 'Nov 08, 2023',
      dentalOffice: 'Westside Orthodontics',
      doctor: 'Dr. Sarah Chen',
      caseId: '#77218',
      items: [
        { description: 'Screw-Retained Bridge - 3 Unit', amount: 1450.00 },
        { description: 'Titanium Abutments', amount: 980.00 },
        { description: 'Verification Jig', amount: 220.00 },
      ],
      subtotal: 2650.00,
      discount: 132.50,
      shipping: 45.00,
      tax: 558.00,
      total: 3120.50,
    },
    'INV-2024-885': {
      number: 'INV-2024-885',
      status: 'OVERDUE',
      date: 'Oct 12, 2023',
      due: 'Oct 26, 2023',
      dentalOffice: 'Downtown Dental',
      doctor: 'Dr. Greg Peters',
      caseId: '#77102',
      items: [
        { description: 'Metal Ceramic Crown - Tooth #30', amount: 420.00 },
        { description: 'PFM Bridge - 3 Unit', amount: 530.00 },
      ],
      subtotal: 950.00,
      discount: 47.50,
      shipping: 15.00,
      tax: 62.50,
      total: 980.00,
    },
    'INV-2024-892': {
      number: 'INV-2024-892',
      status: 'PENDING',
      date: 'Oct 26, 2023',
      due: 'Nov 09, 2023',
      dentalOffice: 'Peak Dental Labs',
      doctor: 'Dr. Alan Smyth',
      caseId: '#77225',
      items: [
        { description: 'Partial Denture Framework', amount: 980.00 },
        { description: 'Acrylic Denture Base', amount: 680.00 },
        { description: 'Artificial Teeth Set', amount: 440.00 },
      ],
      subtotal: 2100.00,
      discount: 105.00,
      shipping: 35.00,
      tax: 185.00,
      total: 2215.00,
    },
  }

  const invoice = invoiceData[invoiceId] || invoiceData['INV-2024-890']

  return (
    <main className="flex-1 p-lg overflow-y-auto">
      {/* Breadcrumbs / Back */}
      <div className="flex items-center space-x-2 mb-6 text-on-surface-variant">
        <Link to="/client/invoices" className="flex items-center hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="font-label-caps ml-1">Back to Invoices</span>
        </Link>
        <span className="text-outline">/</span>
        <span className="font-label-caps text-outline">Invoices</span>
        <span className="text-outline">/</span>
        <span className="font-label-caps text-on-surface font-bold">{invoice.number}</span>
      </div>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Invoice Detail Card */}
        <div className="col-span-12 lg:col-span-9 space-y-gutter">
          {/* Invoice Header Section */}
          <div className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="font-display-lg text-display-lg text-on-surface">{invoice.number}</h1>
                  <span className={`px-3 py-1 rounded-full font-label-caps text-[11px] font-bold ${
                    invoice.status === 'PAID' ? 'bg-secondary-container text-on-secondary-container' :
                    invoice.status === 'PENDING' ? 'bg-surface-container-highest text-on-surface-variant' :
                    'bg-error-container text-on-error-container'
                  }`}>
                    {invoice.status}
                  </span>
                </div>
                <p className="text-body-sm text-on-surface-variant">Issued on {invoice.date} • Due on {invoice.due}</p>
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
                <h3 className="font-label-caps text-on-surface-variant mb-4 pb-2 border-b border-surface-container-high">BILL TO: CLINIC</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">account_balance</span>
                  </div>
                  <div className="text-body-sm space-y-1">
                    <p className="font-bold text-on-surface">{invoice.dentalOffice}</p>
                    <p className="text-on-surface-variant">Attn: {invoice.doctor}</p>
                    <p className="text-on-surface-variant">Case: {invoice.caseId}</p>
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
                      {invoice.items.map((item, index) => (
                        <tr key={index} className="hover:bg-tertiary-fixed transition-colors">
                          <td className="px-4 py-4 font-data-tabular text-primary font-bold">{invoice.caseId}</td>
                          <td className="px-4 py-4 text-body-sm">James Wilson</td>
                          <td className="px-4 py-4 text-body-sm">{item.description}</td>
                          <td className="px-4 py-4">
                            <span className="px-2 py-0.5 bg-surface-container-high rounded text-[11px] text-on-surface font-medium">Standard</span>
                          </td>
                          <td className="px-4 py-4 text-right font-data-tabular">${item.amount.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                  <span className="text-[11px] text-on-surface-variant">Oct 13, 10:15 AM</span>
                </div>
                <p className="text-body-sm">Practice requested standard shipping for this batch. Discount applied as per Q3 agreement.</p>
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
                <span className="font-data-tabular">${invoice.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Discounts</span>
                <span className="font-data-tabular text-secondary">-${invoice.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Shipping & Handling</span>
                <span className="font-data-tabular">${invoice.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Sales Tax</span>
                <span className="font-data-tabular">${invoice.tax.toFixed(2)}</span>
              </div>
              <div className="pt-3 border-t border-outline-variant flex justify-between items-end">
                <span className="font-bold text-on-surface">Total Amount Due</span>
                <span className="font-headline-md text-headline-md text-primary">${invoice.total.toFixed(2)}</span>
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
              {invoice.status === 'PAID' && (
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-secondary text-on-secondary rounded-full flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="text-body-sm">
                    <p className="font-bold text-on-surface">${invoice.total.toFixed(2)} Paid</p>
                    <p className="text-on-surface-variant text-[12px]">{invoice.date}</p>
                    <p className="text-[12px] bg-secondary-container px-2 py-0.5 rounded inline-block mt-1">ACH • Ref: 88291</p>
                  </div>
                </div>
              )}
              {invoice.status === 'PENDING' && (
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-surface-container-highest text-on-surface-variant rounded-full flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                  </div>
                  <div className="text-body-sm">
                    <p className="font-bold text-on-surface">Awaiting Payment</p>
                    <p className="text-on-surface-variant text-[12px]">Due {invoice.due}</p>
                  </div>
                </div>
              )}
              {invoice.status === 'OVERDUE' && (
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-error text-on-error rounded-full flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                  </div>
                  <div className="text-body-sm">
                    <p className="font-bold text-on-surface">Payment Overdue</p>
                    <p className="text-on-surface-variant text-[12px]">Was due {invoice.due}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant">
              <div className="flex justify-between items-center mb-2">
                <span className="text-body-sm text-on-surface-variant">Remaining Balance</span>
                <span className="font-bold text-on-surface">${invoice.status === 'PAID' ? '0.00' : invoice.total.toFixed(2)}</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className={`h-full ${invoice.status === 'PAID' ? 'bg-secondary w-full' : invoice.status === 'PENDING' ? 'bg-tertiary w-0' : 'bg-error w-full'}`}></div>
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
                  <span className="text-white font-label-caps text-[10px] font-bold">VIEW SCAN</span>
                </div>
              </div>
              <div className="aspect-video bg-surface rounded-lg border border-outline-variant relative group cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-110" src="/images/invoice-scan2.jpg" alt="Dental scan" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-label-caps text-[10px] font-bold">VIEW SCAN</span>
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
  )
}
