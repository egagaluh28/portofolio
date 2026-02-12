import { getExperiences } from '@/app/actions/portfolio'
import ExperienceAdmin from './experience-client'

export default async function ExperiencePage() {
    const experiences = await getExperiences()

    return <ExperienceAdmin experiences={experiences} />
}
