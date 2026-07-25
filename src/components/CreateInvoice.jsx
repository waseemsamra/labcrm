import { useState } from 'react'

export default function CreateInvoice() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return <InvoiceSentSuccess onBack={() => setSent(false)} />
  }

  return (
    <div className="flex-1">
      {/* Top App Bar */}
      <header className="sticky top-0 z-30 bg-surface border-b border-outline-variant px-lg h-16 flex justify-between items-center">
        <div className="flex items-center gap-md">
          <a href="/billing">
            <button className="p-sm hover:bg-surface-container rounded-full text-on-surface-variant">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </a>
          <h2 className="font-title-sm text-title-sm text-primary">Create New Invoice</h2>
        </div>
        <div className="flex items-center gap-md">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-surface-container text-body-sm rounded-full border-none focus:ring-2 focus:ring-primary w-64"
              placeholder="Global Search..."
              type="text"
            />
          </div>
          <button className="p-sm hover:bg-surface-container rounded-full text-on-surface-variant relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
            JS
          </div>
        </div>
      </header>

      {/* Focused Workspace */}
      <div className="max-w-[1600px] mx-auto py-xl px-lg">
        {/* Step Progress Indicator */}
        <div className="mb-xl flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -z-10 -translate-y-1/2"></div>
          {[
            { num: '1', label: 'Office', active: true },
            { num: '2', label: 'Cases', active: false },
            { num: '3', label: 'Review', active: false },
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center gap-2 bg-background px-4">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${
                  step.active
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface border-primary text-primary'
                }`}
              >
                {step.num}
              </div>
              <span className={`font-label-caps text-label-caps ${step.active ? 'text-primary' : 'text-primary'}`}>{step.label}</span>
            </div>
          ))}
        </div>

        {/* Multi-step Form Content */}
        <div className="grid grid-cols-12 gap-lg">
          {/* Main Configuration Panel */}
          <div className="col-span-12 lg:col-span-8 space-y-lg">
            {/* Section 1: Dental Office Selection */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg transition-all hover:border-primary/40">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary">apartment</span>
                <h3 className="font-title-sm text-on-surface">1. Select Dental Office</h3>
              </div>
              <div className="relative">
                <select className="w-full p-md bg-surface border border-outline-variant rounded-lg font-body-md focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer">
                  <option disabled selected value="">Search or select a practice...</option>
                  <option value="1">Bright Smiles Dental - Dr. Sarah Jenkins</option>
                  <option value="2">Elite Orthodontics - Dr. Michael Chen</option>
                  <option value="3">Metro Dental Group - Central Office</option>
                  <option value="4">Riverwalk Family Dentistry</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
              </div>
              <div className="mt-sm flex items-center gap-2 text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">info</span>
                <span>Invoice will be addressed to the primary billing contact of the selected office.</span>
              </div>
            </section>

            {/* Section 2: Case Selection */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all hover:border-primary/40">
              <div className="p-lg border-b border-outline-variant flex justify-between items-center">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">fact_check</span>
                  <h3 className="font-title-sm text-on-surface">2. Select Completed Cases</h3>
                </div>
                <span className="bg-surface-container-high text-primary px-sm py-xs rounded text-label-caps">4 Cases Ready</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-surface text-label-caps text-on-surface-variant">
                    <tr>
                      <th className="p-md w-10">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </th>
                      <th className="p-md">Case ID</th>
                      <th className="p-md">Patient</th>
                      <th className="p-md">Restoration</th>
                      <th className="p-md">Completed</th>
                      <th className="p-md text-right">Standard Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    <tr className="hover:bg-surface-container transition-colors cursor-pointer group">
                      <td className="p-md">
                        <input checked className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="p-md font-bold text-primary">#LB-8821</td>
                      <td className="p-md">Robert Miller</td>
                      <td className="p-md">PFM Crown - #14</td>
                      <td className="p-md text-on-surface-variant">Oct 24, 2023</td>
                      <td className="p-md text-right font-bold">$185.00</td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors cursor-pointer group">
                      <td className="p-md">
                        <input checked className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="p-md font-bold text-primary">#LB-8825</td>
                      <td className="p-md">Elena Rodriguez</td>
                      <td className="p-md">Zirconia Bridge - #3-5</td>
                      <td className="p-md text-on-surface-variant">Oct 25, 2023</td>
                      <td className="p-md text-right font-bold">$420.00</td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors cursor-pointer group">
                      <td className="p-md">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="p-md font-bold text-primary">#LB-8830</td>
                      <td className="p-md">Thomas Wayne</td>
                      <td className="p-md">E.max Veneer - #8</td>
                      <td className="p-md text-on-surface-variant">Oct 26, 2023</td>
                      <td className="p-md text-right font-bold">$165.00</td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors cursor-pointer group opacity-60">
                      <td className="p-md">
                        <input className="rounded text-primary focus:ring-primary" type="checkbox" />
                      </td>
                      <td className="p-md font-bold text-primary">#LB-8841</td>
                      <td className="p-md">Jane Doe</td>
                      <td className="p-md">Night Guard</td>
                      <td className="p-md text-on-surface-variant">Oct 27, 2023</td>
                      <td className="p-md text-right font-bold">$95.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Line Items & Adjustments */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg transition-all hover:border-primary/40">
              <div className="flex items-center justify-between mb-md">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">receipt_long</span>
                  <h3 className="font-title-sm text-on-surface">3. Line Items & Adjustments</h3>
                </div>
                <button className="text-primary font-bold text-body-sm flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">add_circle</span> Add Custom Fee
                </button>
              </div>
              <div className="space-y-sm">
                <div className="flex items-center justify-between p-md bg-surface rounded-lg border border-outline-variant/30">
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">#LB-8821: PFM Crown - #14</span>
                    <span className="text-body-sm text-on-surface-variant">Base medical-grade ceramic pricing</span>
                  </div>
                  <div className="flex items-center gap-lg">
                    <div className="text-right">
                      <span className="block text-label-caps text-on-surface-variant">Qty</span>
                      <span className="font-bold">1</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-label-caps text-on-surface-variant">Price</span>
                      <span className="font-bold">$185.00</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-md bg-surface rounded-lg border border-outline-variant/30">
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">#LB-8825: Zirconia Bridge - #3-5</span>
                    <span className="text-body-sm text-on-surface-variant">High translucency multi-unit</span>
                  </div>
                  <div className="flex items-center gap-lg">
                    <div className="text-right">
                      <span className="block text-label-caps text-on-surface-variant">Qty</span>
                      <span className="font-bold">1</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-label-caps text-on-surface-variant">Price</span>
                      <span className="font-bold">$420.00</span>
                    </div>
                  </div>
                </div>
                <div className="pt-md mt-md border-t border-outline-variant">
                  <div className="flex gap-md">
                    <div className="flex-grow space-y-xs">
                      <label className="text-label-caps text-on-surface-variant">Adjustment Type</label>
                      <select className="w-full p-sm bg-surface border border-outline-variant rounded text-body-sm">
                        <option>Practice Discount (Bulk)</option>
                        <option>Promo Code: FALL23</option>
                        <option>Shipping Adjustment</option>
                        <option>Rush Fee</option>
                      </select>
                    </div>
                    <div className="w-32 space-y-xs">
                      <label className="text-label-caps text-on-surface-variant">Amount ($)</label>
                      <input className="w-full p-sm bg-surface border border-outline-variant rounded text-body-sm text-error font-bold" type="number" value="-50.00" />
                    </div>
                    <div className="flex items-end">
                      <button className="p-sm text-error hover:bg-error-container/20 rounded">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Summary Panel */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 bg-surface-container border border-outline-variant rounded-xl p-lg space-y-lg shadow-sm">
              <h3 className="font-title-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined">analytics</span>
                Invoice Summary
              </h3>
              <div className="space-y-md">
                <div className="flex justify-between text-body-sm">
                  <span className="text-on-surface-variant">Subtotal (2 Cases)</span>
                  <span className="font-bold">$605.00</span>
                </div>
                <div className="flex justify-between text-body-sm text-error">
                  <span className="text-on-surface-variant">Bulk Discount</span>
                  <span className="font-bold">-$50.00</span>
                </div>
                <div className="flex justify-between text-body-sm">
                  <span className="text-on-surface-variant">Tax (Exempt)</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="pt-md border-t border-outline-variant flex justify-between items-end">
                  <span className="text-body-md font-bold text-on-surface">Total Amount</span>
                  <span className="text-headline-md font-display-lg text-primary">$555.00</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant/30 space-y-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                  <span className="text-label-caps">Issue Date: Oct 30, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">credit_card</span>
                  <span className="text-label-caps">Due Net 30: Nov 29, 2023</span>
                </div>
              </div>
              <div className="space-y-sm">
                <button onClick={() => setSent(true)} className="w-full bg-primary text-on-primary py-md rounded-lg font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]">
                  <span className="material-symbols-outlined">send</span>
                  Finalize & Send
                </button>
                <button className="w-full bg-surface border border-primary text-primary py-md rounded-lg font-bold hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">save</span>
                  Save as Draft
                </button>
              </div>
              <div className="text-center">
                <button className="text-on-surface-variant text-body-sm hover:text-error transition-colors">Discard Invoice</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvoiceSentSuccess({ onBack }) {
  return (
    <div className="flex-1">
      <header className="bg-surface border-b border-outline-variant w-full h-16 flex justify-between items-center px-lg sticky top-0 z-40">
        <div className="flex items-center gap-md">
          <h2 className="text-title-sm font-title-sm font-bold text-primary">DentalPro CRM</h2>
          <div className="h-4 w-[1px] bg-outline-variant"></div>
          <nav className="hidden md:flex gap-lg">
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="/">Dashboard</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="/cases">Cases</a>
            <a className="text-primary border-b-2 border-primary pb-1 font-body-md text-body-md" href="/billing">Billing</a>
            <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors" href="/inventory">Inventory</a>
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
            <img className="w-full h-full object-cover" src="/images/tech-profile.jpg" alt="Lab technician" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-xl">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl w-full overflow-hidden flex flex-col md:flex-row shadow-sm">
            <div className="md:w-1/3 bg-surface-container flex flex-col items-center justify-center p-xl text-center border-b md:border-b-0 md:border-r border-outline-variant">
              <div className="success-checkmark-anim w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-md">
                <span className="material-symbols-outlined !text-[48px]" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-sm">Sent!</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">The invoice has been delivered to the practitioner's portal.</p>
            </div>
            <div className="md:w-2/3 p-xl flex flex-col">
              <div className="mb-lg">
                <h2 className="text-headline-md font-headline-md text-on-surface mb-xs">Invoice Successfully Sent</h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Invoice <span className="font-bold text-on-surface">#INV-2024-893</span> has been sent to <span className="text-primary font-medium">Bright Smile Family Dentistry</span>.
                </p>
              </div>
              <div className="bg-surface p-md rounded-lg border border-outline-variant/50 grid grid-cols-1 sm:grid-cols-2 gap-md mb-xl">
                <div>
                  <span className="text-label-caps font-label-caps text-outline uppercase block mb-xs">Total Amount</span>
                  <span className="text-title-sm font-title-sm text-on-surface font-bold">$555.00</span>
                </div>
                <div>
                  <span className="text-label-caps font-label-caps text-outline uppercase block mb-xs">Recipient</span>
                  <span className="text-body-md font-body-md text-on-surface">Dr. Miller</span>
                </div>
                <div>
                  <span className="text-label-caps font-label-caps text-outline uppercase block mb-xs">Date</span>
                  <span className="text-body-md font-body-md text-on-surface">Oct 30, 2023</span>
                </div>
                <div>
                  <span className="text-label-caps font-label-caps text-outline uppercase block mb-xs">Status</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-on-secondary-container">Delivered</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md">
                <a href="/billing">
                  <button className="flex-1 bg-primary text-on-primary py-sm px-lg rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-colors shadow-sm">
                    Go to Billing Dashboard
                  </button>
                </a>
                <div className="flex gap-sm">
                  <button className="w-12 h-10 border border-outline-variant flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Download PDF">
                    <span className="material-symbols-outlined" data-icon="download">download</span>
                  </button>
                  <button className="w-12 h-10 border border-outline-variant flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Print Receipt">
                    <span className="material-symbols-outlined" data-icon="print">print</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-xl w-full grid grid-cols-1 md:grid-cols-2 gap-lg">
            <a href="/billing/create" onClick={(e) => { e.preventDefault(); onBack() }} className="flex items-start gap-md p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-colors cursor-pointer group">
              <div className="p-sm bg-surface-container-high rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="add_notes">add_notes</span>
              </div>
              <div>
                <h4 className="text-body-md font-body-md font-bold text-on-surface">Create Another Invoice</h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Start a new billing entry for a different case or practitioner.</p>
              </div>
            </a>
            <a href="/cases" className="flex items-start gap-md p-lg bg-surface border border-outline-variant rounded-xl hover:border-primary transition-colors cursor-pointer group">
              <div className="p-sm bg-surface-container-high rounded-lg text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="text-body-md font-body-md font-bold text-on-surface">View Case Production</h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Track the status of the lab work associated with this invoice.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
