import { getAbout } from '@/app/actions/portfolio'
import AboutAdmin from './about-client'

export default async function AboutPage() {
    const about = await getAbout()

    return <AboutAdmin about={about} />
}
