import { motion } from 'framer-motion'

const members = [
  {
    name: 'Rae “Vector” Ito',
    role: 'Creative Director / Narrative',
    bio: 'Synthwave dreamer. Turns fragments of neon into worlds you can feel.',
    skills: ['Worldbuilding', 'Cinematics', 'Unity Timeline'],
  },
  {
    name: 'Milo “Flux” Ortega',
    role: 'Lead Programmer',
    bio: 'Gameplay alchemist. Squeezes impossible systems into silky 120fps.',
    skills: ['C#', 'XR Toolkit', 'Netcode'],
  },
  {
    name: 'Aya “Ghost” Kuro',
    role: 'Art Director',
    bio: 'Shapes holograms and chrome into feelings. Hates flat surfaces.',
    skills: ['Blender', 'Shader Graph', 'LookDev'],
  },
  {
    name: 'Finn “Echo” Mallory',
    role: 'Audio / Tech Sound Designer',
    bio: 'Bass that bends time. UI bleeps that feel like touch.',
    skills: ['FMOD', 'Spatial Audio', 'Synthesis'],
  },
  {
    name: 'Juno “Quark” Reyes',
    role: 'Technical Artist',
    bio: 'Bridges art and code. Makes particles dance and meshes melt.',
    skills: ['VFX Graph', 'Optimization', 'Tools'],
  },
]

function HoloCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-fuchsia-500/50 via-purple-500/30 to-blue-500/50 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-6">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(500px_circle_at_var(--x,50%)_var(--y,50%),rgba(168,85,247,0.15),transparent_40%)]" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white drop-shadow">{member.name}</h3>
            <p className="text-fuchsia-300/90 text-sm">{member.role}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-fuchsia-500/40 to-blue-500/40 border border-white/10" />
        </div>
        <p className="mt-4 text-purple-100/80 leading-relaxed">{member.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {member.skills.map((s) => (
            <span key={s} className="px-3 py-1 text-xs rounded-full border border-fuchsia-400/30 text-fuchsia-200/90 bg-fuchsia-500/10">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-blue-300">The Team</h2>
          <p className="text-purple-200/70 mt-2">Five minds. One signal.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <HoloCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
