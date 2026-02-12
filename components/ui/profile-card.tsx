"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

interface ProfileCardProps {
    profile?: {
        name: string
        title: string
        profileImage: string
    }
    socialLinks?: any[]
}

export function ProfileCard({ profile, socialLinks = [] }: ProfileCardProps) {
    const name = profile?.name || "Muhammad Galuh Gumelar"
    const title = profile?.title || "Software Engineer"
    const image = profile?.profileImage || "/poto.jpeg"

    const getSocialIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'github': return Github
            case 'linkedin': return Linkedin
            case 'instagram': return Instagram
            case 'twitter': return Twitter
            case 'email': return Mail
            default: return Github
        }
    }

    return (
        <div className="relative group w-80 h-[450px] md:w-96 md:h-[500px] perspective-1000">
            <motion.div
                className="w-full h-full relative transition-all duration-500 transform-style-3d group-hover:rotate-y-12"
                initial={{ rotateY: 0 }}
            >
                {/* Cyberpunk Border Component */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-500 animate-tilt"></div>

                {/* Main Card - Single Card */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-secondary/20">

                    {/* Profile Image as Background */}
                    <div className="absolute inset-0">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
                    </div>

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundSize: '100% 3px' }} />

                    {/* Content Overlay - Name and Socials at bottom */}
                    <div className="relative h-full w-full flex flex-col items-center justify-end p-6 z-10">

                        {/* Bottom Section - Name, Title and Socials */}
                        <div className="text-center space-y-4 mb-4">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                                    {name}
                                </h3>
                                <p className="text-sm text-primary/90 font-mono drop-shadow-md">{title}</p>
                            </div>

                            {/* Socials */}
                            <div className="flex gap-4 justify-center">
                                {socialLinks.length > 0 ? (
                                    socialLinks.map((link) => {
                                        const Icon = getSocialIcon(link.platform)
                                        return (
                                            <Link
                                                key={link.id}
                                                href={link.url}
                                                target="_blank"
                                                className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/30 transition-all text-white hover:text-primary hover:scale-110 transform duration-200 border border-white/20"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </Link>
                                        )
                                    })
                                ) : (
                                    // Fallback socials if none
                                    <>
                                        <Link href="#" className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/30 transition-all text-white hover:text-primary hover:scale-110 transform duration-200 border border-white/20">
                                            <Github className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/30 transition-all text-white hover:text-primary hover:scale-110 transform duration-200 border border-white/20">
                                            <Linkedin className="w-5 h-5" />
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
