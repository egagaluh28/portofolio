'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { createProject, updateProject, deleteProject } from '@/app/actions/portfolio'
import { Plus, Trash2, Edit } from 'lucide-react'
import { ImageUpload } from '@/components/ui/image-upload'
import { toast } from 'sonner'

export default function ProjectsAdmin({ projects: initialProjects }: { projects: any[] }) {
    const router = useRouter()
    const [projects, setProjects] = useState(initialProjects)
    const [isEditing, setIsEditing] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        tech: '',
        image: '/project1.png',
        year: new Date().getFullYear().toString(),
        featured: false,
        liveUrl: '',
        githubUrl: '',
        order: projects.length + 1,
    })

    const resetForm = () => {
        setFormData({
            title: '',
            category: '',
            description: '',
            tech: '',
            image: '/project1.png',
            year: new Date().getFullYear().toString(),
            featured: false,
            liveUrl: '',
            githubUrl: '',
            order: projects.length + 1,
        })
        setIsEditing(false)
        setEditingId(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            ...formData,
            tech: formData.tech.split(',').map(t => t.trim()),
        }

        try {
            if (editingId) {
                const result = await updateProject(editingId, data)
                if (result.success) {
                    toast.success('Project updated successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to update project')
                }
            } else {
                const result = await createProject(data)
                if (result.success) {
                    toast.success('Project created successfully')
                    router.refresh()
                    resetForm()
                } else {
                    toast.error('Failed to create project')
                }
            }
        } catch (error) {
            toast.error('An error occurred')
        }
    }

    const handleEdit = (project: any) => {
        setFormData({
            title: project.title,
            category: project.category,
            description: project.description,
            tech: project.tech.join(', '),
            image: project.image,
            year: project.year,
            featured: project.featured,
            liveUrl: project.liveUrl || '',
            githubUrl: project.githubUrl || '',
            order: project.order,
        })
        setEditingId(project.id)
        setIsEditing(true)
    }

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            const result = await deleteProject(id)
            if (result.success) {
                toast.success('Project deleted')
                router.refresh()
            } else {
                toast.error('Failed to delete project')
            }
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Projects</h1>
                    <p className="text-muted-foreground">Manage your portfolio projects</p>
                </div>
                <Button onClick={() => setIsEditing(!isEditing)}>
                    <Plus className="w-4 h-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Add Project'}
                </Button>
            </div>

            {/* Form */}
            {isEditing && (
                <Card>
                    <CardHeader>
                        <CardTitle>{editingId ? 'Edit Project' : 'Add New Project'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        id="category"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
                                    rows={3}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tech">Technologies (comma separated)</Label>
                                <Input
                                    id="tech"
                                    value={formData.tech}
                                    onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                                    placeholder="Next.js, React, PostgreSQL"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="year">Year</Label>
                                    <Input
                                        id="year"
                                        value={formData.year}
                                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <ImageUpload
                                        label="Project Image"
                                        value={formData.image}
                                        onChange={(url) => setFormData({ ...formData, image: url })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="liveUrl">Live URL (optional)</Label>
                                    <Input
                                        id="liveUrl"
                                        value={formData.liveUrl}
                                        onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="githubUrl">GitHub URL (optional)</Label>
                                    <Input
                                        id="githubUrl"
                                        value={formData.githubUrl}
                                        onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                                        placeholder="https://github.com/..."
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    checked={formData.featured}
                                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                    className="w-4 h-4"
                                />
                                <Label htmlFor="featured">Featured Project</Label>
                            </div>

                            <div className="flex gap-2">
                                <Button type="submit">
                                    {editingId ? 'Update' : 'Create'} Project
                                </Button>
                                <Button type="button" variant="outline" onClick={resetForm}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* Projects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card key={project.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline" onClick={() => handleEdit(project)}>
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="destructive" onClick={() => handleDelete(project.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tech.map((tech: string) => (
                                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>{project.year}</span>
                                {project.featured && <span className="text-primary">⭐ Featured</span>}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {projects.length === 0 && (
                <Card>
                    <CardContent className="py-12 text-center">
                        <p className="text-muted-foreground">No projects yet. Add your first project!</p>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
