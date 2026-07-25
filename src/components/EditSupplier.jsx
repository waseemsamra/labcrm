import AdminSidebar from './AdminSidebar'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditSupplier() {
  const { supplierId } = useParams()
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center px-lg z-40">
          <div className="flex items-center gap-md">
            <span className="font-headline-md text-headline-md font-semibold text-primary">Precision Lab CRM</span>
            <div className="ml-xl relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="bg-surface-container text-body-sm font-body-sm pl-10 pr-4 py-2 rounded-full border-none w-64"
                placeholder="Search suppliers..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex gap-md">
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkt4lMTMUw5FufTqADe16hBYNZ1zsSWeULnqFmtxfFyVVhp7vyAizWLvDTqUipCZfvi0B7UFX6bKZ9oikOJyuyAPtxp5z7nAEmKoZ5p3PhHOBqsVoIRsMa_72nrigcQDihX9EndOcTNUJWQGlErLFlysSc8jzLmS-G2Vz2oePpf1gNqjo0OUwVP8LbGZzhQOgUyvBSr-maewpEVcKEuzmxd8xwKRTzLxb2Hea-dRuQh541jte9mekfWCp-BipYdPANdQeUsa1xWf7F"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Main Content Canvas */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-[1600px] mx-auto p-lg">
            {/* Breadcrumbs / Header */}
            <div className="mb-lg flex justify-between items-end">
              <div>
                <div className="flex items-center gap-sm text-on-surface-variant font-body-sm text-body-sm mb-xs">
                  <span>Inventory</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span>Suppliers</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span className="text-primary font-medium">Edit Supplier</span>
                </div>
                <h2 className="font-display-lg text-display-lg font-bold text-on-surface">Ivoclar Vivadent</h2>
              </div>
              <div className="flex gap-md">
                <button
                  className="px-lg py-sm border border-outline text-on-surface-variant font-title-sm text-title-sm rounded-lg hover:bg-surface-container-low transition-colors"
                  onClick={() => navigate('/admin/suppliers')}
                  type="button"
                >
                  Discard
                </button>
                <button className="px-lg py-sm bg-primary text-on-primary font-title-sm text-title-sm rounded-lg hover:opacity-90 transition-all">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-lg">
              {/* Left: Edit Form */}
              <div className="col-span-8 flex flex-col gap-lg">
                <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
                  <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md">
                    <span className="material-symbols-outlined text-primary">edit_note</span>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-bold">General Information</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant">SUPPLIER NAME</label>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface"
                        type="text"
                        defaultValue="Ivoclar Vivadent"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant">CONTACT PERSON</label>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface"
                        type="text"
                        defaultValue="Sarah Jenkins"
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant">LEAD TIME (DAYS)</label>
                      <div className="relative">
                        <input
                          className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface pr-12"
                          type="text"
                          defaultValue="2.4"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 font-body-sm text-body-sm text-outline">Days</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant">STATUS</label>
                      <div className="flex gap-md mt-1">
                        <label className="flex items-center gap-sm cursor-pointer">
                          <input checked className="text-primary focus:ring-primary h-4 w-4" name="status" type="radio" />
                          <span className="font-body-md text-body-md text-on-surface">Active / Preferred</span>
                        </label>
                        <label className="flex items-center gap-sm cursor-pointer">
                          <input className="text-primary focus:ring-primary h-4 w-4" name="status" type="radio" />
                          <span className="font-body-md text-body-md text-on-surface">On Hold</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant">INTERNAL NOTES</label>
                      <textarea
                        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface resize-none"
                        rows="3"
                        defaultValue="Key partner for e.max lithium disilicate materials. High reliability and consistent quality. Monthly bulk orders processed on the 15th."
                      ></textarea>
                    </div>
                  </div>
                </section>

                {/* Recent Activity Section */}
                <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
                  <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md">
                    <span className="material-symbols-outlined text-primary">history</span>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-bold">Recent Activity</h3>
                  </div>
                  <div className="space-y-lg">
                    <div className="flex items-start gap-md">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-body-md text-body-md text-on-surface">
                          <span className="font-bold">Contact Person updated</span> by Admin (John D.)
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Today at 09:42 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-md">
                      <div className="mt-1 w-2 h-2 rounded-full bg-outline-variant shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-body-md text-body-md text-on-surface">
                          <span className="font-bold">Lead Time adjustment</span> (+0.2 days)
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">October 12, 2023 · 02:15 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-md">
                      <div className="mt-1 w-2 h-2 rounded-full bg-outline-variant shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-body-md text-body-md text-on-surface">
                          <span className="font-bold">Contract Renewal</span> signed and uploaded
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">August 30, 2023 · 11:30 AM</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right: Stats Sidebar */}
              <div className="col-span-4 flex flex-col gap-lg">
                <section className="bg-primary text-on-primary rounded-xl p-lg shadow-sm">
                  <div className="flex items-center gap-sm mb-lg border-b border-primary-container pb-md">
                    <span className="material-symbols-outlined text-on-primary-container">monitoring</span>
                    <h3 className="font-title-sm text-title-sm font-bold">Supplier Performance</h3>
                  </div>
                  <div className="space-y-xl">
                    <div>
                      <p className="font-label-caps text-label-caps opacity-80 mb-xs">TOTAL ORDERS (LTM)</p>
                      <p className="font-display-lg text-display-lg font-bold">124</p>
                    </div>
                    <div>
                      <p className="font-label-caps text-label-caps opacity-80 mb-xs">ON-TIME DELIVERY</p>
                      <div className="flex items-end gap-sm">
                        <p className="font-display-lg text-display-lg font-bold">98%</p>
                        <span className="material-symbols-outlined text-secondary-container mb-2">trending_up</span>
                      </div>
                      <div className="w-full bg-on-primary/20 h-1.5 rounded-full mt-sm overflow-hidden">
                        <div className="bg-secondary-container h-full w-[98%]"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-md">
                      <div className="bg-primary-container/50 p-md rounded-lg">
                        <p className="font-label-caps text-label-caps opacity-80 text-[10px]">ACTIVE POs</p>
                        <p className="font-headline-md text-headline-md font-bold">12</p>
                      </div>
                      <div className="bg-primary-container/50 p-md rounded-lg">
                        <p className="font-label-caps text-label-caps opacity-80 text-[10px]">AVG. QUALITY</p>
                        <p className="font-headline-md text-headline-md font-bold">4.9<span className="text-sm font-normal opacity-80">/5</span></p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Branding / Visual Card */}
                <div className="relative overflow-hidden rounded-xl h-48 border border-outline-variant">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC95TD55aNgzRVXnpH3l2g_k81QfEt6LMGCNBQ6gULLlXtHwY6yJDu8DUPiFCStt4eDpPSAr3ls1UJhXqiEfgp1MoaNPL8ltQ2SJxszkhUFm1-fElW4HvoOYqiSdWKvPIUKp6axOs8fB66kFHxUqNFOWA9xRnt3oYdbevgOlBbaYhD1ZYsra3avBFRkCSincSNh7n7hCtKT4S0gA0L2cFyJ92yEfRoAxzqo4TKQsJ_akzyPcyjBYtCObeJS-oH0IBtaW_e9d4BhvMLq"
                    alt="Supplier branding"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-lg">
                    <p className="font-title-sm text-title-sm text-white font-bold">Ivoclar Vivadent</p>
                    <p className="font-body-sm text-body-sm text-white/80">Authorized Premium Supplier</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-md">QUICK ACTIONS</h4>
                  <div className="grid grid-cols-1 gap-sm">
                    <button className="flex items-center gap-md px-md py-sm bg-surface-container-low rounded-lg hover:bg-tertiary-fixed-dim transition-colors text-on-surface text-body-md font-body-md">
                      <span className="material-symbols-outlined text-primary">mail</span>
                      Contact Representative
                    </button>
                    <button className="flex items-center gap-md px-md py-sm bg-surface-container-low rounded-lg hover:bg-tertiary-fixed-dim transition-colors text-on-surface text-body-md font-body-md">
                      <span className="material-symbols-outlined text-primary">receipt_long</span>
                      View Purchase History
                    </button>
                    <button className="flex items-center gap-md px-md py-sm bg-surface-container-low rounded-lg hover:bg-tertiary-fixed-dim transition-colors text-on-surface text-body-md font-body-md">
                      <span className="material-symbols-outlined text-primary">description</span>
                      Contract Documents
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
