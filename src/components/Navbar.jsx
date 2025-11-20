import { Phone, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold">CB</span>
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Concasare Beton</p>
              <p className="text-blue-200/70 text-xs">Servicii profesionale</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-blue-100/80">
            <a href="#servicii" className="hover:text-white transition">Servicii</a>
            <a href="#avantaje" className="hover:text-white transition">Avantaje</a>
            <a href="#proces" className="hover:text-white transition">Proces</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a href="tel:+40700111222" className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg text-sm font-medium shadow">
              <Phone size={18} />
              <span>+40 700 111 222</span>
            </a>
            <a href="mailto:contact@concasare-beton.ro" className="hidden lg:inline-flex items-center gap-2 text-blue-100/80 hover:text-white transition text-sm">
              <Mail size={18} />
              <span>contact@concasare-beton.ro</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
