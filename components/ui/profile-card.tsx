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

                <div className="relative h-full w-full bg-black/80 backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 flex flex-col items-center justify-between overflow-hidden">

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundSize: '100% 3px' }} />

                    {/* Profile Image */}
                    <div className="relative w-40 h-40 rounded-full border-4 border-primary/50 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Image
                            src="/profile.png"
                            fill
                            alt="Profile"
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center z-10 space-y-2 mt-4">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Muhammad Galuh Gumelar
                        </h3>
                        <p className="text-sm text-primary/80 font-mono">Backend Engineer & Web Developer</p>
                        <div className="h-px w-20 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto my-4" />
                        <p className="text-muted-foreground text-xs px-2 line-clamp-3">
                            Solid backend engineering skills. Experienced in designing efficient database schemas and complex business logic.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-4">
                        <Link href="#" className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/30 transition-colors text-secondary hover:text-white hover:scale-110 transform duration-200">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 transition-colors text-primary hover:text-white hover:scale-110 transform duration-200">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white hover:scale-110 transform duration-200">
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Glitch Decoration */}
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-secondary/40">V.2.0.77</div>
                </div>
            </motion.div>
        </div>
    )
}
