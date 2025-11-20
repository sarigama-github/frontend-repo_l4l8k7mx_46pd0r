import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#hero" className="text-white font-bold text-lg tracking-wide">Concasare Beton</a>
        <nav className="hidden md:flex items-center gap-6 text-blue-100/90">
          <a href="#servicii" className="hover:text-white">Servicii</a>
          <a href="#avantaje" className="hover:text-white">Avantaje</a>
          <a href="#proces" className="hover:text-white">Proces</a>
          <a href="#contact" className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500">Cere ofertă</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-2 text-blue-100/90">
            <a href="#servicii" className="hover:text-white" onClick={() => setOpen(false)}>Servicii</a>
            <a href="#avantaje" className="hover:text-white" onClick={() => setOpen(false)}>Avantaje</a>
            <a href="#proces" className="hover:text-white" onClick={() => setOpen(false)}>Proces</a>
            <a href="#contact" className="hover:text-white" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
