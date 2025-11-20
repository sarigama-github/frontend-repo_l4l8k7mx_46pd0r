import { BadgeCheck, Leaf, PiggyBank, Timer } from 'lucide-react'
import { motion } from 'framer-motion'

const perks = [
  {
    icon: PiggyBank,
    title: 'Costuri reduse',
    desc: 'Elimini transportul și taxele de depozitare. Agregatele rezultate pot fi refolosite pe proiect.'
  },
  {
    icon: Leaf,
    title: 'Impact redus asupra mediului',
    desc: 'Reciclarea pe șantier scade emisiile și consumul de resurse naturale.'
  },
  {
    icon: Timer,
    title: 'Execuție rapidă',
    desc: 'Utilaje mobile performante care reduc timpii de lucru și scot proiectul din blocaj.'
  },
  {
    icon: BadgeCheck,
    title: 'Calitate controlată',
    desc: 'Fracții calibrate conform cerințelor. Respectăm normele de siguranță și calitate.'
  },
]

export default function Advantages() {
  return (
    <section id="avantaje" className="py-20 bg-slate-900 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -bottom-24 left-1/4 h-40 w-[120%] -rotate-12"
        style={{
          background:
            'linear-gradient(90deg, rgba(34,211,238,0) 0%, rgba(34,211,238,0.25) 20%, rgba(99,102,241,0.25) 80%, rgba(99,102,241,0) 100%)',
          filter: 'blur(40px)'
        }}
        animate={{ opacity: [0.05, 0.25, 0.05], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">De ce să ne alegi</h2>
            <p className="mt-3 text-blue-100/80">Optimizăm costurile, logistica și termenul de execuție respectând standardele de mediu.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center">
                    <p.icon size={20} />
                  </div>
                  <h3 className="mt-3 text-white font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-blue-100/80">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1605281933351-d0e5247995e8?q=80&w=1976&auto=format&fit=crop"
              alt="Agregate rezultate"
              className="rounded-xl object-cover w-full h-[360px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
