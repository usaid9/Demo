import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ease = [0.16, 1, 0.3, 1]

const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 8, suffix: '+', label: 'Technologies' },
  { value: 2, suffix: '+', label: 'Years Learning' },
  { value: 100, suffix: '%', label: 'Passion Driven' },
]

function AnimatedCounter({ value, suffix }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [inView])

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
    })
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [inView, count, value, rounded])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

export default function Experience() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/[0.1]">
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/40 text-[11px] font-mono uppercase tracking-[0.3em] mb-3"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-3xl sm:text-4xl font-bold text-white mb-14"
        >
          By the Numbers
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.2)' }}
              className="p-6 rounded-2xl border border-white/[0.1] bg-white/[0.03] text-center cursor-default transition-colors duration-300"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/50 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
