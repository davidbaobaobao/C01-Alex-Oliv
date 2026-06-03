import { getSupabase } from '@/lib/supabase'
import SectionHeader from './SectionHeader'
import ProjectsClient from './ProjectsClient'

export const revalidate = 60

export default async function Projects() {
  const sb = getSupabase()
  const { data } = sb
    ? await sb
        .from('showcase_projects')
        .select('id, name, description, main_image, additional_images, sort_order')
        .eq('visible', true)
        .order('sort_order', { ascending: true })
    : { data: null }

  // Empty array → client renders the styled placeholder card
  const projects = data ?? []

  return (
    <section id="proyectos" className="relative border-b border-black">
      <SectionHeader num="05" title="Proyectos" caption="Trabajos seleccionados" />
      <ProjectsClient data={projects} />
    </section>
  )
}
