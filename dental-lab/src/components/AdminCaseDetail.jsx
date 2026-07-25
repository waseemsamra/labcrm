import AdminSidebar from './AdminSidebar'
import CaseDetail from './CaseDetail'

export default function AdminCaseDetail() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 ml-64 min-h-screen">
        <CaseDetail />
      </main>
    </div>
  )
}
