import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import EducationClient from './EducationClient'

export const revalidate = 60

export default async function Education() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('faqs')
        .select('*')
        .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
        .eq('visible', true)
        .order('sort_order', { ascending: true })
    : { data: null }

  if (!data || data.length === 0) return null

  return (
    <section
      id="formacion"
      className="relative border-b border-black bg-[#0A0A0A] text-[#FAFAFA]"
    >
      <SectionHeader num="04" title="Formación" caption="Historial académico" dark />
      <EducationClient data={data} />
    </section>
  )
}
