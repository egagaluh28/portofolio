"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

interface EducationClientProps {
    education: any[]
}

export function EducationClient({ education }: EducationClientProps) {
    return (
        <SectionWrapper id="education" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Academic Journey</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8 w-full">
                    {education.length > 0 ? education.map((edu, i) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative p-6 rounded-2xl border border-neutral-200 dark:border-white/10 bg-neutral-50/50 dark:bg-black/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)]"
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 bg-background rounded-full border border-neutral-200 dark:border-white/10 shadow-sm group-hover:border-primary/50 transition-colors">
                                <GraduationCap className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="space-y-4 pt-4">
                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{edu.degree}</h3>
                                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit border border-primary/20">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="text-lg font-medium text-primary/80">{edu.institution}</p>
                                {edu.description && (
                                    <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">{edu.description}</p>
                                )}
                                <p className="text-xs text-muted-foreground mt-2">{edu.location}</p>
                            </div>
                        </motion.div>
                    )) : (
                        <p className="text-muted-foreground">No education details listed.</p>
                    )}
                </div>
            </div>
        </SectionWrapper>
    )
}
