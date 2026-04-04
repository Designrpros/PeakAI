'use client'

import { Github, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-light tracking-tight">peak</span>
          <span className="text-2xl font-semibold">ai</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-950 transition-colors">hjem</Link>
          <Link href="/install" className="hover:text-zinc-950 transition-colors">install</Link>
          <Link href="/documentation" className="hover:text-zinc-950 transition-colors">documentation</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
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

      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-zinc-50 pt-20 px-6">
          <nav className="flex flex-col gap-6 text-2xl font-light">
            <Link href="/" onClick={() => setOpen(false)}>hjem</Link>
            <Link href="/install" onClick={() => setOpen(false)}>install</Link>
            <Link href="/documentation" onClick={() => setOpen(false)}>documentation</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
