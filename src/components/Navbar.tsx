'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--stone-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--stone-border)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-light tracking-tight" style={{ color: 'var(--stone-text)' }}>peak</span>
          <span className="text-2xl font-semibold" style={{ color: 'var(--stone-text)' }}>ai</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: 'var(--stone-muted)' }}>
          <Link href="/" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--stone-muted)' }}>Hjem</Link>
          <Link href="/install" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--stone-muted)' }}>Install</Link>
          <Link href="/documentation" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--stone-muted)' }}>Docs</Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--stone-text)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 shadow-lg" style={{ backgroundColor: 'var(--stone-bg)', borderTop: '1px solid var(--stone-border)' }}>
          <nav className="flex flex-col gap-1 py-4">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg transition-colors"
              style={{ color: 'var(--stone-text)' }}
            >
              Hjem
            </Link>
            <Link 
              href="/install" 
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg transition-colors"
              style={{ color: 'var(--stone-text)' }}
            >
              Install
            </Link>
            <Link 
              href="/documentation" 
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-lg transition-colors"
              style={{ color: 'var(--stone-text)' }}
            >
              Documentation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
