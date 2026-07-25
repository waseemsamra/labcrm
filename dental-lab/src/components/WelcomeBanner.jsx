export default function WelcomeBanner() {
  return (
    <div className="md:col-span-8 bg-surface border border-outline-variant rounded-xl p-lg flex relative overflow-hidden group h-full">
      <div className="relative z-10 flex flex-col justify-between flex-1">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-2">Welcome back, Dr. Thorne</h1>
          <p className="font-body-md text-on-surface-variant">
            Your lab workflow is on track. There are currently 3 cases requiring your immediate clinical review to proceed to production.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-primary text-on-primary px-lg py-3 rounded-full font-body-md font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-md active:scale-95">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_late</span>
            Review 3 Pending Approvals
          </button>
          <button className="bg-surface-container-high text-primary px-lg py-3 rounded-full font-body-md font-semibold hover:bg-surface-container-highest transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">add_circle</span>
            New Case Request
          </button>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity ml-4">
        <span className="material-symbols-outlined" style={{ fontSize: '240px' }}>dentistry</span>
      </div>
    </div>
  )
}
