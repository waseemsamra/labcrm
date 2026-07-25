export default function RxInstructions() {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex-1">
      <div className="flex items-center gap-3 mb-6 border-b border-surface-container pb-md">
        <span className="material-symbols-outlined text-primary">description</span>
        <h3 className="font-title-sm text-title-sm text-on-surface">RX Instructions</h3>
      </div>
      <div className="flex flex-col gap-xs h-full min-h-[300px]">
        <label className="text-label-caps font-label-caps text-on-surface-variant">Clinical Notes & Specifications</label>
        <textarea
          className="form-input-focus flex-1 p-md bg-surface-container-low border border-outline-variant rounded-lg text-on-surface font-body-md resize-none leading-relaxed"
          placeholder="Specify tooth numbers, shade guide (e.g., A1, B2), material preferences, and occlusion details..."
        ></textarea>
      </div>
    </section>
  )
}
