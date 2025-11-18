import { motion } from 'framer-motion'

const projects = [
  {
    title: 'NEON RIFT',
    tag: 'VR ACTION ROGUELITE',
    video: 'https://cdn.coverr.co/videos/coverr-cyberpunk-2-4454/1080p.mp4',
    blurb: 'Slash through chroma corridors in a reality that fights back.',
  },
  {
    title: 'PARALLAX_OMEGA',
    tag: 'PC / CONSOLE — STORY SHOOTER',
    video: 'https://cdn.coverr.co/videos/coverr-cyberpunk-1-1327/1080p.mp4',
    blurb: 'Time fractures. Your choices echo. The city keeps the score.',
  },
  {
    title: 'SINGULARITY BLOOM',
    tag: 'EXPERIMENTAL — AUDIO REACTIVE',
    video: 'https://cdn.coverr.co/videos/coverr-cyberpunk-3-6124/1080p.mp4',
    blurb: 'Grow a universe of light with your music.',
  },
]

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.06, duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="relative h-64 sm:h-80">
        <video
          src={p.video}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="inline-flex px-3 py-1 text-[10px] tracking-widest rounded-full border border-fuchsia-400/30 text-fuchsia-200/90 bg-fuchsia-500/10 mb-2">
            {p.tag}
          </div>
          <h3 className="text-2xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">{p.title}</h3>
          <p className="text-purple-100/80">{p.blurb}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-blue-300">Projects</h2>
          <p className="text-purple-200/70 mt-2">Trailer energy. Playable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
