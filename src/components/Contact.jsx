import { Phone, Mail, MapPin, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Se trimite...')
    const form = new FormData(e.currentTarget)
    const payload = {
      nume: form.get('nume'),
      telefon: form.get('telefon'),
      email: form.get('email'),
      mesaj: form.get('mesaj')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setStatus('Mulțumim! Te contactăm în curând.')
        e.currentTarget.reset()
      } else {
        setStatus('A apărut o problemă. Încearcă din nou.')
      }
    } catch (err) {
      setStatus('Eroare de conexiune.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background:
          'radial-gradient(closest-side, rgba(34,211,238,0.25), rgba(34,211,238,0.0))' }}
        animate={{ x: [0, 25, -15, 0], y: [0, -10, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Cere o ofertă</h2>
            <p className="mt-3 text-blue-100/80">Spune-ne câteva detalii despre proiect, iar noi revenim rapid cu o soluție.</p>

            <div className="mt-6 space-y-3 text-blue-100/90">
              <p className="flex items-center gap-2"><Phone className="text-blue-400" /> +40 700 111 222</p>
              <p className="flex items-center gap-2"><Mail className="text-blue-400" /> contact@concasare-beton.ro</p>
              <p className="flex items-center gap-2"><MapPin className="text-blue-400" /> București și toată țara</p>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -right-3 -top-3 text-blue-300/70"><Sparkles size={24} /></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Nume</label>
                <input name="nume" required className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Telefon</label>
                <input name="telefon" required className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-blue-100/80 mb-1">Email</label>
              <input type="email" name="email" className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-blue-100/80 mb-1">Mesaj</label>
              <textarea name="mesaj" rows="4" className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="mt-5 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg">Trimite</button>
            {status && <p className="mt-3 text-blue-100/90">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
