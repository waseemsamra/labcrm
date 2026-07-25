export default function MediaAssets() {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg overflow-hidden">
      <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-md">
        <span className="material-symbols-outlined text-primary">add_a_photo</span>
        <h3 className="font-title-sm text-title-sm text-on-surface">Media Assets</h3>
      </div>
      <div className="flex flex-col gap-md">
        <div className="border-2 border-dashed border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center text-center gap-sm bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
          <span className="material-symbols-outlined text-outline text-[40px] group-hover:text-primary transition-colors">cloud_upload</span>
          <div className="space-y-1">
            <p className="font-bold text-on-surface">Click to upload or drag & drop</p>
            <p className="text-body-sm text-on-surface-variant">Pre-treatment photos, scans, or pickup forms</p>
          </div>
          <p className="text-label-caps text-on-surface-variant mt-2 uppercase">Max 50MB per file</p>
        </div>
        <div className="space-y-sm">
          <div className="flex items-center gap-md p-sm bg-surface-container-high rounded-lg border border-outline-variant">
            <div className="w-12 h-12 rounded bg-surface border border-outline-variant flex items-center justify-center overflow-hidden">
              <img className="object-cover w-full h-full" src="/images/xray.jpg" alt="Dental X-ray uploaded" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-body-sm font-bold truncate">patient_scan_001.stl</p>
              <p className="text-[10px] text-on-surface-variant">24.5 MB • Digital Scan</p>
            </div>
            <button className="text-error hover:bg-error-container p-1 rounded-full transition-colors">
              <span className="material-symbols-outlined text-[20px]">delete</span>
            </button>
          </div>
          <div className="flex items-center gap-md p-sm bg-surface-container-high rounded-lg border border-outline-variant opacity-60">
            <div className="w-12 h-12 rounded bg-surface border border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-outline">picture_as_pdf</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-body-sm font-bold truncate">pickup_form_v2.pdf</p>
              <p className="text-[10px] text-on-surface-variant">1.2 MB • Lab Document</p>
            </div>
            <button className="text-on-surface-variant hover:bg-surface-container-highest p-1 rounded-full">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
