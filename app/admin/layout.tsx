'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LayoutDashboard, User, Briefcase, FolderKanban, GraduationCap, Award, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Profile', href: '/admin/profile', icon: User },
    { name: 'About', href: '/admin/about', icon: Settings },
    { name: 'Experience', href: '/admin/experience', icon: Briefcase },
    { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
    { name: 'Education', href: '/admin/education', icon: GraduationCap },
    { name: 'Skills', href: '/admin/skills', icon: Award },
    { name: 'Socials', href: '/admin/socials', icon: FolderKanban }, // Reusing icon for now
]

export default function AdminLayout({ children }: { children: ReactNode }) {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' })
            router.push('/admin/login')
            router.refresh()
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background/95 backdrop-blur-sm">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
                        <span className="text-primary">&lt;</span>
                        Admin
                        <span className="text-primary">/&gt;</span>
                    </Link>

                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border space-y-2">
                    <Button
                        variant="outline"
                        className="w-full justify-start gap-2"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </Button>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        ← Back to Website
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 p-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
