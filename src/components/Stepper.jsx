import { useState } from 'react'

export default function Stepper() {
  const steps = [
    { num: 1, label: 'Client Info' },
    { num: 2, label: 'RX Details' },
    { num: 3, label: 'Media Upload' },
    { num: 4, label: 'Review' },
  ]

  return (
    <div className="w-full py-md">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant -translate-y-1/2 z-0"></div>
        {steps.map((step, idx) => (
          <div key={step.num} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                idx === 0
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface border-2 border-outline-variant text-on-surface-variant'
              }`}
            >
              {step.num}
            </div>
            <span
              className={`mt-2 text-label-caps font-label-caps ${
                idx === 0 ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
