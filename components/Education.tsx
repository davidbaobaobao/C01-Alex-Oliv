import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import EducationClient from './EducationClient'

export const revalidate = 60

const FALLBACK_EDUCATION = [
  {
    question: 'PhD, Wireless Communications',
    answer: 'Aalborg University · Aalborg, Dinamarca · 2014–2018.\nInvestigación sobre estimación de canal y contaminación de pilotos en sistemas Massive MIMO.',
  },
  {
    question: 'Ingeniería de Telecomunicaciones',
    answer: 'Universitat Politècnica de Catalunya (UPC) · Barcelona · 2008–2013.\nMejor expediente de promoción. Especialización en teoría de señal y comunicaciones.',
  },
  {
    question: 'Proyecto de Intercambio — Wireless Comm. Lab',
    answer: 'Tsinghua University · Beijing, China · 2013.\nCampaña de medición de propagación indoor mmWave.',
  },
]

export default async function Education() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('faqs')
        .select('question, answer')
        .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
        .eq('visible', true)
        .order('sort_order', { ascending: true })
    : { data: null }

  const education = data && data.length > 0 ? data : FALLBACK_EDUCATION

  return (
    <section
      id="formacion"
      className="relative border-b border-black bg-[#0A0A0A] text-[#FAFAFA]"
    >
      <SectionHeader num="04" title="Formación" caption="Historial académico" dark />
      <EducationClient data={education} />
    </section>
  )
}
