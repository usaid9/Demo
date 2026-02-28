import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationId
    let stars = []
    const STAR_COUNT = window.innerWidth < 768 ? 55 : 80
    const MOUSE_RADIUS = 120

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      stars = []
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: 0,
          baseY: 0,
          size: Math.random() * 1.2 + 0.3,
          baseOpacity: Math.random() * 0.35 + 0.08,
          speed: Math.random() * 0.08 + 0.01,
          drift: (Math.random() - 0.5) * 0.15,
          twinkleSpeed: Math.random() * 0.008 + 0.002,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }
      stars.forEach(s => { s.baseX = s.x; s.baseY = s.y })
    }

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const onMouseLeave = () => {
      mouse.current.x = -1000
      mouse.current.y = -1000
    }

    const onResize = () => {
      resize()
      createStars()
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouse.current.x
      const my = mouse.current.y

      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase)
        let alpha = star.baseOpacity * (0.7 + 0.3 * twinkle)

        star.y -= star.speed
        star.x += star.drift * 0.05

        if (star.y < -5) {
          star.y = canvas.height + 5
          star.x = Math.random() * canvas.width
        }
        if (star.x < -5) star.x = canvas.width + 5
        if (star.x > canvas.width + 5) star.x = -5

        // Cursor interaction — subtle push + brighten
        const dx = star.x - mx
        const dy = star.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        let drawX = star.x
        let drawY = star.y
        let drawSize = star.size

        if (dist < MOUSE_RADIUS) {
          const factor = 1 - dist / MOUSE_RADIUS
          const push = factor * 18
          const angle = Math.atan2(dy, dx)
          drawX += Math.cos(angle) * push
          drawY += Math.sin(angle) * push
          alpha = Math.min(alpha + factor * 0.25, 0.6)
          drawSize = star.size + factor * 0.6
        }

        ctx.beginPath()
        ctx.arc(drawX, drawY, drawSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    createStars()
    animationId = requestAnimationFrame(draw)

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
