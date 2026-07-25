import AdminSidebar from './AdminSidebar'
import { useNavigate } from 'react-router-dom'

export default function AddSupplier() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-md">
            <h1 className="font-headline-md text-headline-md font-semibold text-primary">New Supplier</h1>
          </div>
          <div className="flex items-center gap-md">
            <button
              className="px-lg py-sm font-label-caps text-label-caps rounded-lg border border-outline text-on-surface-variant hover:bg-surface-container-low transition-colors"
              onClick={() => navigate('/admin/suppliers')}
              type="button"
            >
              Cancel
            </button>
            <button className="px-lg py-sm font-label-caps text-label-caps rounded-lg bg-primary text-on-primary hover:opacity-90 transition-opacity flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">save</span>
              Save Supplier
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-lg">
          <div className="max-w-[1600px] mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm mb-md">
              <span>Inventory</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span>Suppliers</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-primary font-semibold">Add New Supplier</span>
            </div>

            {/* Form Layout: Bento Style Cards */}
            <div className="grid grid-cols-12 gap-gutter">
              {/* 1. General Info (Col 8) */}
              <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg shadow-sm">
                <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-sm">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <h2 className="font-title-sm text-title-sm">General Information</h2>
                </div>
                <div className="grid grid-cols-2 gap-lg">
                  <div className="col-span-2">
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Supplier Name *</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md"
                      placeholder="e.g. Acme Dental Supplies"
                      type="text"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Primary Contact</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md"
                      placeholder="Contact Name"
                      type="text"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Website</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md"
                      placeholder="https://www.example.com"
                      type="url"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Email Address *</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md"
                      placeholder="orders@supplier.com"
                      type="email"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Phone Number</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
              </section>

              {/* 2. Business Details (Col 4) */}
              <section className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg shadow-sm">
                <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-sm">
                  <span className="material-symbols-outlined text-primary">business_center</span>
                  <h2 className="font-title-sm text-title-sm">Business Details</h2>
                </div>
                <div className="space-y-lg">
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Account Number</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md"
                      placeholder="LAB-12345"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Tax ID (EIN)</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md"
                      placeholder="XX-XXXXXXX"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Payment Terms</label>
                    <select className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md bg-white">
                      <option>Due on Receipt</option>
                      <option>Net 15</option>
                      <option selected>Net 30</option>
                      <option>Net 60</option>
                      <option>Net 90</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* 3. Logistics & Performance (Col 5) */}
              <section className="col-span-12 lg:col-span-5 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg shadow-sm flex flex-col">
                <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-sm">
                  <span className="material-symbols-outlined text-primary">local_shipping</span>
                  <h2 className="font-title-sm text-title-sm">Logistics & Performance</h2>
                </div>
                <div className="space-y-lg flex-1">
                  <div className="flex items-center justify-between p-sm bg-surface-container-low rounded-lg border border-outline-variant">
                    <div>
                      <p className="font-body-md text-body-md font-semibold text-primary">Preferred Vendor</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Prioritize this vendor in search results</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Average Lead Time (Days)</label>
                    <div className="flex items-center gap-md">
                      <input
                        className="w-24 border border-outline-variant rounded-lg p-sm input-focus font-data-tabular text-data-tabular"
                        type="number"
                        defaultValue={5}
                      />
                      <span className="font-body-sm text-body-sm text-on-surface-variant italic">Estimated days from order to delivery</span>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Shipping Methods</label>
                    <div className="grid grid-cols-2 gap-sm">
                      <label className="flex items-center gap-sm font-body-sm text-body-sm">
                        <input checked className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /> FedEx Ground
                      </label>
                      <label className="flex items-center gap-sm font-body-sm text-body-sm">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /> UPS Express
                      </label>
                      <label className="flex items-center gap-sm font-body-sm text-body-sm">
                        <input checked className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /> DHL International
                      </label>
                      <label className="flex items-center gap-sm font-body-sm text-body-sm">
                        <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" /> Local Courier
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Notes & Attachments (Col 7) */}
              <section className="col-span-12 lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-lg rounded-lg shadow-sm flex flex-col">
                <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-sm">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <h2 className="font-title-sm text-title-sm">Notes & Attachments</h2>
                </div>
                <div className="flex-1 space-y-lg">
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Internal Notes</label>
                    <textarea
                      className="w-full border border-outline-variant rounded-lg p-sm input-focus font-body-md text-body-md resize-none"
                      placeholder="Special pricing agreements, bulk discount thresholds..."
                      rows="3"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block font-label-caps text-label-caps text-on-surface-variant mb-sm">Contracts & Pricing Sheets</label>
                    <div className="border-2 border-dashed border-outline-variant rounded-lg p-xl flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-primary transition-colors mb-sm">cloud_upload</span>
                      <p className="font-body-md text-body-md font-semibold">Click to upload or drag and drop</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">PDF, XLSX, or DOCX (Max 10MB)</p>
                    </div>
                    <div className="mt-md space-y-sm">
                      <div className="flex items-center justify-between p-sm bg-surface-container-low rounded-lg border border-outline-variant">
                        <div className="flex items-center gap-sm">
                          <span className="material-symbols-outlined text-primary">attachment</span>
                          <span className="font-body-sm text-body-sm">current_pricing_2024.pdf</span>
                        </div>
                        <button className="text-error hover:opacity-80">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer Meta Info */}
            <div className="flex justify-between items-center py-md px-lg bg-surface-container border border-outline-variant rounded-lg mt-lg">
              <div className="flex items-center gap-md text-on-surface-variant font-body-sm text-body-sm">
                <span className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">lock</span> Data Encrypted
                </span>
                <span className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">history</span> Last edited: Never
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">Required fields marked with *</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
