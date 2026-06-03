'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const LANGUAGES = [
  { lang: 'Català',   phrase: 'La meva llengua materna és el català.',  level: 'Natiu' },
  { lang: 'Español',  phrase: 'El español es mi lengua nativa.',         level: 'Nativo' },
  { lang: 'English',  phrase: 'I am fluent in English.',                 level: 'Fluent' },
  { lang: '中文',     phrase: '我只会说一点中文。',                       level: '入门级' },
]

export default function Languages() {
  return (
    <section id="idiomas" className="relative border-b border-black">
      <SectionHeader num="05" title="Idiomas" caption="Lenguas / Comunicación" />
      <div className="border-t border-l border-black mx-4 md:mx-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {LANGUAGES.map((l, i) => (
            <motion.div
              key={l.lang}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
              className="border-r border-b border-black p-8 md:p-12 relative group overflow-hidden"
            >
              <span className="absolute top-2 left-2 w-2 h-2 border-l border-t border-black/30" aria-hidden="true" />
              <span className="absolute top-2 right-2 w-2 h-2 border-r border-t border-black/30" aria-hidden="true" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-black/30" aria-hidden="true" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-black/30" aria-hidden="true" />

              <div className="flex flex-col items-center text-center gap-6">
                <span className="font-display text-5xl leading-none text-black/20 select-none">&ldquo;</span>

                <p className="font-body text-[15px] leading-[1.7] text-black/70 max-w-[28ch]">
                  {l.phrase}
                </p>

                <div className="w-8 h-px bg-black/30" />

                <div className="space-y-1">
                  <div className="font-display text-2xl md:text-3xl uppercase tracking-tight leading-none">
                    {l.lang}
                  </div>
                  <div className="label-tech text-black/50">{l.level}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
