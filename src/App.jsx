import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Dashboard from './components/Dashboard'
import CasesList from './components/CasesList'
import CaseIntake from './components/CaseIntake'
import CaseDetail from './components/CaseDetail'
import Billing from './components/Billing'
import CreateInvoice from './components/CreateInvoice'
import InvoiceDetail from './components/InvoiceDetail'
import ClientPortal from './components/ClientPortal'
import CaseApproval from './components/CaseApproval'
import CaseApprovals from './components/CaseApprovals'
import ClientSidebar from './components/ClientSidebar'
import ClientLayout from './components/ClientLayout'
import PatientDirectory from './components/PatientDirectory'
import PatientDetail from './components/PatientDetail'
import AddPatient from './components/AddPatient'
import EditPatient from './components/EditPatient'
import ClientCasesList from './components/ClientCasesList'
import ClientCaseDetail from './components/ClientCaseDetail'
import ClientInvoiceDetail from './components/ClientInvoiceDetail'
import ClientBilling from './components/ClientBilling'
import Admin from './components/Admin'
import LocationManagement from './components/LocationManagement'
import SupplierManagement from './components/SupplierManagement'
import AddSupplier from './components/AddSupplier'
import EditSupplier from './components/EditSupplier'
import Inventory from './components/Inventory'
import AdminCasesList from './components/AdminCasesList'
import AdminCaseDetail from './components/AdminCaseDetail'
import EditInventoryItem from './components/EditInventoryItem'
import AdminBilling from './components/AdminBilling'
import AdminCreateInvoice from './components/AdminCreateInvoice'
import AdminInvoiceDetail from './components/AdminInvoiceDetail'
import AdminEditInvoice from './components/AdminEditInvoice'
import AdminUserDirectory from './components/AdminUserDirectory'
import AdminEditUserPermissions from './components/AdminEditUserPermissions'
import AdminRolePermissions from './components/AdminRolePermissions'
import AdminRoleMatrix from './components/AdminRoleMatrix'
import AdminPatientDirectory from './components/AdminPatientDirectory'
import AdminPatientDetail from './components/AdminPatientDetail'
import AdminEditPatient from './components/AdminEditPatient'
import AdminAddPatient from './components/AdminAddPatient'
import AdminClientDirectory from './components/AdminClientDirectory'
import AdminClientDetail from './components/AdminClientDetail'
import AdminEditClient from './components/AdminEditClient'
import AdminRoleDirectory from './components/AdminRoleDirectory'
import AdminEditRole from './components/AdminEditRole'
import AdminCreateRole from './components/AdminCreateRole'
import Login from './components/Login'
import { Navigate } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <div className="min-h-screen bg-background">
              <Login />
            </div>
          }
        />
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-background">
              <Sidebar />
              <main className="md:ml-64 min-h-screen">
                <Dashboard />
              </main>
              <MobileNav />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="min-h-screen bg-background">
              <Sidebar />
              <main className="md:ml-64 min-h-screen">
                <Dashboard />
              </main>
              <MobileNav />
            </div>
          }
        />
        <Route
          path="/cases"
          element={
            <div className="min-h-screen bg-background">
              <Sidebar />
              <main className="md:ml-64 min-h-screen">
                <CasesList />
              </main>
              <MobileNav />
            </div>
          }
        />
        <Route
          path="/admin/cases/intake"
          element={
            <div className="min-h-screen bg-background">
              <AdminSidebar />
              <main className="md:ml-64 min-h-screen">
                <CaseIntake />
              </main>
            </div>
          }
        />
        <Route
          path="/cases/:caseId"
          element={
            <div className="min-h-screen bg-background">
              <Sidebar />
              <main className="md:ml-64 min-h-screen">
                <CaseDetail />
              </main>
              <MobileNav />
            </div>
          }
        />
        <Route
          path="/billing"
          element={
            <div className="min-h-screen bg-background">
              <Sidebar />
              <main className="md:ml-64 min-h-screen">
                <Billing />
              </main>
              <MobileNav />
            </div>
          }
        />
        <Route
          path="/billing/create"
          element={
            <div className="min-h-screen bg-background">
              <Sidebar />
              <main className="md:ml-64 min-h-screen">
                <CreateInvoice />
              </main>
              <MobileNav />
            </div>
          }
        />
        <Route
          path="/billing/invoice/:invoiceId"
          element={
            <div className="min-h-screen bg-background">
              <Sidebar />
              <main className="md:ml-64 min-h-screen">
                <InvoiceDetail />
              </main>
              <MobileNav />
            </div>
          }
        />
        <Route path="/client" element={<ClientLayout />}>
          <Route path="Dashboard" element={<ClientPortal />} />
          <Route path="Cases" element={<ClientCasesList />} />
          <Route path="Cases/:caseId" element={<ClientCaseDetail />} />
          <Route path="Approvals" element={<CaseApprovals />} />
          <Route path="invoices" element={<ClientBilling />} />
          <Route path="invoice/:invoiceId" element={<ClientInvoiceDetail />} />
          <Route path="PatientRecords" element={<PatientDirectory />} />
          <Route path="PatientRecords/add" element={<AddPatient />} />
          <Route path="PatientRecords/:patientId/edit" element={<EditPatient />} />
          <Route path="PatientRecords/:patientId" element={<PatientDetail />} />
        </Route>
        <Route path="/approvals" element={<CaseApproval />} />
        <Route
          path="/admin"
          element={
            <div className="min-h-screen bg-background">
              <Admin />
            </div>
          }
        />
        <Route
          path="/admin/locations"
          element={
            <div className="min-h-screen bg-background">
              <LocationManagement />
            </div>
          }
        />
        <Route
          path="/admin/suppliers"
          element={
            <div className="min-h-screen bg-background">
              <SupplierManagement />
            </div>
          }
        />
        <Route
          path="/admin/suppliers/add"
          element={
            <div className="min-h-screen bg-background">
              <AddSupplier />
            </div>
          }
        />
        <Route
          path="/admin/suppliers/:supplierId"
          element={
            <div className="min-h-screen bg-background">
              <EditSupplier />
            </div>
          }
        />
        <Route
          path="/admin/inventory"
          element={
            <div className="min-h-screen bg-background">
              <Inventory />
            </div>
          }
        />
        <Route
          path="/admin/cases"
          element={
            <div className="min-h-screen bg-background">
              <AdminCasesList />
            </div>
          }
        />
        <Route
          path="/admin/cases/:caseId"
          element={
            <div className="min-h-screen bg-background">
              <AdminCaseDetail />
            </div>
          }
        />
        <Route
          path="/admin/inventory/edit"
          element={
            <div className="min-h-screen bg-background">
              <EditInventoryItem />
            </div>
          }
        />
        <Route
          path="/admin/settings/users"
          element={
            <div className="min-h-screen bg-background">
              <AdminUserDirectory />
            </div>
          }
        />
        <Route
          path="/admin/settings/users/:userId/permissions"
          element={
            <div className="min-h-screen bg-background">
              <AdminEditUserPermissions />
            </div>
          }
        />
        <Route
          path="/admin/settings/roles"
          element={
            <div className="min-h-screen bg-background">
              <AdminRolePermissions />
            </div>
          }
        />
        <Route
          path="/admin/settings/roles/matrix"
          element={
            <div className="min-h-screen bg-background">
              <AdminRoleMatrix />
            </div>
          }
        />
        <Route
          path="/admin/settings/roles/new"
          element={
            <div className="min-h-screen bg-background">
              <AdminCreateRole />
            </div>
          }
        />
        <Route
          path="/admin/settings/roles/:roleId/edit"
          element={
            <div className="min-h-screen bg-background">
              <AdminEditRole />
            </div>
          }
        />
        <Route
          path="/admin/roles"
          element={
            <div className="min-h-screen bg-background">
              <AdminRoleDirectory />
            </div>
          }
        />
        <Route
          path="/admin/billing"
          element={
            <div className="min-h-screen bg-background">
              <AdminBilling />
            </div>
          }
        />
        <Route
          path="/admin/billing/create"
          element={
            <div className="min-h-screen bg-background">
              <AdminCreateInvoice />
            </div>
          }
        />
        <Route
          path="/admin/billing/invoice/:invoiceId"
          element={
            <div className="min-h-screen bg-background">
              <AdminInvoiceDetail />
            </div>
          }
        />
        <Route
          path="/admin/billing/invoice/:invoiceId/edit"
          element={
            <div className="min-h-screen bg-background">
              <AdminEditInvoice />
            </div>
          }
        />
        <Route
          path="/admin/patients"
          element={
            <div className="min-h-screen bg-background">
              <AdminPatientDirectory />
            </div>
          }
        />
        <Route
          path="/admin/patients/add"
          element={
            <div className="min-h-screen bg-background">
              <AdminAddPatient />
            </div>
          }
        />
        <Route
          path="/admin/patients/:patientId"
          element={
            <div className="min-h-screen bg-background">
              <AdminPatientDetail />
            </div>
          }
        />
        <Route
          path="/admin/patients/:patientId/edit"
          element={
            <div className="min-h-screen bg-background">
              <AdminEditPatient />
            </div>
          }
        />
        <Route
          path="/admin/clients"
          element={
            <div className="min-h-screen bg-background">
              <AdminClientDirectory />
            </div>
          }
        />
        <Route
          path="/admin/clients/:clientId"
          element={
            <div className="min-h-screen bg-background">
              <AdminClientDetail />
            </div>
          }
        />
        <Route
          path="/admin/clients/:clientId/edit"
          element={
            <div className="min-h-screen bg-background">
              <AdminEditClient />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
