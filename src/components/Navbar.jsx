import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#programs', label: 'Programs' },
    { href: '#events', label: 'Events' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 text-white grid place-items-center font-bold">SBJ</div>
          <span className="font-bold text-gray-800">SBJain College</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded text-center">Apply Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
