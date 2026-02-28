import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.1] py-8" style={{ background: '#0a0a0a', position: 'relative', zIndex: 10 }}>
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Usaid Ahmad
          </span>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/usaid9', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:usaidmoiza@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-white/40 hover:text-white/70 transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
