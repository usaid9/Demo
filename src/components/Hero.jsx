import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const socials = [
  { icon: Github, href: 'https://github.com/usaid9', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:usaidmoiza@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 pt-20">
          <div className="flex flex-col items-center text-center">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-white/60 text-[11px] font-medium tracking-widest uppercase font-mono">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.25 }}
                className="text-[clamp(2.6rem,8vw,5.5rem)] font-bold leading-[1] tracking-[-0.03em] text-gradient-animate"
              >
                Usaid Ahmad
              </motion.h1>
            </div>

            {/* Role */}
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-white/50 font-light tracking-wide"
              >
                Full-Stack Developer
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.55 }}
              className="text-white/60 text-base sm:text-lg leading-[1.7] max-w-md mb-10"
            >
              Building modern web applications with the MERN stack.
              Also into graphic design &amp; 3D.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center bg-white text-black text-sm font-semibold h-10 px-7 rounded-full hover:bg-white/90 transition-colors duration-200"
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center text-white/60 hover:text-white text-sm font-medium h-10 px-5 rounded-full border border-white/[0.15] hover:border-white/30 transition-all duration-200"
              >
                Get in touch
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-5 mt-10"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.25, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/40 hover:text-white/70 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex justify-center pb-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="text-white/25 hover:text-white/50 transition-colors duration-200"
        >
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  )
}
