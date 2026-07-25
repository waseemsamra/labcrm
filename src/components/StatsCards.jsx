export default function StatsCards() {
  const cards = [
    { icon: 'calendar_month', color: 'text-primary', bg: 'bg-primary/10', label: 'Shipments Today', value: '42', sub: 'cases' },
    { icon: 'science', color: 'text-secondary', bg: 'bg-secondary/10', label: 'Material Low', value: '3', sub: 'stocks', valueColor: 'text-error' },
    { icon: 'person_pin', color: 'text-tertiary', bg: 'bg-tertiary/10', label: 'Active Techs', value: '12', sub: 'on shift' },
    { icon: 'local_shipping', color: 'text-primary', bg: 'bg-primary/10', label: 'Incoming Scans', value: '18', sub: 'queued' },
  ]

  return (
    <section className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-surface border border-outline-variant p-md rounded-xl hover:border-primary transition-colors cursor-pointer group"
        >
          <div className="flex items-center mb-sm">
            <span className={`${card.color} ${card.bg} p-xs rounded mr-sm`}>
              <span className="material-symbols-outlined">{card.icon}</span>
            </span>
            <span className="font-label-caps text-on-surface-variant uppercase">{card.label}</span>
          </div>
          <p className={`text-2xl font-bold ${card.valueColor || ''}`}>
            {card.value} <span className="text-sm font-normal text-on-surface-variant">{card.sub}</span>
          </p>
        </div>
      ))}
    </section>
  )
}
