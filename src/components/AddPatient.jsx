export default function AddPatient() {
  return (
    <main className="flex-grow min-h-screen">
      {/* Main Content Canvas */}
      <div className="flex-grow p-lg">
        {/* Page Header & Breadcrumbs */}
        <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <nav className="flex items-center gap-xs text-on-surface-variant mb-xs">
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Patients</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Add New Patient</span>
            </nav>
            <h1 className="font-display-lg text-display-lg text-on-surface">Add New Patient</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Register a new patient into the DentalPrecision ecosystem to begin case management.</p>
          </div>
          <div className="flex gap-md">
            <button className="px-lg py-md rounded-lg border border-outline text-on-surface font-title-sm text-title-sm hover:bg-surface-container-low transition-colors duration-200">
              Cancel
            </button>
            <button className="px-xl py-md rounded-lg bg-primary text-on-primary font-title-sm text-title-sm hover:opacity-90 transition-opacity shadow-sm">
              Save Patient
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Left Column: Patient Form */}
          <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-xl">
            <form className="space-y-xl">
              {/* Section Title */}
              <div className="border-b border-outline-variant pb-md mb-lg">
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">person_add</span>
                  Primary Information
                </h2>
              </div>

              {/* Row 1: Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="first-name">First Name</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="first-name" placeholder="e.g. Jonathan" type="text" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="last-name">Last Name</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="last-name" placeholder="e.g. Miller" type="text" />
                </div>
              </div>

              {/* Row 2: ID and DOB */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="patient-id">Patient ID (MRN)</label>
                  <div className="relative">
                    <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="patient-id" placeholder="DP-XXXX-XXXX" type="text" />
                    <span className="absolute right-md top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">fingerprint</span>
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="dob">Date of Birth</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="dob" type="date" />
                </div>
              </div>

              {/* Row 3: Gender and Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="gender">Gender</label>
                  <select className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0 appearance-none" id="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">Email Address (Optional)</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="email" placeholder="patient@example.com" type="email" />
                </div>
              </div>

              {/* Row 4: Phone and Insurance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="phone">Primary Phone</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="phone" placeholder="(555) 000-0000" type="tel" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="insurance">Insurance Provider</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="insurance" placeholder="e.g. Delta Dental" type="text" />
                </div>
              </div>

              {/* Row 5: Address and Emergency Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="address">Address</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="address" placeholder="123 Main St, City, State ZIP" type="text" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="emergency">Emergency Contact</label>
                  <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="emergency" placeholder="Name - (555) 000-0000" type="text" />
                </div>
              </div>

              {/* Section: Clinical Preferences */}
              <div className="border-b border-outline-variant pb-md mb-lg pt-xl">
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">medical_information</span>
                  Clinical Preferences &amp; Notes
                </h2>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="clinical-notes">Clinical Preferences</label>
                <textarea className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0 resize-none" id="clinical-notes" placeholder="Describe any specific lab preferences, allergy warnings, or anatomical considerations for this patient..." rows={6}></textarea>
                <p className="text-on-surface-variant font-body-sm text-[12px] mt-1">Information entered here will be visible to lab technicians on all cases associated with this patient.</p>
              </div>

              {/* Actions for Mobile */}
              <div className="flex md:hidden flex-col gap-md pt-lg">
                <button className="w-full py-md rounded-lg bg-primary text-on-primary font-title-sm text-title-sm">Save Patient</button>
                <button className="w-full py-md rounded-lg border border-outline text-on-surface font-title-sm text-title-sm">Cancel</button>
              </div>
            </form>
          </div>

          {/* Right Column: Sidebar / Context */}
          <div className="lg:col-span-4 space-y-lg">
            {/* Quick Help Card */}
            <div className="bg-surface border border-outline-variant rounded-xl p-lg">
              <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-on-surface-variant">info</span>
                Data Privacy Notice
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                All patient data is encrypted in transit and at rest. Please ensure the Patient ID (MRN) matches your local EHR system to maintain consistency across records.
              </p>
              <div className="mt-lg pt-md border-t border-outline-variant">
                <a className="text-primary font-label-caps text-label-caps flex items-center gap-xs hover:underline uppercase tracking-tight" href="#">
                  Review HIPAA Compliance
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Recent Activity or Guide */}
            <div className="bg-primary-container/10 border border-primary/20 rounded-xl p-lg">
              <div className="flex gap-md">
                <span className="material-symbols-outlined text-primary text-display-lg">verified_user</span>
                <div>
                  <h3 className="font-title-sm text-title-sm text-on-surface mb-sm">Verification</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Once saved, this patient profile can be used to immediately initiate high-precision 3D scans and dental lab orders.</p>
                </div>
              </div>
            </div>

            {/* Case Progress Tracker Component */}
            <div className="bg-surface border border-outline-variant rounded-xl p-lg">
              <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-lg">Next Steps After Creation</h3>
              <div className="space-y-lg">
                <div className="flex items-start gap-md">
                  <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-[12px]">1</div>
                  <div className="flex-1 border-b border-outline-variant pb-md">
                    <p className="font-body-md text-body-md text-on-surface font-semibold">Initiate Scan</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Upload intraoral scans directly to the portal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md opacity-60">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-[12px]">2</div>
                  <div className="flex-1 border-b border-outline-variant pb-md">
                    <p className="font-body-md text-body-md text-on-surface">Lab Order</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Select dental appliances or restorations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md opacity-40">
                  <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-[12px]">3</div>
                  <div className="flex-1">
                    <p className="font-body-md text-body-md text-on-surface">Review &amp; Approve</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Sign off on lab technician designs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
