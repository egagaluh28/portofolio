import { getProjects } from '@/app/actions/portfolio'
import ProjectsAdmin from './projects-client'

export default async function ProjectsPage() {
    const projects = await getProjects()

    return <ProjectsAdmin projects={projects} />
}
