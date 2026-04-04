import { Metadata } from 'next'
import { ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Documentation — PeakAI',
  description: 'Learn how to use PeakAI, configure LLM providers, and extend with tools.',
}

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <Navbar />

      <main className="pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs text-zinc-400 mb-4 tracking-widest uppercase">
            documentation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light leading-none tracking-tight mb-12">
            PeakAI Documentation
          </h1>

          <div className="space-y-12">
            {/* Architecture Overview */}
            <section className="py-8 border-t border-zinc-200">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={20} className="text-zinc-400" />
                <h2 className="text-xl font-medium">Architecture Overview</h2>
              </div>
              
              <p className="text-zinc-500 mb-6">
                PeakAI is designed as a modular, agentic system with three primary layers:
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-100 p-4 rounded">
                  <h3 className="font-medium mb-1">1. API Compatibility Layer</h3>
                  <p className="text-sm text-zinc-500">
                    Provides a unified interface for various LLM providers (Anthropic, OpenAI, Minimax). Handles streaming and normalization of provider-specific schemas.
                  </p>
                </div>
                
                <div className="bg-zinc-100 p-4 rounded">
                  <h3 className="font-medium mb-1">2. Agentic Runtime Layer</h3>
                  <p className="text-sm text-zinc-500">
                    The "brain" of the system. Manages the action loop: Reasoning → Tool Selection → Execution → Observation. Includes fine-grained permission policies.
                  </p>
                </div>
                
                <div className="bg-zinc-100 p-4 rounded">
                  <h3 className="font-medium mb-1">3. Capability Layer</h3>
                  <p className="text-sm text-zinc-500">
                    Native integrations (Gmail, Calendar) and the MCP Bridge, which allows PeakAI to use any Model Context Protocol server.
                  </p>
                </div>
              </div>
            </section>

            {/* LLM Providers */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">LLM Providers</h2>
              <p className="text-zinc-500 mb-6">
                PeakAI supports any OpenAI-compatible API. Configure your preferred provider:
              </p>
              
              <div className="bg-zinc-950 text-zinc-50 p-6 rounded font-mono text-sm overflow-x-auto">
                <div className="text-zinc-500 mb-2"># Using Ollama (local models)</div>
                <div className="mb-4">OLLAMA_BASE_URL=http://localhost:11434</div>
                <div className="mb-4">OLLAMA_MODEL=llama3.2</div>
                
                <div className="text-zinc-500 mb-2"># Using OpenAI</div>
                <div className="mb-4">OPENAI_API_KEY=sk-your-key-here</div>
                <div className="mb-4">OPENAI_MODEL=gpt-4o</div>
                
                <div className="text-zinc-500 mb-2"># Using Anthropic</div>
                <div>ANTHROPIC_API_KEY=sk-ant-your-key-here</div>
              </div>
            </section>

            {/* Tools */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Built-in Tools</h2>
              <p className="text-zinc-500 mb-6">
                PeakAI includes native tools for common tasks:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="text-left py-2 font-medium">Tool</th>
                      <th className="text-left py-2 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-500">
                    <tr className="border-b border-zinc-100">
                      <td className="py-2 font-mono">GmailToolbox</td>
                      <td className="py-2">Search, read, and send emails via Google Gmail API</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-2 font-mono">CalendarToolbox</td>
                      <td className="py-2">Manage events and schedules via Google Calendar API</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-2 font-mono">FileSystem</td>
                      <td className="py-2">Read, write, and manipulate local files (permission-controlled)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* MCP Integration */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Model Context Protocol (MCP)</h2>
              <p className="text-zinc-500 mb-6">
                PeakAI acts as an MCP Host, connecting to external MCP servers to extend its capabilities. MCP tools are registered with an <code className="bg-zinc-100 px-1 rounded">mcp__</code> prefix.
              </p>
              
              <div className="bg-zinc-100 p-4 rounded">
                <h3 className="font-medium mb-2">How MCP Works</h3>
                <ol className="text-sm text-zinc-500 space-y-1 list-decimal list-inside">
                  <li><strong>Discovery:</strong> On startup, PeakNode initializes the MCP manager</li>
                  <li><strong>Registration:</strong> Connects to configured servers and fetches tool manifests</li>
                  <li><strong>Execution:</strong> Tools are routed to the correct MCP server transport</li>
                </ol>
              </div>
            </section>

            {/* Google APIs */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Google API Setup</h2>
              <p className="text-zinc-500 mb-6">
                To use Gmail and Calendar tools, configure Google OAuth:
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-xs font-medium">1</span>
                  <p className="text-zinc-500">Create a project in the Google Cloud Console</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-xs font-medium">2</span>
                  <p className="text-zinc-500">Enable Gmail API and Google Calendar API</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-xs font-medium">3</span>
                  <p className="text-zinc-500">Configure OAuth Consent Screen (Internal or External)</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-zinc-950 text-zinc-50 rounded-full flex items-center justify-center text-xs font-medium">4</span>
                  <p className="text-zinc-500">Download JSON and save as <code className="bg-zinc-100 px-1 rounded">client_secret.json</code></p>
                </div>
              </div>
            </section>

            {/* Adapters */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Adapters</h2>
              <p className="text-zinc-500 mb-6">
                Adapters connect PeakAI to external communication platforms:
              </p>
              
              <div className="bg-zinc-100 p-4 rounded">
                <h3 className="font-medium mb-2">Telegram Bot</h3>
                <p className="text-sm text-zinc-500 mb-4">
                  The primary mobile interface for PeakAI. Features include:
                </p>
                <ul className="text-sm text-zinc-500 space-y-1 list-disc list-inside">
                  <li>Real-time tool execution display</li>
                  <li>Message buffering (600ms) for multi-part prompts</li>
                  <li>Progressive UI updates for long-running tasks</li>
                </ul>
              </div>
              
              <div className="mt-4 bg-zinc-950 text-zinc-50 p-4 rounded font-mono text-sm">
                <div className="text-zinc-500 mb-2"># Telegram Configuration</div>
                <div>TELEGRAM_BOT_TOKEN=your-bot-token</div>
                <div>ALLOWED_TELEGRAM_USER_IDS=12345,67890</div>
              </div>
            </section>

            {/* Permission System */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Permission System</h2>
              <p className="text-zinc-500 mb-6">
                PeakAI uses a fine-grained permission policy system:
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-zinc-100 p-4 rounded">
                  <div className="font-medium mb-1">DangerFullAccess</div>
                  <div className="text-zinc-500">Full file and terminal access</div>
                </div>
                <div className="bg-zinc-100 p-4 rounded">
                  <div className="font-medium mb-1">ReadOnly</div>
                  <div className="text-zinc-500">Read-only file access</div>
                </div>
              </div>
              
              <p className="text-xs text-zinc-400 mt-4">
                ⚠️ Always ensure your whitelisted User IDs are correct, especially when using the Telegram adapter.
              </p>
            </section>

            {/* Getting Started */}
            <section className="py-8 border-t border-zinc-200">
              <h2 className="text-xl font-medium mb-4">Quick Start</h2>
              
              <div className="bg-zinc-950 text-zinc-50 p-6 rounded font-mono text-sm">
                <div className="text-zinc-500 mb-2"># 1. Install and launch</div>
                <div className="mb-4">open PeakAI.app</div>
                
                <div className="text-zinc-500 mb-2"># 2. Configure your LLM (if not using Ollama)</div>
                <div className="mb-4">export OPENAI_API_KEY=sk-...</div>
                
                <div className="text-zinc-500 mb-2"># 3. Start chatting</div>
                <div>peakai chat "help me debug this function"</div>
              </div>
              
              <div className="mt-6">
                <Link 
                  href="/install"
                  className="inline-flex items-center gap-2 text-sm font-medium border-b border-zinc-950 hover:border-zinc-400 transition-colors"
                >
                  Need help installing? <ArrowRight size={14} />
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
            <Link href="/" className="hover:text-zinc-950 transition-colors">hjem</Link>
            <Link href="/install" className="hover:text-zinc-950 transition-colors">install</Link>
            <Link href="/documentation" className="hover:text-zinc-950 transition-colors">documentation</Link>
          </div>
          
          <div>© 2026</div>
        </div>
      </footer>
    </div>
  )
}
