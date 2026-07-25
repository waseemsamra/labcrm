export default function CaseDetail() {
  return (
    <main className="flex-1 p-lg overflow-y-auto">
        {/* Top Bar / Case Header */}
        <header className="flex justify-between items-center mb-lg">
          <div>
            <nav className="flex items-center gap-xs text-on-surface-variant font-label-caps text-label-caps mb-xs">
              <a href="/cases" className="hover:text-primary">Cases</a>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary">#88421</span>
            </nav>
            <div className="flex items-center gap-md">
              <h2 className="font-display-lg text-display-lg text-on-surface">Case: Patient Martha Wayne</h2>
              <span className="px-sm py-xs rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps">IN PRODUCTION</span>
            </div>
          </div>
          <div className="flex gap-sm">
            <button className="px-md py-sm border border-outline text-on-surface hover:bg-surface-container transition-colors rounded font-body-sm text-body-sm flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">print</span>
              Print Ticket
            </button>
            <button className="px-md py-sm bg-primary text-on-primary rounded font-body-sm text-body-sm flex items-center gap-xs shadow-sm">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Complete Task
            </button>
          </div>
        </header>

        {/* Case Lifecycle Stepper */}
        <section className="bg-surface-container-lowest border border-outline-variant p-md mb-lg rounded">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
            {[
              { label: 'Case Entered', date: 'Oct 12, 09:00', done: true },
              { label: 'Design', date: 'Oct 12, 14:30', done: true },
              { label: 'Milling', date: 'Current Step', done: false, current: true },
              { label: 'QC / Glazing', date: 'Pending', done: false },
              { label: 'Shipping', date: 'Est. Oct 15', done: false },
            ].map((step) => (
              <div key={step.label} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    step.done
                      ? 'bg-primary text-on-primary'
                      : step.current
                        ? 'border-4 border-primary-fixed bg-primary text-on-primary scale-110 shadow-md'
                        : 'bg-surface border border-outline-variant text-on-surface-variant'
                  }`}
                >
                  {step.done ? (
                    <span className="material-symbols-outlined text-[18px]">check</span>
                  ) : step.current ? (
                    <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                  ) : (
                    <span className="text-[14px]">{['Milling', 'QC / Glazing', 'Shipping'].indexOf(step.label) + 3}</span>
                  )}
                </div>
                <span className={`mt-xs font-label-caps text-label-caps ${step.current ? 'text-primary font-bold' : 'text-on-surface'}`}>{step.label}</span>
                <span className="text-[10px] text-on-surface-variant">{step.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Left Column: Media & Actions */}
          <div className="col-span-8 space-y-md">
            {/* Media Gallery */}
            <div className="bg-surface border border-outline-variant rounded p-md">
              <div className="flex justify-between items-center mb-md">
                <h3 className="font-title-sm text-title-sm flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">image</span>
                  Media Gallery (4 Files)
                </h3>
                <button className="text-primary font-label-caps text-label-caps hover:underline">Upload Files</button>
              </div>
              <div className="grid grid-cols-4 gap-md">
                {[
                  { src: '/images/case-media1.jpg', label: 'Upper_Scan.stl' },
                  { src: '/images/case-media2.jpg', label: 'Pre_Op_Xray.jpg' },
                  { src: '/images/case-media3.jpg', label: 'Prep_Photo_1.png' },
                ].map((media) => (
                  <div key={media.label} className="group relative aspect-square rounded overflow-hidden border border-outline-variant cursor-zoom-in">
                    <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src={media.src} alt={media.label} />
                    <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-[10px] p-xs">{media.label}</div>
                  </div>
                ))}
                <div className="aspect-square rounded overflow-hidden border border-outline-variant flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-[32px]">add_photo_alternate</span>
                </div>
              </div>
            </div>

            {/* Production Management Controls */}
            <div className="bg-surface border border-outline-variant rounded p-md">
              <h3 className="font-title-sm text-title-sm mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">tune</span>
                Production Status Management
              </h3>
              <div className="grid grid-cols-2 gap-xl">
                <div className="space-y-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Assigned Technician</label>
                  <select className="w-full bg-surface border border-outline rounded p-sm font-body-sm text-body-sm">
                    <option>Alex Rivera (Milling)</option>
                    <option>Sarah Chen (Design)</option>
                    <option>John Miller (QC)</option>
                  </select>
                </div>
                <div className="space-y-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Priority Level</label>
                  <div className="flex gap-sm">
                    <button className="flex-1 py-xs border border-outline rounded text-on-surface-variant font-label-caps text-label-caps hover:bg-surface-container">Standard</button>
                    <button className="flex-1 py-xs border-2 border-error text-error bg-error-container/20 rounded font-label-caps text-label-caps">Rush</button>
                  </div>
                </div>
              </div>
              <div className="mt-md pt-md border-t border-outline-variant flex gap-sm">
                <button className="flex-1 bg-surface-container-highest text-on-surface font-body-sm text-body-sm py-sm rounded border border-outline-variant">Pause Production</button>
                <button className="flex-1 bg-primary text-on-primary font-body-sm text-body-sm py-sm rounded">Move to QC Phase</button>
              </div>
            </div>

            {/* Internal Notes */}
            <div className="bg-surface border border-outline-variant rounded p-md">
              <h3 className="font-title-sm text-title-sm mb-md flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary">sticky_note_2</span>
                Internal Lab Notes
              </h3>
              <div className="space-y-md max-h-64 overflow-y-auto hide-scrollbar mb-md">
                <div className="bg-surface-container-low p-sm rounded border-l-4 border-primary">
                  <div className="flex justify-between items-center mb-xs">
                    <span className="font-label-caps text-label-caps font-bold">Sarah Chen</span>
                    <span className="text-[10px] text-on-surface-variant">Oct 12, 11:20</span>
                  </div>
                  <p className="font-body-sm text-body-sm">Scan had some artifacts on the distal of #14. I smoothed it out in the CAD, but check fit during QC carefully.</p>
                </div>
                <div className="bg-surface-container-low p-sm rounded border-l-4 border-outline">
                  <div className="flex justify-between items-center mb-xs">
                    <span className="font-label-caps text-label-caps font-bold">Admin</span>
                    <span className="text-[10px] text-on-surface-variant">Oct 11, 16:45</span>
                  </div>
                  <p className="font-body-sm text-body-sm">Doctor requested shade A2 for the cervical third, transitioning to A1 incisally.</p>
                </div>
              </div>
              <div className="relative">
                <textarea
                  className="w-full bg-surface border border-outline rounded p-md font-body-sm text-body-sm min-h-[100px] focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="Add a new note for the team..."
                ></textarea>
                <button className="absolute bottom-md right-md bg-primary text-on-primary p-xs rounded-full">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Case Details & Metadata */}
          <div className="col-span-4 space-y-md">
            {/* Case Summary Card */}
            <div className="bg-surface border border-outline-variant rounded p-md">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md tracking-widest">PATIENT & CLINIC</h3>
              <div className="space-y-md">
                <div>
                  <p className="text-[11px] text-on-surface-variant uppercase font-bold">Doctor</p>
                  <p className="font-title-sm text-title-sm text-on-surface">Dr. Bruce Wayne</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Gotham Dental Clinic</p>
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase font-bold">Tooth #</p>
                    <p className="font-body-md text-body-md text-on-surface">14, 15</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-on-surface-variant uppercase font-bold">Material</p>
                    <p className="font-body-md text-body-md text-on-surface">Zirconia High Trans.</p>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-on-surface-variant uppercase font-bold">Instruction</p>
                  <p className="font-body-sm text-body-sm text-on-surface">Full Contour Crown, Screw-Retained over Implant.</p>
                </div>
              </div>
            </div>

            {/* Restricted Billing Section */}
            <div className="bg-surface border border-outline-variant rounded p-md relative overflow-hidden">
              <div className="flex justify-between items-center mb-md">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">BILLING & INVOICE</h3>
                <span className="material-symbols-outlined text-outline">lock</span>
              </div>
              <div className="absolute inset-0 top-10 bg-white/60 backdrop-blur-[4px] z-20 flex flex-col items-center justify-center p-lg text-center">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-sm">
                  <span className="material-symbols-outlined text-outline">lock_person</span>
                </div>
                <p className="font-title-sm text-title-sm text-on-surface mb-xs">Restricted Access</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Financial details are Restricted to Manager/Owner only.</p>
                <button className="mt-md text-primary font-bold font-label-caps text-label-caps">REQUEST ACCESS</button>
              </div>
              <div className="space-y-sm opacity-20 select-none">
                <div className="flex justify-between font-body-sm">
                  <span>Labor Cost</span>
                  <span>$450.00</span>
                </div>
                <div className="flex justify-between font-body-sm">
                  <span>Materials</span>
                  <span>$120.00</span>
                </div>
                <hr className="border-outline-variant" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$570.00</span>
                </div>
              </div>
            </div>

            {/* Case History Timeline */}
            <div className="bg-surface border border-outline-variant rounded p-md">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-md tracking-widest">LOGS</h3>
              <div className="space-y-lg relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-outline-variant"></div>
                {[
                  { icon: 'play_arrow', title: 'Milling Started', desc: 'Today, 13:45 by Alex Rivera', color: 'bg-primary text-on-primary' },
                  { icon: 'edit', title: 'Design Approved', desc: 'Oct 12, 14:30 by Sarah Chen', color: 'bg-surface-container-high border border-outline text-on-surface-variant' },
                  { icon: 'cloud_upload', title: 'New Scan Uploaded', desc: 'Oct 12, 09:12 by Gotham Dental', color: 'bg-surface-container-high border border-outline text-on-surface-variant' },
                ].map((log) => (
                  <div key={log.title} className="relative pl-lg">
                    <div className={`absolute left-0 top-1 w-[22px] h-[22px] rounded-full flex items-center justify-center scale-75 ${log.color}`}>
                      <span className="material-symbols-outlined text-[14px]">{log.icon}</span>
                    </div>
                    <p className="text-[12px] font-bold">{log.title}</p>
                    <p className="text-[10px] text-on-surface-variant">{log.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
       </main>
  )
}
