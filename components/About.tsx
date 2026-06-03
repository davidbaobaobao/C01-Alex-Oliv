import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import AboutClient from './AboutClient'

export const revalidate = 60

const FALLBACK = {
  name: 'Àlex Oliveras',
  role: 'PhD · Wireless Communications Engineer · 5G RAN',
  photo_url: null,
  bio: `PhD en Comunicaciones Inalámbricas por la Universidad de Aalborg. Ocho años de experiencia en industria, actualmente liderando proyectos de radio acceso 5G en Huawei Technologies.

Mi trabajo combina electromagnética, procesado estadístico de señal y mediciones de campo a gran escala. El objetivo es siempre el mismo: convertir espectro, antenas y restricciones en bits por hercio por kilómetro cuadrado fiables.

Acepto un número reducido de proyectos freelance al año — auditorías de planificación RF, calibración de Massive MIMO, estudios de propagación y ML aplicado a RAN. Idiomas de trabajo: català, castellano, english.`,
}

export default async function About() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('team_members')
        .select('name, role, bio, photo_url')
        .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
        .eq('visible', true)
        .order('sort_order', { ascending: true })
        .limit(1)
    : { data: null }

  const member = data && data.length > 0 ? data[0] : FALLBACK

  return (
    <section id="sobre-mi" className="relative border-b border-black">
      <SectionHeader num="01" title="Sobre mí" caption="Bio / Perfil operativo" />
      <AboutClient data={member} />
    </section>
  )
}
