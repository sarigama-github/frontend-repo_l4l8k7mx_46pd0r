import { Recycle, Ruler, Truck, HardHat } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Recycle,
    title: 'Concasare și sortare',
    desc: 'Concasăm plăci, fundații, dale, borduri și deșeuri din construcții. Obținem agregate de diferite fracții pregătite pentru reutilizare.'
  },
  {
    icon: Ruler,
    title: 'Calibrare fracții',
    desc: 'Setăm utilajele pentru fracții uzuale (0-4, 4-8, 8-16, 16-31, 31-63) în funcție de aplicație și cerințe.'
  },
  {
    icon: Truck,
    title: 'Logistică și transport',
    desc: 'Asigurăm încărcarea și manipularea agregatelor rezultate, con opțiuni de transport la locațiile dorite.'
  },
  {
    icon: HardHat,
    title: 'Șantier mobil',
    desc: 'Ne deplasăm cu utilaje mobile pe șantierul tău. Reducem costurile de evacuare și timpii de execuție.'
  },
]

export default function Services() {
  return (
    <section id="servicii" className="py-20 bg-slate-950 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-12 right-1/4 h-40 w-[120%] rotate-12"
        style={{
          background:
            'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.25) 20%, rgba(168,85,247,0.25) 80%, rgba(168,85,247,0) 100%)',
          filter: 'blur(40px)'
        }}
        animate={{ opacity: [0.05, 0.25, 0.05], x: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Serviciile noastre</h2>
          <p className="mt-3 text-blue-100/80">Pachet complet pentru valorificarea deșeurilor din beton direct pe șantier.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center shadow-md">
                <it.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
