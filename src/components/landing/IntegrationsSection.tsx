import { motion } from 'framer-motion'

const logos = [
  { id: 'gcal', src: '/gcallogo.png', alt: 'Google Calendar' },
  { id: 'slack', src: '/slacklogo.png', alt: 'Slack' },
  { id: 'notion', src: '/notionlogo.png', alt: 'Notion' },
  { id: 'canvas', src: '/canvaslogo.jpg', alt: 'Canvas' },
  { id: 'outlook', src: '/outlooklogo.png', alt: 'Outlook' },
  { id: 'zoom', src: '/zoomlogo.png', alt: 'Zoom' },
  { id: 'teams', src: '/teamslogo.png', alt: 'Microsoft Teams' },
  { id: 'google', src: '/googlelogo.png', alt: 'Google' },
  { id: 'asana', src: '/asanalogo.png', alt: 'Asana' },
  { id: 'monday', src: '/mondaylogo.png', alt: 'Monday' },
  { id: 'notesapp', src: '/notesapplogo.png', alt: 'Notes' },
  { id: 'obsidian', src: '/obsidianlogo.png', alt: 'Obsidian' },
  { id: 'todo', src: '/todologo.png', alt: 'Microsoft To Do' },
  { id: 'zapier', src: '/zapierlogo.png', alt: 'Zapier' },
]

// Duplicate for seamless loop
const track = [...logos, ...logos]

export function IntegrationsSection() {
  return (
    <section className="py-20 overflow-hidden" style={{
      background: 'linear-gradient(160deg, #2563eb 0%, #1e56d4 100%)',
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <p className="font-sans font-medium text-xs text-white/60 uppercase tracking-widest mb-3">
            Integrations
          </p>
          <h2 className="font-sans font-normal text-[32px] text-white leading-[1.2]">
            Integrates with your existing workflows
          </h2>
        </motion.div>
      </div>

      {/* Marquee track — full bleed */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #2563eb, transparent)' }} />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #1e56d4, transparent)' }} />

        <div className="flex" style={{ animation: 'marquee 28s linear infinite' }}>
          {track.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain"
                style={{ opacity: 0.9, ...(logo.id === 'zoom' && { filter: 'brightness(0) invert(1)' }) }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
