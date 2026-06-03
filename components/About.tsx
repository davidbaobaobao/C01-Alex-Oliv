import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import AboutClient from './AboutClient'

export const revalidate = 60

export default async function About() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('team_members')
        .select('*')
        .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
        .eq('visible', true)
        .order('sort_order', { ascending: true })
        .maybeSingle()
    : { data: null }

  if (!data) return null

  return (
    <section id="sobre-mi" className="relative border-b border-black">
      <SectionHeader num="01" title="Sobre mí" caption="Bio / Perfil operativo" />
      <AboutClient data={data} />
    </section>
  )
}
