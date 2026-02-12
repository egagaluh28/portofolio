import { getSkills } from '@/app/actions/portfolio'
import SkillsAdmin from './skills-client'

export default async function AdminSkillsPage() {
    const skills = await getSkills()
    return <SkillsAdmin skills={skills} />
}
