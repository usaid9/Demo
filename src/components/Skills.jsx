const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-blue-500 to-cyan-600',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Database & DevOps',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 74 },
      { name: 'Docker', level: 68 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
]

const techBadges = [
  'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'JavaScript',
  'TypeScript', 'Docker', 'Git', 'PostgreSQL', 'GraphQL', 'REST APIs',
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Stack
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/40 transition-colors"
            >
              <h3 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${cat.color} mb-6`}>
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-700`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-2 rounded-full hover:border-violet-500 hover:text-violet-300 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
