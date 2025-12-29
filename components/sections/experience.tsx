"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"

const experiences = [
    {
        role: "Software Engineer Intern (Backend Focus)",
        company: "PT Kuantum Solusi Teknologi",
        location: "Jakarta, Indonesia",
        period: "Jul 2025 – Present",
        description: "Developed a large-scale budgeting system with complex business logic. Optimized backend performance, multi-layer data validation, and secure API implementation. Contributed to scalable backend architecture.",
        tags: ["Backend", "API", "Database"],
        current: true
    },
    {
        role: "Web Developer",
        company: "Buanakonstruksi",
        location: "Remote",
        period: "Sep 2024 – Apr 2025",
        description: "Developed and maintained the company website. Integrated internal systems (booking forms, project databases) and performed SEO/speed optimization.",
        tags: ["Full-stack", "SEO", "Integration"],
        current: false
    },
    {
        role: "Staff of Software & Web Master Division",
        company: "Himavo Micro IT Community",
        location: "Bogor, Indonesia",
        period: "Aug 2024 – Nov 2024",
        description: "Developed Village Website for community information. Built CRUD features for institutional data management and ensured system integration.",
        tags: ["Web Development", "CRUD", "Community"],
        current: false
    },
    {
        role: "UI Designer",
        company: "DSITD IPB",
        location: "Bogor, Indonesia",
        period: "Jan 2023 – Mar 2023",
        description: "Designed wireframes and dynamic UI for a map feature, enhancing navigation and user engagement.",
        tags: ["UI/UX", "Design", "Wireframing"],
        current: false
    }
]

export function Experience() {
    return (
        <SectionWrapper id="experience" className="py-20 md:py-32 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container px-4 mx-auto md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Career Journey</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My professional journey in software development and technology
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="hidden md:block absolute left-1/2 -translate-x-1/2 z-20"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                >
                                    <div className="relative">
                                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                        {exp.current && (
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-primary"
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        )}
                                    </div>
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    className="w-full md:w-[calc(50%-2rem)]"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card className="relative group bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Current Badge */}
                                        {exp.current && (
                                            <div className="absolute top-4 right-4">
                                                <Badge className="bg-primary/90 text-black border-primary">
                                                    <TrendingUp className="w-3 h-3 mr-1" />
                                                    Current
                                                </Badge>
                                            </div>
                                        )}

                                        <CardHeader className="relative z-10">
                                            <div className="space-y-3">
                                                <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {exp.role}
                                                </CardTitle>

                                                <div className="flex flex-col gap-2 text-sm">
                                                    <div className="flex items-center gap-2 text-muted-foreground">
                                                        <Briefcase className="w-4 h-4 text-primary/70" />
                                                        <span className="font-semibold text-foreground">{exp.company}</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-3 text-xs">
                                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            <span>{exp.period}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-muted-foreground">
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="relative z-10">
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                {exp.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map((tag, i) => (
                                                    <motion.div
                                                        key={tag}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.05 }}
                                                    >
                                                        <Badge
                                                            variant="secondary"
                                                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-xs"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-[calc(50%-2rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
