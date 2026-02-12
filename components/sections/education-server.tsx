import { getEducation } from '@/app/actions/portfolio'
import { EducationClient } from '@/components/sections/education-client'

export async function Education() {
    const educationData = await getEducation()
    return <EducationClient education={educationData} />
}
