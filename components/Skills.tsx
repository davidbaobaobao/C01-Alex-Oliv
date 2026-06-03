import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import SkillsClient from './SkillsClient'

export const revalidate = 60

const FALLBACK_SKILLS = [
  { name: 'Radio Access Networks', description: 'LTE-A Pro\n5G NR SA / NSA\nO-RAN\nRAN Sharing', price_label: '8 años', sort_order: 1 },
  { name: '5G & NR Physical Layer', description: 'Sub-6 GHz\nmmWave (26 / 28 GHz)\nNumerología μ0-μ3\nPRACH / SRS', price_label: 'Sub-ms', sort_order: 2 },
  { name: 'Massive MIMO', description: '64T64R / 32T32R\nBeamforming codebooks\nEstimación de canal DL/UL\nCalibración de reciprocidad', price_label: '64×64', sort_order: 3 },
  { name: 'RF Planning', description: 'Atoll · Forsk\nRanplan\nDrive tests · TEMS\nRay-tracing propagation', price_label: '850+ sites', sort_order: 4 },
  { name: 'Python & Data Science', description: 'NumPy · PyTorch\npandas · scikit-learn\nsionna-rt', price_label: 'Daily', sort_order: 5 },
  { name: 'Métodos y Estándares', description: '3GPP Rel. 15–18\nITU-R P.1411 / P.452\nMATLAB\nLinux RT', price_label: 'ISO', sort_order: 6 },
]

export default async function Skills() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('services')
        .select('name, description, price_label, sort_order')
        .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
        .eq('visible', true)
        .order('sort_order', { ascending: true })
    : { data: null }

  const skills = data && data.length > 0 ? data : FALLBACK_SKILLS

  return (
    <section id="skills" className="relative border-b border-black bg-[#FAFAFA]">
      <SectionHeader num="02" title="Skills" caption="Stack técnico / Matriz de capacidades" />
      <SkillsClient data={skills} />
    </section>
  )
}
