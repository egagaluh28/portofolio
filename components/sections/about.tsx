"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { Badge } from "@/components/ui/badge"
import { ProfileCard } from "@/components/ui/profile-card"

const hardSkills = [
    "Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js",
    "Laravel", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git"
]

const softSkills = [
    "Effective Communication", "Teamwork", "Problem Solving",
    "Analytical Thinking", "Time Management"
]

export function About() {
    return (
        <SectionWrapper id="about" className="py-20 md:py-32">
            <div className="container px-4 mx-auto md:px-6 flex flex-col items-center">
                <div className="flex flex-col md:flex-row gap-16 items-center justify-center w-full max-w-6xl">

                    {/* Cyberpunk Profile Card */}
                    <div className="flex-shrink-0">
                        <ProfileCard />
                    </div>

                    {/* Text Content - Fully Centered */}
                    <div className="space-y-8 text-center max-w-xl">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                            </h2>

                            <div className="text-muted-foreground leading-relaxed space-y-4 text-lg">
                                <p>
                                    I am a final-year <strong>Software Engineering Technology</strong> student at <strong>IPB University</strong> with solid backend engineering skills.
                                    Experienced in designing efficient database schemas, integrating APIs, and automating complex business logic.
                                </p>
                                <p>
                                    Dedicated to improving system reliability and performance while meeting deadlines and delivering high-quality solutions.
                                    Currently creating impactful digital experiences.
                                </p>
                            </div>
                        </div>

                        {/* Skills - Centered */}
                        <div className="space-y-6 flex flex-col items-center">
                            <div className="space-y-3 w-full flex flex-col items-center">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/80 border-b border-primary/20 pb-1 w-fit">Hard Skills</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {hardSkills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1 hover:scale-105 transition-transform">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-3 w-full flex flex-col items-center">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/80 border-b border-primary/20 pb-1 w-fit">Soft Skills</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {softSkills.map((skill) => (
                                        <Badge key={skill} variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1 hover:scale-105 transition-transform">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
