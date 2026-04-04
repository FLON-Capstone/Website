import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Headphones, BookOpen, Zap } from 'lucide-react'
import { Button } from '../components/ui/Button'

const ROLES = [
  { value: 'student', label: 'Student' },
  { value: 'professional', label: 'Professional' },
  { value: 'athlete', label: 'Athlete' },
  { value: 'other', label: 'Other' },
]

const features = [
  {
    Icon: Headphones,
    title: 'Daily Audio Briefing',
    body: 'Your schedule, deadlines, and priorities — synthesized and ready before you leave the house.',
  },
  {
    Icon: BookOpen,
    title: 'Study Mode',
    body: 'Turn coursework into podcast-style audio. Review lectures on your commute or at the gym.',
  },
  {
    Icon: Zap,
    title: 'AI Action Stack',
    body: 'Never waste time deciding what to do next. Reverb sequences your day automatically.',
  },
]

export function EarlyAccessPage() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({ name: '', email: searchParams.get('email') ?? '', role: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; role?: string }>({})

  function validate() {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.role) e.role = 'Please select one'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src="/lecturehall.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Left-side extra darkening so text is readable */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)'
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">

        {/* Left: value prop — text on image, all white */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-white font-sans font-medium text-xs uppercase tracking-widest mb-6 w-fit">
            Early Access
          </span>

          <h1
            className="font-sans font-normal text-white leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 54px)' }}
          >
            Your day,<br />in your ears.
          </h1>

          <p className="font-sans text-[16px] text-white/75 leading-relaxed mb-10 max-w-[420px]">
            Join 2,000+ students and professionals already on the waitlist. Be first to access Reverb when we launch.
          </p>

          <div className="flex flex-col gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                {/* White outlined icon, transparent fill */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ border: '1.5px solid rgba(255,255,255,0.6)', background: 'transparent' }}
                >
                  <f.Icon size={18} color="white" strokeWidth={1.75} fill="none" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-[14px] text-white mb-0.5">{f.title}</p>
                  <p className="font-sans text-[14px] text-white/65 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-10 pt-8 border-t border-white/20 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#1d4ed8', '#2563eb', '#3b82f6', '#93b4f7'].map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-white/30"
                  style={{ background: color }}
                />
              ))}
            </div>
            <p className="font-sans text-[13px] text-white/70">
              <span className="font-semibold text-white">2,000+</span> students already on the list
            </p>
          </div>
        </motion.div>

        {/* Right: form card — solid white, stands out in front */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <div
            className="rounded-2xl p-8 bg-white border border-white/10"
            style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.35)' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-center py-8"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'var(--accent-blue-light)' }}
                >
                  <Headphones size={26} color="var(--accent-blue)" strokeWidth={1.75} />
                </div>
                <h2 className="font-sans font-semibold text-[22px] text-[var(--text-primary)] mb-2">
                  You're on the list!
                </h2>
                <p className="font-sans text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[300px] mx-auto">
                  We'll email you at <span className="font-medium text-[var(--text-primary)]">{form.email}</span> as soon as early access opens.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="font-sans font-semibold text-[20px] text-[var(--text-primary)] mb-1">
                  Request early access
                </h2>
                <p className="font-sans text-[14px] text-[var(--text-secondary)] mb-7">
                  Free during beta. No credit card required.
                </p>

                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-medium text-[13px] text-[var(--text-primary)]">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Maya Chen"
                      className="h-10 px-4 rounded-lg border border-[var(--border-medium)] bg-white font-sans text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all duration-[140ms]"
                    />
                    {errors.name && <p className="font-sans text-[12px] text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-medium text-[13px] text-[var(--text-primary)]">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="maya@yale.edu"
                      className="h-10 px-4 rounded-lg border border-[var(--border-medium)] bg-white font-sans text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all duration-[140ms]"
                    />
                    {errors.email && <p className="font-sans text-[12px] text-red-500">{errors.email}</p>}
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans font-medium text-[13px] text-[var(--text-primary)]">
                      I'm primarily a…
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {ROLES.map((r) => (
                        <button
                          key={r.value}
                          type="button"
                          onClick={() => setForm(f => ({ ...f, role: r.value }))}
                          className="h-10 px-4 rounded-lg border font-sans text-[13px] font-medium transition-all duration-[140ms] cursor-pointer"
                          style={{
                            background: form.role === r.value ? 'var(--accent-blue-light)' : 'white',
                            borderColor: form.role === r.value ? 'var(--accent-blue)' : 'var(--border-medium)',
                            color: form.role === r.value ? 'var(--accent-blue)' : 'var(--text-secondary)',
                          }}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                    {errors.role && <p className="font-sans text-[12px] text-red-500">{errors.role}</p>}
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full mt-1 !h-11 !text-[15px]">
                    Join the waitlist
                  </Button>

                  <p className="font-sans text-[12px] text-[var(--text-tertiary)] text-center">
                    No spam. Unsubscribe at any time.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
