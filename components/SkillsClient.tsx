'use client'

import { motion } from 'framer-motion'

interface Service {
  name: string
  description: string | null
  price_label: string | null
  sort_order: number
}

function parseItems(description: string | null): string[] {
  if (!description) return []
  return description.split(' · ').map((s) => s.trim()).filter(Boolean)
}

function SkillCell({ skill, index }: { skill: Service; index: number }) {
  const items = parseItems(skill.description)
  const big = index < 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
      className={`border-r border-b border-black p-6 md:p-8 group relative overflow-hidden ${
        big ? 'bg-[#FAFAFA]' : 'bg-white'
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="label-tech text-black/55">
          {String(index + 1).padStart(2, '0')} / Capacidad
        </span>
        {skill.price_label && (
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] border border-black px-2 py-0.5">
            {skill.price_label}
          </span>
        )}
      </div>

      <h3
        className={`font-display uppercase leading-[0.9] tracking-tight mb-6 ${
          big ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
        }`}
      >
        {skill.name}
      </h3>

      <ul className="space-y-1.5">
        {items.map((it, j) => (
          <li
            key={j}
            className="font-mono-tech text-[12px] uppercase tracking-[0.14em] text-black/75 flex items-center gap-3"
          >
            <span className="w-3 h-px bg-black/50 inline-block" aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>

      <span className="absolute top-2 left-2 w-2 h-2 border-l border-t border-black/40" aria-hidden="true" />
      <span className="absolute top-2 right-2 w-2 h-2 border-r border-t border-black/40" aria-hidden="true" />
      <span className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-black/40" aria-hidden="true" />
      <span className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-black/40" aria-hidden="true" />
    </motion.div>
  )
}

export default function SkillsClient({ data }: { data: Service[] }) {
  return (
    <div className="border-t border-l border-black mx-4 md:mx-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((s, i) => (
          <SkillCell key={s.name} skill={s} index={i} />
        ))}
      </div>
    </div>
  )
}
