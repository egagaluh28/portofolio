'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { createSkill, updateSkill, deleteSkill } from '@/app/actions/portfolio'
import { Plus, Trash2, Edit } from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'

export default function SkillsAdmin({ skills: initialSkills }: { skills: any[] }) {
    const router = useRouter()
    const [skills, setSkills] = useState(initialSkills)
    const [isEditing, setIsEditing] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        type: 'hard', // 'hard' or 'soft'
        order: skills.length + 1,
    })

    const resetForm = () => {
        setFormData({
            name: '',
            type: 'hard',
            order: skills.length + 1,
        })
        setIsEditing(false)
        setEditingId(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (editingId) {
                const result = await updateSkill(editingId, formData)
                if (result.success) {
                    toast.success('Skill updated successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to update skill')
                }
            } else {
                const result = await createSkill(formData)
                if (result.success) {
                    toast.success('Skill created successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to create skill')
                }
            }
        } catch (error) {
            toast.error('An error occurred')
        }
    }

    const handleEdit = (item: any) => {
        setFormData({
            name: item.name,
            type: item.type,
            order: item.order,
        })
        setEditingId(item.id)
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this skill?')) {
            const result = await deleteSkill(id)
            if (result.success) {
                toast.success('Skill deleted')
                router.refresh()
            } else {
                toast.error('Failed to delete skill')
            }
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Skills</h1>
                    <p className="text-muted-foreground">Manage your hard and soft skills</p>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    <Plus className="w-4 h-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Add Skill'}
                </Button>
            </div>

            {/* Form */}
            {isEditing && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingId ? 'Edit Skill' : 'Add New Skill'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Skill Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="React, Leadership, etc."
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="type">Type</Label>
                                    <select
                                        id="type"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        required
                                    >
                                        <option value="hard">Hard Skill</option>
                                        <option value="soft">Soft Skill</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button type="submit">
                                    {editingId ? 'Update' : 'Create'} Skill
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hard Skills */}
                <Card>
                    <CardHeader>
                        <CardTitle>Hard Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {skills.filter(s => s.type === 'hard').map((skill) => (
                                <div key={skill.id} className="group relative">
                                    <Badge variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 cursor-default flex items-center gap-2">
                                        {skill.name}
                                        <div className="hidden group-hover:flex ml-2 gap-1">
                                            <Edit onClick={() => handleEdit(skill)} className="w-3 h-3 cursor-pointer hover:text-foreground" />
                                            <Trash2 onClick={() => handleDelete(skill.id)} className="w-3 h-3 cursor-pointer hover:text-destructive" />
                                        </div>
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Soft Skills */}
                <Card>
                    <CardHeader>
                        <CardTitle>Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {skills.filter(s => s.type === 'soft').map((skill) => (
                                <div key={skill.id} className="group relative">
                                    <Badge variant="outline" className="px-3 py-1 text-sm bg-secondary/10 text-secondary hover:bg-secondary/20 cursor-default flex items-center gap-2">
                                        {skill.name}
                                        <div className="hidden group-hover:flex ml-2 gap-1">
                                            <Edit onClick={() => handleEdit(skill)} className="w-3 h-3 cursor-pointer hover:text-foreground" />
                                            <Trash2 onClick={() => handleDelete(skill.id)} className="w-3 h-3 cursor-pointer hover:text-destructive" />
                                        </div>
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
