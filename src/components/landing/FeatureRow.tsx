import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import React from 'react'

interface FeatureRowProps {
  number: string
  label: string
  headline: string
  description: string
  bullets?: string[]
  reverse?: boolean
  mockup: React.ReactNode
}

export function FeatureRow({ number, label, headline, description, bullets, reverse, mockup }: FeatureRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 border-b border-[var(--border-subtle)] last:border-0"
    >
      {/* Text side */}
      <div className={reverse ? 'md:order-last' : ''}>
        <span
          className="font-sans text-[var(--accent-blue)] text-[54px] leading-none select-none block mb-2"
          style={{ opacity: 0.4 }}
        >
          {number}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-pill bg-[var(--accent-blue-light)] text-[var(--accent-blue)] font-sans font-medium text-xs uppercase tracking-wide mb-3">
          {label}
        </span>
        <h3 className="font-sans font-semibold text-[28px] text-[var(--text-primary)] leading-[1.25] mt-2 mb-3">
          {headline}
        </h3>
        <p className="font-sans font-normal text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[420px] mb-5">
          {description}
        </p>
        {bullets && (
          <ul className="space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check size={14} color="var(--accent-blue)" className="mt-[3px] shrink-0" />
                <span className="font-sans text-[13px] text-[var(--text-secondary)]">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mockup side */}
      <motion.div
        className={reverse ? '' : 'md:order-last'}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div
          className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-8 pointer-events-none select-none"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          {mockup}
        </div>
      </motion.div>
    </motion.div>
  )
}
