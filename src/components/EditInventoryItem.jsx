import AdminSidebar from './AdminSidebar'

export default function EditInventoryItem() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-xl">
            <div className="relative w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-sm focus:border-primary"
                placeholder="Search Inventory, Orders, SKU..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-md">
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">settings</button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">help</button>
            </div>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="flex items-center gap-sm">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMVcLLmcUpWotmRcb9p6YEfYtXItJ5QwY-fwUcU4NkvJtUKtDo-okH9dEbDvKBRejtj5TsulN9WGNzEYPDOBS2xNU30HTjLoZ0qG2vNnD0XxnqVWz-dsyik2BhFwuAsd1H7UmvPHvpgMBKUQyf1FDvD-rJuNlqq408rhL39DG0RIkqUQrL4aCIlCUVVWutQbxFaxHno3IMladDVA_ALmqMDLlMysYyF_ZrBk62daKxubdgdMg2NXHQ0ILid36XMRgbtd0fz7-uvZ_e"
                  alt="Admin"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-lg max-w-[1600px] mx-auto">
            {/* Header Section */}
            <div className="mb-xl flex items-end justify-between">
              <div className="space-y-xs">
                <nav className="flex items-center gap-xs text-on-surface-variant font-label-caps text-label-caps uppercase">
                  <a className="hover:text-primary" href="#">Inventory</a>
                  <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                  <span className="text-primary font-bold">Edit Item</span>
                </nav>
                <h2 className="font-headline-md text-headline-md text-on-surface">Zirconia HT Plus Blocks</h2>
                <p className="text-on-surface-variant font-body-sm text-body-sm">Last updated: Oct 24, 2023 by Dr. Julian Voss</p>
              </div>
              <div className="flex items-center gap-md">
                <button className="px-lg py-md rounded-lg border border-outline-variant text-primary font-bold hover:bg-surface-variant transition-colors">Cancel</button>
                <button className="px-lg py-md rounded-lg bg-primary text-on-primary font-bold flex items-center gap-xs hover:opacity-90 transition-opacity">
                  <span className="material-symbols-outlined">save</span>
                  Save Changes
                </button>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-lg items-start">
              {/* Left Column: Primary Forms */}
              <div className="col-span-12 lg:col-span-8 space-y-lg">
                {/* General Information Card */}
                <section className="bg-white border border-outline-variant p-xl rounded shadow-sm">
                  <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md">
                    <span className="material-symbols-outlined text-primary">info</span>
                    <h3 className="font-title-sm text-title-sm text-primary">General Information</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-lg">
                    <div className="col-span-2">
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Item Name</label>
                      <input
                        className="w-full border border-outline-variant rounded p-md font-body-md text-body-md focus:border-primary"
                        type="text"
                        defaultValue="Zirconia HT Plus Blocks"
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">SKU / Catalog Number</label>
                      <input
                        className="w-full border border-outline-variant rounded p-md font-body-md text-body-md focus:border-primary"
                        type="text"
                        defaultValue="ZIR-HT-4022-P"
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Category</label>
                      <select className="w-full border border-outline-variant rounded p-md font-body-md text-body-md appearance-none bg-white focus:border-primary">
                        <option>Milling Material</option>
                        <option>Porcelain</option>
                        <option>Impression Material</option>
                        <option>Consumables</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Supplier</label>
                      <div className="relative">
                        <input
                          className="w-full border border-outline-variant rounded p-md font-body-md text-body-md focus:border-primary"
                          type="text"
                          defaultValue="Dental Supply Co. Europe"
                        />
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">arrow_drop_down</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Inventory Settings Card */}
                <section className="bg-white border border-outline-variant p-xl rounded shadow-sm">
                  <div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-md">
                    <div className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">settings_suggest</span>
                      <h3 className="font-title-sm text-title-sm text-primary">Inventory Settings</h3>
                    </div>
                    <div className="flex items-center gap-md">
                      <span className="font-label-caps text-label-caps text-on-surface-variant">Auto-Reorder</span>
                      <button
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-container"
                        onClick={(e) => {
                          const btn = e.currentTarget
                          const dot = btn.querySelector('span')
                          if (btn.classList.contains('bg-primary-container')) {
                            btn.classList.remove('bg-primary-container')
                            btn.classList.add('bg-outline-variant')
                            dot.classList.remove('translate-x-6')
                            dot.classList.add('translate-x-1')
                          } else {
                            btn.classList.add('bg-primary-container')
                            btn.classList.remove('bg-outline-variant')
                            dot.classList.add('translate-x-6')
                            dot.classList.remove('translate-x-1')
                          }
                        }}
                      >
                        <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-lg">
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Min Stock Threshold</label>
                      <input
                        className="w-full border border-outline-variant rounded p-md font-body-md text-body-md focus:border-primary"
                        type="number"
                        defaultValue={15}
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Lead Time (Days)</label>
                      <input
                        className="w-full border border-outline-variant rounded p-md font-body-md text-body-md focus:border-primary"
                        type="number"
                        defaultValue={5}
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Unit Cost (USD)</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                        <input
                          className="w-full border border-outline-variant rounded pl-8 pr-md py-md font-body-md text-body-md focus:border-primary"
                          type="text"
                          defaultValue="84.50"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Location / Storage */}
                <section className="bg-white border border-outline-variant p-xl rounded shadow-sm">
                  <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <h3 className="font-title-sm text-title-sm text-primary">Location & Storage</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-lg">
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Warehouse / Zone</label>
                      <input
                        className="w-full border border-outline-variant rounded p-md font-body-md text-body-md focus:border-primary"
                        type="text"
                        defaultValue="Zone A - Main Lab"
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant mb-xs">Shelf / Bin ID</label>
                      <input
                        className="w-full border border-outline-variant rounded p-md font-body-md text-body-md focus:border-primary"
                        type="text"
                        defaultValue="Shelf-R4-B12"
                      />
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Status & Logs */}
              <div className="col-span-12 lg:col-span-4 space-y-lg">
                {/* Current Stock Status */}
                <section className="bg-primary text-on-primary p-xl rounded shadow-lg">
                  <div className="flex items-center gap-sm mb-lg">
                    <span className="material-symbols-outlined">inventory</span>
                    <h3 className="font-title-sm text-title-sm">Current Stock Status</h3>
                  </div>
                  <div className="flex flex-col items-center justify-center py-lg border-y border-white/20 mb-lg">
                    <span className="font-display-lg text-display-lg font-bold">42</span>
                    <span className="font-label-caps text-label-caps opacity-80">Units on Hand</span>
                  </div>
                  <div className="space-y-md">
                    <div className="flex justify-between items-center text-sm">
                      <span className="opacity-70">Unit of Measure</span>
                      <span className="font-bold">Blocks (Single)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="opacity-70">Last Restocked</span>
                      <span className="font-bold">Oct 12, 2023</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="opacity-70">Status</span>
                      <span className="px-sm py-xs bg-secondary-container text-on-secondary-container text-xs rounded-full font-bold">Healthy Stock</span>
                    </div>
                  </div>
                </section>

                {/* Activity Log */}
                <section className="bg-white border border-outline-variant p-xl rounded shadow-sm">
                  <div className="flex items-center justify-between mb-lg border-b border-outline-variant pb-md">
                    <div className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">history</span>
                      <h3 className="font-title-sm text-title-sm text-primary">Activity Log</h3>
                    </div>
                    <button className="text-primary font-label-caps text-[11px] hover:underline">View All</button>
                  </div>
                  <div className="space-y-lg relative">
                    <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-outline-variant"></div>
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">add</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface">10 units added to stock</p>
                      <p className="text-[11px] text-on-surface-variant">By Admin • Oct 12, 10:45 AM</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface">2 units assigned to Case #88219</p>
                      <p className="text-[11px] text-on-surface-variant">By Dr. Julian Voss • Oct 11, 02:15 PM</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">edit</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface">Min stock threshold updated (10 → 15)</p>
                      <p className="text-[11px] text-on-surface-variant">By System • Oct 09, 09:00 AM</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">remove</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface">1 unit assigned to Case #88102</p>
                      <p className="text-[11px] text-on-surface-variant">By Sarah Miller • Oct 08, 04:30 PM</p>
                    </div>
                  </div>
                </section>

                {/* Helpful Tip */}
                <div className="p-md bg-surface-container-high border border-outline-variant rounded flex gap-sm items-start">
                  <span className="material-symbols-outlined text-primary text-[20px]">lightbulb</span>
                  <p className="text-on-surface-variant text-xs leading-relaxed">
                    <strong className="text-primary block mb-1">Stock Optimization Tip</strong>
                    This material has been used 14% more frequently this month. Consider increasing your Minimum Stock Threshold to 20 units.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  )
}
