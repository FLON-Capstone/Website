import { motion } from 'framer-motion'
import { Layers, ListTodo, MonitorOff } from 'lucide-react'
import { PainPointCard } from './PainPointCard'

const problems = [
  {
    Icon: Layers,
    label: 'Six apps. Zero clarity.',
    description:
      'The average student uses 6+ tools to track assignments, deadlines, and meetings. None of them talk to each other. Reverb pulls it all into one place.',
    image: '/windows-v94mlgvsza4-unsplash.jpg',
  },
  {
    Icon: ListTodo,
    label: 'You know what\'s due. Not what to do next.',
    description:
      '41% of knowledge workers spend more time figuring out what to work on than actually working. Reverb closes that gap.',
    image: '/loic-furhoff-qeIaMQP_xQE-unsplash.jpg',
  },
  {
    Icon: MonitorOff,
    label: 'No desk time? No problem.',
    description:
      'Productivity tools assume you\'re sitting at a computer. Reverb meets you at the gym, on your commute, between classes.',
    image: '/busystudent.jpg',
  },
]

export function ProblemSection() {
  return (
    <section className="bg-[var(--bg-surface)] pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p className="font-sans font-medium text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
            The problem
          </p>
          <h2 className="font-sans font-normal text-[38px] text-[var(--text-primary)] leading-[1.2]">
            You're not overwhelmed.<br />You're under-organized.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
            >
              <PainPointCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
