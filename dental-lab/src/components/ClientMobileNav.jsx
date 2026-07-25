export default function ClientMobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 bg-surface border-t border-outline-variant shadow-lg">
      <button className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full px-4 py-1 active:scale-95 transition-all">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined">medical_services</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Cases</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors relative">
        <span className="material-symbols-outlined">notifications</span>
        <span className="absolute top-0 right-1 w-2 h-2 bg-error rounded-full"></span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Alerts</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
        <span className="material-symbols-outlined">menu</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Menu</span>
      </button>
    </nav>
  )
}
