import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

type FeatureValue = true | false | string

interface Feature {
  label: string
  free: FeatureValue
  premium: FeatureValue
  enterprise: FeatureValue
}

const features: Feature[] = [
  {
    label: 'Daily Briefing',
    free: 'Text + audio',
    premium: 'Text + audio',
    enterprise: 'Text + audio + team summary',
  },
  {
    label: 'Action Stack',
    free: 'Basic',
    premium: 'Full + reprioritization',
    enterprise: 'Full + shared team views',
  },
  {
    label: 'Integrations',
    free: '5 integrations',
    premium: 'Unlimited',
    enterprise: 'Unlimited + SSO admin',
  },
  {
    label: 'Recording & transcription',
    free: false,
    premium: 'Unlimited',
    enterprise: 'Unlimited + shared library',
  },
  {
    label: 'Study modes',
    free: 'Lecture only',
    premium: 'Lecture, podcast, prompts',
    enterprise: 'Lecture, podcast, prompts',
  },
  {
    label: 'Smart re-prioritization',
    free: false,
    premium: true,
    enterprise: true,
  },
  {
    label: 'Team features',
    free: false,
    premium: false,
    enterprise: true,
  },
]

function FeatureCell({
  value,
  isBlue,
}: {
  value: FeatureValue
  isBlue: boolean
}) {
  if (value === false) {
    return (
      <div className="flex items-center gap-2.5 py-3">
        <Minus
          size={14}
          style={{ color: isBlue ? 'rgba(255,255,255,0.28)' : 'var(--text-tertiary)', flexShrink: 0 }}
        />
        <span
          className="font-sans text-[13px]"
          style={{ color: isBlue ? 'rgba(255,255,255,0.28)' : 'var(--text-tertiary)' }}
        >
          Not included
        </span>
      </div>
    )
  }

  if (value === true) {
    return (
      <div className="flex items-center gap-2.5 py-3">
        <Check
          size={14}
          style={{ color: isBlue ? 'rgba(255,255,255,0.85)' : 'var(--accent-blue)', flexShrink: 0 }}
        />
        <span
          className="font-sans text-[13px]"
          style={{ color: isBlue ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)' }}
        >
          Included
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-2.5 py-3">
      <Check
        size={14}
        style={{ color: isBlue ? 'rgba(255,255,255,0.85)' : 'var(--accent-blue)', flexShrink: 0, marginTop: 1 }}
      />
      <span
        className="font-sans text-[13px] leading-snug"
        style={{ color: isBlue ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)' }}
      >
        {value}
      </span>
    </div>
  )
}

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: null,
    priceNote: 'No credit card required',
    description: 'Try the core experience.',
    target: 'Trial users, casual students',
    cta: 'Get Early Access',
    isHighlighted: false,
    badge: null,
    featureKey: 'free' as const,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$9.99',
    period: '/mo',
    priceNote: 'student · $14.99 standard',
    description: 'Everything you need to stay ahead.',
    target: 'Power users, grad students, young professionals',
    cta: 'Get Early Access',
    isHighlighted: true,
    badge: 'Most popular',
    featureKey: 'premium' as const,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$20',
    period: '/seat/mo',
    priceNote: 'min 10 seats',
    description: 'For teams that move together.',
    target: 'Sports teams, consulting firms, sales orgs',
    cta: 'Get Early Access',
    isHighlighted: false,
    badge: null,
    featureKey: 'enterprise' as const,
  },
]

export function PricingSection() {
  return (
    <section className="py-24" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p
            className="font-sans font-medium uppercase tracking-widest mb-3"
            style={{ fontSize: 11, color: 'var(--text-tertiary)' }}
          >
            Pricing
          </p>
          <h2
            className="font-sans font-normal leading-[1.15] mb-4"
            style={{ fontSize: 38, color: 'var(--text-primary)' }}
          >
            Start free. Scale when you're ready.
          </h2>
          <p
            className="font-sans font-normal mx-auto"
            style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 440 }}
          >
            Every plan includes the daily briefing and Action Stack. Upgrade when you need more.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => {
            const isBlue = plan.isHighlighted
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.09 }}
                className="relative rounded-2xl flex flex-col"
                style={{
                  background: isBlue ? 'var(--accent-blue)' : 'var(--bg-surface)',
                  border: isBlue ? 'none' : '1px solid var(--border-subtle)',
                  boxShadow: isBlue
                    ? '0 8px 40px rgba(37,99,235,0.28), 0 2px 8px rgba(37,99,235,0.12)'
                    : 'var(--shadow-card)',
                  ...(isBlue ? { transform: 'translateY(-6px)' } : {}),
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="font-sans font-semibold uppercase tracking-widest whitespace-nowrap px-3 py-1 rounded-full"
                      style={{
                        fontSize: 10,
                        background: 'var(--text-primary)',
                        color: '#ffffff',
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 pb-6">
                  {/* Plan name */}
                  <p
                    className="font-mono font-medium uppercase tracking-widest mb-5"
                    style={{
                      fontSize: 11,
                      color: isBlue ? 'rgba(255,255,255,0.6)' : 'var(--text-tertiary)',
                    }}
                  >
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div className="mb-1 flex items-end gap-1">
                    <span
                      className="font-sans font-bold leading-none"
                      style={{
                        fontSize: 46,
                        color: isBlue ? '#ffffff' : 'var(--text-primary)',
                      }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className="font-sans mb-2"
                        style={{
                          fontSize: 15,
                          color: isBlue ? 'rgba(255,255,255,0.55)' : 'var(--text-tertiary)',
                        }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className="font-mono mb-5"
                    style={{
                      fontSize: 11,
                      color: isBlue ? 'rgba(255,255,255,0.45)' : 'var(--text-tertiary)',
                    }}
                  >
                    {plan.priceNote}
                  </p>

                  {/* Description */}
                  <p
                    className="font-sans leading-snug mb-6"
                    style={{
                      fontSize: 14,
                      color: isBlue ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)',
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to="/early-access"
                    className="block text-center rounded-full font-sans font-semibold transition-all duration-[140ms]"
                    style={{
                      fontSize: 14,
                      padding: '10px 0',
                      background: isBlue ? '#ffffff' : 'transparent',
                      color: 'var(--accent-blue)',
                      border: isBlue ? 'none' : '1.5px solid var(--accent-blue)',
                    }}
                    onMouseEnter={e => {
                      if (isBlue) {
                        ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.88)'
                      } else {
                        ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-blue-light)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (isBlue) {
                        ;(e.currentTarget as HTMLElement).style.background = '#ffffff'
                      } else {
                        ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                      }
                    }}
                  >
                    {plan.cta}
                  </Link>
                </div>

                {/* Divider */}
                <div
                  className="mx-8"
                  style={{
                    height: 1,
                    background: isBlue ? 'rgba(255,255,255,0.15)' : 'var(--border-subtle)',
                  }}
                />

                {/* Features */}
                <div className="px-8 pt-2 pb-8 flex-1">
                  {features.map((f, fi) => (
                    <div
                      key={f.label}
                      style={{
                        borderBottom: fi < features.length - 1
                          ? `1px solid ${isBlue ? 'rgba(255,255,255,0.08)' : 'var(--border-subtle)'}`
                          : 'none',
                      }}
                    >
                      <p
                        className="font-sans font-medium pt-3 pb-0.5"
                        style={{
                          fontSize: 12,
                          color: isBlue ? 'rgba(255,255,255,0.5)' : 'var(--text-tertiary)',
                        }}
                      >
                        {f.label}
                      </p>
                      <FeatureCell value={f[plan.featureKey]} isBlue={isBlue} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
