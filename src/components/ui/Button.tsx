import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans font-semibold rounded transition-all ease-out cursor-pointer select-none ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)] ' +
    'disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-9 px-4 text-sm',
    lg: 'h-9 px-4 text-sm',
  }

  const variants = {
    primary:
      'bg-[var(--accent-blue)] text-white duration-[140ms] ' +
      'hover:bg-[var(--accent-blue-hover)] hover:scale-[1.02] ' +
      'active:scale-[0.97]',
    ghost:
      'bg-transparent text-[var(--accent-blue)] border border-[var(--accent-blue-muted)] duration-[140ms] ' +
      'hover:bg-[var(--accent-blue-light)] hover:border-[var(--accent-blue)] ' +
      'active:scale-[0.97]',
  }

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
