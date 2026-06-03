'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTIONS = [
  { id: 'inicio', label: 'Inicio', num: '00' },
  { id: 'sobre-mi', label: 'Sobre mí', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'experiencia', label: 'Experiencia', num: '03' },
  { id: 'formacion', label: 'Formación', num: '04' },
  { id: 'proyectos', label: 'Proyectos', num: '05' },
  { id: 'contacto', label: 'Contacto', num: '06' },
]

const sectionIds = SECTIONS.map((s) => s.id)

export default function Nav() {
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const update = () => {
      const d = new Date()
      const hh = String(d.getUTCHours()).padStart(2, '0')
      const mm = String(d.getUTCMinutes()).padStart(2, '0')
      const ss = String(d.getUTCSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss} UTC`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-[2px] border-b border-black"
    >
      <div className="grid grid-cols-12 items-center px-4 md:px-8 h-14">
        <a
          href="#inicio"
          className="col-span-3 md:col-span-2 font-mono-tech text-[12px] tracking-[0.18em] uppercase font-medium"
        >
          Àlex Oliveras <span className="opacity-50">/ AO·01</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex col-span-7 items-center gap-6 font-mono-tech text-[12px] tracking-[0.18em] uppercase"
        >
          {SECTIONS.slice(1).map((s) => {
            const isActive = active === s.id
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="group relative inline-flex items-center gap-2 py-1"
              >
                <span
                  className={`w-1.5 h-1.5 ${
                    isActive ? 'bg-[#FF3B30]' : 'bg-transparent border border-black/40'
                  } transition-colors`}
                />
                <span className="opacity-50 mr-0.5">{s.num}</span>
                <span
                  className={`${
                    isActive ? 'text-black' : 'text-black/60 group-hover:text-black'
                  } transition-colors`}
                >
                  {s.label}
                </span>
              </a>
            )
          })}
        </nav>

        <div className="hidden md:flex col-span-3 items-center justify-end gap-3 font-mono-tech text-[11px] tracking-[0.18em] uppercase">
          <span className="opacity-50">{time}</span>
          <span className="hairline w-6 h-px" />
          <span className="inline-flex items-center gap-2">
            <span className="signal-dot w-2 h-2 bg-[#FF3B30]" aria-hidden="true" />
            Disponible
          </span>
        </div>

        <a
          href="#contacto"
          className="md:hidden col-span-9 text-right font-mono-tech text-[11px] tracking-[0.2em] uppercase"
        >
          Contacto →
        </a>
      </div>
      {scrolled && <div className="tick-row" aria-hidden="true" />}
    </motion.header>
  )
}
