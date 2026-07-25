export default function ProductionOverview() {
  const stats = [
    { label: 'In Design', cases: '24 Cases', width: '45%', color: 'bg-primary' },
    { label: 'Processing (Milling/Printing)', cases: '18 Cases', width: '32%', color: 'bg-secondary' },
    { label: 'Final QC', cases: '9 Cases', width: '18%', color: 'bg-tertiary' },
  ]

  return (
    <div className="bg-surface rounded-xl border border-outline-variant p-md">
      <h3 className="font-title-sm text-title-sm mb-md flex items-center">
        <span className="material-symbols-outlined mr-sm">monitoring</span>
        Production Overview
      </h3>
      <div className="space-y-md">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex justify-between items-center mb-xs">
              <span className="font-body-sm text-on-surface-variant">{stat.label}</span>
              <span className="font-body-sm font-bold">{stat.cases}</span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-2">
              <div className={`${stat.color} h-2 rounded-full`} style={{ width: stat.width }}></div>
            </div>
          </div>
        ))}
        <div className="pt-sm border-t border-outline-variant">
          <div className="grid grid-cols-2 gap-sm">
            <div className="bg-surface-container-low p-sm rounded border border-outline-variant">
              <p className="font-label-caps text-on-surface-variant text-[10px] uppercase">Daily Throughput</p>
              <p className="text-xl font-bold text-on-surface">112%</p>
              <p className="text-[10px] text-green-600 font-bold">+4% vs target</p>
            </div>
            <div className="bg-surface-container-low p-sm rounded border border-outline-variant">
              <p className="font-label-caps text-on-surface-variant text-[10px] uppercase">QC Error Rate</p>
              <p className="text-xl font-bold text-on-surface">0.8%</p>
              <p className="text-[10px] text-green-600 font-bold">-0.2% vs avg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
