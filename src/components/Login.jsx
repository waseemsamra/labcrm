import { useState } from 'react'

export default function Login() {
  const [loginType, setLoginType] = useState('admin')
  const [email, setEmail] = useState('admin@clinic.com')
  const [password, setPassword] = useState('admin123')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleTypeChange = (e) => {
    const type = e.target.value
    setLoginType(type)
    if (type === 'admin') {
      setEmail('admin@clinic.com')
      setPassword('admin123')
    } else if (type === 'client') {
      setEmail('client@practice.com')
      setPassword('client123')
    } else if (type === 'technician') {
      setEmail('technician@dentallab.com')
      setPassword('tech123')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (loginType === 'admin') {
        window.location.href = '/admin'
      } else if (loginType === 'client') {
        window.location.href = '/client/Dashboard'
      } else if (loginType === 'technician') {
        window.location.href = '/admin'
      }
    }, 1000)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row' }}>
      {/* Left Side */}
      <div style={{ display: 'none', width: '50%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00478d', position: 'relative', overflow: 'hidden' }} className="hidden md:flex">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #00478d 0%, #d6e3ff 100%)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, padding: '32px', color: 'white', maxWidth: '384px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>medical_services</span>
            <span style={{ fontSize: '20px', fontWeight: '700' }}>Clinical Precision Portal</span>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Precision in every restoration. Excellence in every case.</h2>
          <div style={{ height: '4px', width: '64px', backgroundColor: '#7af1fc', borderRadius: '9999px' }}></div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9ff', padding: '32px', minHeight: '100vh' }} className="md:w-1/2">
        <div style={{ width: '100%', maxWidth: '448px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: '700', color: '#00478d', marginBottom: '8px' }}>DentalLink CRM</h1>
            <p style={{ fontSize: '16px', color: '#424752' }}>Sign in to your account</p>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #c2c6d4', borderRadius: '12px', padding: '32px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#424752', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Login Type
                </label>
                <select
                  value={loginType}
                  onChange={handleTypeChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #c2c6d4',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: '#111c2c',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="client">Client</option>
                  <option value="technician">Technician</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#424752', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #c2c6d4',
                    borderRadius: '8px',
                    fontSize: '16px',
                    color: '#111c2c',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#424752', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      backgroundColor: '#ffffff',
                      border: '1px solid #c2c6d4',
                      borderRadius: '8px',
                      fontSize: '16px',
                      color: '#111c2c',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#424752',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  backgroundColor: '#005eb8',
                  color: '#ffffff',
                  fontWeight: '600',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>

          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#424752' }}>
            Demo: <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{loginType}</span> —{' '}
            <span style={{ fontWeight: '600' }}>{email}</span> /{' '}
            <span style={{ fontWeight: '600' }}>{password}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
