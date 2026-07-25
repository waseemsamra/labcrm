import AdminSidebar from './AdminSidebar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminCreateInvoice() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <CreateInvoiceContent />
      </main>
    </div>
  )
}

function CreateInvoiceContent() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return <InvoiceSentSuccess onBack={() => setSent(false)} />
  }

  return (
    <div className="flex-1">
      {/* Top App Bar */}
      <header className="sticky top-0 z-30 bg-surface border-b border-outline-variant px-lg h-16 flex justify-between items-center">
        <div className="flex items-center gap-md">
          <Link to="/admin/billing">
            <button className="p-sm hover:bg-surface-container rounded-full text-on-surface-variant">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </Link>
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
              <div className="divide-y divide-outline-variant">
                {[
                  { id: '#20442-A', patient: 'Elena Rodriguez', type: 'Zirconia Crown (Single)', material: 'KATANA STML', price: '$185.00' },
                  { id: '#20445-C', patient: 'Marcus Chen', type: 'e.max Press Inlay', material: 'Lithium Disilicate', price: '$162.00' },
                  { id: '#20451-B', patient: 'Sarah Jenkins', type: 'Screw-Retained Bridge (3-unit)', material: 'Zirconia Multi', price: '$540.00' },
                  { id: '#20459-F', patient: 'David Thompson', type: 'Night Guard (3D Printed)', material: 'KeySplint Soft', price: '$95.00' },
                ].map((c) => (
                  <div key={c.id} className="p-lg flex items-center justify-between hover:bg-surface-container transition-colors">
                    <div className="flex items-center gap-md">
                      <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" defaultChecked type="checkbox" />
                      <div>
                        <p className="font-data-tabular text-primary font-bold">{c.id}</p>
                        <p className="text-body-sm text-on-surface">{c.patient} • {c.type}</p>
                      </div>
                    </div>
                    <span className="font-data-tabular text-on-surface">{c.price}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Adjustments */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary">edit</span>
                <h3 className="font-title-sm text-on-surface">3. Adjustments & Notes</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">DISCOUNT (%)</label>
                  <input className="w-full p-md bg-surface border border-outline-variant rounded-lg font-body-md focus:ring-2 focus:ring-primary" placeholder="0.00" type="number" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">SHIPPING METHOD</label>
                  <div className="relative">
                    <select className="w-full p-md bg-surface border border-outline-variant rounded-lg font-body-md focus:ring-2 focus:ring-primary appearance-none">
                      <option>Standard Ground</option>
                      <option>Express</option>
                      <option>Same-day Courier</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="mt-lg flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant">INTERNAL NOTES</label>
                <textarea className="w-full p-md bg-surface border border-outline-variant rounded-lg font-body-md focus:ring-2 focus:ring-primary resize-none" rows={3} placeholder="Discounts, shipping notes, or special instructions for this invoice..."></textarea>
              </div>
            </section>
          </div>

          {/* Right Summary Panel */}
          <div className="col-span-12 lg:col-span-4 space-y-lg">
            <div className="bg-surface border border-outline-variant rounded-xl p-lg shadow-sm">
              <h3 className="font-title-sm text-title-sm mb-4">Invoice Summary</h3>
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

            <div className="bg-surface border border-outline-variant rounded-xl p-lg">
              <h3 className="font-title-sm text-title-sm mb-4">Actions</h3>
              <div className="space-y-sm">
                <button className="w-full py-md bg-primary text-on-primary rounded-lg font-title-sm hover:opacity-90 transition-opacity">Save as Draft</button>
                <button className="w-full py-md border border-outline-variant text-on-surface rounded-lg font-title-sm hover:bg-surface-container transition-colors">Preview</button>
                <button className="w-full py-md border border-outline-variant text-on-surface rounded-lg font-title-sm hover:bg-surface-container transition-colors">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
