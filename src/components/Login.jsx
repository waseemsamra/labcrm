import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('admin')
  const [password, setPassword] = useState('password123')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = '/dashboard'
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface p-lg">
      <div className="w-full max-w-md space-y-lg">
        <div className="text-center">
          <h1 className="font-display-lg text-display-lg text-primary">DentalLink CRM</h1>
          <p className="text-body-md text-on-surface-variant">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg space-y-lg">
          <div className="space-y-sm">
            <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-wider" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-md py-sm bg-surface border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-sm">
            <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-wider" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-md py-sm bg-surface border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full bg-primary text-on-primary font-title-sm text-title-sm py-sm rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-sm"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-body-sm text-on-surface-variant">
          Use <span className="font-semibold">admin</span> / <span className="font-semibold">password123</span>
        </p>
      </div>
    </div>
  )
}
