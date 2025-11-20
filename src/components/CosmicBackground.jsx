import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

function StarsCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const DPR = window.devicePixelRatio || 1

    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.8 + 0.2,
      vx: (Math.random() * 0.4 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
      vy: (Math.random() * 0.4 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
    }))

    function resize() {
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = w * DPR
      canvas.height = h * DPR
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    function draw() {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      // faint space glow
      const grad = ctx.createRadialGradient(width/2, height*0.2, 0, width/2, height*0.2, Math.max(width, height))
      grad.addColorStop(0, 'rgba(56,189,248,0.10)')
      grad.addColorStop(0.4, 'rgba(99,102,241,0.06)')
      grad.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      stars.forEach((s) => {
        s.x += s.vx * 0.0004
        s.y += s.vy * 0.0004
        if (s.x < 0) s.x = 1
        if (s.x > 1) s.x = 0
        if (s.y < 0) s.y = 1
        if (s.y > 1) s.y = 0
        const px = s.x * width
        const py = s.y * height
        const size = (1.2 + 1.8 * s.z)
        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226,232,240,${0.35 + 0.45 * s.z})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 -z-10" />
}

export default function CosmicBackground() {
  return (
    <div className="pointer-events-none relative h-full w-full">
      {/* Grid overlay */}
      <div className="absolute inset-0 -z-20 opacity-[0.12]" style={{
        backgroundImage:
          'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        backgroundPosition: 'center'
      }} />

      {/* Starfield canvas */}
      <StarsCanvas />

      {/* Nebula glows */}
      <motion.div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background:
          'radial-gradient(closest-side, rgba(99,102,241,0.35), rgba(99,102,241,0.0))' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -10, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background:
          'radial-gradient(closest-side, rgba(34,211,238,0.28), rgba(34,211,238,0.0))' }}
        animate={{ x: [0, -40, 10, 0], y: [0, 10, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Aurora sweep */}
      <motion.div
        className="absolute inset-x-0 top-24 h-40 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.35) 30%, rgba(168,85,247,0.35) 70%, rgba(168,85,247,0) 100%)',
          filter: 'blur(40px)'
        }}
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
