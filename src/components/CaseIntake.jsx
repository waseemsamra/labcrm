import { useState } from 'react'

const TEETH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17]

export default function CaseIntake() {
  const [patientName, setPatientName] = useState('')
  const [caseNumber, setCaseNumber] = useState('')
  const [sex, setSex] = useState('Male')
  const [dob, setDob] = useState('')
  const [referringClinic, setReferringClinic] = useState('')
  const [restorationType, setRestorationType] = useState('')
  const [shade, setShade] = useState('')
  const [selectedTeeth, setSelectedTeeth] = useState([])
  const [material, setMaterial] = useState('Zirconia (High Translucency)')
  const [marginDesign, setMarginDesign] = useState('Knife Edge')
  const [occlusalClearance, setOcclusalClearance] = useState('Contact (0.0mm)')
  const [proximalContacts, setProximalContacts] = useState('Broad & Flat')
  const [serviceLevel, setServiceLevel] = useState('Standard')
  const [dueDate, setDueDate] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('Local Courier')
  const [rxInstructions, setRxInstructions] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isDragOver, setIsDragOver] = useState(false)

  const toggleTooth = (num) => {
    setSelectedTeeth((prev) => (prev.includes(num) ? prev.filter((t) => t !== num) : [...prev, num]))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      setUploadedFiles(files)
    }
  }

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      setUploadedFiles(files)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
      <aside className="h-screen w-64 flex-shrink-0 sticky left-0 top-0 bg-surface-container flex flex-col border-r border-outline-variant">
        <div className="p-md mb-lg">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                dentistry
              </span>
            </div>
            <div>
              <h1 className="font-title-sm text-title-sm font-bold text-primary">DentaFlow Lab</h1>
              <p className="text-[10px] uppercase tracking-wider text-outline">Dental CRM</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-sm space-y-unit">
          <div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-sm text-body-sm">Dashboard</span>
          </div>
          <div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-body-sm text-body-sm">Staff CRM</span>
          </div>
          <div className="flex items-center gap-md px-md py-sm text-primary font-bold bg-surface-container-highest rounded-lg cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              inbox
            </span>
            <span className="font-body-sm text-body-sm">Case Intake</span>
          </div>
          <div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">precision_manufacturing</span>
            <span className="font-body-sm text-body-sm">Production</span>
          </div>
          <div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">verified</span>
            <span className="font-body-sm text-body-sm">Quality Control</span>
          </div>
          <div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-body-sm text-body-sm">Inventory</span>
          </div>
        </nav>
        <div className="mt-auto p-sm border-t border-outline-variant">
          <div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">help</span>
            <span className="font-body-sm text-body-sm">Support</span>
          </div>
          <div className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all cursor-pointer rounded-lg">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-sm text-body-sm">Settings</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top App Bar */}
        <header className="w-full h-16 sticky top-0 z-50 bg-surface-container-lowest flex justify-between items-center px-md border-b border-outline-variant">
          <div className="flex items-center gap-md">
            <h2 className="font-headline-md text-headline-md font-bold text-primary">Case Intake Form</h2>
            <div className="hidden md:flex h-8 w-[1px] bg-outline-variant"></div>
            <p className="hidden md:block font-body-sm text-body-sm text-on-surface-variant">Create a new digital laboratory prescription</p>
          </div>
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
              notifications
            </button>
            <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors">
              settings
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQfRcN0Z2RNsAvJtrVYoPD-kMLRqlT0_QafGH44aScBuHGJTqRHF-O_KP8piRbhhCKWo6fQzYWwL3hp1RxdnfsS2ZXoVOx5fxLY-5yXSUEl3hWoaQOAmEltD_IziFPNWIUefv7x_y3ORiPnLuczfmrSwhy-0p56V9QNrX_OhEG4B7Uxr9aSMLXj9tpjWdINLQ8CyvilzziTKXCmFwXsIp1ALCLl-vEo1orOhTgvJYBAfgxbnhg5IvKi-W38GkqztJu8GdLgIHMSjF6"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Form Content */}
        <div className="flex-1 flex gap-gutter p-gutter max-w-container-max mx-auto w-full overflow-hidden">
          {/* Left: Form Sections */}
          <div className="flex-1 overflow-y-auto pr-sm custom-scrollbar space-y-lg">
            {/* Section 1: Patient & Practice Info */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
              <div className="flex items-center gap-sm mb-lg border-b border-surface-container-low pb-sm">
                <span className="material-symbols-outlined text-primary">person</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">Patient &amp; Practice Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">PATIENT FULL NAME</label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md transition-all"
                    placeholder="e.g. John Doe"
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">PATIENT ID / CASE #</label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md transition-all"
                    placeholder="REF-0042-2024"
                    type="text"
                    value={caseNumber}
                    onChange={(e) => setCaseNumber(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="space-y-unit">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">SEX</label>
                    <select
                      className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-unit">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">DATE OF BIRTH</label>
                    <input
                      className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">REFERRING CLINIC / DENTIST</label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface border border-outline-variant rounded-lg pl-xl pr-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                      placeholder="Search clinics..."
                      type="text"
                      value={referringClinic}
                      onChange={(e) => setReferringClinic(e.target.value)}
                    />
                    <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]">
                      search
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Case Fundamentals */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
              <div className="flex items-center gap-sm mb-lg border-b border-surface-container-low pb-sm">
                <span className="material-symbols-outlined text-primary">dentistry</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">Case Fundamentals</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
                <div className="lg:col-span-4 space-y-md">
                  <div className="space-y-unit">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">RESTORATION TYPE</label>
                    <div className="grid grid-cols-2 gap-sm">
                      {['Crown', 'Bridge', 'Implant', 'Veneer'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setRestorationType(type)}
                          className={`flex flex-col items-center justify-center p-md border rounded-lg hover:bg-surface-container transition-all group ${
                            restorationType === type
                              ? 'border-primary bg-primary-container text-white'
                              : 'border-outline-variant'
                          }`}
                        >
                          <span
                            className={`mb-unit ${restorationType === type ? 'text-white' : 'text-on-surface-variant group-hover:text-primary'}`}
                          >
                            {type === 'Crown' && 'clinical_notes'}
                            {type === 'Bridge' && 'link'}
                            {type === 'Implant' && 'bolt'}
                            {type === 'Veneer' && 'layers'}
                          </span>
                          <span className="text-body-sm font-body-sm">{type}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-unit">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">SHADE (VITA CLASSIC)</label>
                    <select
                      className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                      value={shade}
                      onChange={(e) => setShade(e.target.value)}
                    >
                      <option value="">Select Shade</option>
                      <option>A1</option>
                      <option>A2</option>
                      <option>A3</option>
                      <option>B1</option>
                      <option>B2</option>
                      <option>C1</option>
                      <option>OM1</option>
                    </select>
                  </div>
                </div>
                <div className="lg:col-span-8 bg-surface p-md rounded-lg border border-outline-variant">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-md">TOOTH SELECTION (UNIVERSAL SYSTEM)</label>
                  <div className="grid grid-cols-8 gap-1 tooth-grid">
                    {TEETH.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleTooth(t)}
                        id={`tooth-${t}`}
                        className={`h-10 w-full border rounded text-[11px] font-bold transition-all ${
                          selectedTeeth.includes(t)
                            ? 'bg-primary text-white border-primary'
                            : 'border-outline-variant bg-white hover:bg-surface-container-high'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <div className="mt-md flex justify-between text-[10px] text-outline uppercase tracking-widest font-bold">
                    <span>Right</span>
                    <span>Maxillary (Upper)</span>
                    <span>Left</span>
                  </div>
                  <div className="mt-xl flex justify-between text-[10px] text-outline uppercase tracking-widest font-bold">
                    <span>Right</span>
                    <span>Mandibular (Lower)</span>
                    <span>Left</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Materials & Design */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
              <div className="flex items-center gap-sm mb-lg border-b border-surface-container-low pb-sm">
                <span className="material-symbols-outlined text-primary">design_services</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">Materials &amp; Design Preferences</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">MATERIAL</label>
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                  >
                    <option>Zirconia (High Translucency)</option>
                    <option>E.max (Lithium Disilicate)</option>
                    <option>PFM (Porcelain Fused to Metal)</option>
                    <option>PMMA (Temporary)</option>
                  </select>
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">MARGIN DESIGN</label>
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                    value={marginDesign}
                    onChange={(e) => setMarginDesign(e.target.value)}
                  >
                    <option>Knife Edge</option>
                    <option>Chamfer (0.5mm)</option>
                    <option>Deep Chamfer</option>
                    <option>Shoulder</option>
                  </select>
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">OCCLUSAL CLEARANCE</label>
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                    value={occlusalClearance}
                    onChange={(e) => setOcclusalClearance(e.target.value)}
                  >
                    <option>Contact (0.0mm)</option>
                    <option>Light (0.1mm)</option>
                    <option>Medium (0.2mm)</option>
                    <option>Out of Occlusion</option>
                  </select>
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">PROXIMAL CONTACTS</label>
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                    value={proximalContacts}
                    onChange={(e) => setProximalContacts(e.target.value)}
                  >
                    <option>Broad &amp; Flat</option>
                    <option>Point Contact</option>
                    <option>Light Contact</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section 4: Production Logistics */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
              <div className="flex items-center gap-sm mb-lg border-b border-surface-container-low pb-sm">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">Production Logistics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">SERVICE LEVEL</label>
                  <div className="flex gap-sm">
                    {['Standard', 'Rush'].map((level) => (
                      <label key={level} className="flex-1 cursor-pointer">
                        <input
                          checked={serviceLevel === level}
                          className="hidden peer"
                          name="service"
                          onChange={() => setServiceLevel(level)}
                          type="radio"
                          value={level}
                        />
                        <div
                          className={`text-center p-sm border rounded-lg transition-all ${
                            serviceLevel === level
                              ? level === 'Rush'
                                ? 'bg-error text-white border-error'
                                : 'bg-primary-container text-white border-primary'
                              : 'border-outline-variant'
                          }`}
                        >
                          {level}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">DUE DATE</label>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">DELIVERY METHOD</label>
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md"
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  >
                    <option>Local Courier</option>
                    <option>UPS Express</option>
                    <option>Clinic Pickup</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section 5: Media & Instructions */}
            <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
              <div className="flex items-center gap-sm mb-lg border-b border-surface-container-low pb-sm">
                <span className="material-symbols-outlined text-primary">upload_file</span>
                <h3 className="font-title-sm text-title-sm text-on-surface">Media &amp; Instructions</h3>
              </div>
              <div className="space-y-lg">
                <div
                  className={`drop-zone border-2 border-dashed rounded-xl p-xl text-center transition-all cursor-pointer hover:border-primary hover:bg-surface-container-low ${
                    isDragOver ? 'border-primary bg-surface-container-low' : 'border-outline-variant'
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setIsDragOver(true)
                  }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-input').click()}
                >
                  <span className="material-symbols-outlined text-outline text-[48px] mb-md">cloud_upload</span>
                  <p className="font-title-sm text-title-sm text-on-surface">Drag &amp; Drop Digital Scans (STL, PLY)</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Or click to browse from your device</p>
                  <input
                    className="hidden"
                    id="file-input"
                    multiple
                    type="file"
                    onChange={handleFileInput}
                  />
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-md">
                    <p className="font-body-sm text-body-sm text-on-surface">
                      {uploadedFiles.length} file(s) selected:{' '}
                      {uploadedFiles.map((f) => f.name).join(', ')}
                    </p>
                  </div>
                )}
                <div className="space-y-unit">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">RX INSTRUCTIONS &amp; SPECIAL NOTES</label>
                  <textarea
                    className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm focus:border-primary focus:ring-0 text-body-md font-body-md transition-all"
                    placeholder="Enter detailed clinical instructions here... (e.g. Characterization details, specific translucency requirements, patient history)"
                    rows="4"
                    value={rxInstructions}
                    onChange={(e) => setRxInstructions(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </section>

            <div className="flex justify-end gap-md pb-xl">
              <button className="px-lg py-sm border border-outline-variant rounded-lg font-label-caps text-label-caps text-on-surface hover:bg-surface-container-low transition-all">
                SAVE AS DRAFT
              </button>
              <button className="px-xl py-sm bg-primary text-white rounded-lg font-label-caps text-label-caps shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">
                SUBMIT CASE
              </button>
            </div>
          </div>

          {/* Right: Case Summary Sidebar */}
          <aside className="w-80 flex-shrink-0 hidden xl:flex flex-col gap-md">
            <div className="bg-surface-container-high border border-outline-variant rounded-xl p-lg sticky top-lg">
              <h4 className="font-label-caps text-label-caps text-primary mb-md">CASE SUMMARY</h4>
              <div className="space-y-md">
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline uppercase tracking-wider">Patient</span>
                  <span className="font-body-md text-body-md font-bold text-on-surface">{patientName || 'Not Entered'}</span>
                </div>
                <div className="h-[1px] bg-outline-variant"></div>
                <div className="grid grid-cols-2 gap-sm">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline uppercase tracking-wider">Restoration</span>
                    <span className="font-body-md text-body-md text-on-surface">{restorationType || '-'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline uppercase tracking-wider">Shade</span>
                    <span className="font-body-md text-body-md text-on-surface">{shade || '-'}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline uppercase tracking-wider">Teeth Selected</span>
                  <div className="flex flex-wrap gap-xs mt-xs">
                    {selectedTeeth.length === 0 ? (
                      <span className="text-body-sm font-body-sm text-outline italic">None</span>
                    ) : (
                      selectedTeeth
                        .sort((a, b) => a - b)
                        .map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded">
                            #{t}
                          </span>
                        ))
                    )}
                  </div>
                </div>
                <div className="h-[1px] bg-outline-variant"></div>
                <div className="grid grid-cols-2 gap-sm">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline uppercase tracking-wider">Priority</span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold w-fit ${
                        serviceLevel === 'Rush'
                          ? 'bg-error-container text-on-error-container'
                          : 'bg-surface-container text-on-surface-variant'
                      }`}
                    >
                      {serviceLevel.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline uppercase tracking-wider">Due Date</span>
                    <span className="font-body-md text-body-md text-on-surface">{dueDate || '-'}</span>
                  </div>
                </div>
                <div className="mt-lg pt-md">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-md text-center">
                    <p className="text-[10px] text-on-surface-variant font-medium">Estimated Lab Fees</p>
                    <p className="text-headline-md font-headline-md font-bold text-primary">$0.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
              <div className="flex items-center gap-sm text-primary mb-sm">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span className="font-label-caps text-[10px]">AI CHECKLIST</span>
              </div>
              <ul className="space-y-xs">
                <li className="flex items-center gap-xs text-[11px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-error">cancel</span>
                  Patient Name required
                </li>
                <li className="flex items-center gap-xs text-[11px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-error">cancel</span>
                  Select at least one tooth
                </li>
                <li className="flex items-center gap-xs text-[11px] text-on-surface-variant opacity-50">
                  <span className="material-symbols-outlined text-[14px]">circle</span>
                  Verify margin design for Zirconia
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
