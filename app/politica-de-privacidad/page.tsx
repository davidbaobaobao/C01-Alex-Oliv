import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Àlex Oliveras',
  description: 'Política de privacidad y protección de datos de Àlex Oliveras, conforme al RGPD.',
}

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div className="border-b border-black px-4 md:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono-tech text-[12px] tracking-[0.18em] uppercase hover:opacity-60 transition-opacity"
        >
          ← Àlex Oliveras
        </Link>
        <span className="label-tech text-black/50">Política de Privacidad</span>
      </div>

      <div className="px-4 md:px-8 pt-16 pb-24 max-w-3xl">
        <div className="label-tech text-black/50 mb-4">RGPD · Protección de datos</div>
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.88] mb-16">
          Privacidad.
        </h1>

        <div className="space-y-12 text-[15px] leading-[1.7] text-black/80">
          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              01 / Responsable del tratamiento
            </h2>
            <dl className="space-y-2 font-mono-tech text-[13px]">
              <div className="grid grid-cols-2 gap-4">
                <dt className="uppercase tracking-[0.14em] text-black/55">Responsable</dt>
                <dd>Àlex Oliveras</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="uppercase tracking-[0.14em] text-black/55">Contacto</dt>
                <dd>
                  <a href="mailto:web@alexoliveras.cat" className="underline hover:text-black transition-colors">
                    web@alexoliveras.cat
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              02 / Finalidad
            </h2>
            <p>
              Los datos personales recogidos a través del formulario de contacto se utilizan
              exclusivamente para gestionar y responder las consultas recibidas. No se utilizan
              para envíos comerciales, ni se ceden a terceros.
            </p>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              03 / Base legal
            </h2>
            <p>
              El tratamiento se basa en el consentimiento expreso del usuario al enviar el
              formulario de contacto, de conformidad con el artículo 6.1.a) del Reglamento
              General de Protección de Datos (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              04 / Datos recogidos
            </h2>
            <p>
              Únicamente se recogen los datos que el usuario introduce voluntariamente en el
              formulario: nombre, dirección de correo electrónico y texto del mensaje.
              No se instalan cookies de seguimiento ni se utilizan herramientas de analítica
              de terceros.
            </p>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              05 / Conservación
            </h2>
            <p>
              Los datos se conservan únicamente durante el tiempo necesario para gestionar la
              consulta y, en su caso, durante el período de relación contractual posterior.
            </p>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              06 / Derechos del usuario
            </h2>
            <p className="mb-4">
              Conforme al RGPD y a la LOPDGDD, el usuario puede ejercer los siguientes derechos
              enviando un correo a{' '}
              <a href="mailto:web@alexoliveras.cat" className="underline hover:text-black transition-colors">
                web@alexoliveras.cat
              </a>
              :
            </p>
            <ul className="space-y-2 font-mono-tech text-[13px]">
              {[
                'Acceso a sus datos personales',
                'Rectificación de datos inexactos',
                'Supresión de los datos',
                'Limitación del tratamiento',
                'Portabilidad de los datos',
                'Oposición al tratamiento',
              ].map((right, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-3 h-px bg-black/50 inline-block" aria-hidden="true" />
                  {right}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              07 / Reclamaciones
            </h2>
            <p>
              Si considera que el tratamiento de sus datos vulnera la normativa aplicable, puede
              presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)
              en{' '}
              <span className="font-mono-tech">www.aepd.es</span>.
            </p>
          </section>
        </div>
      </div>

      <div className="border-t border-black px-4 md:px-8 py-4 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-black/50">
        © {new Date().getFullYear()} Àlex Oliveras ·{' '}
        <Link href="/aviso-legal" className="hover:text-black transition-colors">
          Aviso Legal
        </Link>
      </div>
    </div>
  )
}
