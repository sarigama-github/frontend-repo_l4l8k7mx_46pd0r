import { Hammer, Factory, Ruler, Recycle } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { icon: Hammer, title: 'Evaluare', text: 'Analizăm volumul, accesul și cerințele proiectului.' },
  { icon: Factory, title: 'Instalare utilaj', text: 'Aducem concasorul mobil și pregătim zona de lucru.' },
  { icon: Ruler, title: 'Concasare calibrată', text: 'Setăm fracțiile și procesăm materialul în ritm susținut.' },
  { icon: Recycle, title: 'Valorificare', text: 'Agregatele rezultate sunt utilizate ca umplutură sau pentru fundații.' },
]

export default function Process() {
  return (
    <section id="proces" className="py-20 bg-slate-950 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-6 h-20"
        style={{
          background:
            'linear-gradient(90deg, rgba(99,102,241,0) 0%, rgba(99,102,241,0.25) 20%, rgba(34,211,238,0.25) 80%, rgba(34,211,238,0) 100%)',
          filter: 'blur(40px)'
        }}
        animate={{ opacity: [0.05, 0.25, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Cum lucrăm</h2>
          <p className="mt-3 text-blue-100/80">Flux clar, eficient și sigur, adaptat oricărui șantier.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center">
                <s.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold">{i+1}. {s.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
