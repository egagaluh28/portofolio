import { getEducation } from '@/app/actions/portfolio'
import EducationAdmin from './education-client'

export default async function AdminEducationPage() {
    const education = await getEducation()
    return <EducationAdmin education={education} />
}
