'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ShowcaseProject {
  id: string
  name: string
  description: string | null
  main_image: string | null
  additional_images: string[] | null
  sort_order: number
}

function ProjectRow({
  project,
  index,
}: {
  project: ShowcaseProject
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const reverse = index % 2 === 1

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`grid grid-cols-12 gap-0 border-b border-black ${
        reverse ? 'md:[direction:rtl]' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`col-span-12 md:col-span-7 border-b md:border-b-0 ${
          reverse ? 'md:border-l' : 'md:border-r'
        } border-black overflow-hidden [direction:ltr]`}
      >
        <div className="aspect-[16/10] w-full overflow-hidden relative">
          {project.main_image ? (
            <motion.div
              style={{ y: imgY }}
              className="absolute inset-[-10%] w-full"
            >
              <Image
                src={project.main_image}
                alt={project.name}
                fill
                className="object-cover project-image"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center">
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.22em] text-black/40">
                Sin imagen
              </span>
            </div>
          )}
          <div className="absolute top-3 left-3 right-3 flex justify-between font-mono-tech text-[10px] tracking-[0.22em] uppercase mix-blend-difference text-white pointer-events-none">
            <span>P / {String(index + 1).padStart(2, '0')}</span>
            <span>Frame 001</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="col-span-12 md:col-span-5 px-4 md:px-8 py-8 md:py-12 [direction:ltr]">
        <div className="flex items-center justify-between mb-6">
          <span className="label-tech text-black/55">
            P / {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] tracking-tight mb-6">
          {project.name}
        </h3>

        {project.description && (
          <p className="text-[14px] leading-[1.7] text-black/80 max-w-[52ch] mb-8">
            {project.description}
          </p>
        )}

        {project.additional_images && project.additional_images.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {project.additional_images.slice(0, 3).map((img, k) => (
              <div key={k} className="w-16 h-16 relative overflow-hidden border border-black/20">
                <Image
                  src={img}
                  alt={`${project.name} — detalle ${k + 1}`}
                  fill
                  className="object-cover grayscale"
                  sizes="64px"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

function EmptyProjectCard() {
  return (
    <div className="border-b border-black py-20 px-4 md:px-8 flex flex-col items-center justify-center text-center gap-4">
      <div className="label-tech text-black/40">Sección 05 / Proyectos</div>
      <div className="font-display text-4xl md:text-6xl uppercase tracking-tight text-black/20">
        Próximos proyectos
      </div>
      <p className="font-mono-tech text-[12px] uppercase tracking-[0.18em] text-black/40 max-w-[40ch]">
        En construcción.
      </p>
    </div>
  )
}

export default function ProjectsClient({ data }: { data: ShowcaseProject[] }) {
  return (
    <div className="px-4 md:px-8 pb-20">
      <div className="border-t border-black">
        {data.length === 0 ? (
          <EmptyProjectCard />
        ) : (
          data.map((p, i) => <ProjectRow key={p.id} project={p} index={i} />)
        )}
      </div>
      <div className="mt-8 flex items-center justify-between font-mono-tech text-[11px] tracking-[0.22em] uppercase text-black/60">
        <span>
          {data.length > 0
            ? `Fin de la selección — ${data.length} mostrados`
            : 'Selección disponible en breve'}
        </span>
        <a href="#contacto" className="invert-hover border border-black px-3 py-2">
          Solicitar dossier completo →
        </a>
      </div>
    </div>
  )
}
