'use client';

import { useState } from 'react';
import { ArrowRight, Github, Menu, X } from 'lucide-react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light tracking-tight">peak</span>
            <span className="text-2xl font-semibold">ai</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            <a href="#features" className="hover:text-zinc-950 transition-colors">features</a>
            <a href="#code" className="hover:text-zinc-950 transition-colors">code</a>
            <a href="#faq" className="hover:text-zinc-950 transition-colors">faq</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank"
              className="hidden md:block text-zinc-400 hover:text-zinc-950 transition-colors"
            >
              <Github size={18} />
            </a>
            <button 
              className="md:hidden text-zinc-950"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-zinc-50 pt-20 px-6">
          <nav className="flex flex-col gap-6 text-2xl font-light">
            <a href="#features" onClick={() => setOpen(false)}>features</a>
            <a href="#code" onClick={() => setOpen(false)}>code</a>
            <a href="#faq" onClick={() => setOpen(false)}>faq</a>
          </nav>
        </div>
      )}

      {/* Hero - Brutalist Minimal */}
      <section className="min-h-screen pt-32 px-6 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-xs text-zinc-400 mb-8 tracking-widest uppercase">
            open source ai agent
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-tight mb-12">
            <span className="block">your code.</span>
            <span className="block">your models.</span>
            <span className="block text-zinc-400">your machine.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
            <a 
              href="#features"
              className="inline-flex items-center gap-2 text-sm font-medium px-0 py-2 border-b border-zinc-950 hover:border-zinc-400 transition-colors"
            >
              learn more <ArrowRight size={14} />
            </a>
            <code className="text-xs text-zinc-500 font-mono bg-zinc-100 px-3 py-1.5 rounded">
              curl -fsSL https://peak.ai/install | sh
            </code>
          </div>
        </div>
      </section>

      {/* Stats - Grid */}
      <section className="py-32 px-6 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-200">
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">100%</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">free & open</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">75+</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">models supported</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">local</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">runs on device</div>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12">
              <div className="text-4xl md:text-5xl font-light mb-2">0</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">data collected</div>
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
              { title: 'Any Model', desc: 'Connect to Ollama, OpenAI, Anthropic, or any LLM provider.' },
              { title: 'Terminal Native', desc: 'Works in your terminal, desktop, or as an IDE extension.' },
              { title: 'Privacy First', desc: 'Your code never leaves your machine unless you want it to.' },
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
            PeakAI processes everything locally. We don't collect data, track usage, or see your code. Ever.
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
              { q: 'What is PeakAI?', a: 'An open source AI coding agent that runs entirely on your machine. No subscriptions, no data collection.' },
              { q: 'How does it work?', a: 'Install it, connect your preferred LLM, and start chatting with your codebase.' },
              { q: 'Is it really free?', a: 'Yes. 100% free and open source under the MIT license.' },
              { q: 'Which models can I use?', a: 'Any model that supports the OpenAI-compatible API, including Ollama, GPT-4, Claude, and more.' },
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
            <span className="text-zinc-600">it's free</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#code"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-50 text-zinc-950 text-sm font-medium rounded hover:bg-zinc-200 transition-colors"
            >
              Install now <ArrowRight size={14} />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-sm font-medium rounded hover:border-zinc-600 transition-colors"
            >
              View on GitHub
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
            <a href="https://github.com" target="_blank" className="hover:text-zinc-950 transition-colors">github</a>
            <a href="#" className="hover:text-zinc-950 transition-colors">docs</a>
            <a href="#" className="hover:text-zinc-950 transition-colors">discord</a>
          </div>
          
          <div>© 2026</div>
        </div>
      </footer>
    </div>
  );
}
