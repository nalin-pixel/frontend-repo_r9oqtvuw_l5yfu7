import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const NeonButton = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.6)' }}
    whileTap={{ scale: 0.98 }}
    className="relative overflow-hidden px-6 py-3 rounded-xl font-semibold tracking-wide text-white bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 shadow-[0_0_25px_rgba(168,85,247,0.35)] border border-white/10 backdrop-blur-sm"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 opacity-30 bg-[radial-gradient(650px_circle_at_0px_0px,rgba(255,255,255,0.35),transparent_40%)]" />
  </motion.button>
)

const GlitchTitle = ({ text }) => (
  <div className="relative inline-block">
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-blue-300 drop-shadow-[0_0_25px_rgba(99,102,241,0.45)]">
      {text}
    </h1>
    <span className="absolute inset-0 -z-10 blur-md opacity-40 bg-[conic-gradient(at_50%_50%,rgba(168,85,247,0.5),rgba(59,130,246,0.5),rgba(236,72,153,0.5),rgba(168,85,247,0.5))]" />
    <span className="absolute left-0 top-0 w-full h-full text-fuchsia-400 mix-blend-screen animate-glitch-1 select-none pointer-events-none">{text}</span>
    <span className="absolute left-0 top-0 w-full h-full text-blue-400 mix-blend-screen animate-glitch-2 select-none pointer-events-none">{text}</span>
  </div>
)

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Holographic background grid + particles */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.55),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="particle" />
          <div className="particle delay-200" />
          <div className="particle delay-500" />
          <div className="particle delay-700" />
        </div>
      </div>

      {/* Spline scene */}
      <div className="absolute -right-12 sm:right-0 top-1/2 -translate-y-1/2 w-[120vw] sm:w-[70vw] h-[70vh] sm:h-[85vh] opacity-90">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
            <span className="text-xs text-fuchsia-200/80 tracking-widest">INDIE GAME COLLECTIVE</span>
          </div>
          <GlitchTitle text="TechNest" />
          <p className="mt-5 text-lg md:text-xl text-purple-100/80 leading-relaxed">
            A five-member strike team crafting neon-drenched worlds, kinetic combat, and mind-bending stories. Built like a AAA trailer, played like a fever dream.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <NeonButton>Watch Trailer</NeonButton>
            <NeonButton>Join the Nest</NeonButton>
          </div>
        </motion.div>
      </div>

      {/* bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
