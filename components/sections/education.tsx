"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GraduationCap } from "lucide-react"

const educationList = [
    {
        degree: "Bachelor of Applied Computer Science in Software Engineering Technology",
        school: "IPB University (Institut Pertanian Bogor)",
        year: "Aug 2022 - Present",
        desc: "GPA: 3.40/4.00. Relevant Coursework: Distributed Systems, Advanced Database, Data Structures & Algorithms, Web Engineering, Cloud Computing."
    }
]

export function Education() {
    return (
        <SectionWrapper id="education" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500">
                    Education
                </h2>
                <div className="max-w-3xl mx-auto space-y-8 w-full">
                    {educationList.map((edu, i) => (
                        <div key={i} className="group relative p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 bg-background rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm">
                                <GraduationCap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="space-y-3 pt-4">
                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="text-lg font-medium text-muted-foreground">{edu.school}</p>
                                <p className="text-muted-foreground text-sm">{edu.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
