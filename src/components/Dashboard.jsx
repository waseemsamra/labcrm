import ActionQueue from './ActionQueue'
import ProductionOverview from './ProductionOverview'
import CasePreview from './CasePreview'
import StatsCards from './StatsCards'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-gutter">
      <ActionQueue />
      <div className="col-span-12 lg:col-span-4 space-y-gutter">
        <ProductionOverview />
        <CasePreview />
      </div>
      <StatsCards />
    </div>
  )
}
