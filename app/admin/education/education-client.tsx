'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { createEducation, updateEducation, deleteEducation } from '@/app/actions/portfolio'
import { Plus, Trash2, Edit, GraduationCap } from 'lucide-react'
import { toast } from 'sonner'
import { Textarea } from '@/components/ui/textarea'

export default function EducationAdmin({ education: initialData }: { education: any[] }) {
    const router = useRouter()
    const [education, setEducation] = useState(initialData)
    const [isEditing, setIsEditing] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        degree: '',
        institution: '',
        location: '',
        period: '',
        gpa: '',
        description: '',
        order: education.length + 1,
    })

    const resetForm = () => {
        setFormData({
            degree: '',
            institution: '',
            location: '',
            period: '',
            gpa: '',
            description: '',
            order: education.length + 1,
        })
        setIsEditing(false)
        setEditingId(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (editingId) {
                const result = await updateEducation(editingId, formData)
                if (result.success) {
                    toast.success('Education updated successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to update education')
                }
            } else {
                const result = await createEducation(formData)
                if (result.success) {
                    toast.success('Education created successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to create education')
                }
            }
        } catch (error) {
            toast.error('An error occurred')
        }
    }

    const handleEdit = (item: any) => {
        setFormData({
            degree: item.degree,
            institution: item.institution,
            location: item.location,
            period: item.period || item.year, // Fallback for old data
            gpa: item.gpa || '',
            description: item.description,
            order: item.order,
        })
        setEditingId(item.id)
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this education entry?')) {
            const result = await deleteEducation(id)
            if (result.success) {
                toast.success('Education deleted')
                router.refresh()
            } else {
                toast.error('Failed to delete education')
            }
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Education</h1>
                    <p className="text-muted-foreground">Manage your educational background</p>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    <Plus className="w-4 h-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Add Education'}
                </Button>
            </div>

            {/* Form */}
            {isEditing && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingId ? 'Edit Education' : 'Add New Education'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="institution">Institution</Label>
                                    <Input
                                        id="institution"
                                        value={formData.institution}
                                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                                        placeholder="University Name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="degree">Degree</Label>
                                    <Input
                                        id="degree"
                                        value={formData.degree}
                                        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                                        placeholder="Bachelor of Science"
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
                                        placeholder="City, Country"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="period">Period</Label>
                                    <Input
                                        id="period"
                                        value={formData.period}
                                        onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                                        placeholder="2020 - 2024"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description (Optional)</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={3}
                                />
                            </div>

                            <div className="flex gap-2">
                                <Button type="submit">
                                    {editingId ? 'Update' : 'Create'} Education
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
            <div className="space-y-4">
                {education.map((item) => (
                    <Card key={item.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg h-fit">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{item.institution}</CardTitle>
                                        <p className="font-medium text-foreground/80">{item.degree}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {item.period} • {item.location} {item.gpa && `• GPA: ${item.gpa}`}
                                        </p>
                                        {item.description && <p className="text-sm text-muted-foreground mt-2">{item.description}</p>}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {education.length === 0 && (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">No education added yet.</p>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
