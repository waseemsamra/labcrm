export default function ClientTopNav() {
  return (
    <header className="bg-surface border-b border-outline-variant sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center w-full px-lg h-16 max-w-container-max mx-auto">
        <div className="flex items-center gap-8">
          <span className="font-title-sm text-title-sm font-extrabold text-primary tracking-tight">DentalPro Portal</span>
          <nav className="hidden md:flex gap-6 items-center font-body-sm text-body-sm">
            <a className="text-primary border-b-2 border-primary pb-2 transition-opacity active:opacity-80" href="/client">Dashboard</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="/cases">Cases</a>
            <a className="text-primary border-b-2 border-primary pb-2 transition-opacity active:opacity-80" href="/approvals">Approvals</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Invoices</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container rounded-full px-3 py-1.5 border border-outline-variant">
            <span className="material-symbols-outlined text-outline mr-2" style={{ fontSize: '18px' }}>search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-body-sm p-0 w-32"
              placeholder="Search case ID..."
              type="text"
            />
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-high">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-outline-variant">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="/images/doctor-profile.jpg"
                alt="Dr. Aris Thorne"
              />
            </div>
            <span className="hidden sm:block font-body-sm font-medium">Dr. Aris Thorne</span>
          </div>
        </div>
      </div>
    </header>
  )
}
