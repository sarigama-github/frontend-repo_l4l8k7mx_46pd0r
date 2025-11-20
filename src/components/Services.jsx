import { Recycle, Ruler, Truck, HardHat } from 'lucide-react'

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
    desc: 'Asigurăm încărcarea și manipularea agregatelor rezultate, cu opțiuni de transport la locațiile dorite.'
  },
  {
    icon: HardHat,
    title: 'Șantier mobil',
    desc: 'Ne deplasăm cu utilaje mobile pe șantierul tău. Reducem costurile de evacuare și timpii de execuție.'
  },
]

export default function Services() {
  return (
    <section id="servicii" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Serviciile noastre</h2>
          <p className="mt-3 text-blue-100/80">Pachet complet pentru valorificarea deșeurilor din beton direct pe șantier.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center shadow-md">
                <it.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
