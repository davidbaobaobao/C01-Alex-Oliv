'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const MARQUEE_ITEMS = [
  '5G NR · Sub-6 GHz · mmWave 28',
  'Massive MIMO · 64T64R · Beamforming',
  'RF Planning · 850+ Sites',
  'PhD Aalborg · 11 Papers · 3 Patentes',
  'O-RAN · 3GPP Rel. 15–18',
  'Python · PyTorch · sionna-rt',
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen w-full border-b border-black overflow-hidden"
    >
      <motion.div
        style={{ y: gridY }}
        aria-hidden
        className="absolute inset-0 grid-bg opacity-70 pointer-events-none"
      />

      {/* Meta strip */}
      <div className="absolute top-14 inset-x-0 border-b border-black/15">
        <div className="grid grid-cols-12 px-4 md:px-8 py-3 font-mono-tech text-[10px] tracking-[0.22em] uppercase text-black/70">
          <div className="col-span-6 md:col-span-3">Lat 41.3851° N · Lon 2.1734° E</div>
          <div className="hidden md:block col-span-3">Barcelona — Catalunya</div>
          <div className="hidden md:block col-span-3">Índice / 00 — Portada</div>
          <div className="col-span-6 md:col-span-3 text-right">Rev. 2026.06</div>
        </div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-4 md:px-8 pt-40 md:pt-48 pb-16"
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="label-tech text-black/60 mb-3">00 / Identificador</div>
            <div className="font-mono-tech text-[12px] leading-relaxed">
              AO—01
              <br />
              Eng. Wireless
              <br />
              PhD · Aalborg
              <br />
              Huawei Tech.
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h1 className="font-display text-[20vw] md:text-[13vw] leading-[0.84] uppercase">
              {['Àlex', 'Oliveras'].map((p, i) => (
                <span key={i} className="block">{p}</span>
              ))}
            </h1>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 border-t border-black pt-6">
          <div className="col-span-12 md:col-span-4">
            <div className="label-tech text-black/60 mb-2">Disciplina</div>
            <div className="font-display text-2xl md:text-3xl uppercase tracking-tight">
              Wireless
              <br />
              Communications
              <br />
              Engineer
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="label-tech text-black/60 mb-2">Especialización</div>
            <div className="font-display text-2xl md:text-3xl uppercase tracking-tight">
              5G RAN ·
              <br />
              Massive MIMO ·
              <br />
              RF Planning
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="label-tech text-black/60 mb-2">Estado</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="signal-dot w-3 h-3 bg-[#FF3B30] inline-block" aria-hidden="true" />
              <span className="font-mono-tech text-sm uppercase tracking-[0.18em]">
                Disponible para proyectos
              </span>
            </div>
            <a
              href="#contacto"
              className="invert-hover inline-flex items-center justify-between gap-6 border border-black px-5 py-3 font-mono-tech text-[11px] tracking-[0.22em] uppercase"
            >
              <span>Abrir conversación</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 inset-x-0 border-t border-black bg-[#FAFAFA]">
        <div className="overflow-hidden border-b border-black/20" aria-hidden="true">
          <div className="marquee-track flex whitespace-nowrap py-2 font-mono-tech text-[11px] tracking-[0.22em] uppercase">
            {[0, 1].map((j) => (
              <span key={j} className="flex items-center">
                {MARQUEE_ITEMS.map((t, i) => (
                  <span key={i} className="px-6 flex items-center gap-6">
                    <span className="w-1.5 h-1.5 bg-black inline-block" />
                    {t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 px-4 md:px-8 py-3 items-center font-mono-tech text-[10px] tracking-[0.22em] uppercase">
          <div className="col-span-6">Scroll · 01 Sobre mí</div>
          <div className="col-span-6 flex justify-end items-center gap-2">
            <span className="scroll-cue inline-block" aria-hidden="true">▼</span>
          </div>
        </div>
      </div>
    </section>
  )
}
