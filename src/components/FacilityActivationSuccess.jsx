import { useState } from 'react'

export default function FacilityActivationSuccess({ isOpen, onClose }) {
  const [isAnimating, setIsAnimating] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-on-background/60 backdrop-blur-sm z-[60] flex items-center justify-center p-md">
      <div className="w-full max-w-4xl bg-surface-container-lowest shadow-sm rounded-xl overflow-hidden border border-outline-variant flex flex-col">
        {/* Success Hero Section */}
        <section className="p-xl text-center flex flex-col items-center border-b border-outline-variant">
          <div className="w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-md">
            <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Facility Successfully Activated</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            The <span className="font-semibold text-primary">Zurich Central Precision Lab</span> is now live and integrated into the Global Logistics Network.
          </p>
          <div className="mt-lg flex flex-wrap justify-center gap-md">
            <div className="bg-surface-container-low px-md py-sm rounded border border-outline-variant flex items-center gap-sm">
              <span className="font-label-caps text-label-caps text-outline">FACILITY ID:</span>
              <span className="font-data-tabular text-data-tabular text-on-surface font-bold tracking-wider">ZUR-CH-8801</span>
            </div>
            <div className="bg-surface-container-low px-md py-sm rounded border border-outline-variant flex items-center gap-sm">
              <span className="font-label-caps text-label-caps text-outline">ACTIVATED:</span>
              <span className="font-data-tabular text-data-tabular text-on-surface">OCT 24, 2023 • 14:32 GMT+1</span>
            </div>
          </div>
        </section>

        {/* Main Content Area: Configuration & Actions */}
        <section className="p-lg md:p-xl grid grid-cols-1 md:grid-cols-12 gap-lg">
          {/* Left Column: Configuration Summary */}
          <div className="md:col-span-7 space-y-md">
            <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-sm">Configuration Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              {/* Geographic Card */}
              <div className="bg-white border border-outline-variant p-md rounded-lg flex flex-col gap-xs hover:border-primary transition-colors">
                <div className="flex items-center gap-sm text-primary mb-xs">
                  <span className="material-symbols-outlined text-title-sm">location_on</span>
                  <span className="font-title-sm text-title-sm">Geographic</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface font-medium">Zurich, Switzerland</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Assigned to: Singapore Regional Hub</p>
              </div>
              {/* Staffing Card */}
              <div className="bg-white border border-outline-variant p-md rounded-lg flex flex-col gap-xs hover:border-primary transition-colors">
                <div className="flex items-center gap-sm text-primary mb-xs">
                  <span className="material-symbols-outlined text-title-sm">badge</span>
                  <span className="font-title-sm text-title-sm">Staffing</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface font-medium">Dr. Aris Thorne</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">General Manager</p>
              </div>
            </div>
            {/* Operational Card */}
            <div className="bg-white border border-outline-variant p-md rounded-lg">
              <div className="flex items-center gap-sm text-primary mb-md">
                <span className="material-symbols-outlined text-title-sm">settings_input_component</span>
                <span className="font-title-sm text-title-sm">Operational Parameters</span>
              </div>
              <div className="grid grid-cols-2 gap-lg">
                <div>
                  <span className="font-label-caps text-label-caps text-outline">Daily Limit</span>
                  <p className="font-headline-md text-headline-md text-on-surface">45 Units</p>
                </div>
                <div className="space-y-xs">
                  <span className="font-label-caps text-label-caps text-outline">Specialties</span>
                  <div className="flex flex-wrap gap-xs">
                    <span className="bg-surface-container px-xs py-[2px] rounded text-[11px] font-bold text-primary border border-primary-container">CROWN & BRIDGE</span>
                    <span className="bg-surface-container px-xs py-[2px] rounded text-[11px] font-bold text-primary border border-primary-container">IMPLANTS</span>
                    <span className="bg-surface-container px-xs py-[2px] rounded text-[11px] font-bold text-primary border border-primary-container">DIGITAL DESIGN</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Visualization */}
            <div className="h-32 w-full rounded-lg overflow-hidden relative border border-outline-variant">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADiLxXUs-3qBFDrxY0putzz5W45CHwy-F3n5va1Mw4hkEiRnkIH1x9kOydiGg-2XafDxsIu8apnJwSQRz2JiprXkD8FJqmvKT4_uByGyRHCt7ER0W62uChHYmUgUsU4pZglDyz9mK89d6ph5lvAEhPxM7U-EC2qT1XY91cGZxFvYOH9yRl1bMi1EfqeDeCEpYCUE8NRf_vdjXflSBIjka19aPpzoWVwOx98mTrOP1Php7XgA5qcDKhjTfreC6JDzJuTObrH3xxoWVG')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-md">
                <p className="text-white font-body-sm text-xs opacity-90 italic">Zurich Central Facility: Sector 4 Imaging Wing activated.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Actions */}
          <div className="md:col-span-5 space-y-md">
            <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-sm">Immediate Next Steps</h3>
            <div className="space-y-sm">
              <button className="w-full text-left bg-white border border-outline-variant p-md rounded-lg flex items-start gap-md group hover:bg-primary-container/5 transition-colors">
                <div className="mt-xs p-sm bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="font-title-sm text-title-sm text-on-surface">Configure Materials</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Set up unit pricing and inventory stock lists.</p>
                </div>
              </button>
              <button className="w-full text-left bg-white border border-outline-variant p-md rounded-lg flex items-start gap-md group hover:bg-surface-container-low transition-colors">
                <div className="mt-xs p-sm bg-tertiary/10 text-tertiary rounded-full group-hover:bg-tertiary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">group_add</span>
                </div>
                <div>
                  <p className="font-title-sm text-title-sm text-on-surface">Invite Staff</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Grant access to technicians and admins.</p>
                </div>
              </button>
              <button className="w-full text-left bg-white border border-outline-variant p-md rounded-lg flex items-start gap-md group hover:bg-surface-container-low transition-colors">
                <div className="mt-xs p-sm bg-outline-variant/20 text-outline rounded-full group-hover:bg-outline group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <p className="font-title-sm text-title-sm text-on-surface">Onboarding PDF</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Download activation certificates and logs.</p>
                </div>
              </button>
            </div>
            <div className="p-md bg-secondary-container/20 rounded-lg border border-secondary-container/40 flex gap-sm items-start">
              <span className="material-symbols-outlined text-secondary text-title-sm">info</span>
              <p className="font-body-sm text-xs text-on-secondary-container">The laboratory is currently in 'Training Mode'. All live orders will be queued until Final QC is confirmed.</p>
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <footer className="p-lg bg-surface-container-low border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-md">
          <button
            className="font-body-md text-primary font-semibold hover:underline flex items-center gap-xs"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-body-md">add_circle</span>
            Add Another Facility
          </button>
          <div className="flex items-center gap-md w-full sm:w-auto">
            <button
              className="flex-1 sm:flex-none px-xl py-md bg-primary text-on-primary rounded-full font-title-sm hover:bg-primary-container transition-all active:scale-[0.98]"
              onClick={() => {
                setIsAnimating(true)
                setTimeout(() => {
                  onClose()
                  setIsAnimating(false)
                }, 800)
              }}
            >
              {isAnimating ? 'Redirecting...' : 'Go to Facility Dashboard'}
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
