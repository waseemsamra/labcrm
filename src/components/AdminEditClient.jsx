import AdminSidebar from './AdminSidebar'
import { useParams, Link } from 'react-router-dom'

const clients = {
  'CL-001': {
    name: 'Bright Smile Family Dentistry',
    location: 'Seattle, WA • NW Territory',
    doctor: 'Dr. Sarah Jenkins',
    cases: 12,
    revenue: '$24,500',
    status: 'VIP Client',
    phone: '(555) 100-2001',
    email: 'billing@brightsmile.com',
    address: '100 Main St, Seattle, WA 62701',
    contactPerson: 'Jane Miller',
    billingContact: 'billing@brightsmile.com',
  },
  'CL-002': {
    name: 'Modern Dental Arts',
    location: 'Bellevue, WA • NW Territory',
    doctor: 'Dr. Michael Chen',
    cases: 8,
    revenue: '$18,200',
    status: 'Active',
    phone: '(555) 100-2002',
    email: 'info@moderndentalarts.com',
    address: '200 Oak Ave, Bellevue, WA 62702',
    contactPerson: 'Michael Chen',
    billingContact: 'accounts@moderndentalarts.com',
  },
  'CL-003': {
    name: 'Oak Lane Orthodontics',
    location: 'Portland, OR • SW Territory',
    doctor: 'Dr. Elena Rodriguez',
    cases: 0,
    revenue: '$12,400',
    status: 'On Hold',
    phone: '(555) 100-2003',
    email: 'contact@oaklaneortho.com',
    address: '300 Elm St, Portland, OR 62703',
    contactPerson: 'Lisa Peters',
    billingContact: 'billing@oaklaneortho.com',
  },
  'CL-004': {
    name: 'Peak View Dentistry',
    location: 'Tacoma, WA • NW Territory',
    doctor: 'Dr. James Wilson',
    cases: 24,
    revenue: '$31,400',
    status: 'VIP Client',
    phone: '(555) 100-2004',
    email: 'ops@peakview.com',
    address: '400 Pine Rd, Tacoma, WA 62704',
    contactPerson: 'David Smyth',
    billingContact: 'finance@peakview.com',
  },
}

export default function AdminEditClient() {
  const { clientId } = useParams()
  const client = clients[clientId] || clients['CL-001']

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-lg py-sm w-full sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
          <div className="flex items-center gap-lg flex-1">
            <h2 className="font-headline-md text-headline-md font-semibold text-primary">Edit Client</h2>
            <div className="relative w-96 max-w-full">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input
                className="w-full bg-surface-container-low border-none rounded-full pl-xl pr-md py-xs font-body-sm text-body-sm focus:ring-1 focus:ring-primary"
                placeholder="Search clients..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="p-sm rounded hover:text-primary transition-colors text-on-surface-variant relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="p-sm rounded hover:text-primary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-variant ml-sm flex items-center justify-center overflow-hidden border border-outline-variant">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDejkKf6eRFZN8fwKQaBBYJnTi7KaYVwOcWZVBab7jBijjvNUcUUOg2yjOFHseQt7ur8La7mZkBgTD0ZZap0xNBbqBArVqDcPKSjc0LajgHYTHCENpwfFdr_yaSL545que8YtIx0xr7eBbpeHgTzj_VPsFOxJxO8Wt6kl4Q237Mf0ociihD7ryBHiKF1ZPwY-OwXG8PKqgN3y-cA5ZpSHpLOQkypdRzwCz_J5x1BX9bLxRcgW2C6uBJeWCLrVOYPzmsHAj5LSxCZR7X"
                alt="Admin"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-lg max-w-[1600px] mx-auto">
            {/* Page Header & Breadcrumbs */}
            <div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
              <div>
                <nav className="flex items-center gap-xs text-on-surface-variant mb-xs">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider">Clients</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">Edit Client</span>
                </nav>
                <h1 className="font-display-lg text-display-lg text-on-surface">Edit Client</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Update client information and billing preferences.</p>
              </div>
              <div className="flex gap-md">
                <Link to={`/admin/clients/${clientId}`} className="px-lg py-md rounded-lg border border-outline text-on-surface font-title-sm text-title-sm hover:bg-surface-container-low transition-colors duration-200">
                  Cancel
                </Link>
                <button className="px-xl py-md rounded-lg bg-primary text-on-primary font-title-sm text-title-sm hover:opacity-90 transition-opacity shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
              {/* Left Column: Client Form */}
              <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-xl">
                <form className="space-y-xl">
                  <div className="border-b border-outline-variant pb-md mb-lg">
                    <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">business</span>
                      Primary Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="client-name">Office Name</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="client-name" placeholder="e.g. Bright Smile Family Dental" type="text" defaultValue={client.name} />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="doctor">Primary Doctor</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="doctor" placeholder="e.g. Dr. Sarah Miller" type="text" defaultValue={client.doctor} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="location">Location</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="location" placeholder="City, State" type="text" defaultValue={client.location} />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="phone">Primary Phone</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="phone" placeholder="(555) 000-0000" type="tel" defaultValue={client.phone} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">Email Address</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="email" placeholder="billing@office.com" type="email" defaultValue={client.email} />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="status">Status</label>
                      <select className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0 appearance-none" id="status" defaultValue={client.status.toLowerCase()}>
                        <option value="active">Active</option>
                        <option value="on hold">On Hold</option>
                        <option value="vip client">VIP Client</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-b border-outline-variant pb-md mb-lg pt-xl">
                    <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">contact_mail</span>
                      Billing & Contact
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="contact-person">Contact Person</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="contact-person" placeholder="Full Name" type="text" defaultValue={client.contactPerson} />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="billing-contact">Billing Contact Email</label>
                      <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="billing-contact" placeholder="billing@office.com" type="email" defaultValue={client.billingContact} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="address">Address</label>
                    <input className="w-full px-md py-md border border-outline-variant rounded bg-surface font-body-md text-body-md focus:ring-0" id="address" placeholder="123 Main St, City, State ZIP" type="text" defaultValue={client.address} />
                  </div>

                  <div className="flex md:hidden flex-col gap-md pt-lg">
                    <button className="w-full py-md rounded-lg bg-primary text-on-primary font-title-sm text-title-sm">Save Changes</button>
                    <Link to={`/admin/clients/${clientId}`} className="w-full py-md rounded-lg border border-outline text-on-surface font-title-sm text-title-sm text-center">Cancel</Link>
                  </div>
                </form>
              </div>

              {/* Right Column: Sidebar / Context */}
              <div className="lg:col-span-4 space-y-lg">
                <div className="bg-surface border border-outline-variant rounded-xl p-lg">
                  <h3 className="font-title-sm text-title-sm text-on-surface flex items-center gap-sm mb-md">
                    <span className="material-symbols-outlined text-on-surface-variant">info</span>
                    Client Overview
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Editing this client will update billing and case assignment across all locations. Changes apply immediately to new invoices.
                  </p>
                  <div className="mt-lg pt-md border-t border-outline-variant">
                    <a className="text-primary font-label-caps text-label-caps flex items-center gap-xs hover:underline uppercase tracking-tight" href="#">
                      View Client History
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                </div>

                <div className="bg-primary-container/10 border border-primary/20 rounded-xl p-lg">
                  <div className="flex gap-md">
                    <span className="material-symbols-outlined text-primary text-display-lg">verified_user</span>
                    <div>
                      <h3 className="font-title-sm text-title-sm text-on-surface mb-sm">Verification</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Client profile changes are logged for compliance. Contact your account manager for bulk updates.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
