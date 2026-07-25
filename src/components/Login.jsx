import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('admin@dentallab.com')
  const [password, setPassword] = useState('password123')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = '/dashboard'
    }, 1500)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9ff', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '448px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '30px', fontWeight: '700', color: '#00478d', marginBottom: '8px' }}>DentalLink CRM</h1>
          <p style={{ fontSize: '16px', color: '#424752' }}>Sign in to your account</p>
        </div>

        <div style={{ backgroundColor: '#ffffff', border: '1px solid #c2c6d4', borderRadius: '12px', padding: '32px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
          Use <span style={{ fontWeight: '600' }}>admin</span> / <span style={{ fontWeight: '600' }}>password123</span>
        </p>
      </div>
    </div>
  )
}
