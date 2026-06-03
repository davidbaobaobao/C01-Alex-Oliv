import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'

const cabinetGrotesk = localFont({
  src: [{ path: '../public/fonts/CabinetGrotesk-Variable.woff2', weight: '100 900' }],
  variable: '--font-cabinet',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Àlex Oliveras | Ingeniero de Telecomunicaciones 5G · Barcelona',
  description:
    'PhD en Comunicaciones Inalámbricas especializado en 5G RAN y Massive MIMO. Basado en Barcelona. Disponible para proyectos freelance de planificación RF y consultoría técnica.',
  authors: [{ name: 'Àlex Oliveras' }],
  keywords: [
    'ingeniero inalámbrico',
    '5G RAN',
    'Massive MIMO',
    'planificación RF',
    'telecom freelance',
    'Huawei',
    'Barcelona',
    'PhD comunicaciones inalámbricas',
  ],
  openGraph: {
    title: 'Àlex Oliveras — Wireless Communications Engineer',
    description:
      'PhD en Comunicaciones Inalámbricas especializado en 5G RAN y Massive MIMO. Disponible para proyectos seleccionados.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${cabinetGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-[#FAFAFA] text-[#0A0A0A]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
