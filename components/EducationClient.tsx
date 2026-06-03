'use client'

import { motion } from 'framer-motion'

interface FAQ {
  question: string
  answer: string | null
}

// answer format: "Institution · Location · Years.\nDescription text."
function parseEducation(faq: FAQ) {
  const raw = (faq.answer ?? '').trim()
  const dotIdx = raw.indexOf('.')
  const header = dotIdx > -1 ? raw.slice(0, dotIdx) : raw
  const description = dotIdx > -1 ? raw.slice(dotIdx + 1).trim().replace(/^\n+/, '') : ''
  const parts = header.split('·').map((p) => p.trim())
  return {
    degree: faq.question,
    institution: parts[0] ?? '',
    location: parts[1] ?? '',
    years: parts[2] ?? '',
    description,
  }
}

export default function EducationClient({ data }: { data: FAQ[] }) {
  return (
    <div className="border-t border-[#FAFAFA]/30 mx-4 md:mx-8 mb-20">
      {data.map((ed, i) => {
        const { degree, institution, location, years, description } = parseEducation(ed)
        return (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            className="grid grid-cols-12 border-b border-[#FAFAFA]/20 last:border-b-0 py-10 md:py-12 group hover:bg-[#FAFAFA] hover:text-[#0A0A0A] transition-colors duration-150"
          >
            <div className="col-span-12 md:col-span-2 font-mono-tech text-[13px] uppercase tracking-[0.14em] mb-4 md:mb-0">
              {years}
            </div>
            <div className="col-span-12 md:col-span-7 mb-4 md:mb-0">
              <div className="font-display text-3xl md:text-5xl uppercase leading-[0.92] tracking-tight">
                {degree}
              </div>
              <div className="mt-3 font-mono-tech text-[12px] uppercase tracking-[0.18em] opacity-80">
                {institution}{location && <span className="opacity-60"> / {location}</span>}
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 font-mono-tech text-[12px] leading-[1.55] uppercase tracking-[0.05em] opacity-80">
              {description}
            </div>
          </motion.article>
        )
      })}
    </div>
  )
}
