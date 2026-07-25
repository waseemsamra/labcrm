import { useState } from 'react'
import FacilityActivationSuccess from './FacilityActivationSuccess'

export default function AddFacilityModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const totalSteps = 3

  if (!isOpen) return null
  if (showSuccess) {
    return <FacilityActivationSuccess isOpen={showSuccess} onClose={onClose} />
  }

  const changeStep = (delta) => {
    const nextStep = currentStep + delta
    if (nextStep < 1 || nextStep > totalSteps) return
    setCurrentStep(nextStep)
  }

  const percentages = [16, 50, 100]

  return (
    <div className="fixed inset-0 bg-on-background/60 backdrop-blur-sm z-[60] flex items-center justify-center p-md">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[921px]">
        {/* Modal Header / Progress Stepper */}
        <header className="p-lg border-b border-outline-variant bg-surface-container-lowest">
          <div className="flex justify-between items-center mb-lg">
            <div>
              <h1 className="font-headline-md text-headline-md text-primary">Add New Facility</h1>
              <p className="font-body-sm text-body-sm text-outline">Expand the global lab network with a new precision node.</p>
            </div>
            <button className="p-xs text-outline hover:text-on-surface" onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Stepper UI */}
          <div className="relative px-2">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2"></div>
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 progress-line"
              style={{ width: `${percentages[currentStep - 1]}%` }}
            ></div>
            <div className="relative flex justify-between">
              {[
                { step: 1, label: 'Basic' },
                { step: 2, label: 'Geographic' },
                { step: 3, label: 'Operational' },
              ].map(({ step, label }) => (
                <div key={step} className="flex flex-col items-center gap-sm">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-4 border-white z-10 ${
                      step <= currentStep ? 'bg-primary text-white' : 'bg-surface-container-highest text-outline'
                    }`}
                  >
                    {step < currentStep ? 'check' : step}
                  </div>
                  <span
                    className={`font-label-caps text-label-caps ${
                      step <= currentStep ? 'text-primary' : 'text-outline'
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-lg">
          <form className="space-y-lg" id="wizard-form">
            {/* Step 1: Basic Information */}
            <div className={currentStep === 1 ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Facility Name</label>
                  <input
                    className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md px-md"
                    placeholder="e.g. Zurich Central Precision Lab"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Facility Type</label>
                    <select className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md">
                      <option>Primary Lab</option>
                      <option>Satellite Site</option>
                      <option>Logistics Hub</option>
                      <option>Partner Clinic</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Parent Region</label>
                    <select className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md">
                      <option>North America</option>
                      <option>EMEA</option>
                      <option>APAC</option>
                    </select>
                  </div>
                </div>
                <div className="bg-surface-container-low p-md rounded border border-primary/10 flex gap-md items-start">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Primary Labs handle high-volume production and final QC, while Satellite Sites focus on rapid scanning and basic chairside milling.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Geographic & Logistics */}
            <div className={currentStep === 2 ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Physical Address</label>
                  <input
                    className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md px-md"
                    placeholder="123 Precision Way"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">City</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md px-md"
                      placeholder="Zurich"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Postal Code</label>
                    <input
                      className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md px-md"
                      placeholder="8001"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Country</label>
                  <select className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md">
                    <option>Switzerland</option>
                    <option>Germany</option>
                    <option>United States</option>
                    <option>Singapore</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Logistics Hub Assignment</label>
                    <select className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md">
                      <option>Singapore Regional Hub</option>
                      <option>Frankfurt Global Gateway</option>
                      <option>Chicago Logistics Center</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Timezone</label>
                    <select className="w-full border border-outline-variant rounded-lg focus:ring-primary focus:border-primary font-body-md text-body-md py-md">
                      <option>Auto-detect (GMT+01:00)</option>
                      <option>(GMT+00:00) London</option>
                      <option>(GMT-05:00) New York</option>
                    </select>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-outline-variant h-48 bg-slate-100 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTgCJKwx6OiymP7r7iWTohXgli_awr5wLxIAqXvZcZZOMgLH8WDlO4JOTEeYlWJLIxtaRD8fl0j6QAFC2MIl3rv4J85TWfE2yHNt3TSPN-jmuOjrXsfGlc2fJBPtT4b3y-T8tmh8BZgspRGcSRcVCMes7YGNXVoMBrz6IN3YGI57bk3Y5kHBH2DR6BZbOX2Exnf0VIoFAUJRY_5JCIzsVYqF7rUuTWxXcXu77nC6L4pCgqD6DowwZsd4cfmo45xfsh_TrplFgFNVMd')`,
                    }}
                  ></div>
                  <div className="relative z-10 bg-white/90 p-sm rounded shadow-sm flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <span className="font-label-caps text-label-caps">Location Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Operational Capacity */}
            <div className={currentStep === 3 ? 'block' : 'hidden'}>
              <div className="space-y-xl">
                {/* Section: Service Capabilities */}
                <section>
                  <h3 className="font-title-sm text-on-surface border-l-4 border-primary pl-md mb-md">Service Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
                    {[
                      { name: 'Crown & Bridge', checked: true },
                      { name: 'Implants', checked: true },
                      { name: 'Removables', checked: false },
                      { name: 'Orthodontics', checked: false },
                      { name: 'Digital Design Only', checked: true },
                    ].map(({ name, checked }) => (
                      <label key={name} className="group flex items-center gap-md p-md border border-outline-variant rounded-lg hover:border-primary transition-all cursor-pointer bg-surface-container-lowest">
                        <input
                          checked={checked}
                          className="w-5 h-5 rounded border border-outline-variant text-primary focus:ring-primary"
                          type="checkbox"
                        />
                        <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">{name}</span>
                      </label>
                    ))}
                  </div>
                </section>

                {/* Section: Production Capacity & Staffing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                  <section>
                    <h3 className="font-title-sm text-on-surface border-l-4 border-primary pl-md mb-md">Production Capacity</h3>
                    <div className="space-y-md">
                      <div>
                        <label className="block font-label-caps text-on-surface-variant mb-xs">Daily Case Limit</label>
                        <div className="relative">
                          <input
                            className="w-full pl-4 pr-12 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-surface-container-lowest font-data-tabular"
                            type="number"
                            defaultValue={45}
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-body-sm text-on-surface-variant">Units</span>
                        </div>
                      </div>
                      <div>
                        <label className="block font-label-caps text-on-surface-variant mb-xs">Technician Count</label>
                        <input
                          className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-surface-container-lowest font-data-tabular"
                          type="number"
                          defaultValue={12}
                        />
                      </div>
                    </div>
                  </section>
                  <section>
                    <h3 className="font-title-sm text-on-surface border-l-4 border-primary pl-md mb-md">Staffing</h3>
                    <div>
                      <label className="block font-label-caps text-on-surface-variant mb-xs">Facility Manager</label>
                      <div className="relative">
                        <select className="w-full appearance-none pl-4 pr-10 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-surface-container-lowest font-body-md">
                          <option>Select a Manager...</option>
                          <option selected>Dr. Aris Thorne</option>
                          <option>Sarah Jenkins</option>
                          <option>Marcus Vane</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">keyboard_arrow_down</span>
                      </div>
                      <p className="mt-2 font-body-sm text-on-surface-variant italic">Assigns oversight of all production at this site.</p>
                    </div>
                  </section>
                </div>

                {/* Section: Operational Hours */}
                <section>
                  <h3 className="font-title-sm text-on-surface border-l-4 border-primary pl-md mb-md">Operational Hours</h3>
                  <div className="bg-surface-container-low p-md rounded-lg space-y-lg">
                    <div className="flex flex-wrap gap-sm">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                        const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day)
                        return (
                          <button
                            key={day}
                            className={`px-md py-sm rounded-full font-label-caps text-[11px] shadow-sm ${
                              isWeekday
                                ? 'bg-primary text-white'
                                : 'bg-white text-on-surface-variant border border-outline-variant'
                            }`}
                          >
                            {day}
                          </button>
                        )
                      })}
                    </div>
                    <div className="grid grid-cols-2 gap-md">
                      <div>
                        <label className="block font-label-caps text-on-surface-variant mb-xs">Start Time</label>
                        <input
                          className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white font-data-tabular"
                          type="time"
                          defaultValue="08:00"
                        />
                      </div>
                      <div>
                        <label className="block font-label-caps text-on-surface-variant mb-xs">End Time</label>
                        <input
                          className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white font-data-tabular"
                          type="time"
                          defaultValue="18:00"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section: Automation Toggle */}
                <section className="flex items-center justify-between p-md bg-secondary-container/20 rounded-lg border border-secondary/20">
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <div>
                      <h4 className="font-body-md font-bold text-on-surface">Automated Case Routing</h4>
                      <p className="font-body-sm text-on-surface-variant">Enable AI to distribute cases based on current facility load.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input checked className="sr-only peer" type="checkbox" value="" />
                    <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </section>
              </div>
            </div>
          </form>
        </div>

        {/* Footer Actions */}
        <footer className="p-lg border-t border-outline-variant flex justify-between items-center bg-surface-container-low">
          <button
            className={`px-lg py-sm font-label-caps text-label-caps text-outline hover:text-on-surface transition-all flex items-center gap-sm ${
              currentStep === 1 ? 'invisible' : ''
            }`}
            onClick={() => changeStep(-1)}
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back
          </button>
          <div className="flex gap-md">
            <button
              className="px-lg py-sm font-label-caps text-label-caps text-outline border border-outline-variant rounded-lg hover:bg-surface-container transition-all"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-xl py-sm font-label-caps text-label-caps bg-primary text-white rounded-lg hover:opacity-90 shadow-sm transition-all flex items-center gap-sm"
              onClick={currentStep === totalSteps ? () => setShowSuccess(true) : () => changeStep(1)}
            >
              <span id="next-text">{currentStep === totalSteps ? 'Complete Onboarding' : currentStep === 2 ? 'Next Step: Operational' : 'Next Step'}</span>
              <span className="material-symbols-outlined text-sm" id="next-icon">
                {currentStep === totalSteps ? 'done_all' : 'arrow_forward'}
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
