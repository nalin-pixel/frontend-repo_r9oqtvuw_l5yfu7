export default function NeonDivider() {
  return (
    <div className="relative h-28 bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent blur-lg" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(56,189,248,0.35),transparent_80%)]" />
      </div>
    </div>
  )
}
