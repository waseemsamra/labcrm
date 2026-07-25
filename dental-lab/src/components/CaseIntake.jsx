import Stepper from './Stepper'
import ClientPatient from './ClientPatient'
import RxInstructions from './RxInstructions'
import CaseLogistics from './CaseLogistics'
import MediaAssets from './MediaAssets'

export default function CaseIntake() {
  return (
    <div className="flex flex-col gap-lg px-lg">
      <header className="flex flex-col gap-sm md:flex-row md:items-center md:justify-between">
        <div>
          <nav className="flex items-center text-on-surface-variant mb-1">
            <a href="/cases" className="text-body-sm hover:text-primary">Cases</a>
            <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
            <span className="text-body-sm font-bold text-primary">New Intake</span>
          </nav>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Case Intake Form</h2>
        </div>
        <div className="flex gap-md">
          <a href="/">
            <button className="px-lg py-2 border border-outline text-on-surface-variant rounded-xl font-bold hover:bg-surface-container-high transition-colors">Discard</button>
          </a>
          <button className="px-lg py-2 bg-primary text-on-primary rounded-xl font-bold hover:opacity-90 transition-opacity">Save Draft</button>
        </div>
      </header>

      <Stepper />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg w-full">
        <div className="lg:col-span-8 flex flex-col gap-lg">
          <ClientPatient />
          <RxInstructions />
        </div>
        <div className="lg:col-span-4 flex flex-col gap-lg">
          <CaseLogistics />
          <MediaAssets />
        </div>
      </div>

      <footer className="mt-auto border-t border-outline-variant pt-lg flex items-center justify-end gap-md w-full">
        <a href="/">
          <button className="px-xl py-3 border border-outline text-on-surface-variant rounded-xl font-bold hover:bg-surface-container-high active:scale-95 transition-all">Previous</button>
        </a>
        <button className="px-xl py-3 bg-primary text-on-primary rounded-xl font-extrabold flex items-center gap-2 hover:shadow-lg active:scale-95 transition-all">
          Next: Case Specs
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  )
}
