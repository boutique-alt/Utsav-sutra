import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroScrollHint({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/80 max-md:bottom-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5" aria-hidden />
      </motion.div>
    </motion.div>
  )
}
