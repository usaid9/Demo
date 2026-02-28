import { Download, MapPin, Mail, Coffee } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Am</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image / visual side */}
          <div className="relative">
            <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 rounded-3xl rotate-6 opacity-40" />
              <div className="relative w-full h-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 rounded-3xl border border-slate-700 flex items-center justify-center text-white text-8xl font-bold">
                AJ
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Coffee size={18} className="text-violet-400" />
                <span>MERN Stack Dev</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              A passionate developer building for the modern web
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m a full-stack developer with 3+ years of experience crafting end-to-end web
              applications. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js),
              with a deep focus on performance, scalability, and intuitive UI.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open source projects, or hiking in the mountains. I believe that great software is
              built by teams that care about both the product and the people who use it.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={16} className="text-violet-400 shrink-0" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={16} className="text-violet-400 shrink-0" />
                <span>alex@example.com</span>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-violet-500/50 transition-colors"
            >
              <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 mb-2">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
