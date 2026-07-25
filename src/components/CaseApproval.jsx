import { useState, useRef, useEffect } from 'react'

export default function CaseApproval() {
  const [splitWidth, setSplitWidth] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSplitWidth(percentage)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('mouseup', handleMouseUp)
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isDragging])

  return (
    <main className="flex-grow flex flex-col md:flex-row w-full">
      <div className="flex-grow p-gutter flex flex-col gap-md">
        <CaseHeader />
        <CaseVisualizer 
          containerRef={containerRef}
          splitWidth={splitWidth}
          onHandleMouseDown={handleMouseDown}
        />
        <MediaGallery />
      </div>
      <RxTimelineSidebar />
    </main>
  )
}

function CaseHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-sm">
      <div>
        <div className="flex items-center gap-sm mb-xs">
          <span className="text-label-caps font-label-caps bg-secondary-container text-on-secondary-container px-sm py-xs rounded-sm">PENDING APPROVAL</span>
          <span className="text-on-surface-variant font-data-tabular">Case #D-99824</span>
        </div>
        <h1 className="font-headline-md text-headline-md text-on-surface">Patient: Elena Rodriguez</h1>
      </div>
      <div className="flex gap-sm">
        <button className="flex items-center gap-xs px-md py-sm border border-error text-error hover:bg-error-container/20 transition-all font-body-sm text-body-sm rounded-lg active:scale-95">
          <span className="material-symbols-outlined">edit_note</span>
          Request Change
        </button>
        <button className="flex items-center gap-xs px-md py-sm bg-primary text-on-primary hover:bg-primary-container transition-all font-body-sm text-body-sm rounded-lg active:scale-95 shadow-sm">
          <span className="material-symbols-outlined">check_circle</span>
          Approve Design
        </button>
      </div>
    </div>
  )
}

function CaseVisualizer({ containerRef, splitWidth, onHandleMouseDown }) {
  const [viewMode, setViewMode] = useState('3D RENDER')

  return (
    <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden flex flex-col min-h-[600px] shadow-sm">
      <div className="p-sm bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center">
        <div className="flex gap-sm">
          {['3D RENDER', 'BISQUE PHOTO', 'X-RAY OVERLAY'].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-sm py-xs rounded-sm font-label-caps text-label-caps border transition-colors ${
                viewMode === mode
                  ? 'bg-surface-container-high text-primary border-primary/20'
                  : 'hover:bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        <div className="flex gap-sm">
          <button className="p-xs hover:bg-surface-container-high rounded-sm text-on-surface-variant" title="Zoom In">
            <span className="material-symbols-outlined">zoom_in</span>
          </button>
          <button className="p-xs hover:bg-surface-container-high rounded-sm text-on-surface-variant" title="Zoom Out">
            <span className="material-symbols-outlined">zoom_out</span>
          </button>
          <button className="p-xs hover:bg-surface-container-high rounded-sm text-on-surface-variant" title="Toggle Split View">
            <span className="material-symbols-outlined">compare</span>
          </button>
          <button className="p-xs hover:bg-surface-container-high rounded-sm text-on-surface-variant" title="Fullscreen">
            <span className="material-symbols-outlined">fullscreen</span>
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative flex-grow bg-slate-900 clinical-zoom-area overflow-hidden group"
        onMouseMove={(e) => {
          if (isDragging) {
            const rect = containerRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
            // This will be handled by parent state
          }
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/images/approval-3d-render.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 h-full bg-center bg-no-repeat bg-contain border-r-2 border-white/50 overflow-hidden"
          style={{
            width: `${splitWidth}%`,
            backgroundImage: "url('/images/approval-scan.jpg')",
          }}
        ></div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20"
          style={{ left: `${splitWidth}%` }}
          onMouseDown={onHandleMouseDown}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-primary border border-outline-variant">
            <span className="material-symbols-outlined !text-xl">unfold_more</span>
          </div>
        </div>
        <div className="absolute bottom-md left-md bg-black/60 text-white px-sm py-xs rounded text-label-caps font-label-caps pointer-events-none">Original Scan</div>
        <div className="absolute bottom-md right-md bg-black/60 text-white px-sm py-xs rounded text-label-caps font-label-caps pointer-events-none">Proposed Design</div>
      </div>
      <MediaGallery />
    </div>
  )
}

function MediaGallery() {
  const thumbs = [
    { src: '/images/approval-thumb1.jpg', active: true },
    { src: '/images/approval-thumb2.jpg', active: false },
    { src: '/images/approval-thumb3.jpg', active: false },
    { src: '/images/approval-thumb4.jpg', active: false },
  ]

  return (
    <div className="p-md flex gap-md overflow-x-auto bg-surface-container-low border-t border-outline-variant">
      {thumbs.map((thumb, idx) => (
        <div
          key={idx}
          className={`min-w-[120px] h-20 rounded cursor-pointer transition-opacity ${
            thumb.active ? 'border-2 border-primary' : 'border border-outline-variant opacity-70 hover:opacity-100'
          } bg-cover bg-center`}
          style={{ backgroundImage: `url('${thumb.src}')` }}
        ></div>
      ))}
    </div>
  )
}

function RxTimelineSidebar() {
  return (
    <aside className="w-full md:w-80 bg-surface-container-low border-l border-outline-variant p-gutter flex flex-col gap-lg overflow-y-auto max-h-screen">
      <section>
        <div className="flex items-center gap-xs mb-md">
          <span className="material-symbols-outlined text-primary">maps_ugc</span>
          <h2 className="font-title-sm text-title-sm text-on-surface">RX Instructions</h2>
        </div>
        <div className="bg-surface border border-outline-variant p-md rounded-lg flex flex-col gap-sm">
          <div>
            <span className="text-label-caps font-label-caps text-on-surface-variant block mb-xs">SHADE</span>
            <p className="font-body-md text-body-md text-on-surface font-bold">A2 (Cervical) to A1 (Incisal)</p>
          </div>
          <div>
            <span className="text-label-caps font-label-caps text-on-surface-variant block mb-xs">MATERIAL</span>
            <p className="font-body-md text-body-md text-on-surface font-bold">E-Max ZirCAD Prime</p>
          </div>
          <div>
            <span className="text-label-caps font-label-caps text-on-surface-variant block mb-xs">TRANSLUCENCY</span>
            <p className="font-body-md text-body-md text-on-surface">Multi-layered High Translucency</p>
          </div>
          <div className="border-t border-outline-variant pt-sm mt-xs">
            <span className="text-label-caps font-label-caps text-on-surface-variant block mb-xs">LAB NOTES</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic">"Ensure heavy distal contact on #8. Patient requested slightly rounded incisal edges for a more natural look."</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center gap-xs mb-md">
          <span className="material-symbols-outlined text-primary">history</span>
          <h2 className="font-title-sm text-title-sm text-on-surface">Timeline</h2>
        </div>
        <div className="flex flex-col gap-lg ml-xs border-l-2 border-outline-variant pl-lg relative">
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
            <span className="text-label-caps font-label-caps text-primary">TODAY</span>
            <h3 className="font-body-sm text-body-sm font-bold text-on-surface">Design Ready for Review</h3>
            <p className="text-xs text-on-surface-variant">Lab technician uploaded final 3D renders for doctor approval.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-secondary-fixed-dim ring-4 ring-background"></div>
            <span className="text-label-caps font-label-caps text-on-surface-variant">OCT 24, 09:15 AM</span>
            <h3 className="font-body-sm text-body-sm text-on-surface">Scan Data Processed</h3>
            <p className="text-xs text-on-surface-variant">Intraoral scans validated and imported into CAD software.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-outline ring-4 ring-background"></div>
            <span className="text-label-caps font-label-caps text-on-surface-variant">OCT 23, 02:30 PM</span>
            <h3 className="font-body-sm text-body-sm text-on-surface">Case Intake</h3>
            <p className="text-xs text-on-surface-variant">Order submitted by Dr. Sarah Miller. Digital RX confirmed.</p>
          </div>
        </div>
      </section>
      <section className="mt-auto pt-lg border-t border-outline-variant">
        <a className="flex items-center justify-between p-sm hover:bg-surface transition-colors rounded-lg group" href="#">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">chat_bubble</span>
            <span className="text-body-sm font-body-sm text-on-surface">Message Lab</span>
          </div>
          <span className="material-symbols-outlined text-outline text-sm">chevron_right</span>
        </a>
        <a className="flex items-center justify-between p-sm hover:bg-surface transition-colors rounded-lg group mt-sm" href="#">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">download</span>
            <span className="text-body-sm font-body-sm text-on-surface">Download STL</span>
          </div>
          <span className="material-symbols-outlined text-outline text-sm">chevron_right</span>
        </a>
      </section>
    </aside>
  )
}
