import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal — Àlex Oliveras',
  description: 'Información legal y datos de contacto de Àlex Oliveras, ingeniero de telecomunicaciones freelance en Barcelona.',
}

export default function AvisoLegal() {
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
        <span className="label-tech text-black/50">Aviso Legal</span>
      </div>

      <div className="px-4 md:px-8 pt-16 pb-24 max-w-3xl">
        <div className="label-tech text-black/50 mb-4">Documento legal</div>
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.88] mb-16">
          Aviso Legal.
        </h1>

        <div className="space-y-12 text-[15px] leading-[1.7] text-black/80">
          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              01 / Titular
            </h2>
            <dl className="space-y-2 font-mono-tech text-[13px]">
              <div className="grid grid-cols-2 gap-4">
                <dt className="uppercase tracking-[0.14em] text-black/55">Nombre</dt>
                <dd>Àlex Oliveras</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="uppercase tracking-[0.14em] text-black/55">Actividad</dt>
                <dd>Ingeniero de Telecomunicaciones freelance</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="uppercase tracking-[0.14em] text-black/55">Ciudad</dt>
                <dd>Barcelona, España</dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="uppercase tracking-[0.14em] text-black/55">Email</dt>
                <dd>
                  <a href="mailto:web@alexoliveras.cat" className="underline hover:text-black transition-colors">
                    web@alexoliveras.cat
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="uppercase tracking-[0.14em] text-black/55">Teléfono</dt>
                <dd>
                  <a href="tel:+34608253699" className="underline hover:text-black transition-colors">
                    608 253 699
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              02 / Objeto
            </h2>
            <p>
              El presente Aviso Legal regula el uso del sitio web{' '}
              <span className="font-mono-tech">www.alexoliveras.cat</span>, titularidad de Àlex
              Oliveras. El acceso y uso de este sitio implica la aceptación de las condiciones aquí
              descritas.
            </p>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              03 / Propiedad intelectual
            </h2>
            <p>
              Los contenidos de este sitio web — textos, imágenes, diseño y código fuente — son
              propiedad de Àlex Oliveras o cuentan con la autorización expresa de sus legítimos
              titulares. Queda prohibida su reproducción, distribución o modificación sin
              autorización previa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              04 / Limitación de responsabilidad
            </h2>
            <p>
              Àlex Oliveras no se responsabiliza de los daños derivados del uso del sitio, de
              errores u omisiones en los contenidos, ni de la disponibilidad técnica del mismo.
              Los enlaces a sitios externos son responsabilidad de sus respectivos titulares.
            </p>
          </section>

          <section>
            <h2 className="font-mono-tech text-[12px] uppercase tracking-[0.22em] text-black mb-4 border-b border-black pb-2">
              05 / Legislación aplicable
            </h2>
            <p>
              Este aviso legal se rige por la legislación española. Para cualquier litigio,
              las partes se someten a los juzgados y tribunales de Barcelona.
            </p>
          </section>
        </div>
      </div>

      <div className="border-t border-black px-4 md:px-8 py-4 font-mono-tech text-[11px] uppercase tracking-[0.22em] text-black/50">
        © {new Date().getFullYear()} Àlex Oliveras ·{' '}
        <Link href="/politica-de-privacidad" className="hover:text-black transition-colors">
          Política de Privacidad
        </Link>
      </div>
    </div>
  )
}
