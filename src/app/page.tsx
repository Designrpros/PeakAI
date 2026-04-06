'use client';

import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero - Brutalist Minimal */}
      <section className="min-h-screen pt-32 px-6 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-xs mb-8 tracking-widest uppercase" style={{ color: 'var(--stone-muted)' }}>
            autonomous agent
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight mb-12" style={{ color: 'var(--stone-text)' }}>
            <span className="block">think</span>
            <span className="block">execute</span>
            <span className="block" style={{ color: 'var(--stone-muted)' }}>automated.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
            <a 
              href="/install"
              className="inline-flex items-center gap-2 text-sm font-medium px-0 py-2 transition-colors"
              style={{ color: 'var(--stone-text)', borderBottom: '1px solid var(--stone-text)' }}
            >
              get started <ArrowRight size={14} />
            </a>
            <a
              href="/documentation"
              className="text-sm transition-colors"
              style={{ color: 'var(--stone-muted)' }}
            >
              read the docs
            </a>
          </div>
        </div>
      </section>

      {/* Stats - Grid */}
      <section className="py-32 px-6" style={{ borderTop: '1px solid var(--stone-border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'var(--stone-border)' }}>
            {[
              { title: 'local', sub: 'or cloud llms' },
              { title: 'any', sub: 'llm provider' },
              { title: 'privacy', sub: 'your data stays local' },
              { title: 'cross-platform', sub: 'macos linux windows' },
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-12" style={{ background: 'var(--stone-bg)' }}>
                <div className="text-4xl md:text-5xl font-light mb-2" style={{ color: 'var(--stone-text)' }}>{item.title}</div>
                <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--stone-muted)' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - List */}
      <section id="features" className="py-32 px-6" style={{ background: 'var(--stone-panel)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-xs mb-16 tracking-widest uppercase" style={{ color: 'var(--stone-muted)' }}>
            features
          </div>
          
          <div className="space-y-0">
            {[
              { title: 'Neural Processing', desc: 'Context-aware AI that understands your entire codebase.' },
              { title: 'Any Model', desc: 'Connect to OpenAI, Anthropic, Google, local Ollama, or any OpenAI-compatible API.' },
              { title: 'Terminal Native', desc: 'Works in your terminal, desktop, or as an IDE extension.' },
              { title: 'Privacy First', desc: 'Only prompts are sent to cloud providers. Your code and files never leave your device.' },
              { title: 'Plugin System', desc: 'Extend functionality with a modular plugin architecture.' },
            ].map((item, i) => (
              <div 
                key={i}
                className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
                style={{ borderTop: '1px solid var(--stone-border)' }}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-light" style={{ color: 'var(--stone-text)' }}>{item.title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--stone-muted)' }}>{item.desc}</p>
                </div>
                <div className="text-xs" style={{ color: 'var(--stone-muted)' }}>0{i + 1}</div>
              </div>
            ))}
            <div className="py-8" style={{ borderTop: '1px solid var(--stone-border)' }} />
          </div>
        </div>
      </section>

      {/* Code - Brutalist Block */}
      <section id="code" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs mb-12 tracking-widest uppercase" style={{ color: 'var(--stone-muted)' }}>
            as simple as
          </div>
          
          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed" style={{ background: 'var(--stone-panel)' }}>
            <div className="mb-4" style={{ color: 'var(--stone-muted)' }}># install peakai</div>
            <div className="mb-8" style={{ color: 'var(--stone-text)' }}>curl -fsSL https://peak.ai/install | sh</div>
            
            <div className="mb-4" style={{ color: 'var(--stone-muted)' }}># start chatting</div>
            <div className="mb-8" style={{ color: 'var(--stone-text)' }}>peakai chat "help me debug this function"</div>
            
            <div className="mb-4" style={{ color: 'var(--stone-muted)' }}># or just run it</div>
            <div style={{ color: 'var(--stone-text)' }}>peakai agent --task "review my pr"</div>
          </div>
        </div>
      </section>

      {/* Privacy Banner */}
      <section className="py-24 px-6" style={{ background: 'var(--stone-panel)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--stone-text)' }}>
            your code stays<br />
            <span style={{ color: 'var(--stone-muted)' }}>on your machine</span>
          </div>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--stone-muted)' }}>
            We don&apos;t see your code. When using cloud models, only the prompt is sent—no files or data leave your device.
          </p>
        </div>
      </section>

      {/* FAQ - Simple */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-xs mb-12 tracking-widest uppercase" style={{ color: 'var(--stone-muted)' }}>
            faq
          </div>
          
          <div className="space-y-0">
            {[
              { q: 'What is PeakAI?', a: 'A cross-platform AI agent with a Rust-powered backend. Works with any LLM—run locally with Ollama or connect to OpenAI, Anthropic, Google, and more.' },
              { q: 'How does it work?', a: 'Install the app, configure your preferred LLM (local or cloud), and interact via a beautiful desktop UI or Telegram.' },
              { q: 'Which models can I use?', a: 'All major providers supported: OpenAI, Anthropic, Google, local Ollama, and any OpenAI-compatible API. Works with the latest models.' },
              { q: 'Is my data safe?', a: 'Your data stays on your machine. When using cloud models, only the prompt is sent to the provider—no code or files leave your device.' },
            ].map((item, i) => (
              <div key={i} className="py-6" style={{ borderTop: '1px solid var(--stone-border)' }}>
                <h3 className="font-medium mb-2" style={{ color: 'var(--stone-text)' }}>{item.q}</h3>
                <p className="text-sm" style={{ color: 'var(--stone-muted)' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6" style={{ background: 'var(--stone-panel)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-5xl md:text-7xl font-light mb-8 leading-tight" style={{ color: 'var(--stone-text)' }}>
            ready to try?<br />
            <span style={{ color: 'var(--stone-muted)' }}>download now</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/install"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition-colors"
              style={{ background: 'var(--stone-text)', color: 'var(--stone-bg)' }}
            >
              Install now <ArrowRight size={14} />
            </a>
            <a 
              href="/documentation"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition-colors"
              style={{ border: '1px solid var(--stone-border)', color: 'var(--stone-text)' }}
            >
              Read documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--stone-border)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm" style={{ color: 'var(--stone-muted)' }}>
          <div className="flex items-center gap-2">
            <span className="font-light" style={{ color: 'var(--stone-text)' }}>peak</span>
            <span className="font-semibold" style={{ color: 'var(--stone-text)' }}>ai</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/" className="transition-colors" style={{ color: 'var(--stone-muted)' }}>hjem</a>
            <a href="/install" className="transition-colors" style={{ color: 'var(--stone-muted)' }}>install</a>
            <a href="/documentation" className="transition-colors" style={{ color: 'var(--stone-muted)' }}>documentation</a>
          </div>
          
          <div>© 2026</div>
        </div>
      </footer>
    </div>
  );
}
