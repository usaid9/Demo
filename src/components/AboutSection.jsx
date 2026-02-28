import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
}

const services = [
  {
    title: 'Web Development',
    desc: 'Building responsive, performant web apps with React, Next.js, and the MERN stack.',
  },
  {
    title: 'UI / UX Design',
    desc: 'Crafting clean interfaces in Figma and translating designs to pixel-perfect code.',
  },
  {
    title: '3D & Graphics',
    desc: 'Creating 3D models in Blender and vector artwork in Adobe Illustrator.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/[0.1]">
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/40 text-[11px] font-mono uppercase tracking-[0.3em] mb-3"
        >
          01 — About
        </motion.p>

        {/* Avatar + intro grid */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-16 mt-2 mb-16">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-[200px] sm:w-[240px] lg:w-full aspect-square rounded-2xl overflow-hidden border border-white/[0.1]">
              <img
                src="https://avatars.githubusercontent.com/u/225879781?v=4"
                alt="Usaid Ahmad"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">Usaid Ahmad</h2>
              <p className="text-white/50 text-sm mb-6">A-levels student · Faisalabad, Pakistan</p>
            </motion.div>

            <motion.p variants={fadeUp} custom={1}
              className="text-white/70 leading-[1.8] text-[15px] mb-4"
            >
              I build modern web applications using the MERN stack. I care about
              performance, clean architecture, and interfaces that feel good to use.
            </motion.p>
            <motion.p variants={fadeUp} custom={2}
              className="text-white/70 leading-[1.8] text-[15px] mb-8"
            >
              Outside of code I work in Adobe Illustrator and Blender — I enjoy
              the intersection of technical and visual craft.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-5">
              <a
                href="https://github.com/usaid9"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                GitHub <ArrowUpRight size={13} className="opacity-50" />
              </a>
              <a
                href="mailto:usaidmoiza@gmail.com"
                className="text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
              >
                usaidmoiza@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: i * 0.07 }}
              className="p-6 rounded-2xl border border-white/[0.1] bg-white/[0.03] hover:border-white/20 transition-colors duration-300"
            >
              <p className="text-white text-sm font-semibold mb-2">{s.title}</p>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}


