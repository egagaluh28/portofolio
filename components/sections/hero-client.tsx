"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface HeroClientProps {
    profile: any
    socialLinks: any[]
}

export function HeroClient({ profile, socialLinks }: HeroClientProps) {
    // Fallback data if database is empty
    const name = profile?.name || 'Muhammad Galuh Gumelar'
    const tagline = profile?.tagline || 'Software Engineer specializing in backend development'
    const available = profile?.available ?? true

    // Map social links
    const getSocialIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'github':
                return Github
            case 'linkedin':
                return Linkedin
            case 'instagram':
                return Instagram
            case 'email':
                return Mail
            default:
                return Github
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Aurora Background & Grid - Only for Hero */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    {available && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-sm hover:border-primary/50 transition-colors">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-200"></span>
                            </span>
                            <span className="text-xs font-medium text-primary">Available for New Projects</span>
                        </div>
                    )}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    Hi, I'm <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">{name}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10"
                >
                    {tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="h-12 px-8 rounded-full text-base bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(255,255,255,0.4)]" asChild>
                        <Link href="#projects">
                            View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base border-white/20 hover:bg-white/10 text-white" asChild>
                        <Link href="#contact">
                            Get in Touch
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-20 flex items-center gap-8 text-neutral-400"
                >
                    {socialLinks.map((link) => {
                        const Icon = getSocialIcon(link.platform)
                        return (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
                            >
                                <Icon className="h-6 w-6" />
                            </Link>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}
