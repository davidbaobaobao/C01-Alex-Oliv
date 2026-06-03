import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black bg-[#FAFAFA]">
      <div className="px-4 md:px-8 py-6 grid grid-cols-12 gap-4 items-center font-mono-tech text-[11px] tracking-[0.22em] uppercase">
        <div className="col-span-12 md:col-span-4 opacity-70">
          © {year} Àlex Oliveras. Todos los derechos reservados.
        </div>
        <div className="col-span-12 md:col-span-4 text-left md:text-center opacity-60">
          Construido en Barcelona.
        </div>
        <nav
          aria-label="Páginas legales"
          className="col-span-12 md:col-span-4 flex md:justify-end gap-5"
        >
          <Link
            href="/aviso-legal"
            className="hover:text-[#FF3B30] transition-colors"
          >
            Aviso Legal
          </Link>
          <Link
            href="/politica-de-privacidad"
            className="hover:text-[#FF3B30] transition-colors"
          >
            Política de Privacidad
          </Link>
        </nav>
      </div>
      <div className="border-t border-black/20 overflow-hidden">
        <div
          className="px-4 md:px-8 py-4 font-display text-[18vw] leading-[0.85] uppercase tracking-tighter opacity-90 select-none"
          aria-hidden="true"
        >
          A · O · 0 1
        </div>
      </div>
    </footer>
  )
}
