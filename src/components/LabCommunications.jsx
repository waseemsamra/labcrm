const messages = [
  {
    sender: 'Tech: David Vance',
    time: '10m ago',
    text: '"Dr. Thorne, I\'ve uploaded the 3D mock-up for the Chen case. Please check the shade matching on the incisal edges..."',
    attachment: '3D_Render_Mockup.stl',
    highlighted: false,
  },
  {
    sender: 'Billing Dept.',
    time: '2h ago',
    text: '"Your statement for October is now available for review and download. Please contact us if..."',
    highlighted: true,
  },
  {
    sender: 'Tech: Sarah Miller',
    time: 'Yesterday',
    text: '"Case #DX-22481 (Jameson) is leaving the lab now. High luster finish applied per your special instructions."',
    highlighted: false,
  },
]

export default function LabCommunications() {
  return (
    <div className="space-y-md">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-md text-headline-md text-primary">Lab Communications</h2>
        <button className="text-primary font-body-sm hover:underline">View All</button>
      </div>
      <div className="bg-surface border border-outline-variant rounded-xl flex flex-col divide-y divide-outline-variant">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-md hover:bg-surface-container-low transition-colors cursor-pointer group ${msg.highlighted ? 'bg-surface-container-lowest' : ''}`}
          >
            <div className="flex justify-between items-start mb-1">
              <span className="font-semibold text-on-surface group-hover:text-primary transition-colors">{msg.sender}</span>
              <span className="text-xs text-on-surface-variant">{msg.time}</span>
            </div>
            <p className="text-body-sm text-on-surface-variant line-clamp-2">{msg.text}</p>
            {msg.attachment && (
              <div className="mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-xs">attach_file</span>
                <span className="text-xs font-medium text-secondary">{msg.attachment}</span>
              </div>
            )}
          </div>
        ))}
        <div className="p-lg">
          <button className="w-full py-2.5 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
            Send Message to Lab
          </button>
        </div>
      </div>
    </div>
  )
}
