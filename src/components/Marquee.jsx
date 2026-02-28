import { motion } from 'framer-motion'

/**
 * Infinite horizontal scrolling marquee — inspired by elhussary.site's tech stack.
 * Renders children duplicated for seamless looping.
 *
 * @param {{ children: React.ReactNode, speed?: number, reverse?: boolean, className?: string, pauseOnHover?: boolean }} props
 */
export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = '',
  pauseOnHover = true,
}) {
  return (
    <div
      className={`group w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      {[0, 1].map((copy) => (
        <motion.div
          key={copy}
          className={`flex shrink-0 items-center gap-4 sm:gap-6 ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
          style={{
            animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
          }}
          aria-hidden={copy === 1}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}
