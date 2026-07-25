import { Outlet } from 'react-router-dom'
import ClientSidebar from './ClientSidebar'
import MobileNav from './MobileNav'

export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-background">
      <ClientSidebar />
      <main className="md:ml-64 min-h-screen">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  )
}
