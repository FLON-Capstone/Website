import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  name: string
  descriptor: string
  timestamp: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I used to miss assignments because I'd forget to check my calendar. Reverb's morning briefing caught a paper due at midnight — I had no idea. That alone was worth it.",
    name: 'Maya T.',
    descriptor: 'Senior · Psychology',
    timestamp: '00:01:12',
    avatar: '/portrait.jpg',
  },
  {
    id: 2,
    quote: "I commute 45 minutes each way. I used to just listen to music. Now I'm reviewing lecture notes the whole ride and my GPA went up half a point by midterms.",
    name: 'James R.',
    descriptor: 'Junior · Economics',
    timestamp: '00:00:58',
    avatar: '/krzhck-gMg3zSOdlgE-unsplash.jpg',
  },
  {
    id: 3,
    quote: "Reading dense textbook pages is brutal for me. Listening to an audio version of my notes is actually how my brain works. I wish I had this freshman year.",
    name: 'Sofia L.',
    descriptor: 'Sophomore · Neuroscience',
    timestamp: '00:02:03',
    avatar: '/ohlamour-studio-aeNyM3wvlvs-unsplash.jpg',
  },
  {
    id: 4,
    quote: "Reverb turned my gym sessions into study sessions. I knocked out two chapters of case law just on the treadmill. My study group thinks I have a secret.",
    name: 'Marcus W.',
    descriptor: '1L · Law School',
    timestamp: '00:01:44',
    avatar: '/getty-images-xrEbUVyATxo-unsplash.jpg',
  },
  {
    id: 5,
    quote: "I was drowning in three note apps, a syllabus PDF, and Slack from my study group. Reverb pulled it all together and told me exactly what to focus on.",
    name: 'Priya K.',
    descriptor: 'Junior · Computer Science',
    timestamp: '00:00:37',
    avatar: '/getty-images-PMuATRM_xrA-unsplash.jpg',
  },
]

const getVisibleCount = (width: number) => {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [bounceDir, setBounceDir] = useState<1 | -1>(1)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const visibleCount = getVisibleCount(windowWidth)
  const maxIndex = testimonials.length - visibleCount

  useEffect(() => {
    if (!isAutoPlaying) return
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= maxIndex) { setBounceDir(-1); return prev - 1 }
        if (prev <= 0)        { setBounceDir(1);  return prev + 1 }
        return prev + bounceDir
      })
    }, 4000)
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [isAutoPlaying, maxIndex, bounceDir])

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goNext = () => {
    if (currentIndex < maxIndex) { setCurrentIndex(i => i + 1); pauseAutoPlay() }
  }
  const goPrev = () => {
    if (currentIndex > 0) { setCurrentIndex(i => i - 1); pauseAutoPlay() }
  }
  const goTo = (i: number) => { setCurrentIndex(i); pauseAutoPlay() }

  const canNext = currentIndex < maxIndex
  const canPrev = currentIndex > 0

  return (
    <section className="bg-[var(--bg-primary)] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="font-sans font-medium text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
              What students are saying
            </p>
            <h2 className="font-sans font-normal text-[32px] text-[var(--text-primary)] leading-[1.2]">
              Hear from your peers.
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-2 shrink-0 pb-1">
            <button
              onClick={goPrev}
              disabled={!canPrev}
              aria-label="Previous"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-[140ms]
                ${canPrev
                  ? 'border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue-light)]'
                  : 'border-[var(--border-subtle)] text-[var(--text-tertiary)] cursor-not-allowed opacity-40'
                }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={goNext}
              disabled={!canNext}
              aria-label="Next"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-[140ms]
                ${canNext
                  ? 'border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] hover:bg-[var(--accent-blue-light)]'
                  : 'border-[var(--border-subtle)] text-[var(--text-tertiary)] cursor-not-allowed opacity-40'
                }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Slider track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ type: 'spring', stiffness: 60, damping: 18 }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <motion.div
                  className="
                    h-full bg-[var(--bg-primary)] rounded-xl p-8
                    border-l-[3px] border-l-[var(--accent-blue)]
                    border border-[var(--border-subtle)]
                    transition-all duration-[140ms] ease-out
                    hover:-translate-y-0.5
                  "
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  whileHover={{ boxShadow: '0 8px 24px rgba(37,99,235,0.1), 0 2px 8px rgba(0,0,0,0.06)' }}
                >
                  {/* Quote */}
                  <blockquote className="font-sans font-normal text-[15px] text-[var(--text-primary)] leading-relaxed mb-6">
                    "{t.quote}"
                  </blockquote>

                  {/* Footer */}
                  <div className="flex items-center justify-between flex-wrap gap-3 pt-5 border-t border-[var(--border-subtle)]">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0 border border-[var(--border-subtle)]"
                      />
                      <span className="font-mono text-[13px] text-[var(--text-secondary)]">
                        {t.name} · {t.descriptor}
                      </span>
                    </div>
                    <span className="font-mono text-[12px] bg-[var(--accent-blue-light)] text-[var(--accent-blue)] px-2 py-0.5 rounded">
                      [{t.timestamp}]
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative w-2 h-2 focus:outline-none"
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: i === currentIndex ? '#2563eb' : '#e4e6eb',
                  scale: i === currentIndex ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
