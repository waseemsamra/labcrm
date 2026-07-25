import { useState } from 'react'

export default function Login() {
  const [isLabStaff, setIsLabStaff] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <div className="flex min-h-screen flex-col md:flex-row overflow-hidden">
      {/* Left Side: Professional Background Image */}
      <div className="relative hidden md:flex md:w-1/2 lg:w-1/2 items-center justify-center overflow-hidden">
        <img
          alt="Professional dental laboratory environment"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg0Cz5J4OGnmfXHEddyg86iex2C9_wvbM9frMLtv2CEnr7-sUbL6XMZCPMLSzxCxza-7yh4IfQTKYW8U98FWcO1GbikpegxMxx2hC_VCD45-QW1jX3ybzu7U-D7e1RtRQQgojga4gghRpiTgg3D5Ts0Pq-8W9Pck8UZR_QmCbmS2UrI27HDnYry0mp5DrxoqLT857mHUMuH0IVxb-q3Hs06hG5KaZlrsGnI6APDslaaNfV2QzvAGtY5fcEc3CizC4LYdyg8O44MyDK"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        {/* Branding Overlay Content */}
        <div className="relative z-10 p-xl text-white max-w-md">
          <div className="flex items-center gap-sm mb-lg">
            <span className="material-symbols-outlined text-4xl">medical_services</span>
            <span className="font-display-lg text-[24px] font-bold">Clinical Precision Portal</span>
          </div>
          <h2 className="font-headline-md text-headline-md mb-md">Precision in every restoration. Excellence in every case.</h2>
          <div className="h-1 w-16 bg-secondary-container rounded-full"></div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-lg bg-surface min-h-screen">
        <div className="w-full max-w-md flex flex-col min-h-full md:min-h-0">
          {/* Form Header */}
          <div className="mb-xl">
            <h1 className="font-headline-md text-headline-md text-on-surface mb-xs">Sign in to your Portal</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Access your dental lab operations and clinical cases</p>
          </div>

          {/* Role Selector Tabs */}
          <div className="flex p-1 bg-surface-container-low rounded-lg mb-lg border border-outline-variant">
            <button
              type="button"
              onClick={() => setIsLabStaff(true)}
              className={`flex-1 py-sm px-md text-body-sm font-medium rounded-md transition-all ${
                isLabStaff
                  ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Lab Staff
            </button>
            <button
              type="button"
              onClick={() => setIsLabStaff(false)}
              className={`flex-1 py-sm px-md text-body-sm font-medium rounded-md transition-all ${
                !isLabStaff
                  ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Dental Practice
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-lg" onSubmit={handleSubmit}>
            <div className="space-y-xs">
              <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-wider" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all placeholder:text-outline"
                id="email"
                name="email"
                placeholder="dr.smith@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-xs">
              <label className="font-label-caps text-label-caps text-on-surface-variant block uppercase tracking-wider" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-md py-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all placeholder:text-outline"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-sm cursor-pointer group">
                <input className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-outline-variant bg-surface-container-lowest checked:bg-primary checked:border-primary transition-all" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember Me</span>
              </label>
              <a className="font-body-sm text-body-sm text-primary font-medium hover:underline transition-all" href="#">
                Forgot Password?
              </a>
            </div>
            <button
              className="w-full bg-primary-container text-white font-title-sm text-title-sm py-sm rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <span className="material-symbols-outlined text-[20px]">login</span>
                </>
              )}
            </button>
          </form>

          {/* SSO Divider */}
          <div className="relative my-xl">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-surface px-md text-on-surface-variant font-label-caps tracking-widest">Or continue with</span>
            </div>
          </div>

          {/* SSO Buttons */}
          <div className="grid grid-cols-2 gap-md mb-xl">
            <button className="flex items-center justify-center gap-sm px-md py-sm border border-outline-variant rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-body-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-sm px-md py-sm border border-outline-variant rounded-lg bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 23 23">
                <path d="M0 0h11v11H0z" fill="#f25022" />
                <path d="M12 0h11v11H12z" fill="#7fbb00" />
                <path d="M0 12h11v11H0z" fill="#00a4ef" />
                <path d="M12 12h11v11H12z" fill="#ffb900" />
              </svg>
              <span className="text-body-sm font-medium">Microsoft</span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-auto pt-lg border-t border-outline-variant flex flex-wrap justify-center gap-lg">
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">
              Security Policy
            </a>
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
