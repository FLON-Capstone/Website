import { LucideIcon } from 'lucide-react'

interface PainPointCardProps {
  Icon: LucideIcon
  label: string
  description: string
  image?: string
}

export function PainPointCard({ Icon, label, description, image }: PainPointCardProps) {
  return (
    <div
      className="
        bg-[var(--bg-primary)] rounded-lg overflow-hidden
        border border-[var(--border-subtle)]
        transition-all duration-[140ms] ease-out
        hover:-translate-y-0.5
        cursor-default
      "
      style={{ boxShadow: 'var(--shadow-sm)' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = 'var(--shadow-card)'
        el.style.borderColor = 'var(--border-medium)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = 'var(--shadow-sm)'
        el.style.borderColor = 'var(--border-subtle)'
      }}
    >
      {image && (
        <div className="h-36 overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
      )}
      <div className="p-8">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[var(--accent-blue-light)]">
          <Icon size={20} color="var(--accent-blue)" strokeWidth={1.75} />
        </div>
        <h3 className="font-sans font-semibold text-[17px] text-[var(--text-primary)] mt-4 mb-2">
          {label}
        </h3>
        <p className="font-sans font-normal text-[15px] text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
