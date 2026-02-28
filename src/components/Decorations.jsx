/* Floating geometric shapes for section backgrounds */
export function FloatingShapes({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Dot grid pattern */}
      <div className="absolute top-20 left-10 animate-drift-left opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {[0, 20, 40, 60].map(x =>
            [0, 20, 40, 60].map(y => (
              <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="1.5" fill="rgba(255,255,255,0.5)" />
            ))
          )}
        </svg>
      </div>

      {/* Circle outline */}
      <div className="absolute top-1/4 right-16 animate-float-slow opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </svg>
      </div>

      {/* Small orbiting dot */}
      <div className="absolute top-1/3 right-1/4 animate-orbit opacity-20">
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
          <circle cx="3" cy="3" r="3" fill="rgba(255,255,255,0.6)" />
        </svg>
      </div>

      {/* Diagonal line */}
      <div className="absolute bottom-1/4 left-20 animate-drift-right opacity-10">
        <svg width="100" height="2" viewBox="0 0 100 2" fill="none">
          <line x1="0" y1="1" x2="100" y2="1" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </svg>
      </div>

      {/* Plus sign */}
      <div className="absolute bottom-1/3 right-10 animate-float opacity-15">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="2" x2="10" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          <line x1="2" y1="10" x2="18" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}

/* Code brackets decoration */
export function CodeBrackets({ className = '' }) {
  return (
    <div className={`inline-flex items-center gap-1 font-mono text-white/20 ${className}`}>
      <span className="text-2xl animate-pulse-glow">&lt;</span>
      <span className="text-2xl animate-pulse-glow delay-200">/</span>
      <span className="text-2xl animate-pulse-glow delay-400">&gt;</span>
    </div>
  )
}

/* Terminal cursor */
export function TerminalCursor({ className = '' }) {
  return (
    <span className={`inline-block w-2.5 h-5 bg-white/60 animate-blink ${className}`} />
  )
}

/* Blur orbs for background */
export function BlurOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full animate-pulse-glow delay-1000"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-80 h-80 rounded-full animate-pulse-glow delay-500"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)' }}
      />
    </div>
  )
}
