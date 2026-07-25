export default function StatsGrid() {
  return (
    <div className="md:col-span-4 grid grid-cols-2 gap-gutter h-full">
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-center items-center text-center">
        <span className="text-on-surface-variant font-label-caps mb-1">In Production</span>
        <span className="text-display-lg font-bold text-primary">12</span>
      </div>
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-center items-center text-center">
        <span className="text-on-surface-variant font-label-caps mb-1">Due Today</span>
        <span className="text-display-lg font-bold text-secondary">2</span>
      </div>
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-center items-center text-center">
        <span className="text-on-surface-variant font-label-caps mb-1">Messages</span>
        <span className="text-display-lg font-bold text-on-tertiary-container">5</span>
      </div>
      <div className="bg-surface border border-outline-variant rounded-xl p-md flex flex-col justify-center items-center text-center">
        <span className="text-on-surface-variant font-label-caps mb-1">Completed</span>
        <span className="text-display-lg font-bold text-outline">184</span>
      </div>
    </div>
  )
}
