import Hero from './components/Hero'
import Team from './components/Team'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Transitions from './components/Transitions'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Holographic global backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.7),transparent_60%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(at_10%_10%,rgba(59,130,246,0.06),rgba(236,72,153,0.06),rgba(168,85,247,0.06),rgba(59,130,246,0.06))]" />
      </div>

      <Transitions />

      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
            <span className="font-bold tracking-wider text-fuchsia-200">TECHNEST</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-purple-200/80">
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <div id="team"><Team /></div>
        <div id="projects"><Projects /></div>
        <div id="stack"><Stack /></div>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-purple-300/70">
        <p>© {new Date().getFullYear()} TechNest — Indie Game Collective</p>
      </footer>
    </div>
  )
}

export default App
