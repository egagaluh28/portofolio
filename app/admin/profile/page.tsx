import { getProfile } from '@/app/actions/portfolio'
import ProfileAdmin from './profile-client'

export default async function ProfilePage() {
    const profile = await getProfile()

    return <ProfileAdmin profile={profile} />
}
