"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ProfileCard() {
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
                            src="/profile.png"
                            alt="Muhammad Galuh Gumelar"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
                    </div>

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundSize: '100% 3px' }} />

                    {/* Content Overlay - Name and Socials on top of photo */}
                    <div className="relative h-full w-full flex flex-col items-center justify-between p-6 z-10">

                        {/* Top Section - Name and Title */}
                        <div className="text-center space-y-2 mt-6">
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                                Muhammad Galuh Gumelar
                            </h3>
                            <p className="text-sm text-primary/90 font-mono drop-shadow-md">Software Engineer</p>
                        </div>

                        {/* Bottom Section - Socials */}
                        <div className="flex gap-4 mb-4">
                            <Link href="#" className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/30 transition-all text-white hover:text-primary hover:scale-110 transform duration-200 border border-white/20">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/30 transition-all text-white hover:text-primary hover:scale-110 transform duration-200 border border-white/20">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/30 transition-all text-white hover:text-primary hover:scale-110 transform duration-200 border border-white/20">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
