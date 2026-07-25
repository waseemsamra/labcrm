import WelcomeBanner from './WelcomeBanner'
import StatsGrid from './StatsGrid'
import DeliverySchedule from './DeliverySchedule'
import ActiveCaseStepper from './ActiveCaseStepper'
import LabCommunications from './LabCommunications'
import DigitalAssetsUpload from './DigitalAssetsUpload'
import ClientMobileNav from './ClientMobileNav'

export default function ClientPortal() {
  return (
    <div className="p-gutter md:p-lg space-y-lg pb-24 md:pb-0">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
        <WelcomeBanner />
        <StatsGrid />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 space-y-md">
          <DeliverySchedule />
          <ActiveCaseStepper />
        </div>
        <div className="lg:col-span-4 space-y-md">
          <LabCommunications />
          <DigitalAssetsUpload />
        </div>
      </section>
      <ClientMobileNav />
      <button className="md:hidden fixed bottom-20 right-4 w-14 h-14 bg-secondary text-on-secondary rounded-full flex items-center justify-center shadow-xl z-40 active:scale-90 transition-transform">
        <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>add</span>
      </button>
    </div>
  )
}
