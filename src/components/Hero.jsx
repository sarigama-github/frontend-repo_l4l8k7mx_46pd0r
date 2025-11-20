import { Construction, ShieldCheck, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import CosmicBackground from './CosmicBackground'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-24 bg-slate-950">
      <CosmicBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.12),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 text-blue-200/90 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-sm mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Construction size={16} /> Servicii profesionale de concasare beton
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Concasare beton la fața locului — rapid, eficient, cosmic
            </motion.h1>
            <motion.p
              className="mt-5 text-blue-100/90 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Transformăm plăcile și deșeurile din beton în agregate reutilizabile pentru umpluturi și fundații. Economisești timp, bani și protejezi mediul.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
            >
              <a href="#contact" className="px-6 py-3 bg-blue-600/90 hover:bg-blue-500 text-white font-semibold rounded-lg shadow">
                Cere ofertă
              </a>
              <a href="#servicii" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/10">
                Află mai mult
              </a>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-blue-100/90">
              <div className="flex items-center gap-2"><ShieldCheck className="text-blue-400" /> Certificat</div>
              <div className="flex items-center gap-2"><Leaf className="text-emerald-400" /> Eco-friendly</div>
              <div className="flex items-center gap-2"><Construction className="text-cyan-400" /> Mobil</div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1976&auto=format&fit=crop"
                alt="Utilaj concasare beton"
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-white/10 rounded-xl p-4 text-blue-100/90 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm">Capacitate: 120-180 t/h • Fracții 0-63 mm</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
