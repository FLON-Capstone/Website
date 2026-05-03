import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Connect your world',
    description:
      'Link your calendar, email, Canvas, and Slack. One-time setup. Two minutes.',
  },
  {
    number: '02',
    title: 'Reverb synthesizes your day',
    description:
      'The AI maps your deadlines, flags urgent items, and builds a prioritized picture of exactly what needs your attention — and in what order.',
  },
  {
    number: '03',
    title: 'Get your Briefing and Action Stack',
    description:
      'Your Briefing is ready each morning — audio or text, your choice. Your Action Stack tells you what to tackle first and sends nudges as your day shifts.',
  },
  {
    number: '04',
    title: 'Stay in control',
    description:
      'Review transcripts, edit your stack, search anything. Reverb works in whatever format fits the moment — never just one mode.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[var(--bg-surface)] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="font-sans font-medium text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="font-sans font-normal text-[38px] text-[var(--text-primary)] leading-[1.2]">
            Set up in minutes.<br />Built for the long run.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-10 bottom-10 w-px bg-[var(--border-subtle)] hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
                className="flex items-start gap-8"
              >
                <div className="relative z-10 shrink-0 bg-[var(--bg-surface)] py-1">
                  <span
                    className="font-sans text-[var(--accent-blue)] text-[38px] leading-none select-none block w-14 text-center"
                    style={{ opacity: 0.45 }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-sans font-semibold text-[21px] text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans font-normal text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[560px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
