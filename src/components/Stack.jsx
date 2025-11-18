import { motion } from 'framer-motion'
import { Unity, Figma, Cube, Code, Headset, Box } from 'lucide-react'

const stacks = [
  { icon: <Cube />, name: 'Unity', color: 'from-blue-400 to-cyan-400' },
  { icon: <Box />, name: 'Blender', color: 'from-orange-400 to-pink-400' },
  { icon: <Figma />, name: 'Figma', color: 'from-pink-400 to-purple-400' },
  { icon: <Code />, name: 'C#', color: 'from-violet-400 to-fuchsia-400' },
  { icon: <Headset />, name: 'Meta Quest', color: 'from-emerald-400 to-teal-400' },
  { icon: <Unity />, name: 'XR Toolkit', color: 'from-indigo-400 to-sky-400' },
]

function GlowIcon({ icon, color }) {
  return (
    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${color} p-[1px]`}> 
      <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-br from-fuchsia-500 to-blue-500" />
      <div className="relative w-full h-full rounded-2xl bg-black/70 border border-white/10 flex items-center justify-center text-white">
        <div className="w-7 h-7 opacity-90">{icon}</div>
      </div>
    </div>
  )
}

export default function Stack() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-blue-300">Tech Stack</h2>
          <p className="text-purple-200/70 mt-2">Tools we bend to our will.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {stacks.map((s) => (
            <motion.div key={s.name} whileHover={{ y: -6, scale: 1.03 }}>
              <div className="flex flex-col items-center gap-3">
                <GlowIcon icon={s.icon} color={s.color} />
                <span className="text-sm text-purple-100/80">{s.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
