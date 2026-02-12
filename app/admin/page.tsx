import { getProfile, getAbout, getExperiences, getProjects, getSkills } from '@/app/actions/portfolio'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User, Briefcase, FolderKanban, Award } from 'lucide-react'

export default async function AdminDashboard() {
    const [profile, about, experiences, projects, skills] = await Promise.all([
        getProfile(),
        getAbout(),
        getExperiences(),
        getProjects(),
        getSkills(),
    ])

    const stats = [
        {
            title: 'Experiences',
            value: experiences.length,
            icon: Briefcase,
            color: 'text-blue-500',
        },
        {
            title: 'Projects',
            value: projects.length,
            icon: FolderKanban,
            color: 'text-green-500',
        },
        {
            title: 'Skills',
            value: skills.length,
            icon: Award,
            color: 'text-purple-500',
        },
        {
            title: 'Profile Status',
            value: profile?.available ? 'Available' : 'Unavailable',
            icon: User,
            color: 'text-orange-500',
        },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Manage your portfolio content here.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-sm text-muted-foreground">Name</p>
                            <p className="font-medium">{profile?.name || 'Not set'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Title</p>
                            <p className="font-medium">{profile?.title || 'Not set'}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p className="font-medium">
                                {profile?.available ? '🟢 Available for work' : '🔴 Not available'}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <p className="text-sm">
                                    {experiences.length} work experiences
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <p className="text-sm">
                                    {projects.filter(p => p.featured).length} featured projects
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <p className="text-sm">
                                    {skills.filter(s => s.type === 'hard').length} hard skills
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
