'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { updateAbout } from '@/app/actions/portfolio'
import { toast } from 'sonner'

export default function AboutAdmin({ about }: { about: any }) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        paragraph1: about?.paragraph1 || '',
        paragraph2: about?.paragraph2 || '',
        yearsExp: about?.yearsExp || '',
        projects: about?.projects || '',
        technologies: about?.technologies || '',
        collaborations: about?.collaborations || '',
    })
    const [isSaving, setIsSaving] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)

        try {
            const result = await updateAbout(formData)
            if (result.success) {
                toast.success('About section updated successfully')
                router.refresh()
            } else {
                toast.error('Failed to update about section')
            }
        } catch (error) {
            toast.error('An error occurred')
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">About Me</h1>
                <p className="text-muted-foreground">Manage your about section content</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>About Content</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="paragraph1">First Paragraph</Label>
                            <Textarea
                                id="paragraph1"
                                value={formData.paragraph1}
                                onChange={(e) => setFormData({ ...formData, paragraph1: e.target.value })}
                                rows={4}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="paragraph2">Second Paragraph</Label>
                            <Textarea
                                id="paragraph2"
                                value={formData.paragraph2}
                                onChange={(e) => setFormData({ ...formData, paragraph2: e.target.value })}
                                rows={4}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="yearsExp">Years Experience</Label>
                                <Input
                                    id="yearsExp"
                                    value={formData.yearsExp}
                                    onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                                    placeholder="3+"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="projects">Projects Completed</Label>
                                <Input
                                    id="projects"
                                    value={formData.projects}
                                    onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
                                    placeholder="10+"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="technologies">Technologies</Label>
                                <Input
                                    id="technologies"
                                    value={formData.technologies}
                                    onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                                    placeholder="15+"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="collaborations">Collaborations</Label>
                                <Input
                                    id="collaborations"
                                    value={formData.collaborations}
                                    onChange={(e) => setFormData({ ...formData, collaborations: e.target.value })}
                                    placeholder="5+"
                                    required
                                />
                            </div>
                        </div>

                        <Button type="submit" disabled={isSaving}>
                            {isSaving ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
