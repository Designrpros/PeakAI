'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-zinc-50 pt-20 px-6">
          <nav className="flex flex-col gap-6 text-2xl font-light">
            <Link href="/PeakAI/" onClick={() => setOpen(false)}>hjem</Link>
            <Link href="/PeakAI/install" onClick={() => setOpen(false)}>install</Link>
            <Link href="/PeakAI/documentation" onClick={() => setOpen(false)}>documentation</Link>
          </nav>
        </div>
      )}

      {/* Hero - Brutalist Minimal */}
      <section className="min-h-screen pt-32 px-6 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-xs text-zinc-400 mb-8 tracking-widest uppercase">
            autonomous agent
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight mb-12">
            <span className="block">think</span>
            <span className="block">execute</span>
            <span className="block text-zinc-400">automated.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
            <a 
              href="/PeakAI/install"
              className="inline-flex items-center gap-2 text-sm font-medium px-0 py-2 border-b border-zinc-950 hover:border-zinc-400 transition-colors"
            >
              get started <ArrowRight size={14} />
            </a>
            <a
              href="/PeakAI/documentation"
              className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
            >
              read the docs
            </a>
          </div>
        </div>
      </section>

      {/* Stats - Grid */}
      <section className="py-32 px-6 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200">
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">local</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">or cloud llms</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">any</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">llm provider</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">privacy</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">your data stays local</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">cross-platform</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">macos linux windows</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - List */}
      <section id="features" className="py-32 px-6 bg-zinc-950 text-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-zinc-500 mb-16 tracking-widest uppercase">
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
                className="py-8 border-t border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-light">{item.title}</h3>
                  <p className="text-sm text-zinc-500 mt-1">{item.desc}</p>
                </div>
                <div className="text-xs text-zinc-600">0{i + 1}</div>
              </div>
            ))}
            <div className="py-8 border-t border-zinc-800" />
          </div>
        </div>
      </section>

      {/* Code - Brutalist Block */}
      <section id="code" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs text-zinc-400 mb-12 tracking-widest uppercase">
            as simple as
          </div>
          
          <div className="bg-zinc-950 text-zinc-50 p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
            <div className="text-zinc-500 mb-4"># install peakai</div>
            <div className="mb-8">curl -fsSL https://peak.ai/install | sh</div>
            
            <div className="text-zinc-500 mb-4"># start chatting</div>
            <div className="mb-8">peakai chat "help me debug this function"</div>
            
            <div className="text-zinc-500 mb-4"># or just run it</div>
            <div>peakai agent --task "review my pr"</div>
          </div>
        </div>
      </section>

      {/* Privacy Banner */}
      <section className="py-24 px-6 bg-zinc-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl md:text-5xl font-light leading-tight mb-6">
            your code stays<br />
            <span className="text-zinc-400">on your machine</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">
            We don't see your code. When using cloud models, only the prompt is sent—no files or data leave your device.
          </p>
        </div>
      </section>

      {/* FAQ - Simple */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-xs text-zinc-400 mb-12 tracking-widest uppercase">
            faq
          </div>
          
          <div className="space-y-0">
            {[
              { q: 'What is PeakAI?', a: 'A cross-platform AI agent with a Rust-powered backend. Works with any LLM—run locally with Ollama or connect to OpenAI, Anthropic, Google, and more.' },
              { q: 'How does it work?', a: 'Install the app, configure your preferred LLM (local or cloud), and interact via a beautiful desktop UI or Telegram.' },
              { q: 'Which models can I use?', a: 'All major providers supported: OpenAI, Anthropic, Google, local Ollama, and any OpenAI-compatible API. Works with the latest models.' },
              { q: 'Is my data safe?', a: 'Your data stays on your machine. When using cloud models, only the prompt is sent to the provider—no code or files leave your device.' },
            ].map((item, i) => (
              <div key={i} className="py-6 border-t border-zinc-200">
                <h3 className="font-medium mb-2">{item.q}</h3>
                <p className="text-sm text-zinc-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-zinc-950 text-zinc-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-5xl md:text-7xl font-light mb-8 leading-tight">
            ready to try?<br />
            <span className="text-zinc-600">download now</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/PeakAI/install"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-50 text-zinc-950 text-sm font-medium rounded hover:bg-zinc-200 transition-colors"
            >
              Install now <ArrowRight size={14} />
            </a>
            <a 
              href="/PeakAI/documentation"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-sm font-medium rounded hover:border-zinc-600 transition-colors"
            >
              Read documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-light">peak</span>
            <span className="font-semibold">ai</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/PeakAI/" className="hover:text-zinc-950 transition-colors">hjem</a>
            <a href="/PeakAI/install" className="hover:text-zinc-950 transition-colors">install</a>
            <a href="/PeakAI/documentation" className="hover:text-zinc-950 transition-colors">documentation</a>
          </div>
          
          <div>© 2026</div>
        </div>
      </footer>
    </div>
  );
}
