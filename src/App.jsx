import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-blue-100/70">
          <p>© {new Date().getFullYear()} Concasare Beton. Toate drepturile rezervate.</p>
          <p>
            <a href="#contact" className="hover:text-white">Contact</a>
            <span className="mx-2">•</span>
            <a href="#servicii" className="hover:text-white">Servicii</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
