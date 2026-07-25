export default function ActionQueue() {
  const rows = [
    { status: 'Overdue', statusColor: 'bg-error-container text-on-error-container', id: '#LAB-4921', type: 'Zirconia Crown', deadline: 'Oct 12 (Yesterday)', deadlineColor: 'text-error', action: 'Escalate' },
    { status: 'Approval', statusColor: 'bg-secondary-container text-on-secondary-container', id: '#LAB-5012', type: 'Bridge Framework', deadline: 'Oct 15', action: 'Review Scan' },
    { status: 'New Intake', statusColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', id: '#LAB-5028', type: 'Implant Abutment', deadline: 'Oct 18', action: 'Assign' },
    { status: 'Approval', statusColor: 'bg-secondary-container text-on-secondary-container', id: '#LAB-4995', type: 'Full Arch Case', deadline: 'Oct 14', action: 'Review' },
  ]

  return (
    <section className="col-span-12 lg:col-span-8 bg-surface rounded-xl border border-outline-variant overflow-hidden flex flex-col">
      <div className="px-md py-sm bg-surface-container flex justify-between items-center border-b border-outline-variant">
        <h3 className="font-title-sm text-title-sm flex items-center">
          <span className="material-symbols-outlined mr-sm text-error">priority_high</span>
          Action Required Queue
        </h3>
        <div className="flex space-x-xs">
          <span className="bg-error/10 text-error px-sm py-xs rounded font-label-caps">14 Items</span>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto hide-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface sticky top-0">
            <tr className="border-b border-outline-variant">
              <th className="px-md py-sm font-label-caps text-on-surface-variant uppercase">Status</th>
              <th className="px-md py-sm font-label-caps text-on-surface-variant uppercase">Case ID</th>
              <th className="px-md py-sm font-label-caps text-on-surface-variant uppercase">Type</th>
              <th className="px-md py-sm font-label-caps text-on-surface-variant uppercase">Deadline</th>
              <th className="px-md py-sm font-label-caps text-on-surface-variant uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-body-sm">
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-surface-container hover:bg-surface-container-low transition-colors">
                <td className="px-md py-md">
                  <span className={`px-sm py-xs rounded-full text-[11px] font-bold uppercase ${row.statusColor}`}>{row.status}</span>
                </td>
                <td className="px-md py-md font-data-tabular">{row.id}</td>
                <td className="px-md py-md">{row.type}</td>
                <td className={`px-md py-md ${row.deadlineColor || ''} ${row.deadlineColor ? 'font-bold' : ''}`}>{row.deadline}</td>
                <td className="px-md py-md text-right">
                  <button className="text-primary font-bold hover:underline">{row.action}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-sm bg-surface-container border-t border-outline-variant text-center">
        <button className="font-label-caps text-primary hover:text-primary-container transition-colors uppercase">
          View All Action Items
        </button>
      </div>
    </section>
  )
}
