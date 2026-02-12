'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { updateProfile } from '@/app/actions/portfolio'
import { ImageUpload } from '@/components/ui/image-upload'
import { FileUpload } from '@/components/ui/file-upload'
import { toast } from 'sonner'

export default function ProfileAdmin({ profile }: { profile: any }) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: profile?.name || '',
        title: profile?.title || '',
        tagline: profile?.tagline || '',
        bio: profile?.bio || '',
        available: profile?.available || false,
        resumeUrl: profile?.resumeUrl || '',
        profileImage: profile?.profileImage || '',
    })
    const [isSaving, setIsSaving] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)

        try {
            const result = await updateProfile(formData)
            if (result.success) {
                toast.success('Profile updated successfully!')
                router.refresh()
            } else {
                toast.error(result.error || 'Failed to update profile')
            }
        } catch (error) {
            toast.error('An unexpected error occurred')
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">Profile Settings</h1>
                <p className="text-muted-foreground">Manage your personal information and hero section</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="title">Professional Title</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="Software Engineer"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tagline">Tagline</Label>
                            <Textarea
                                id="tagline"
                                value={formData.tagline}
                                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                                placeholder="Brief description of what you do..."
                                rows={3}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                placeholder="Longer bio for about section..."
                                rows={4}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <ImageUpload
                                    label="Profile Image"
                                    value={formData.profileImage}
                                    onChange={(url) => setFormData({ ...formData, profileImage: url })}
                                    disabled={isSaving}
                                />
                            </div>
                            <div className="space-y-2">
                                <FileUpload
                                    label="Resume (PDF)"
                                    value={formData.resumeUrl}
                                    onChange={(url) => setFormData({ ...formData, resumeUrl: url })}
                                    disabled={isSaving}
                                    accept=".pdf"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4">
                            <input
                                type="checkbox"
                                id="available"
                                checked={formData.available}
                                onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="available">Available for new projects</Label>
                        </div>

                        <Button type="submit" disabled={isSaving} className="w-full md:w-auto">
                            {isSaving ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
