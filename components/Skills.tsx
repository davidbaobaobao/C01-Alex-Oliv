import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import SkillsClient from './SkillsClient'

export const revalidate = 60

export default async function Skills() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('services')
        .select('*')
        .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
        .eq('visible', true)
        .order('sort_order', { ascending: true })
    : { data: null }

  if (!data || data.length === 0) return null

  return (
    <section id="skills" className="relative border-b border-black bg-[#FAFAFA]">
      <SectionHeader num="02" title="Skills" caption="Stack técnico / Matriz de capacidades" />
      <SkillsClient data={data} />
    </section>
  )
}
