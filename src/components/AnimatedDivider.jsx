import { motion } from 'framer-motion'

export default function AnimatedDivider() {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 py-4">
      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-center"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
        />
      </div>
    </div>
  )
}
