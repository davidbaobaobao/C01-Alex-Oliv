import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import ProjectsClient from './ProjectsClient'

export const revalidate = 60

export default async function Projects() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('showcase_projects')
        .select('*')
        .eq('visible', true)
        .order('sort_order', { ascending: true })
    : { data: null }

  // Always render — client shows placeholder card when data is empty
  const projects = data ?? []

  return (
    <section id="proyectos" className="relative border-b border-black">
      <SectionHeader num="05" title="Proyectos" caption="Trabajos seleccionados" />
      <ProjectsClient data={projects} />
    </section>
  )
}
