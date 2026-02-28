import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'ShopHub – E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with the MERN stack. Includes product listings, cart, checkout with Stripe payments, admin dashboard, and JWT authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    gradient: 'from-violet-600/20 to-purple-600/20',
    border: 'border-violet-500/30',
    demo: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'DevConnect – Social Network',
    description:
      'A developer-focused social network where you can create profiles, share posts, connect with other developers, and showcase your GitHub repositories.',
    tags: ['React', 'Express', 'MongoDB', 'Redux', 'Socket.io'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/30',
    demo: '#',
    repo: '#',
    featured: true,
  },
  {
    title: 'TaskFlow – Project Manager',
    description:
      'A Kanban-style project management tool with drag-and-drop boards, real-time collaboration, role-based access control, and activity logs.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    gradient: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/30',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'WeatherPulse – Dashboard',
    description:
      'A real-time weather dashboard that fetches data from OpenWeather API. Features beautiful charts, 7-day forecasts, and geolocation support.',
    tags: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind'],
    gradient: 'from-orange-600/20 to-amber-600/20',
    border: 'border-orange-500/30',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'BlogCraft – CMS Platform',
    description:
      'A headless CMS and blog platform with a rich Markdown editor, SEO tools, image uploads to S3, and a public-facing blog with SSR.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    gradient: 'from-pink-600/20 to-rose-600/20',
    border: 'border-pink-500/30',
    demo: '#',
    repo: '#',
    featured: false,
  },
  {
    title: 'AuthKit – Auth Microservice',
    description:
      'A standalone authentication microservice with OAuth 2.0 (Google, GitHub), email verification, 2FA, and refresh token rotation.',
    tags: ['Node.js', 'Express', 'MongoDB', 'OAuth', 'JWT'],
    gradient: 'from-slate-600/30 to-slate-700/30',
    border: 'border-slate-500/30',
    demo: '#',
    repo: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from full-stack apps to API services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative bg-gradient-to-br ${project.gradient} border ${project.border} rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-200`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 bg-violet-600/80 text-violet-100 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Featured
                </span>
              )}
              <h3 className="text-white font-bold text-lg mb-3 pr-16">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-900/60 text-slate-400 text-xs font-medium px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-300 font-medium transition-colors"
                >
                  <Github size={14} />
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-violet-500 text-slate-300 hover:text-white font-semibold px-7 py-3 rounded-full transition-colors"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
