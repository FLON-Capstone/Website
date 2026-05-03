import { motion } from 'framer-motion'
import { EmailInput } from '../ui/EmailInput'

export function FinalCTA() {
  return (
    <section className="bg-[var(--bg-elevated)] py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-pill bg-[var(--accent-blue-light)] text-[var(--accent-blue)] font-sans font-medium text-xs uppercase tracking-widest mb-6">
            Early Access
          </span>

          <h2 className="font-sans font-normal text-[var(--text-primary)] leading-[1.2] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
            Your days are already full.<br />Make them count.
          </h2>

          <p className="font-sans font-normal text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-[480px] mx-auto">
            Join thousands of students who use Reverb to stop guessing and start executing.
          </p>

          <div className="flex justify-center">
            <EmailInput />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
