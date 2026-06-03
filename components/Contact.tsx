'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', body: '', rgpd: false })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Campo obligatorio'
    if (!form.email.trim()) e.email = 'Campo obligatorio'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Email inválido — comprueba que incluye @'
    if (!form.body.trim()) e.body = 'Campo obligatorio'
    if (!form.rgpd) e.rgpd = 'Debes aceptar la política de privacidad'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    setSent(true)
    const subject = encodeURIComponent(`Consulta — ${form.name || 'Sin nombre'}`)
    const body = encodeURIComponent(`${form.body}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:web@alexoliveras.cat?subject=${subject}&body=${body}`
  }

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleBlur = (field: keyof typeof form) => () => {
    const e = validate()
    if (e[field]) setErrors((prev) => ({ ...prev, [field]: e[field] }))
  }

  return (
    <section id="contacto" className="relative border-b border-black">
      <div className="grid grid-cols-12 items-end px-4 md:px-8 pt-20 md:pt-28 pb-6">
        <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
          <div className="label-tech text-black/60 mb-2">Sección 07</div>
          <div className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black/70">
            Iniciar contacto
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
            Hablemos.
          </motion.h2>
          <p className="mt-6 max-w-[52ch] text-[14px] leading-[1.7] text-black/75">
            Un breve contexto es suficiente para empezar. Auditorías RF, estudios de
            propagación, calibración Massive MIMO, ML para RAN — todo lo demás por
            negociación.{' '}
            <span className="font-mono-tech uppercase tracking-[0.14em]">
              Català · Castellano · English.
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 border-t border-black mx-4 md:mx-8 mb-16">
        {/* CTAs */}
        <div className="col-span-12 md:col-span-5 border-b md:border-b-0 md:border-r border-black p-6 md:p-10 space-y-6">
          <CTA
            href="https://wa.me/34608253699?text=Hola%20Àlex%2C%20me%20gustaría%20contactarte"
            label="WhatsApp"
            value="608 253 699"
            sub="Canal principal · respuesta < 24h"
          />
          <CTA
            href="mailto:web@alexoliveras.cat"
            label="Email"
            value="web@alexoliveras.cat"
            sub="Clave PGP disponible bajo petición"
          />
        </div>

        {/* Form */}
        <div className="col-span-12 md:col-span-7 p-6 md:p-10">
          <div className="grid grid-cols-2 border-t border-l border-black mb-6 font-mono-tech text-[10px] uppercase tracking-[0.22em]">
            <FormMeta k="Form ID" v="AO-CONTACT-01" />
            <FormMeta k="Codificación" v="UTF-8" />
            <FormMeta k="Método" v="POST · mail" />
            <FormMeta k="Latencia" v="< 24h" />
          </div>

          <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-black/50 mb-4">
            * Campos obligatorios
          </p>

          <div className="space-y-4">
            <Field label="Nombre / Organización" num="01" error={errors.name}>
              <input
                type="text"
                className="raw-input"
                placeholder="Nombre completo y organización"
                value={form.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                aria-required="true"
                aria-describedby={errors.name ? 'error-name' : undefined}
              />
            </Field>

            <Field label="Email" num="02" error={errors.email}>
              <input
                type="email"
                className="raw-input"
                placeholder="tu@empresa.com"
                value={form.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                aria-required="true"
                aria-describedby={errors.email ? 'error-email' : undefined}
              />
            </Field>

            <Field label="Mensaje" num="03" error={errors.body}>
              <textarea
                rows={5}
                className="raw-input"
                placeholder="Proyecto, alcance, plazos, restricciones"
                value={form.body}
                onChange={handleChange('body')}
                onBlur={handleBlur('body')}
                aria-required="true"
                aria-describedby={errors.body ? 'error-body' : undefined}
              />
            </Field>

            {/* RGPD */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.rgpd}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, rgpd: e.target.checked }))
                    if (errors.rgpd) setErrors((prev) => ({ ...prev, rgpd: '' }))
                  }}
                  className="mt-1 w-4 h-4 border border-black rounded-none accent-black"
                  aria-required="true"
                />
                <span className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-black/70">
                  Acepto la{' '}
                  <Link
                    href="/politica-de-privacidad"
                    className="underline hover:text-black transition-colors"
                  >
                    política de privacidad
                  </Link>
                </span>
              </label>
              {errors.rgpd && (
                <p className="mt-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#FF3B30]">
                  {errors.rgpd}
                </p>
              )}
            </div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-black/55 max-w-[40ch]">
                Al enviar, aceptas un intercambio puntual por email. Sin seguimiento, sin listas.
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="invert-hover border border-black px-6 py-4 font-mono-tech text-[11px] uppercase tracking-[0.22em] inline-flex items-center justify-between gap-6 min-w-[220px] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span>{sent ? 'Enviado — cliente de correo abierto' : 'Enviar mensaje'}</span>
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA({
  href,
  label,
  value,
  sub,
}: {
  href: string
  label: string
  value: string
  sub: string
}) {
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="block group border border-black p-5 invert-hover"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="label-tech opacity-60">{label}</span>
        <span aria-hidden className="font-mono-tech text-sm">→</span>
      </div>
      <div className="font-display text-2xl md:text-3xl uppercase tracking-tight leading-tight">
        {value}
      </div>
      <div className="mt-2 font-mono-tech text-[11px] uppercase tracking-[0.18em] opacity-70">
        {sub}
      </div>
    </a>
  )
}

function Field({
  label,
  num,
  error,
  children,
}: {
  label: string
  num: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 label-tech text-black/60">
        <span>{num} / {label} *</span>
      </div>
      {children}
      {error && (
        <p className="mt-1 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[#FF3B30]">
          {error}
        </p>
      )}
    </div>
  )
}

function FormMeta({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-r border-b border-black p-3">
      <div className="opacity-55 text-[10px]">{k}</div>
      <div className="mt-1 text-black text-[10px]">{v}</div>
    </div>
  )
}
