import { getProfile, getSocialLinks } from '@/app/actions/portfolio'
import { HeroClient } from '@/components/sections/hero-client'

export async function Hero() {
    const [profile, socialLinks] = await Promise.all([
        getProfile(),
        getSocialLinks(),
    ])

    return <HeroClient profile={profile} socialLinks={socialLinks} />
}
