import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Install — PeakAI',
  description: 'Download and install PeakAI on macOS, Linux, or Windows.',
}

export default function InstallPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs mb-4 tracking-widest uppercase" style={{ color: 'var(--stone-muted)' }}>
            install
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-none tracking-tight mb-12" style={{ color: 'var(--stone-text)' }}>
            Get started with PeakAI
          </h1>

          <div className="space-y-8">
            {/* System Requirements */}
            <section className="py-8" style={{ borderTop: '1px solid var(--stone-border)' }}>
              <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>System Requirements</h2>
              <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                PeakAI is a cross-platform desktop application available for macOS, Linux, and Windows.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { title: 'Operating System', desc: 'macOS, Linux, or Windows' },
                  { title: 'Architecture', desc: 'x86_64 or ARM64' },
                  { title: 'Memory', desc: '8GB minimum, 16GB recommended' },
                  { title: 'Storage', desc: '500MB available space' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-lg" style={{ background: 'var(--stone-panel)' }}>
                    <div className="font-medium mb-1" style={{ color: 'var(--stone-text)' }}>{item.title}</div>
                    <div style={{ color: 'var(--stone-muted)' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Download */}
            <section className="py-8" style={{ borderTop: '1px solid var(--stone-border)' }}>
              <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>Download</h2>
              <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                Download PeakAI for your platform.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {[
                  { platform: 'macOS', icon: '🍎', detail: 'Universal Binary' },
                  { platform: 'Linux', icon: '🐧', detail: 'AppImage & deb' },
                  { platform: 'Windows', icon: '🪟', detail: 'exe installer' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer hover:opacity-80"
                    style={{ background: 'var(--stone-panel)', color: 'var(--stone-text)', border: '1px solid var(--stone-border)' }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-medium text-sm" style={{ color: 'var(--stone-text)' }}>{item.platform}</div>
                      <div className="text-xs" style={{ color: 'var(--stone-muted)' }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs" style={{ color: 'var(--stone-muted)' }}>
                Version 0.1.0 · ~85MB
              </p>
            </section>

            {/* Installation Steps */}
            <section className="py-8" style={{ borderTop: '1px solid var(--stone-border)' }}>
              <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>Installation</h2>
              
              <div className="space-y-6">
                {[
                  { n: '1', title: 'Download the app', desc: 'Click the download button above to get the PeakAI installer.' },
                  { n: '2', title: 'Open the installer', desc: 'Double-click the downloaded .dmg file to mount it.' },
                  { n: '3', title: 'Drag to Applications', desc: 'Drag PeakAI.app to your Applications folder.' },
                  { n: '4', title: 'Launch PeakAI', desc: 'Open PeakAI from your Applications folder. You may need to allow the app in System Preferences → Privacy & Security.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium" style={{ background: 'var(--stone-text)', color: 'var(--stone-bg)' }}>{item.n}</div>
                    <div>
                      <div className="font-medium mb-1" style={{ color: 'var(--stone-text)' }}>{item.title}</div>
                      <div className="text-sm" style={{ color: 'var(--stone-muted)' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* LLM Setup */}
            <section className="py-8" style={{ borderTop: '1px solid var(--stone-border)' }}>
              <h2 className="text-xl font-medium mb-4" style={{ color: 'var(--stone-text)' }}>Connect an LLM Provider</h2>
              <p className="mb-6" style={{ color: 'var(--stone-muted)' }}>
                PeakAI works with any OpenAI-compatible API. We recommend using{' '}
                <a 
                  href="https://ollama.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline" 
                  style={{ color: 'var(--stone-text)', fontWeight: 500 }}
                >
                  Ollama
                </a>
                {' '}for local models, or connect to OpenAI, Anthropic, or any other provider.
              </p>
              
              <div className="p-6 rounded-lg font-mono text-sm" style={{ background: 'var(--stone-panel)', color: 'var(--stone-text)' }}>
                <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># Example: Using Ollama (recommended)</div>
                <div className="mb-4">ollama serve</div>
                <div className="mb-4">ollama pull llama3.2</div>
                
                <div className="mb-2" style={{ color: 'var(--stone-muted)' }}># Or use OpenAI</div>
                <div>OPENAI_API_KEY=sk-... peakai</div>
              </div>
              
              <div className="mt-6">
                <Link 
                  href="/documentation"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: 'var(--stone-text)', borderBottom: '1px solid var(--stone-border)', paddingBottom: '2px' }}
                >
                  View full documentation <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          </div>
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
