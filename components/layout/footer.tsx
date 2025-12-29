import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "mailto:mggart39@gmail.com", label: "Email" },
    ]

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <footer className="relative py-12 bg-background/50 backdrop-blur-md border-t border-border/40 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo.png"
                                alt="Portfolio Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto grayscale"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
                        <nav className="flex flex-wrap justify-center gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold text-foreground mb-3">Connect</h3>
                        <div className="flex justify-center md:justify-end gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="p-2 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
                        <span>&copy; {currentYear} Muhammad Galuh Gumelar.</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            Crafted with <Heart className="w-4 h-4 text-primary fill-primary inline" /> and attention to detail
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
