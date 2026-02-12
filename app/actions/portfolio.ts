'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

// Profile Actions
export async function getProfile() {
    try {
        const profile = await prisma.profile.findFirst()
        return profile
    } catch (error) {
        console.error('Error fetching profile:', error)
        return null
    }
}

export async function updateProfile(data: any) {
    try {
        const profile = await prisma.profile.findFirst()
        if (profile) {
            const updated = await prisma.profile.update({
                where: { id: profile.id },
                data,
            })
            revalidatePath('/')
            return { success: true, data: updated }
        }
        return { success: false, error: 'Profile not found' }
    } catch (error) {
        console.error('Error updating profile:', error)
        return { success: false, error: 'Failed to update profile' }
    }
}

// About Actions
export async function getAbout() {
    try {
        const about = await prisma.about.findFirst()
        return about
    } catch (error) {
        console.error('Error fetching about:', error)
        return null
    }
}

export async function updateAbout(data: any) {
    try {
        const about = await prisma.about.findFirst()
        if (about) {
            const updated = await prisma.about.update({
                where: { id: about.id },
                data,
            })
            revalidatePath('/')
            return { success: true, data: updated }
        }
        return { success: false, error: 'About not found' }
    } catch (error) {
        console.error('Error updating about:', error)
        return { success: false, error: 'Failed to update about' }
    }
}

// Experience Actions
export async function getExperiences() {
    try {
        const experiences = await prisma.experience.findMany({
            orderBy: { order: 'asc' },
        })
        return experiences
    } catch (error) {
        console.error('Error fetching experiences:', error)
        return []
    }
}

export async function createExperience(data: any) {
    try {
        const experience = await prisma.experience.create({ data })
        revalidatePath('/')
        return { success: true, data: experience }
    } catch (error) {
        console.error('Error creating experience:', error)
        return { success: false, error: 'Failed to create experience' }
    }
}

export async function updateExperience(id: string, data: any) {
    try {
        const experience = await prisma.experience.update({
            where: { id },
            data,
        })
        revalidatePath('/')
        return { success: true, data: experience }
    } catch (error) {
        console.error('Error updating experience:', error)
        return { success: false, error: 'Failed to update experience' }
    }
}

export async function deleteExperience(id: string) {
    try {
        await prisma.experience.delete({ where: { id } })
        revalidatePath('/')
        return { success: true }
    } catch (error) {
        console.error('Error deleting experience:', error)
        return { success: false, error: 'Failed to delete experience' }
    }
}

// Project Actions
export async function getProjects() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: { order: 'asc' },
        })
        return projects
    } catch (error) {
        console.error('Error fetching projects:', error)
        return []
    }
}

export async function createProject(data: any) {
    try {
        const project = await prisma.project.create({ data })
        revalidatePath('/')
        return { success: true, data: project }
    } catch (error) {
        console.error('Error creating project:', error)
        return { success: false, error: 'Failed to create project' }
    }
}

export async function updateProject(id: string, data: any) {
    try {
        const project = await prisma.project.update({
            where: { id },
            data,
        })
        revalidatePath('/')
        return { success: true, data: project }
    } catch (error) {
        console.error('Error updating project:', error)
        return { success: false, error: 'Failed to update project' }
    }
}

export async function deleteProject(id: string) {
    try {
        await prisma.project.delete({ where: { id } })
        revalidatePath('/')
        return { success: true }
    } catch (error) {
        console.error('Error deleting project:', error)
        return { success: false, error: 'Failed to delete project' }
    }
}

// Education Actions
export async function getEducation() {
    try {
        const education = await prisma.education.findMany({
            orderBy: { order: 'asc' },
        })
        return education
    } catch (error) {
        console.error('Error fetching education:', error)
        return []
    }
}

export async function createEducation(data: any) {
    try {
        const education = await prisma.education.create({ data })
        revalidatePath('/')
        return { success: true, data: education }
    } catch (error) {
        console.error('Error creating education:', error)
        return { success: false, error: 'Failed to create education' }
    }
}

export async function updateEducation(id: string, data: any) {
    try {
        const education = await prisma.education.update({
            where: { id },
            data,
        })
        revalidatePath('/')
        return { success: true, data: education }
    } catch (error) {
        console.error('Error updating education:', error)
        return { success: false, error: 'Failed to update education' }
    }
}

export async function deleteEducation(id: string) {
    try {
        await prisma.education.delete({ where: { id } })
        revalidatePath('/')
        return { success: true }
    } catch (error) {
        console.error('Error deleting education:', error)
        return { success: false, error: 'Failed to delete education' }
    }
}

// Skills Actions
export async function getSkills() {
    try {
        const skills = await prisma.skill.findMany({
            orderBy: { order: 'asc' },
        })
        return skills
    } catch (error) {
        console.error('Error fetching skills:', error)
        return []
    }
}

export async function createSkill(data: any) {
    try {
        const skill = await prisma.skill.create({ data })
        revalidatePath('/')
        return { success: true, data: skill }
    } catch (error) {
        console.error('Error creating skill:', error)
        return { success: false, error: 'Failed to create skill' }
    }
}

export async function updateSkill(id: string, data: any) {
    try {
        const skill = await prisma.skill.update({
            where: { id },
            data,
        })
        revalidatePath('/')
        return { success: true, data: skill }
    } catch (error) {
        console.error('Error updating skill:', error)
        return { success: false, error: 'Failed to update skill' }
    }
}

export async function deleteSkill(id: string) {
    try {
        await prisma.skill.delete({ where: { id } })
        revalidatePath('/')
        return { success: true }
    } catch (error) {
        console.error('Error deleting skill:', error)
        return { success: false, error: 'Failed to delete skill' }
    }
}

// Social Links Actions
export async function getSocialLinks() {
    try {
        const links = await prisma.socialLink.findMany({
            orderBy: { order: 'asc' },
        })
        return links
    } catch (error) {
        console.error('Error fetching social links:', error)
        return []
    }
}

export async function createSocialLink(data: any) {
    try {
        const link = await prisma.socialLink.create({ data })
        revalidatePath('/')
        return { success: true, data: link }
    } catch (error) {
        console.error('Error creating social link:', error)
        return { success: false, error: 'Failed to create social link' }
    }
}

export async function updateSocialLink(id: string, data: any) {
    try {
        const link = await prisma.socialLink.update({
            where: { id },
            data,
        })
        revalidatePath('/')
        return { success: true, data: link }
    } catch (error) {
        console.error('Error updating social link:', error)
        return { success: false, error: 'Failed to update social link' }
    }
}

export async function deleteSocialLink(id: string) {
    try {
        const link = await prisma.socialLink.delete({
            where: { id },
        })
        revalidatePath('/')
        return { success: true, data: link }
    } catch (error) {
        console.error('Error deleting social link:', error)
        return { success: false, error: 'Failed to delete social link' }
    }
}
