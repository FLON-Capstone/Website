import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

export function EmailInput() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) navigate(`/early-access?email=${encodeURIComponent(email)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="
          flex-1 h-9 px-4 border border-[var(--border-medium)]
          bg-[var(--bg-primary)] text-[var(--text-primary)]
          font-sans text-[15px] placeholder:text-[var(--text-tertiary)]
          outline-none
          focus:ring-2 focus:ring-[var(--accent-blue)] focus:border-transparent
          transition-all duration-[140ms]
        "
      />
      <Button type="submit" variant="primary" size="md">
        Get Early Access
      </Button>
    </form>
  )
}
