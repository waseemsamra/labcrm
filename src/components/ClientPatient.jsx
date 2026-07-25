export default function ClientPatient() {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
      <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-md">
        <span className="material-symbols-outlined text-primary">account_balance</span>
        <h3 className="font-title-sm text-title-sm text-on-surface">Client & Patient</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="flex flex-col gap-xs">
          <label className="text-label-caps font-label-caps text-on-surface-variant">Dental Office Selection</label>
          <select className="form-input-focus h-12 px-md bg-surface-container-low border border-outline-variant rounded-lg text-on-surface font-body-md appearance-none">
            <option>Skyline Dental Associates</option>
            <option>Bright Smile Orthodontics</option>
            <option>Pearl River Family Dentistry</option>
            <option>Downtown Cosmetic Center</option>
          </select>
        </div>
        <div className="flex flex-col gap-xs">
          <label className="text-label-caps font-label-caps text-on-surface-variant">Patient Name</label>
          <input
            className="form-input-focus h-12 px-md bg-surface-container-low border border-outline-variant rounded-lg text-on-surface font-body-md"
            placeholder="First and Last Name"
            type="text"
          />
        </div>
      </div>
    </section>
  )
}
