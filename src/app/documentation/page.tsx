import { Metadata } from 'next'
import Link from 'next/link'
import DocTabs from '@/components/DocTabs'

function Placeholder({ section }: { section: string }) {
  return (
    <div className="py-16 text-center">
      <div className="text-6xl md:text-7xl font-light mb-4" style={{ color: 'var(--stone-border)' }}>
        {section}
      </div>
      <p className="text-sm" style={{ color: 'var(--stone-muted)' }}>
        Documentation coming soon
      </p>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Documentation — PeakAI',
  description: 'Complete documentation for the PeakAI dashboard and all system components.',
}

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-32 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--stone-muted)' }}>
            documentation
          </div>

          <h1 className="text-5xl md:text-6xl font-light leading-none tracking-tight mb-16" style={{ color: 'var(--stone-text)' }}>
            PeakAI Docs
          </h1>

          <DocTabs content={{
            OVERVIEW: (
              <div>
                <div className="space-y-12">
                  {/* Architecture Overview */}
                  <section>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      Architecture Overview
                    </h2>
                    <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                      PeakAI is designed as a modular, agentic system with three primary layers:
                    </p>
                    <div className="space-y-4">
                      {[
                        { n: '1', title: 'API Compatibility Layer', desc: 'Provides a unified interface for various LLM providers (Anthropic, OpenAI, Minimax). Handles streaming and normalization of provider-specific schemas.' },
                        { n: '2', title: 'Agentic Runtime Layer', desc: 'The "brain" of the system. Manages the action loop: Reasoning → Tool Selection → Execution → Observation. Includes fine-grained permission policies.' },
                        { n: '3', title: 'Capability Layer', desc: 'Native integrations (Gmail, Calendar) and the MCP Bridge, which allows PeakAI to use any Model Context Protocol server.' },
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded" style={{ background: 'var(--stone-panel)' }}>
                          <h3 className="font-medium mb-1" style={{ color: 'var(--stone-text)' }}>{item.n}. {item.title}</h3>
                          <p className="text-sm" style={{ color: 'var(--stone-muted)' }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* LLM Providers */}
                  <section style={{ borderTop: '1px solid var(--stone-border)', paddingTop: '2rem' }}>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      LLM Providers
                    </h2>
                    <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                      PeakAI supports any OpenAI-compatible API. Configure your preferred provider:
                    </p>
                    <div className="p-6 rounded font-mono text-sm overflow-x-auto" style={{ background: 'var(--stone-panel)', color: 'var(--stone-text)' }}>
                      <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># Using Ollama (local models)</div>
                      <div className="mb-4">OLLAMA_BASE_URL=http://localhost:11434</div>
                      <div className="mb-4">OLLAMA_MODEL=llama3.2</div>
                      <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># Using OpenAI</div>
                      <div className="mb-4">OPENAI_API_KEY=sk-your-key-here</div>
                      <div className="mb-4">OPENAI_MODEL=gpt-4o</div>
                      <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># Using Anthropic</div>
                      <div>ANTHROPIC_API_KEY=sk-ant-your-key-here</div>
                    </div>
                  </section>

                  {/* Built-in Tools */}
                  <section style={{ borderTop: '1px solid var(--stone-border)', paddingTop: '2rem' }}>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      Built-in Tools
                    </h2>
                    <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                      PeakAI includes native tools for common tasks:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ borderBottom: '1px solid var(--stone-border)' }}>
                            <th className="text-left py-2 font-medium" style={{ color: 'var(--stone-text)' }}>Tool</th>
                            <th className="text-left py-2 font-medium" style={{ color: 'var(--stone-text)' }}>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { tool: 'GmailToolbox', desc: 'Search, read, and send emails via Google Gmail API' },
                            { tool: 'CalendarToolbox', desc: 'Manage events and schedules via Google Calendar API' },
                            { tool: 'FileSystem', desc: 'Read, write, and manipulate local files (permission-controlled)' },
                          ].map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--stone-border)' }}>
                              <td className="py-2 font-mono" style={{ color: 'var(--stone-text)' }}>{row.tool}</td>
                              <td className="py-2" style={{ color: 'var(--stone-muted)' }}>{row.desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* MCP Integration */}
                  <section style={{ borderTop: '1px solid var(--stone-border)', paddingTop: '2rem' }}>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      Model Context Protocol (MCP)
                    </h2>
                    <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                      PeakAI acts as an MCP Host, connecting to external MCP servers to extend its capabilities. MCP tools are registered with a{' '}
                      <code className="px-1 rounded text-sm" style={{ background: 'var(--stone-panel)', color: 'var(--stone-text)' }}>mcp__</code> prefix.
                    </p>
                    <div className="p-4 rounded" style={{ background: 'var(--stone-panel)' }}>
                      <h3 className="font-medium mb-2" style={{ color: 'var(--stone-text)' }}>How MCP Works</h3>
                      <ol className="text-sm space-y-1 list-decimal list-inside" style={{ color: 'var(--stone-muted)' }}>
                        <li><strong style={{ color: 'var(--stone-text)' }}>Discovery:</strong> On startup, PeakNode initializes the MCP manager</li>
                        <li><strong style={{ color: 'var(--stone-text)' }}>Registration:</strong> Connects to configured servers and fetches tool manifests</li>
                        <li><strong style={{ color: 'var(--stone-text)' }}>Execution:</strong> Tools are routed to the correct MCP server transport</li>
                      </ol>
                    </div>
                  </section>

                  {/* Google APIs */}
                  <section style={{ borderTop: '1px solid var(--stone-border)', paddingTop: '2rem' }}>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      Google API Setup
                    </h2>
                    <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                      To use Gmail and Calendar tools, configure Google OAuth:
                    </p>
                    <div className="space-y-3 text-sm">
                      {[
                        { n: '1', text: 'Create a project in the Google Cloud Console' },
                        { n: '2', text: 'Enable Gmail API and Google Calendar API' },
                        { n: '3', text: 'Configure OAuth Consent Screen (Internal or External)' },
                        { n: '4', text: 'Download JSON and save as client_secret.json' },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium" style={{ background: 'var(--stone-text)', color: 'var(--stone-bg)' }}>{item.n}</div>
                          <p style={{ color: 'var(--stone-muted)' }}>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Adapters */}
                  <section style={{ borderTop: '1px solid var(--stone-border)', paddingTop: '2rem' }}>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      Adapters
                    </h2>
                    <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                      Adapters connect PeakAI to external communication platforms:
                    </p>
                    <div className="p-4 rounded" style={{ background: 'var(--stone-panel)' }}>
                      <h3 className="font-medium mb-2" style={{ color: 'var(--stone-text)' }}>Telegram Bot</h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--stone-muted)' }}>
                        The primary mobile interface for PeakAI. Features include:
                      </p>
                      <ul className="text-sm space-y-1 list-disc list-inside" style={{ color: 'var(--stone-muted)' }}>
                        <li>Real-time tool execution display</li>
                        <li>Message buffering (600ms) for multi-part prompts</li>
                        <li>Progressive UI updates for long-running tasks</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-4 rounded font-mono text-sm" style={{ background: 'var(--stone-panel)', color: 'var(--stone-text)' }}>
                      <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># Telegram Configuration</div>
                      <div>TELEGRAM_BOT_TOKEN=your-bot-token</div>
                      <div>ALLOWED_TELEGRAM_USER_IDS=12345,67890</div>
                    </div>
                  </section>

                  {/* Permission System */}
                  <section style={{ borderTop: '1px solid var(--stone-border)', paddingTop: '2rem' }}>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      Permission System
                    </h2>
                    <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                      PeakAI uses a fine-grained permission policy system:
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {[
                        { title: 'DangerFullAccess', desc: 'Full file and terminal access' },
                        { title: 'ReadOnly', desc: 'Read-only file access' },
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded" style={{ background: 'var(--stone-panel)' }}>
                          <div className="font-medium mb-1" style={{ color: 'var(--stone-text)' }}>{item.title}</div>
                          <div style={{ color: 'var(--stone-muted)' }}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs mt-4" style={{ color: 'var(--stone-muted)' }}>
                      ⚠️ Always ensure your whitelisted User IDs are correct, especially when using the Telegram adapter.
                    </p>
                  </section>

                  {/* Quick Start */}
                  <section style={{ borderTop: '1px solid var(--stone-border)', paddingTop: '2rem' }}>
                    <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>
                      Quick Start
                    </h2>
                    <div className="p-6 rounded font-mono text-sm" style={{ background: 'var(--stone-panel)', color: 'var(--stone-text)' }}>
                      <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># 1. Install and launch</div>
                      <div className="mb-4">open PeakAI.app</div>
                      <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># 2. Configure your LLM (if not using Ollama)</div>
                      <div className="mb-4">export OPENAI_API_KEY=sk-...</div>
                      <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># 3. Start chatting</div>
                      <div>peakai chat "help me debug this function"</div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/install"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: 'var(--stone-text)', borderBottom: '1px solid var(--stone-border)', paddingBottom: '2px' }}
                      >
                        Need help installing? →
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            ),
            TASKS: <Placeholder section="TASKS" />,
            NOTES: <Placeholder section="NOTES" />,
            CHANNELS: <Placeholder section="CHANNELS" />,
            BASECAMP: <Placeholder section="BASECAMP" />,
            INSTANCES: <Placeholder section="INSTANCES" />,
            SESSIONS: <Placeholder section="SESSIONS" />,
            USAGE: <Placeholder section="USAGE" />,
            PERMISSIONS: <Placeholder section="PERMISSIONS" />,
            MODELS: <Placeholder section="MODELS" />,
            CREDENTIALS: <Placeholder section="CREDENTIALS" />,
            CRON: <Placeholder section="CRON" />,
            AGENTS: <Placeholder section="AGENTS" />,
            MEMORY: <Placeholder section="MEMORY" />,
            SKILLS: <Placeholder section="SKILLS" />,
            NODES: <Placeholder section="NODES" />,
            DEBUG: <Placeholder section="DEBUG" />,
          }} />

        </div>
      </main>

      <footer className="py-12 px-6 mt-24" style={{ borderTop: '1px solid var(--stone-border)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm" style={{ color: 'var(--stone-muted)' }}>
          <div className="flex items-center gap-2">
            <span className="font-light" style={{ color: 'var(--stone-text)' }}>peak</span>
            <span className="font-semibold" style={{ color: 'var(--stone-text)' }}>ai</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="transition-colors" style={{ color: 'var(--stone-muted)' }}>hjem</Link>
            <Link href="/install" className="transition-colors" style={{ color: 'var(--stone-muted)' }}>install</Link>
            <Link href="/documentation" className="transition-colors" style={{ color: 'var(--stone-muted)' }}>documentation</Link>
          </div>
          <div>© 2026</div>
        </div>
      </footer>
    </div>
  )
}
