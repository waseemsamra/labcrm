export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 bg-surface border-t border-outline-variant">
      <a href="/" className="flex flex-col items-center justify-center text-on-surface-variant">
        <span className="material-symbols-outlined">home</span>
        <span className="font-label-caps text-label-caps">Home</span>
      </a>
      <a href="/cases" className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
        <span className="font-label-caps text-label-caps">Cases</span>
      </a>
      <div className="flex flex-col items-center justify-center text-on-surface-variant">
        <span className="material-symbols-outlined">notifications</span>
        <span className="font-label-caps text-label-caps">Alerts</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant">
        <span className="material-symbols-outlined">menu</span>
        <span className="font-label-caps text-label-caps">Menu</span>
      </div>
    </nav>
  )
}
