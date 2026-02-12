'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { createSocialLink, updateSocialLink, deleteSocialLink } from '@/app/actions/portfolio'
import { Plus, Trash2, Edit, Link as LinkIcon, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'
import { toast } from 'sonner'

export default function SocialsAdmin({ links: initialLinks }: { links: any[] }) {
    const router = useRouter()
    const [links, setLinks] = useState(initialLinks)
    const [isEditing, setIsEditing] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        platform: '',
        url: '',
        icon: '',
        order: links.length + 1,
    })

    const resetForm = () => {
        setFormData({
            platform: '',
            url: '',
            icon: '',
            order: links.length + 1,
        })
        setIsEditing(false)
        setEditingId(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (editingId) {
                const result = await updateSocialLink(editingId, formData)
                if (result.success) {
                    toast.success('Social link updated successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to update social link')
                }
            } else {
                const result = await createSocialLink(formData)
                if (result.success) {
                    toast.success('Social link created successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to create social link')
                }
            }
        } catch (error) {
            toast.error('An error occurred')
        }
    }

    const handleEdit = (link: any) => {
        setFormData({
            platform: link.platform,
            url: link.url,
            icon: link.icon || '',
            order: link.order,
        })
        setEditingId(link.id)
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this social link?')) {
            const result = await deleteSocialLink(id)
            if (result.success) {
                toast.success('Social link deleted')
                router.refresh()
            } else {
                toast.error('Failed to delete social link')
            }
        }
    }

    const getIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'github': return Github
            case 'linkedin': return Linkedin
            case 'instagram': return Instagram
            case 'twitter': return Twitter
            case 'email': return Mail
            default: return LinkIcon
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Social Links</h1>
                    <p className="text-muted-foreground">Manage your social media profiles</p>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    <Plus className="w-4 h-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Add Link'}
                </Button>
            </div>

            {/* Form */}
            {isEditing && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingId ? 'Edit Link' : 'Add New Link'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="platform">Platform Name</Label>
                                    <Input
                                        id="platform"
                                        value={formData.platform}
                                        onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                                        placeholder="GitHub, LinkedIn, etc."
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="url">URL</Label>
                                    <Input
                                        id="url"
                                        value={formData.url}
                                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                        placeholder="https://..."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="icon">Icon Name (Optional - for custom icon)</Label>
                                <Input
                                    id="icon"
                                    value={formData.icon}
                                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                    placeholder="lucide-react icon name"
                                />
                                <p className="text-xs text-muted-foreground">Supported auto-icons: github, linkedin, instagram, twitter, email</p>
                            </div>

                            <div className="flex gap-2">
                                <Button type="submit">
                                    {editingId ? 'Update' : 'Create'} Link
                                </Button>
                                <Button type="button" variant="outline" onClick={resetForm}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links.map((link) => {
                    const Icon = getIcon(link.platform)
                    return (
                        <Card key={link.id}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {link.platform}
                                </CardTitle>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="ghost" onClick={() => handleEdit(link)}>
                                        <Edit className="w-3 h-3" />
                                    </Button>
                                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(link.id)}>
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground truncate" title={link.url}>
                                    {link.url}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            {links.length === 0 && (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">No social links added yet.</p>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
