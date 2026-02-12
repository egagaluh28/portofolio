import { getSocialLinks } from '@/app/actions/portfolio'
import SocialsAdmin from './socials-client'

export default async function AdminSocialsPage() {
    const links = await getSocialLinks()
    return <SocialsAdmin links={links} />
}
