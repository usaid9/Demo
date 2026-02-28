import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const projects = [
  {
    title: 'School Management System',
    description: 'Full-stack MERN application for admissions, student data, and authentication.',
    features: [
      'Student admissions & data management',
      'Role-based authentication system',
      'RESTful API backend with Express',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demo: null,
    repo: 'https://github.com/usaid9',
  },
  {
    title: 'Portfolio Website',
    description: 'Single-page portfolio with dark theme, Framer Motion animations, and responsive design.',
    features: [
      'Smooth scroll-triggered animations',
      'Responsive dark-themed UI',
      '3D elements with Three.js',
    ],
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://usaidahmad.me',
    repo: 'https://github.com/usaid9/usaid9.github.io',
  },
  {
    title: 'Demo Project',
    description: 'Modern React showcase — component architecture, clean code, best practices.',
    features: [
      'Component-driven architecture',
      'Modern tooling with Vite',
      'Clean, maintainable codebase',
    ],
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    demo: null,
    repo: 'https://github.com/usaid9/Demo',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white/20 text-[11px] font-mono uppercase tracking-[0.3em] mb-3"
            >
              03 — Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Latest Projects
            </motion.h2>
          </div>
          <motion.a
            href="https://github.com/usaid9"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:inline-flex items-center gap-1.5 text-white/30 hover:text-white text-sm transition-colors duration-200"
          >
            All projects <ArrowUpRight size={13} />
          </motion.a>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
              className="group p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-colors duration-300"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10">

                {/* Content */}
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-[1.7] mb-5 max-w-lg">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-white/30 text-sm">
                        <span className="text-emerald-400/50 mt-px text-xs">◆</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-white/25 text-[11px] font-mono bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col items-start md:items-end gap-3 pt-1">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-medium px-3 h-7 rounded-full border border-white/[0.08] hover:border-white/20 transition-all duration-200 whitespace-nowrap"
                    >
                      <ExternalLink size={11} />
                      Live Demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/25 hover:text-white/60 text-xs font-medium transition-colors duration-200 whitespace-nowrap"
                    >
                      <Github size={12} />
                      Source
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
