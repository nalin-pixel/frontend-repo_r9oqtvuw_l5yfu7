import { motion, useScroll, useTransform } from 'framer-motion'

export default function Transitions() {
  const { scrollYProgress } = useScroll()
  const sweepX = useTransform(scrollYProgress, [0, 1], ['-100%', '200%'])

  return (
    <div className="pointer-events-none fixed top-1/2 left-0 right-0 -translate-y-1/2 z-[5]">
      <motion.div
        style={{ x: sweepX }}
        className="h-[6px] w-[40%] mx-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-400 to-blue-500 blur-md opacity-70"
      />
    </div>
  )
}
