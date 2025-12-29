"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { ProfileCard } from "@/components/ui/profile-card"
import { motion } from "framer-motion"
import { Code2, Database, Lightbulb, Users } from "lucide-react"

const hardSkills = [
    "Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "Fastify", "DBeaver", "Php", "Laravel",
    "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git"
]

const softSkills = [
    "Effective Communication", "Teamwork", "Problem Solving",
    "Analytical Thinking", "Time Management"
]

const stats = [
    { icon: Code2, value: "3+", label: "Years Experience" },
    { icon: Database, value: "10+", label: "Projects Completed" },
    { icon: Lightbulb, value: "15+", label: "Technologies" },
    { icon: Users, value: "5+", label: "Team Collaborations" },
]

export function About() {
    return (
        <SectionWrapper id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 mx-auto md:px-6 flex flex-col items-center relative z-10">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Passionate about building scalable solutions and creating impactful digital experiences
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-start justify-center w-full max-w-7xl">

                    {/* Left Side - Profile Card */}
                    <motion.div
                        className="flex-shrink-0 mx-auto lg:mx-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProfileCard />
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="flex-1 space-y-8 max-w-3xl">

                        {/* Bio */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="text-muted-foreground leading-relaxed space-y-4 text-lg">
                                <p className="relative pl-4 border-l-2 border-primary/50">
                                    I am a final-year <strong className="text-foreground">Software Engineering Technology</strong> student at <strong className="text-foreground">IPB University</strong> with solid software engineering skills.
                                    Experienced in designing efficient database schemas, integrating APIs, and automating complex business logic.
                                </p>
                                <p className="relative pl-4 border-l-2 border-secondary/50">
                                    Dedicated to improving system reliability and performance while meeting deadlines and delivering high-quality solutions.
                                    Currently creating impactful digital experiences.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="relative group p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <stat.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" />
                                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary/80 px-3">Hard Skills</h3>
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {hardSkills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1 hover:scale-105 transition-transform cursor-default"
                                            >
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-secondary/80 px-3">Soft Skills</h3>
                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {softSkills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                                        >
                                            <Badge
                                                variant="outline"
                                                className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 px-3 py-1 hover:scale-105 transition-transform cursor-default"
                                            >
                                                {skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
