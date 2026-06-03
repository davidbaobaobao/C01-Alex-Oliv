'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string | null
  bio: string | null
  photo_url: string | null
}

const CREDENTIALS = [
  { k: 'Doctorado', v: 'Ph.D., Aalborg University' },
  { k: 'Industria', v: 'Senior Engineer, Huawei' },
  { k: 'Dominios', v: '5G NR · O-RAN · mMIMO' },
  { k: 'Publicaciones', v: '11 revisadas por pares' },
  { k: 'Patentes', v: '3 concedidas (EU / CN)' },
  { k: 'Espectro', v: 'Sub-6 GHz · mmWave 26/28' },
]

export default function AboutClient({ data }: { data: TeamMember }) {
  const bioParagraphs = (data.bio ?? '').split('\n\n').filter(Boolean)

  return (
    <div className="grid grid-cols-12 border-t border-black">
      {/* Portrait */}
      <div className="col-span-12 md:col-span-5 border-b md:border-b-0 md:border-r border-black relative">
        <div className="aspect-[4/5] w-full overflow-hidden relative portrait-image">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {data.photo_url ? (
              <Image
                src={data.photo_url}
                alt={`Foto de ${data.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
                priority
              />
            ) : (
              <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center">
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-black/40">
                  AO · 01
                </span>
              </div>
            )}
          </motion.div>
        </div>
        <div className="absolute top-4 left-4 right-4 flex justify-between font-mono-tech text-[10px] tracking-[0.22em] uppercase mix-blend-difference text-white">
          <span>Sujeto — AO·01</span>
          <span>Frame 001 / 003</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono-tech text-[10px] tracking-[0.22em] uppercase mix-blend-difference text-white">
          <span>Barcelona</span>
          <span>41.3851° N, 2.1734° E</span>
        </div>
      </div>

      {/* Bio */}
      <div className="col-span-12 md:col-span-7 px-4 md:px-10 py-10 md:py-14">
        <div className="label-tech text-black/60 mb-6">Sobre el ingeniero</div>
        <div className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-[0.9] mb-10 max-w-[18ch]">
          Ingeniería de la capa física de redes celulares.
        </div>
        <div className="space-y-5 max-w-[60ch] text-[15px] leading-[1.7] text-black/80">
          {bioParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Credentials grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 border-t border-l border-black">
          {CREDENTIALS.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-r border-b border-black p-4 md:p-5"
            >
              <div className="label-tech text-black/55 mb-2">{c.k}</div>
              <div className="font-mono-tech text-[13px] uppercase tracking-wide">{c.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
