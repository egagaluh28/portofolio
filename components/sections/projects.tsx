"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"


const projects = [
    {
        title: "Upsite",
        category: "Agency E-commerce",
        description: "An online platform for web development agency services, featuring service listing, client order management, and responsive portfolio display.",
        tech: ["Next.js", "React", "PostgreSQL", "Stripe"],
        image: "/project1.png",
        year: "2025"
    },
    {
        title: "Inventory System",
        category: "CV CAHAYA BARU",
        description: "Designed relational database schemas to track stock movements. implemented automated reporting features and transaction logic to reduce errors.",
        tech: ["MySQL", "Express", "Node.js", "React"],
        image: "/project1.png",
        year: "2024"
    },
    {
        title: "StudyLens",
        category: "Productivity Platform",
        description: "Built a productivity platform for educational tools using modern JavaScript stacks and secure authentication.",
        tech: ["MERN Stack", "Auth0", "Tailwind"],
        image: "/project1.png",
        year: "2025"
    },
    {
        title: "Harris Hotel",
        category: "Fullstack Web",
        description: "Developed a comprehensive booking and informational website for Harris Hotel.",
        tech: ["PHP", "Laravel", "MySQL"],
        image: "/project1.png",
        year: "2024"
    }
]

export function Projects() {
    return (
        <SectionWrapper id="projects" className="py-20  lg:py-32 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground mt-2">A selection of my recent work.</p>
                </div>
                <Button variant="outline" className="hidden md:flex gap-2">
                    View All Projects <ArrowRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="flex overflow-x-auto pb-8 gap-6 px-4 md:px-6 snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: 'none' }}>
                {projects.map((project, i) => (
                    <div key={i} className="flex-none w-[85vw] md:w-[600px] snap-center">
                        <div className="group relative rounded-3xl overflow-hidden border border-border/50 bg-neutral-100 dark:bg-neutral-900/50 aspect-video">
                            {/* Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <Badge variant="default" className="mb-2 hover:bg-primary/80">{project.category}</Badge>
                                            <h3 className="text-2xl md:text-4xl font-bold text-white">{project.title}</h3>
                                        </div>
                                        <div className="text-white/60 font-mono text-sm">{project.year}</div>
                                    </div>

                                    <p className="text-neutral-200 max-w-lg line-clamp-2 group-hover:line-clamp-none transition-all">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack & Links */}
                                    <div className="pt-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.tech.map(t => (
                                            <Badge key={t} variant="secondary" className="bg-black/50 text-white hover:bg-black/70 border-white/20">{t}</Badge>
                                        ))}
                                    </div>

                                    <div className="pt-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        <Button size="sm" className="gap-2">
                                            Visit Site <ExternalLink className="h-3 w-3" />
                                        </Button>
                                        <Button size="sm" variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-black">
                                            <Github className="h-3 w-3" /> Source
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:hidden px-4 mt-6">
                <Button variant="outline" className="w-full gap-2">
                    View All Projects <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </SectionWrapper>
    )
}
