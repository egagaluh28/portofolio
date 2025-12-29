"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, FileText } from "lucide-react"

import { cn } from "@/lib/utils"
import { useIsScrolled } from "@/hooks/use-scroll"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const isScrolled = useIsScrolled()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header
            className={cn(
                "fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-5xl rounded-full border border-border/40 bg-background/80 backdrop-blur-md transition-all duration-300 supports-[backdrop-filter]:bg-background/60",
                isScrolled ? "shadow-lg py-2" : "py-3"
            )}
        >
            <div className="px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.png"
                        alt="Portfolio Logo"
                        width={100}
                        height={32}
                        className="h-8 w-auto grayscale"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <Button variant="default" size="sm" asChild>
                    <Link href="/resume.pdf" target="_blank">
                        <FileText className="mr-2 h-4 w-4" /> Download CV
                    </Link>
                </Button>

                {/* Mobile Nav */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetHeader>
                            <SheetTitle className="text-left text-lg font-bold">Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <SheetClose key={item.name} asChild>
                                    <Link
                                        href={item.href}
                                        className="text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </SheetClose>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <SheetClose asChild>
                                <Button className="w-full" asChild>
                                    <Link href="/resume.pdf" target="_blank">
                                        <FileText className="mr-2 h-4 w-4" /> Download CV
                                    </Link>
                                </Button>
                            </SheetClose>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
