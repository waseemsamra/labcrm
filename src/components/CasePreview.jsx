export default function CasePreview() {
  return (
    <div className="bg-inverse-surface text-on-primary p-md rounded-xl relative overflow-hidden h-64">
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/scan-bg.jpg')" }}
      ></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between">
          <span className="bg-primary px-sm py-xs rounded text-[10px] font-bold uppercase">Active Render</span>
          <span className="material-symbols-outlined text-surface-variant cursor-pointer">fullscreen</span>
        </div>
        <div className="mt-auto">
          <h4 className="font-title-sm text-surface-bright">#LAB-5012 Bridge Design</h4>
          <p className="text-xs text-outline-variant">Rendering high-resolution 3D scan data...</p>
          <div className="flex items-center mt-sm space-x-md">
            <button className="bg-primary-fixed text-on-primary-fixed text-xs px-md py-sm rounded-lg font-bold">
              Open Editor
            </button>
            <span className="text-[10px] text-surface-variant flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-xs"></span> Live Session
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
