'use client'

import { useState } from 'react'

const TABS = [
  'OVERVIEW',
  'TASKS',
  'NOTES',
  'CHANNELS',
  'BASECAMP',
  'INSTANCES',
  'SESSIONS',
  'USAGE',
  'PERMISSIONS',
  'MODELS',
  'CREDENTIALS',
  'CRON',
  'AGENTS',
  'MEMORY',
  'SKILLS',
  'NODES',
  'DEBUG',
] as const

type Tab = typeof TABS[number]

export default function DocTabs({ content }: { content: Record<Tab, React.ReactNode> }) {
  const [active, setActive] = useState<Tab>('OVERVIEW')

  return (
    <div>
      <div
        className="flex flex-wrap gap-x-1 gap-y-px mb-12 border-b"
        style={{ borderColor: 'var(--stone-border)' }}
      >
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="px-3 py-2.5 text-xs tracking-widest uppercase transition-colors border-b-2 -mb-px whitespace-nowrap"
            style={{
              color: active === tab ? 'var(--stone-text)' : 'var(--stone-muted)',
              borderColor: active === tab ? 'var(--stone-text)' : 'transparent',
              background: 'none',
              cursor: 'pointer',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {content[active]}
      </div>
    </div>
  )
}

export function Placeholder({ section }: { section: string }) {
  return (
    <div className="py-16 text-center">
      <div
        className="text-6xl md:text-7xl font-light mb-4"
        style={{ color: 'var(--stone-border)' }}
      >
        {section}
      </div>
      <p className="text-sm" style={{ color: 'var(--stone-muted)' }}>
        Documentation coming soon
      </p>
    </div>
  )
}
