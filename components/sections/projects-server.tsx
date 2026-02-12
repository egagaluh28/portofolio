import { getProjects } from '@/app/actions/portfolio'
import { ProjectsClient } from '@/components/sections/projects-client'

export async function Projects() {
    const projects = await getProjects()
    return <ProjectsClient projects={projects} />
}
