import { useState } from 'react'

export default function CaseLogistics() {
  const [priority, setPriority] = useState('rush')

  const handlePriority = (value) => {
    setPriority(value)
  }

  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
      <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-md">
        <span className="material-symbols-outlined text-primary">event_upcoming</span>
        <h3 className="font-title-sm text-title-sm text-on-surface">Case Logistics</h3>
      </div>
      <div className="flex flex-col gap-md">
        <div className="flex flex-col gap-xs">
          <label className="text-label-caps font-label-caps text-on-surface-variant">Due Date</label>
          <div className="relative">
            <input
              className="form-input-focus w-full h-12 px-md bg-surface-container-low border border-outline-variant rounded-lg text-on-surface font-body-md"
              type="date"
            />
          </div>
        </div>
        <div className="flex flex-col gap-xs">
          <label className="text-label-caps font-label-caps text-on-surface-variant">Priority Status</label>
          <div className="grid grid-cols-2 gap-sm">
            <button
              type="button"
              onClick={() => handlePriority('standard')}
              className={`priority-btn flex items-center justify-center gap-2 p-3 rounded-lg border-2 font-bold transition-all active:scale-95 ${
                priority === 'standard'
                  ? 'border-primary text-primary bg-primary-container/10'
                  : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">low_priority</span>
              Standard
            </button>
            <button
              type="button"
              onClick={() => handlePriority('rush')}
              className={`priority-btn flex items-center justify-center gap-2 p-3 rounded-lg border-2 font-bold transition-all active:scale-95 ${
                priority === 'rush'
                  ? 'border-error text-error bg-error-container/10'
                  : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              Rush
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
