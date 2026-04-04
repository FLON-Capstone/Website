import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

function WaveformGlyph() {
  const bars = [6, 10, 14, 10, 6]
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 4}
          y={16 - h}
          width={3}
          height={h}
          rx={1.5}
          fill="var(--accent-blue)"
        />
      ))}
    </svg>
  )
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLanding = pathname === '/'
  const [scrolled, setScrolled] = useState(!isLanding)
  const pendingScroll = useRef<string | null>(null)

  useEffect(() => {
    if (!isLanding) { setScrolled(true); return }
    setScrolled(window.scrollY > window.innerHeight - 64)
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 64)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLanding])

  // After navigating back to landing, scroll to the pending section
  useEffect(() => {
    if (isLanding && pendingScroll.current) {
      const id = pendingScroll.current
      pendingScroll.current = null
      setTimeout(() => scrollToSection(id), 100)
    }
  }, [isLanding])

  function navToSection(id: string) {
    if (isLanding) {
      scrollToSection(id)
    } else {
      pendingScroll.current = id
      navigate('/')
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'white' : 'transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm">
          <WaveformGlyph />
          <span
            className="font-sans font-semibold text-[18px] tracking-tight transition-colors duration-300"
            style={{ color: scrolled ? '#0f172a' : 'white' }}
          >
            Reverb
          </span>
        </a>

        <nav className="flex items-center gap-6">
          <button
            onClick={() => navToSection('how-it-works')}
            className="font-sans text-sm font-medium transition-colors duration-300 hidden md:block bg-transparent border-none cursor-pointer p-0"
            style={{ color: scrolled ? '#475569' : 'rgba(255,255,255,0.8)' }}
          >
            How it works
          </button>
          <button
            onClick={() => navToSection('features')}
            className="font-sans text-sm font-medium transition-colors duration-300 hidden md:block bg-transparent border-none cursor-pointer p-0"
            style={{ color: scrolled ? '#475569' : 'rgba(255,255,255,0.8)' }}
          >
            Features
          </button>
          <Button variant="primary" size="sm" onClick={() => navigate('/early-access')}>
            Get Early Access
          </Button>
        </nav>
      </div>
    </header>
  )
}
