import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '../components/ui/Button'

const NAV_LINKS = [
  { label: 'Data Protection', href: '#data-protection' },
  { label: 'Terms of Service', href: '#terms' },
  { label: 'Developer Support', href: '#contact' },
]

const INPUT_CLASS =
  'h-10 px-4 rounded-lg border font-sans text-[14px] text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all duration-[140ms] bg-white'

export function LegalPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>

      {/* Sticky jump nav */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="max-w-3xl mx-auto px-6 h-12 flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[13px] font-medium no-underline transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 flex flex-col gap-20">

        {/* Data Protection */}
        <section id="data-protection" className="flex flex-col gap-5 scroll-mt-28">
          <div>
            <h2 className="font-sans font-semibold text-[28px] text-[var(--text-primary)] mb-4">
              Data Protection Notice
            </h2>
            <div className="h-px" style={{ background: 'var(--border-subtle)' }} />
          </div>
          <div className="flex flex-col gap-4 font-sans text-[16px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>Reverb itself collects no data.</p>
            <p>
              There is programatic filtering of the data you choose to have handeled by the application,
              so nothing is sent to an LLM for processing without first being approved by you.
            </p>
            <p>
              Any data that you do opt-in for analysis is subject to AI risks, namely being used for
              training models. We do our best at Reverb to keep your data safe, but LLM providers are
              not always entirely transparent about user's data usage – opting in for any of Reverb's
              services is 100% at your own data's risk.
            </p>
            <p>Thank you for being concerned about your data privacy.</p>
            <p style={{ color: 'var(--text-primary)' }}>- ReverbTeam -</p>
          </div>
        </section>

        {/* Terms of Service */}
        <section id="terms" className="flex flex-col gap-5 scroll-mt-28">
          <div>
            <h2 className="font-sans font-semibold text-[28px] text-[var(--text-primary)] mb-4">
              Terms of Service
            </h2>
            <div className="h-px" style={{ background: 'var(--border-subtle)' }} />
          </div>
          <p className="font-sans text-[16px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Placeholder text! We dont gaf how you use the app
          </p>
        </section>

        {/* Developer Support Form */}
        <section id="contact" className="flex flex-col gap-5 scroll-mt-28 pb-8">
          <div>
            <h2 className="font-sans font-semibold text-[28px] text-[var(--text-primary)] mb-4">
              Developer Support
            </h2>
            <div className="h-px" style={{ background: 'var(--border-subtle)' }} />
          </div>
          <p className="font-sans text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Get in contact with the Reverb team. Fill out the form below and we'll get back to you.
          </p>

          <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-medium text-[13px] text-[var(--text-primary)]">
                Name <span style={{ color: 'var(--red-alert)' }}>*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    style={{ borderColor: 'var(--border-medium)' }}
                  />
                  <span className="font-sans text-[12px]" style={{ color: 'var(--text-tertiary)' }}>First</span>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    className={INPUT_CLASS}
                    style={{ borderColor: 'var(--border-medium)' }}
                  />
                  <span className="font-sans text-[12px]" style={{ color: 'var(--text-tertiary)' }}>Last</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-medium text-[13px] text-[var(--text-primary)]">
                Email <span style={{ color: 'var(--red-alert)' }}>*</span>
              </label>
              <input
                type="email"
                className={INPUT_CLASS}
                style={{ borderColor: 'var(--border-medium)' }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-medium text-[13px] text-[var(--text-primary)]">
                Comment or Message
              </label>
              <textarea
                rows={6}
                className="px-4 py-3 rounded-lg border font-sans text-[14px] text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent transition-all duration-[140ms] bg-white resize-vertical"
                style={{ borderColor: 'var(--border-medium)' }}
              />
            </div>

            <div>
              <Button type="submit" variant="primary" size="md">Send Message</Button>
            </div>
          </form>
        </section>

      </div>
    </div>
  )
}
