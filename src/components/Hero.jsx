import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-900/50 border border-violet-700/50 text-violet-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for work
        </div>

        {/* Avatar placeholder */}
        <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl ring-4 ring-violet-500/30">
          A
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
            Alex Johnson
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-medium">
          Full-Stack MERN Developer
        </p>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I build fast, scalable, and beautiful web applications using MongoDB, Express, React, and
          Node.js. Passionate about clean code and great user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-violet-900/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-slate-600 hover:border-violet-500 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-16">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
          ].map((item) => {
            const SocialIcon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-violet-400 hover:border-violet-500 transition-colors"
              >
                <SocialIcon size={18} />
              </a>
            )
          })}
        </div>

        <a
          href="#about"
          className="inline-flex flex-col items-center text-slate-500 hover:text-violet-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}
