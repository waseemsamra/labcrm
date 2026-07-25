const steps = [
  { label: 'Intake', done: true },
  { label: 'Design', done: true },
  { label: 'Milling', done: true },
  { label: 'QC', done: false },
  { label: 'Shipped', done: false },
]

export default function ActiveCaseStepper() {
  return (
    <div className="bg-surface border border-outline-variant rounded-xl p-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
          <div>
            <h3 className="font-title-sm text-title-sm text-on-surface">Current Focus: DX-22495 (Chen, L)</h3>
            <p className="text-body-sm text-on-surface-variant">Detailed restoration lifecycle progress</p>
          </div>
        </div>
        <span className="status-pill bg-primary-container text-on-primary-container px-3">On Track</span>
      </div>
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute h-0.5 bg-outline-variant w-full top-4 left-0 -z-10"></div>
        {steps.map((step) => (
          <div key={step.label} className="flex flex-col items-center gap-2 bg-surface px-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.done
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container border-2 border-outline-variant'
              }`}
            >
              {step.done ? (
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check
                </span>
              ) : null}
            </div>
            <span
              className={`text-xs font-semibold ${step.done ? 'text-primary' : 'text-on-surface-variant'}`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
