import { motion } from 'framer-motion'
import Marquee from './Marquee'

const ease = [0.16, 1, 0.3, 1]

const row1 = ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS', 'Vite', 'Node.js']
const row2 = ['Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub', 'Adobe Illustrator', 'Figma', 'Blender']
const allSkills = [...row1, ...row2]

function Pill({ label }) {
  return (
    <span className="inline-flex items-center gap-2 text-white/60 text-xs sm:text-sm font-medium border border-white/[0.08] bg-white/[0.03] px-3 sm:px-4 py-2 rounded-full whitespace-nowrap hover:border-white/[0.16] hover:text-white/80 transition-all duration-200 cursor-default select-none">
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-white/[0.06]">

      {/* Title */}
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/20 text-[11px] font-mono uppercase tracking-[0.3em] mb-3"
        >
          02 — Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Technology Stack
        </motion.h2>
      </div>

      {/* Mobile: wrapped pills */}
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 md:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          {allSkills.map((s) => <Pill key={s} label={s} />)}
        </motion.div>
      </div>

      {/* Desktop: marquee rows (full-width, edge-to-edge) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex flex-col gap-4"
      >
        <Marquee speed={40}>
          {row1.map((s) => <Pill key={s} label={s} />)}
        </Marquee>
        <Marquee speed={46} reverse>
          {row2.map((s) => <Pill key={s} label={s} />)}
        </Marquee>
      </motion.div>

    </section>
  )
}
