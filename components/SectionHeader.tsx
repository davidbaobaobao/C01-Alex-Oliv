'use client'

import { motion } from 'framer-motion'

interface Props {
  num: string
  title: string
  caption: string
  dark?: boolean
}

export default function SectionHeader({ num, title, caption, dark = false }: Props) {
  const dim = dark ? 'opacity-70' : 'text-black/60'
  const sub = dark ? 'opacity-80' : 'text-black/70'

  return (
    <div className="grid grid-cols-12 items-end px-4 md:px-8 pt-20 md:pt-28 pb-8 md:pb-10">
      <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
        <div className={`label-tech mb-2 ${dim}`}>Sección {num}</div>
        <div className={`font-mono-tech text-[12px] uppercase tracking-[0.22em] ${sub}`}>
          {caption}
        </div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-6xl md:text-[10vw] leading-[0.85] uppercase tracking-tighter"
        >
          {title}.
        </motion.h2>
      </div>
    </div>
  )
}
