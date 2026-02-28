import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

/**
 * Animated text that reveals word by word on scroll.
 */
export default function TextReveal({ text, className = '' }) {
  const words = text.split(' ')

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease, delay: i * 0.04 },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  )
}
