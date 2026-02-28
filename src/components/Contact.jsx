import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
]

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: in production, send to backend API
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Me
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info side */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Let&apos;s talk</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I&apos;m currently open to new opportunities and freelance projects. Whether you have a
              question, a collaboration idea, or just want to say hello — my inbox is always open!
            </p>

            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => {
                const ContactIcon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-violet-600/20 border border-violet-500/30 rounded-xl flex items-center justify-center">
                      <ContactIcon size={18} className="text-violet-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-300 hover:text-violet-400 transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

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
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-violet-400 hover:border-violet-500 transition-colors"
                  >
                    <SocialIcon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Form side */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mb-4">
                  <Send size={24} className="text-green-400" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">Message Sent!</h4>
                <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-900/60 border border-slate-600 focus:border-violet-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-900/60 border border-slate-600 focus:border-violet-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="w-full bg-slate-900/60 border border-slate-600 focus:border-violet-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-900/60 border border-slate-600 focus:border-violet-500 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
