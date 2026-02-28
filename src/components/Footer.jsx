import { Code2, Heart, Github, Linkedin, Twitter } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
            <Code2 className="text-violet-400" size={22} />
            <span>Alex<span className="text-violet-400">Dev</span></span>
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-violet-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((item) => {
              const SocialIcon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-violet-400 hover:border-violet-500 transition-colors"
                >
                  <SocialIcon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p className="flex items-center justify-center gap-1.5">
            &copy; {year} Alex Johnson. Made with{' '}
            <Heart size={14} className="text-violet-400 fill-violet-400" />
            {' '}using React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
