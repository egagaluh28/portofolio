import { getExperiences } from '@/app/actions/portfolio'
import { ExperienceClient } from '@/components/sections/experience-client'

export async function Experience() {
    const experiences = await getExperiences()
    return <ExperienceClient experiences={experiences} />
}
