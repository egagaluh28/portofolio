import { getAbout, getSkills, getProfile, getSocialLinks } from '@/app/actions/portfolio'
import { AboutClient } from '@/components/sections/about-client'

export async function About() {
    const [about, skills, profile, socialLinks] = await Promise.all([
        getAbout(),
        getSkills(),
        getProfile(),
        getSocialLinks(),
    ])

    return <AboutClient about={about} skills={skills} profile={profile} socialLinks={socialLinks} />
}
