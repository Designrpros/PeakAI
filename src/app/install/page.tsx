import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Install — PeakAI',
  description: 'Download and install PeakAI on macOS, Linux, or Windows.',
}

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <main className="pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs text-zinc-400 mb-4 tracking-widest uppercase">
            install
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-none tracking-tight mb-12">
            Get started with PeakAI
          </h1>

          <div className="space-y-8">
            {/* System Requirements */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">System Requirements</h2>
              <p className="text-zinc-500 mb-6">
                PeakAI is a cross-platform desktop application available for macOS, Linux, and Windows.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-zinc-100 p-4 rounded">
                  <div className="font-medium mb-1">Operating System</div>
                  <div className="text-zinc-500">macOS, Linux, or Windows</div>
                </div>
                <div className="bg-zinc-100 p-4 rounded">
                  <div className="font-medium mb-1">Architecture</div>
                  <div className="text-zinc-500">x86_64 or ARM64</div>
                </div>
                <div className="bg-zinc-100 p-4 rounded">
                  <div className="font-medium mb-1">Memory</div>
                  <div className="text-zinc-500">8GB minimum, 16GB recommended</div>
                </div>
                <div className="bg-zinc-100 p-4 rounded">
                  <div className="font-medium mb-1">Storage</div>
                  <div className="text-zinc-500">500MB available space</div>
                </div>
              </div>
            </section>

            {/* Download */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Download</h2>
              <p className="text-zinc-500 mb-6">
                Download PeakAI for your platform.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <a 
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors"
                >
                  <span className="text-2xl">🍎</span>
                  <div>
                    <div className="font-medium text-sm">macOS</div>
                    <div className="text-xs text-zinc-500">Universal Binary</div>
                  </div>
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors"
                >
                  <span className="text-2xl">🐧</span>
                  <div>
                    <div className="font-medium text-sm">Linux</div>
                    <div className="text-xs text-zinc-500">AppImage & deb</div>
                  </div>
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-100 rounded hover:bg-zinc-200 transition-colors"
                >
                  <span className="text-2xl">🪟</span>
                  <div>
                    <div className="font-medium text-sm">Windows</div>
                    <div className="text-xs text-zinc-500">exe installer</div>
                  </div>
                </a>
              </div>
              
              <p className="text-xs text-zinc-400">
                Version 0.1.0 · ~85MB
              </p>
            </section>

            {/* Installation Steps */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Installation</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <div className="font-medium mb-1">Download the app</div>
                    <div className="text-sm text-zinc-500">
                      Click the download button above to get the PeakAI installer.
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <div className="font-medium mb-1">Open the installer</div>
                    <div className="text-sm text-zinc-500">
                      Double-click the downloaded .dmg file to mount it.
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <div className="font-medium mb-1">Drag to Applications</div>
                    <div className="text-sm text-zinc-500">
                      Drag PeakAI.app to your Applications folder.
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <div>
                    <div className="font-medium mb-1">Launch PeakAI</div>
                    <div className="text-sm text-zinc-500">
                      Open PeakAI from your Applications folder. You may need to allow the app in System Preferences → Privacy & Security.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LLM Setup */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Connect an LLM Provider</h2>
              <p className="text-zinc-500 mb-6">
                PeakAI works with any OpenAI-compatible API. We recommend using{' '}
                <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-950">Ollama</a>{' '}
                for local models, or connect to OpenAI, Anthropic, or any other provider.
              </p>
              
              <div className="bg-zinc-950 text-zinc-50 p-6 rounded font-mono text-sm">
                <div className="text-zinc-500 mb-2"># Example: Using Ollama (recommended)</div>
                <div className="mb-4">ollama serve</div>
                <div className="mb-4">ollama pull llama3.2</div>
                
                <div className="text-zinc-500 mb-2"># Or use OpenAI</div>
                <div>OPENAI_API_KEY=sk-... peakai</div>
              </div>
              
              <div className="mt-6">
                <Link 
                  href="/PeakAI/documentation"
                  className="inline-flex items-center gap-2 text-sm font-medium border-b border-zinc-950 hover:border-zinc-400 transition-colors"
                >
                  View full documentation <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-zinc-200 mt-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-light">peak</span>
            <span className="font-semibold">ai</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/PeakAI/" className="hover:text-zinc-950 transition-colors">hjem</Link>
            <Link href="/PeakAI/install" className="hover:text-zinc-950 transition-colors">install</Link>
            <Link href="/PeakAI/documentation" className="hover:text-zinc-950 transition-colors">documentation</Link>
          </div>
          
          <div>© 2026</div>
        </div>
      </footer>
    </div>
  )
}
