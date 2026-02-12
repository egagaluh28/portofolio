'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { createExperience, updateExperience, deleteExperience } from '@/app/actions/portfolio'
import { Plus, Trash2, Edit } from 'lucide-react'
import { toast } from 'sonner'

export default function ExperienceAdmin({ experiences: initialExperiences }: { experiences: any[] }) {
    const router = useRouter()
    const [experiences, setExperiences] = useState(initialExperiences)
    const [isEditing, setIsEditing] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        location: '',
        period: '',
        description: '',
        tags: '',
        current: false,
        order: experiences.length + 1,
    })

    const resetForm = () => {
        setFormData({
            role: '',
            company: '',
            location: '',
            period: '',
            description: '',
            tags: '',
            current: false,
            order: experiences.length + 1,
        })
        setIsEditing(false)
        setEditingId(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            ...formData,
            tags: formData.tags.split(',').map(t => t.trim()),
        }

        try {
            if (editingId) {
                const result = await updateExperience(editingId, data)
                if (result.success) {
                    toast.success('Experience updated successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to update experience')
                }
            } else {
                const result = await createExperience(data)
                if (result.success) {
                    toast.success('Experience created successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to create experience')
                }
            }
        } catch (error) {
            toast.error('An error occurred')
        }
    }

    const handleEdit = (exp: any) => {
        setFormData({
            role: exp.role,
            company: exp.company,
            location: exp.location,
            period: exp.period,
            description: exp.description,
            tags: exp.tags.join(', '),
            current: exp.current,
            order: exp.order,
        })
        setEditingId(exp.id)
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this experience?')) {
            const result = await deleteExperience(id)
            if (result.success) {
                toast.success('Experience deleted')
                router.refresh()
            } else {
                toast.error('Failed to delete experience')
            }
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Experience</h1>
                    <p className="text-muted-foreground">Manage your work experience</p>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    <Plus className="w-4 h-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Add Experience'}
                </Button>
            </div>

            {/* Form */}
            {isEditing && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingId ? 'Edit Experience' : 'Add New Experience'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="role">Role</Label>
                                    <Input
                                        id="role"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="period">Period</Label>
                                    <Input
                                        id="period"
                                        value={formData.period}
                                        onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                                        placeholder="Jan 2024 - Present"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                    rows={4}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags (comma separated)</Label>
                                <Input
                                    id="tags"
                                    value={formData.tags}
                                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                    placeholder="Backend, API, Database"
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="current"
                                    checked={formData.current}
                                    onChange={(e) => setFormData({ ...formData, current: e.target.checked })}
                                    className="w-4 h-4"
                                />
                                <Label htmlFor="current">Current Position</Label>
                            </div>

                            <div className="flex gap-2">
                                <Button type="submit">
                                    {editingId ? 'Update' : 'Create'} Experience
                                </Button>
                                <Button type="button" variant="outline" onClick={resetForm}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* Experience List */}
            <div className="space-y-4">
                {experiences.map((exp) => (
                    <Card key={exp.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {exp.company} • {exp.location}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                </div>
                                <div className="flex gap-2">
                                    {exp.current && (
                                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                            Current
                                        </span>
                                    )}
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(exp)}>
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="destructive" onClick={() => handleDelete(exp.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag: string) => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {experiences.length === 0 && (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">No experience yet. Add your first experience!</p>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
