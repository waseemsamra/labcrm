const deliveryRows = [
  {
    patient: 'Jameson, Robert',
    caseId: '#DX-22481',
    type: 'Zirconia Crown (Unit 14)',
    delivery: 'Today, 2:00 PM',
    icon: 'local_shipping',
    status: 'In Transit',
    statusClass: 'bg-secondary-container/30 text-on-secondary-container',
  },
  {
    patient: 'Chen, Lisa',
    caseId: '#DX-22495',
    type: 'E.max Veneers (6-11)',
    delivery: 'Oct 24, 2023',
    icon: 'calendar_today',
    status: 'Glazing',
    statusClass: 'bg-surface-container-highest text-on-surface-variant',
  },
  {
    patient: 'Smith, Sarah',
    caseId: '#DX-22502',
    type: 'Night Guard',
    delivery: 'Oct 26, 2023',
    icon: 'calendar_today',
    status: '3D Printing',
    statusClass: 'bg-surface-container-highest text-on-surface-variant',
  },
]

export default function DeliverySchedule() {
  return (
    <div className="space-y-md">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-md text-headline-md text-primary">Delivery Schedule</h2>
        <button className="text-primary font-body-sm hover:underline flex items-center">
          Full Calendar <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
        </button>
      </div>
      <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
        <table className="w-full text-left font-body-sm">
          <thead className="bg-surface-container-low border-b border-outline-variant">
            <tr>
              <th className="px-md py-4 font-semibold text-on-surface-variant">Patient / Case ID</th>
              <th className="px-md py-4 font-semibold text-on-surface-variant">Restoration Type</th>
              <th className="px-md py-4 font-semibold text-on-surface-variant">Est. Delivery</th>
              <th className="px-md py-4 font-semibold text-on-surface-variant">Status</th>
              <th className="px-md py-4 font-semibold text-on-surface-variant text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {deliveryRows.map((row) => (
              <tr key={row.caseId} className="hover:bg-tertiary-fixed transition-colors">
                <td className="px-md py-4">
                  <div className="font-semibold text-on-surface">{row.patient}</div>
                  <div className="text-xs text-on-surface-variant">{row.caseId}</div>
                </td>
                <td className="px-md py-4">{row.type}</td>
                <td className="px-md py-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>
                      {row.icon}
                    </span>
                    {row.delivery}
                  </div>
                </td>
                <td className="px-md py-4">
                  <span className={`status-pill ${row.statusClass}`}>{row.status}</span>
                </td>
                <td className="px-md py-4 text-right">
                  <button className="text-primary p-2 hover:bg-primary-container/10 rounded-full">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
