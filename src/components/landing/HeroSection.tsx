import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'
import { AudioWaveform } from './AudioWaveform'
import { Glow } from '../ui/Glow'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/edwin-andrade-4V1dC_eoCwg-unsplash.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Bottom gradient — fades in after page loads */}
        <motion.div
          className="absolute inset-x-0 bottom-0 h-72"
          style={{ background: 'linear-gradient(to top, rgba(37,99,235,0.8), rgba(37,99,235,0.3), transparent)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-white/15 text-white font-sans font-medium text-xs uppercase tracking-widest mb-6">
                AI Productivity Platform
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-sans font-normal text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(38px, 5.5vw, 72px)' }}
            >
              Know exactly<br />what to do next.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="font-sans font-normal text-[17px] text-white/80 leading-relaxed max-w-[480px] mb-8"
            >
              Reverb synthesizes your calendar, email, and coursework into a daily briefing and prioritized action plan — delivered as a 5-minute audio briefing, a skimmable one-pager, or both. In whatever format fits the moment.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-4 mb-8">
              <Button variant="primary" size="lg" onClick={() => navigate('/early-access')}>Get Early Access</Button>
              <Button
                variant="ghost"
                size="lg"
                className="!bg-transparent !text-white !border-white hover:!bg-white/10 hover:!border-white"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Features
              </Button>
            </motion.div>

            <motion.p {...fadeUp(0.4)} className="font-sans text-[13px] text-white/70 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
              Trusted by 2,000+ students
            </motion.p>
          </div>

          {/* Right: waveform — transparent card with white outline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="hidden md:flex flex-col items-center justify-center"
          >
            <div
              className="relative w-full flex flex-col items-center justify-center pt-12 pb-24 px-16 rounded-xl overflow-hidden"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)' }}
            >
              <div className="absolute top-5 left-0 right-0 flex justify-center">
                <span className="font-mono text-[11px] text-white tracking-widest uppercase">Now playing</span>
              </div>
              <div className="scale-[2.2] origin-center">
                <AudioWaveform color="white" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <Glow variant="bottom" />
    </section>
  )
}
