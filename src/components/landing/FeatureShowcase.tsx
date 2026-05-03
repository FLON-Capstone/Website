import { motion } from 'framer-motion'
import { Play, FileText, AudioLines, BookOpen, Check } from 'lucide-react'
import { FeatureRow } from './FeatureRow'

/* ── Mockup schematics ── */

function BriefingMockup() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-sans font-semibold text-[13px] text-[var(--accent-blue)] uppercase tracking-wide">Today's Briefing</span>
        <span className="font-mono text-[11px] text-[var(--text-tertiary)]">15 min</span>
      </div>
      <div className="h-px bg-[var(--border-subtle)]" />
      {['Midterm Friday, 2 days out', '2 flagged emails from Prof. Heller', 'Club meeting at 7pm'].map((item) => (
        <div key={item} className="flex items-start gap-2">
          <span className="text-[var(--accent-blue)] text-[10px] mt-1">·</span>
          <span className="font-sans text-[13px] text-[var(--text-secondary)]">{item}</span>
        </div>
      ))}
      <div className="pt-2">
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-[var(--accent-blue)] text-white font-sans font-semibold text-[13px]">
          <Play size={12} fill="white" /> Play Briefing
        </button>
      </div>
    </div>
  )
}

function StudyMockup() {
  const formats = [
    { icon: AudioLines, name: 'Lecture Mode', desc: 'Clear, structured walkthrough of your material.' },
    { icon: BookOpen, name: 'Podcast Mode', desc: 'Two AI hosts discuss and unpack your content.' },
    { icon: FileText, name: 'Response Mode', desc: 'Practice-ready Q&A from your notes.' },
  ]
  return (
    <div className="space-y-3">
      {formats.map((f, i) => (
        <div
          key={f.name}
          className={`flex items-start gap-3 p-4 rounded-md border transition-colors ${
            i === 1
              ? 'border-[var(--accent-blue)] bg-[var(--accent-blue-light)]'
              : 'border-[var(--border-subtle)] bg-[var(--bg-primary)]'
          }`}
        >
          <f.icon size={18} color={i === 1 ? 'var(--accent-blue)' : 'var(--text-tertiary)'} className="shrink-0 mt-0.5" />
          <div>
            <p className={`font-sans font-semibold text-[13px] ${i === 1 ? 'text-[var(--accent-blue)]' : 'text-[var(--text-primary)]'}`}>
              {f.name}
            </p>
            <p className="font-sans text-[11px] text-[var(--text-secondary)] mt-0.5">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function RecordingMockup() {
  const lines = [
    { ts: '00:03', text: 'The key difference between supervised and unsupervised learning is...', active: true },
    { ts: '00:18', text: 'In supervised learning, the model is trained on labeled data.' },
    { ts: '00:31', text: 'Action item flagged. Review chapter 4 before Friday\'s exam.' },
  ]
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-[var(--red-alert)] animate-pulse" />
        <span className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wide">Recording · 00:42</span>
      </div>
      {lines.map((l) => (
        <div
          key={l.ts}
          className={`flex items-start gap-3 p-3 rounded-md ${
            l.active ? 'bg-[var(--accent-blue-light)] border-l-2 border-[var(--accent-blue)]' : ''
          }`}
        >
          <span className="font-mono text-[11px] text-[var(--text-tertiary)] shrink-0 mt-0.5">{l.ts}</span>
          <span className={`font-mono text-[12px] leading-relaxed ${l.active ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
            {l.text}
          </span>
        </div>
      ))}
    </div>
  )
}

function ActionStackMockup() {
  const tasks = [
    { label: 'Review Econ lecture notes', time: '45 min', due: 'Due Friday', urgency: 'urgent', done: false },
    { label: 'Email Prof. Heller about extension', time: '10 min', due: 'Due tomorrow', urgency: 'soon', done: false },
    { label: 'Read Ch. 7, Micro', time: '30 min', due: 'Due next week', urgency: 'later', done: true },
  ]
  const urgencyStyles: Record<string, string> = {
    urgent: 'bg-[#fef2f2] text-[var(--red-alert)]',
    soon: 'bg-[#fffbeb] text-[#b45309]',
    later: 'bg-[var(--bg-surface)] text-[var(--text-tertiary)]',
  }
  const urgencyLabels: Record<string, string> = {
    urgent: 'Urgent',
    soon: 'Tomorrow',
    later: 'This week',
  }
  return (
    <div className="space-y-3">
      {tasks.map((t) => (
        <div
          key={t.label}
          className={`flex items-start gap-3 p-4 rounded-md border ${
            t.done
              ? 'border-[var(--border-subtle)] bg-[var(--bg-surface)] opacity-60'
              : 'bg-[var(--bg-primary)] border-[var(--border-subtle)]'
          }`}
        >
          <div className={`w-4 h-4 rounded-sm border-2 mt-0.5 shrink-0 flex items-center justify-center ${
            t.done ? 'border-[var(--accent-blue)] bg-[var(--accent-blue)]' : 'border-[var(--accent-blue)]'
          }`}>
            {t.done && <Check size={10} color="white" strokeWidth={3} />}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`font-sans font-medium text-[13px] ${t.done ? 'line-through text-[var(--text-tertiary)]' : 'text-[var(--text-primary)]'}`}>
              {t.label}
            </p>
            <p className="font-mono text-[11px] text-[var(--text-tertiary)] mt-1">{t.time} · {t.due}</p>
          </div>
          {!t.done && (
            <span className={`text-[11px] font-sans font-medium px-2 py-0.5 rounded-pill shrink-0 ${urgencyStyles[t.urgency]}`}>
              {urgencyLabels[t.urgency]}
            </span>
          )}
          {t.done && (
            <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-pill shrink-0 bg-[var(--accent-blue-light)] text-[var(--accent-blue)]">
              Done
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

const features = [
  {
    number: '01',
    label: 'Daily Briefing',
    headline: 'Your morning, already organized.',
    description: 'Every day starts with a synthesized snapshot of your day — deadlines, flagged emails, today\'s schedule, and urgent items. Get it as a 5-minute audio briefing or a skimmable one-pager. Pulls from your calendar, email, Canvas, and Slack.',
    bullets: ['Audio briefing or text one-pager. You choose.', 'Compiled from your calendar, inbox, and coursework', 'Ready every morning before you open your device'],
    mockup: <BriefingMockup />,
    reverse: false,
  },
  {
    number: '02',
    label: 'Action Stack',
    headline: 'Always know what to do next.',
    description: 'The Action Stack translates your Briefing into a prioritized, time-boxed to-do list. Reverb breaks large tasks into realistic work blocks and sends smart nudges throughout the day on what to start, continue, and wrap up.',
    bullets: ['Priority-sorted with urgency indicators', 'Smart nudges adapt as your schedule shifts', 'Time-boxed blocks so you can actually plan your day'],
    mockup: <ActionStackMockup />,
    reverse: true,
  },
  {
    number: '03',
    label: 'Study Mode',
    headline: 'Upload once. Learn anywhere.',
    description: 'Drop in a PDF, lecture slide, or reading. Choose from Lecture, Podcast, or Response and press play. Reverb handles the rest.',
    bullets: ['Three formats for three different learning modes', 'Synchronized transcript with active line highlight', 'Speed controls and skip ahead'],
    mockup: <StudyMockup />,
    reverse: false,
  },
  {
    number: '04',
    label: 'Smart Recording',
    headline: 'Never lose what was said in the room.',
    description: 'Record any lecture, office hours, or meeting. Reverb transcribes in real time, summarizes key points, and automatically flags action items — which flow straight into your Action Stack.',
    bullets: ['Live transcription as you record', 'Action items auto-detected and added to your stack', 'Searchable from day one'],
    mockup: <RecordingMockup />,
    reverse: true,
  },
]

export function FeatureShowcase() {
  return (
    <section id="features" className="bg-[var(--bg-primary)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <p className="font-sans font-medium text-xs text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
            What Reverb does
          </p>
          <h2 className="font-sans font-normal text-[38px] text-[var(--text-primary)] leading-[1.2]">
            Everything you need.<br />Nothing you don't.
          </h2>
        </motion.div>

        <div>
          {features.map((f) => (
            <FeatureRow key={f.number} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
