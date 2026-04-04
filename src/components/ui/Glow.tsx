import React from 'react'

interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'top' | 'bottom' | 'center'
}

export function Glow({ className = '', variant = 'bottom', ...props }: GlowProps) {
  const positionClass =
    variant === 'top' ? 'top-0' : variant === 'bottom' ? 'bottom-0' : 'top-[50%]'

  return (
    <div
      className={`pointer-events-none absolute w-full ${positionClass} ${className}`}
      aria-hidden="true"
      {...props}
    >
      <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.35)_10%,_hsla(var(--brand-foreground)/0)_60%)] sm:h-[512px]" />
      <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.2)_10%,_hsla(var(--brand)/0)_60%)] sm:h-[256px]" />
    </div>
  )
}
