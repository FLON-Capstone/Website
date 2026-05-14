import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FooterWaveform } from '../landing/FooterWaveform'

const FOOTER_HEIGHT = 420

function WaveformGlyph() {
  const bars = [6, 10, 14, 10, 6]
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true">
      {bars.map((h, i) => (
        <rect key={i} x={i * 4} y={16 - h} width={3} height={h} rx={1.5} fill="white" />
      ))}
    </svg>
  )
}

type AnimatedContainerProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

function AnimatedContainer({ delay = 0.1, children, className }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion()
  if (shouldReduceMotion) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Footer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function navToSection(id: string) {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }

  return (
    <div
      className="relative w-full"
      style={{
        height: FOOTER_HEIGHT,
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div
        className="w-full"
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: FOOTER_HEIGHT }}
      >
        <footer
          className="flex flex-col justify-between"
          style={{ background: 'var(--accent-blue)', height: '100%' }}
        >
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-stretch gap-12 flex-1 w-full">

            {/* Left: logo + nav links */}
            <AnimatedContainer className="flex flex-col gap-7 flex-shrink-0">
              <a href="/" className="flex items-center gap-2 no-underline focus-visible:outline-none">
                <WaveformGlyph />
                <span className="font-sans font-semibold text-[18px] tracking-tight text-white">Reverb</span>
              </a>

              <nav className="flex flex-col gap-2">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Site
                </p>
                <button
                  onClick={() => navToSection('how-it-works')}
                  className="font-sans text-[14px] transition-colors bg-transparent border-none cursor-pointer p-0 text-left w-fit"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  How it works
                </button>
                <button
                  onClick={() => navToSection('features')}
                  className="font-sans text-[14px] transition-colors bg-transparent border-none cursor-pointer p-0 text-left w-fit"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  Features
                </button>

                <p className="font-sans text-[11px] font-semibold uppercase tracking-widest mt-4 mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Legal
                </p>
                <Link
                  to="/legal#terms"
                  className="font-sans text-[14px] no-underline transition-colors"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  Terms of Service
                </Link>
                <Link
                  to="/legal#data-protection"
                  className="font-sans text-[14px] no-underline transition-colors"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  Data Protection
                </Link>
                <Link
                  to="/legal#contact"
                  className="font-sans text-[14px] no-underline transition-colors"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                >
                  Developer Support
                </Link>
              </nav>
            </AnimatedContainer>

            {/* Right: ambient soundwave */}
            <AnimatedContainer delay={0.25} className="flex-1 relative min-h-[160px]">
              <div className="absolute inset-6">
                <FooterWaveform />
              </div>
            </AnimatedContainer>
          </div>

          <div className="max-w-6xl mx-auto px-6 pb-6 pt-2 border-t w-full" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
            <p className="font-sans text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              © {new Date().getFullYear()} Reverb. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
