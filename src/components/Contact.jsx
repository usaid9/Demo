import { useState } from 'react'
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-white/[0.1]">
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* CTA heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white/40 text-[11px] font-mono uppercase tracking-[0.3em] mb-3"
          >
            04 — Contact
          </motion.p>

          <div className="overflow-hidden mb-5">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            >
              Get In Touch
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            className="text-white/55 text-[15px] max-w-sm mx-auto mb-8"
          >
            Have a project, a question, or just want to say hello?
          </motion.p>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <a
              href="mailto:usaidmoiza@gmail.com"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              <Mail size={14} />
              usaidmoiza@gmail.com
            </a>
            <span className="hidden sm:block h-3.5 w-px bg-white/15" />
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/usaid9', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  className="text-white/45 hover:text-white/70 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="max-w-lg mx-auto p-7 sm:p-9 rounded-2xl border border-white/[0.1] bg-white/[0.03]"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center mb-4">
                  <Send size={16} className="text-emerald-400/70" />
                </div>
                <p className="text-white text-sm font-semibold mb-1.5">Message sent!</p>
                <p className="text-white/50 text-sm">I’ll get back to you shortly.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                {[
                  { id: 'name', type: 'text', label: 'Name', placeholder: 'Your name' },
                  { id: 'email', type: 'email', label: 'Email', placeholder: 'your@email.com' },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-white/40 text-[10px] mb-2 font-mono uppercase tracking-widest" htmlFor={f.id}>
                      {f.label}
                    </label>
                    <input
                      id={f.id} name={f.id} type={f.type} required
                      value={form[f.id]} onChange={handleChange}
                      placeholder={f.placeholder}
                      className="w-full bg-transparent border-b border-white/[0.12] focus:border-white/30 text-white placeholder-white/25 py-2 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-white/40 text-[10px] mb-2 font-mono uppercase tracking-widest" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={4} required
                    value={form.message} onChange={handleChange}
                    placeholder="What’s on your mind?"
                    className="w-full bg-transparent border-b border-white/[0.12] focus:border-white/30 text-white placeholder-white/25 py-2 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-semibold h-10 rounded-full hover:bg-white/90 transition-colors duration-200 mt-2"
                >
                  Send message
                  <ArrowUpRight size={13} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
