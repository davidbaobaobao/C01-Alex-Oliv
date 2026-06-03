'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const EXPERIENCE = [
  {
    years: '2019 — Actualidad',
    duration: '7 años',
    role: 'Senior Wireless Engineer',
    company: 'Huawei Technologies',
    location: 'Madrid · Barcelona',
    scope: [
      'Ingeniero principal para despliegues 5G NR Sub-6 GHz y mmWave en operadores europeos top.',
      'Diseño de pipelines de calibración Massive MIMO en más de 800 emplazamientos AAU.',
      'Desarrollo del stack ML interno para rendimiento RAN: detección de anomalías, predicción de KPIs y grafos de causa raíz.',
    ],
    stack: ['5G NR', 'mMIMO', 'Python', 'Atoll', 'PyTorch'],
  },
  {
    years: '2018 — 2019',
    duration: '1 año',
    role: 'Data Scientist · Telecom',
    company: 'Conecta Wireless',
    location: 'Barcelona',
    scope: [
      'Modelos de predicción de propagación a partir de logs de drive-test en entornos rurales y urbanos densos.',
      'Herramienta de planificación de frecuencias automatizada que redujo los ciclos de planificación en un 40%.',
    ],
    stack: ['Python', 'scikit-learn', 'PostGIS'],
  },
  {
    years: '2014 — 2018',
    duration: '4 años',
    role: 'PhD Fellow — Comunicaciones Inalámbricas',
    company: 'Aalborg University',
    location: 'Aalborg, Dinamarca',
    scope: [
      'Investigación doctoral en estimación de canal y contaminación de pilotos en sistemas Massive MIMO.',
      'Co-autor de 11 artículos revisados por pares; reviewer en IEEE Trans. Wireless Comm.',
      'Investigador visitante en Tsinghua University — modelado de canal indoor mmWave.',
    ],
    stack: ['MATLAB', 'C++', 'MIMO theory'],
  },
]

function ExperienceRow({ x, index }: { x: typeof EXPERIENCE[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="grid grid-cols-12 border-b border-black/30 last:border-b-0 py-8 md:py-10 group hover:bg-black hover:text-[#FAFAFA] transition-colors duration-150"
    >
      <div className="col-span-12 md:col-span-2 font-mono-tech text-[13px] uppercase tracking-[0.14em] mb-3 md:mb-0">
        {x.years}
      </div>
      <div className="col-span-12 md:col-span-1 font-mono-tech text-[12px] uppercase tracking-[0.14em] opacity-70 mb-3 md:mb-0">
        {x.duration}
      </div>
      <div className="col-span-12 md:col-span-4 mb-4 md:mb-0">
        <div className="font-display text-2xl md:text-[28px] uppercase leading-[0.95] tracking-tight">
          {x.role}
        </div>
        <div className="mt-2 font-mono-tech text-[12px] uppercase tracking-[0.18em] opacity-80">
          {x.company} <span className="opacity-50">/ {x.location}</span>
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 mb-4 md:mb-0 pr-4">
        <ul className="space-y-2 text-[13px] leading-[1.55]">
          {x.scope.map((s, j) => (
            <li key={j} className="flex gap-2">
              <span className="w-3 h-3 mt-1.5 border border-current shrink-0" aria-hidden="true" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-12 md:col-span-2">
        <div className="flex flex-wrap gap-1.5">
          {x.stack.map((t, k) => (
            <span
              key={k}
              className="font-mono-tech text-[10px] uppercase tracking-[0.16em] border border-current px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experiencia" className="relative border-b border-black">
      <SectionHeader num="03" title="Experiencia" caption="Historial profesional" />

      <div className="border-t border-black mx-4 md:mx-8 mb-20">
        <div className="hidden md:grid grid-cols-12 border-b border-black py-3 font-mono-tech text-[10px] tracking-[0.22em] uppercase text-black/60">
          <div className="col-span-2">Años</div>
          <div className="col-span-1">Duración</div>
          <div className="col-span-4">Rol / Organización</div>
          <div className="col-span-3">Alcance</div>
          <div className="col-span-2">Stack</div>
        </div>

        {EXPERIENCE.map((x, i) => (
          <ExperienceRow key={i} x={x} index={i} />
        ))}
      </div>
    </section>
  )
}
