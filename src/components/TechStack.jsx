import { motion } from 'framer-motion'
import { Cpu, Cube, Shapes, Code2, Headset, Orbit } from 'lucide-react'

const stacks = [
  { name: 'Unity', icon: <Cube className="w-6 h-6" />, color: 'from-cyan-500 to-fuchsia-500' },
  { name: 'Blender', icon: <Shapes className="w-6 h-6" />, color: 'from-orange-500 to-pink-500' },
  { name: 'Figma', icon: <Orbit className="w-6 h-6" />, color: 'from-violet-500 to-cyan-500' },
  { name: 'C#', icon: <Code2 className="w-6 h-6" />, color: 'from-purple-500 to-rose-500' },
  { name: 'Meta Quest', icon: <Headset className="w-6 h-6" />, color: 'from-emerald-500 to-cyan-500' },
  { name: 'XR Toolkit', icon: <Cpu className="w-6 h-6" />, color: 'from-sky-500 to-fuchsia-500' },
]

export default function TechStack() {
  return (
    <section className="relative py-28 bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-rose-500/20 to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Tech Stack
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {stacks.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white">
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-20`} />
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="font-semibold tracking-wide">{s.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
