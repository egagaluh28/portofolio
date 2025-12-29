"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionWrapper } from "@/components/section-wrapper"
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react"

const experiences = [
    {
        role: "Software Engineer Intern (Backend Focus)",
        company: "PT Kuantum Solusi Teknologi",
        period: "Jul 2025 – Present",
        description: "Developed a large-scale budgeting system with complex business logic. Optimized backend performance, multi-layer data validation, and secure API implementation. Contributed to scalable backend architecture."
    },
    {
        role: "Web Developer",
        company: "Buanakonstruksi",
        period: "Sep 2024 – Apr 2025",
        description: "Developed and maintained the company website. Integrated internal systems (booking forms, project databases) and performed SEO/speed optimization."
    },
    {
        role: "Staff of Software & Web Master Division",
        company: "Himavo Micro IT Community",
        period: "Aug 2024 – Nov 2024",
        description: "Developed Village Website for community information. Built CRUD features for institutional data management and ensured system integration."
    },
    {
        role: "UI Designer",
        company: "DSITD IPB",
        period: "Jan 2023 – Mar 2023",
        description: "Designed wireframes and dynamic UI for a map feature, enhancing navigation and user engagement."
    }
]

export function Experience() {
    return (
        <SectionWrapper id="experience" className="py-20 md:py-32">
            <div className="container px-4 mx-auto md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500">
                    Work Experience
                </h2>

                <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                    {/* Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" style={{ marginTop: "1.5rem" }} />

                                {/* Content */}
                                <div className="w-full md:w-[45%]">
                                    <div className="relative pl-8 md:pl-0 border-l-2 border-border md:border-none">
                                        {/* Mobile Dot */}
                                        <div className="md:hidden absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary" />

                                        <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
                                            <CardHeader>
                                                <div className="flex flex-col gap-1">
                                                    <CardTitle className="text-lg md:text-xl font-bold text-primary">{exp.role}</CardTitle>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="font-semibold">{exp.company}</span>
                                                        <span className="text-muted-foreground text-xs">{exp.period}</span>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                <div className="hidden md:block w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
