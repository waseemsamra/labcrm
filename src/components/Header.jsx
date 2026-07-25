export default function Header() {
  return (
    <header className="flex justify-between items-center mb-xl">
      <div>
        <h2 className="font-display-lg text-display-lg text-on-surface">System Overview</h2>
        <p className="font-body-md text-on-surface-variant">Real-time status of lab production and intake.</p>
      </div>
      <div className="flex items-center space-x-md">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
          <input
            className="pl-xl pr-md py-sm border border-outline-variant bg-surface rounded-lg text-body-sm w-64 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            placeholder="Search case ID or patient..."
            type="text"
          />
        </div>
        <button className="relative p-sm rounded-full hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <img
          className="w-10 h-10 rounded-full object-cover border border-outline-variant"
          src="/images/profile.jpg"
          alt="A professional headshot of a lab technician wearing clinical scrubs and a name badge"
        />
      </div>
    </header>
  )
}
