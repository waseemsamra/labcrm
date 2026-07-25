export default function DigitalAssetsUpload() {
  return (
    <div className="bg-primary text-on-primary rounded-xl p-lg relative overflow-hidden shadow-lg shadow-primary-container/20">
      <div className="relative z-10">
        <h3 className="font-title-sm text-title-sm mb-2">Upload Digital Impression</h3>
        <p className="text-body-sm opacity-90 mb-6">Send your iTero or 3Shape scans directly for faster turnaround.</p>
        <button className="bg-on-primary text-primary px-lg py-2.5 rounded-full font-semibold hover:bg-primary-fixed transition-colors w-full flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">cloud_upload</span>
          Select Files
        </button>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
        <span className="material-symbols-outlined" style={{ fontSize: '120px' }}>scanner</span>
      </div>
    </div>
  )
}
