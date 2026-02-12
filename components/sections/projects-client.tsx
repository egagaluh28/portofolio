"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from 'next/link'


interface ProjectsClientProps {
    projects: any[]
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
    return (
        <SectionWrapper id="projects" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">My Work</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A collection of projects showcasing my expertise in full-stack development and problem-solving
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-12 max-w-6xl mx-auto">
                    {projects.length > 0 ? projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } gap-8 items-center`}
                        >
                            {/* Project Image */}
                            <motion.div
                                className="relative w-full lg:w-1/2 group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-muted">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                    <div className="relative h-full w-full">
                                        <Image
                                            src={project.image || "/project1.png"}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                        {/* Year Badge */}
                                        <div className="absolute top-4 right-4">
                                            <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-white/20">
                                                {project.year}
                                            </Badge>
                                        </div>

                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-primary/90 backdrop-blur-sm text-black border-primary">
                                                    <Sparkles className="w-3 h-3 mr-1" />
                                                    Featured
                                                </Badge>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Info */}
                            <div className="w-full lg:w-1/2 space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                                        {project.description}
                                    </p>
                                </motion.div>

                                {/* Tech Stack */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="flex flex-wrap gap-2 mb-6"
                                >
                                    {project.tech.map((tech: string, i: number) => (
                                        <motion.div
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="flex gap-3"
                                >
                                    {project.liveUrl && (
                                        <Button className="gap-2 group" asChild>
                                            <Link href={project.liveUrl} target="_blank">
                                                Visit Site
                                                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button variant="outline" className="gap-2 group" asChild>
                                            <Link href={project.githubUrl} target="_blank">
                                                <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                                                Source
                                            </Link>
                                        </Button>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    )) : (
                        <p className="text-center text-muted-foreground">No projects found.</p>
                    )}
                </div>

                {/* View All Button */}
                {projects.length > 0 && (
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button variant="outline" size="lg" className="gap-2 group">
                            View All Projects
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                )}
            </div>
        </SectionWrapper>
    )
}
