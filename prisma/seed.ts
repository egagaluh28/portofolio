import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

// Set DATABASE_URL for Prisma 7
process.env.DATABASE_URL = "postgresql://postgres:admin@localhost:5432/portofolio"

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seed...')

    // Clear existing data
    await prisma.user.deleteMany()
    await prisma.socialLink.deleteMany()
    await prisma.certificate.deleteMany()
    await prisma.skill.deleteMany()
    await prisma.project.deleteMany()
    await prisma.education.deleteMany()
    await prisma.experience.deleteMany()
    await prisma.about.deleteMany()
    await prisma.profile.deleteMany()

    // Seed User
    const hashedPassword = await bcrypt.hash('sukamaju625', 10)
    await prisma.user.create({
        data: {
            username: 'admin',
            password: hashedPassword,
        },
    })
    console.log(`- 1 Admin User`)

    // Seed Profile
    const profile = await prisma.profile.create({
        data: {
            name: 'Muhammad Galuh Gumelar',
            title: 'Software Engineer',
            tagline: 'Software Engineer specializing in backend development and full-stack solutions. Building scalable systems with clean architecture and efficient database design.',
            bio: 'Final-year Software Engineering Technology student at IPB University with strong backend development skills.',
            available: true,
            resumeUrl: '/resume.pdf',
            profileImage: '/poto.jpeg',
        },
    })

    // Seed About
    const about = await prisma.about.create({
        data: {
            paragraph1: 'I am a final-year Software Engineering Technology student at IPB University with a strong focus on backend development. Experienced in designing efficient database schemas, building secure APIs, and implementing complex business logic with clean architecture principles.',
            paragraph2: 'Currently working as a Software Engineer Intern at PT Kuantum Solusi Teknologi, developing large-scale budgeting systems. Passionate about creating scalable, high-performance solutions that solve real-world problems.',
            yearsExp: '3+',
            projects: '10+',
            technologies: '15+',
            collaborations: '5+',
        },
    })

    // Seed Experiences
    const experiences = await prisma.experience.createMany({
        data: [
            {
                role: 'Software Engineer Intern (Backend Focus)',
                company: 'PT Kuantum Solusi Teknologi',
                location: 'Jakarta, Indonesia',
                period: 'Jul 2025 – Present',
                description: 'Developed a large-scale budgeting system with complex business logic. Optimized backend performance, multi-layer data validation, and secure API implementation. Contributed to scalable backend architecture.',
                tags: ['Backend', 'API', 'Database'],
                current: true,
                order: 1,
            },
            {
                role: 'Web Developer',
                company: 'Buanakonstruksi',
                location: 'Remote',
                period: 'Sep 2024 – Apr 2025',
                description: 'Developed and maintained the company website. Integrated internal systems (booking forms, project databases) and performed SEO/speed optimization.',
                tags: ['Full-stack', 'SEO', 'Integration'],
                current: false,
                order: 2,
            },
            {
                role: 'Staff of Software & Web Master Division',
                company: 'Himavo Micro IT Community',
                location: 'Bogor, Indonesia',
                period: 'Aug 2024 – Nov 2024',
                description: 'Developed Village Website for community information. Built CRUD features for institutional data management and ensured system integration.',
                tags: ['Web Development', 'CRUD', 'Community'],
                current: false,
                order: 3,
            },
            {
                role: 'UI Designer',
                company: 'DSITD IPB',
                location: 'Bogor, Indonesia',
                period: 'Jan 2023 – Mar 2023',
                description: 'Designed wireframes and dynamic UI for a map feature, enhancing navigation and user engagement.',
                tags: ['UI/UX', 'Design', 'Wireframing'],
                current: false,
                order: 4,
            },
        ],
    })

    // Seed Projects
    const projects = await prisma.project.createMany({
        data: [
            {
                title: 'Upsite',
                category: 'Agency E-commerce',
                description: 'An online platform for web development agency services, featuring service listing, client order management, and responsive portfolio display.',
                tech: ['Next.js', 'React', 'PostgreSQL', 'Stripe'],
                image: '/project1.png',
                year: '2025',
                featured: true,
                order: 1,
            },
            {
                title: 'Inventory System',
                category: 'CV CAHAYA BARU',
                description: 'Designed relational database schemas to track stock movements. implemented automated reporting features and transaction logic to reduce errors.',
                tech: ['MySQL', 'Express', 'Node.js', 'React'],
                image: '/project1.png',
                year: '2024',
                featured: false,
                order: 2,
            },
            {
                title: 'StudyLens',
                category: 'Productivity Platform',
                description: 'Built a productivity platform for educational tools using modern JavaScript stacks and secure authentication.',
                tech: ['MERN Stack', 'Auth0', 'Tailwind'],
                image: '/project1.png',
                year: '2025',
                featured: false,
                order: 3,
            },
            {
                title: 'Harris Hotel',
                category: 'Fullstack Web',
                description: 'Developed a comprehensive booking and informational website for Harris Hotel.',
                tech: ['PHP', 'Laravel', 'MySQL'],
                image: '/project1.png',
                year: '2024',
                featured: false,
                order: 4,
            },
        ],
    })

    // Seed Skills
    const hardSkills = ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Fastify', 'DBeaver', 'Php', 'Laravel', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git']
    const softSkills = ['Effective Communication', 'Teamwork', 'Problem Solving', 'Analytical Thinking', 'Time Management']

    await prisma.skill.createMany({
        data: [
            ...hardSkills.map((skill, index) => ({
                name: skill,
                type: 'hard',
                order: index + 1,
            })),
            ...softSkills.map((skill, index) => ({
                name: skill,
                type: 'soft',
                order: index + 1,
            })),
        ],
    })

    // Seed Social Links
    await prisma.socialLink.createMany({
        data: [
            { platform: 'github', url: '#', order: 1 },
            { platform: 'linkedin', url: '#', order: 2 },
            { platform: 'instagram', url: '#', order: 3 },
            { platform: 'email', url: 'mailto:mggart39@gmail.com', order: 4 },
        ],
    })

    console.log('✅ Database seeded successfully!')
    console.log(`Created:`)
    console.log(`- 1 Profile`)
    console.log(`- 1 About`)
    console.log(`- 4 Experiences`)
    console.log(`- 4 Projects`)
    console.log(`- ${hardSkills.length + softSkills.length} Skills`)
    console.log(`- 4 Social Links`)
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
