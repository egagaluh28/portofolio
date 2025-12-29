"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Instagram, Github, Send } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "@/components/section-wrapper"

export function Contact() {
    return (
        <SectionWrapper id="contact" className="py-20 lg:py-32">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">

                <div className="mb-12 space-y-4">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">Get In Touch</div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas or opportunities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch w-full">
                    {/* Contact Info Card */}
                    <Card className="bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950 border-neutral-200 dark:border-neutral-800 shadow-xl flex flex-col items-center justify-center p-6 text-center h-full">
                        <CardContent className="space-y-6 pt-6">
                            <div className="space-y-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-lg">Email Me</h3>
                                <Link href="mailto:mggart39@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block text-lg font-medium">
                                    mggart39@gmail.com
                                </Link>
                            </div>
                            <div className="h-px bg-border w-24 mx-auto" />

                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">Follow Me</h3>
                                <div className="flex gap-4 justify-center">
                                    {[Github, Linkedin, Instagram].map((Icon, i) => (
                                        <Button key={i} variant="outline" size="icon" className="rounded-full h-10 w-10 hover:bg-primary/20 hover:text-primary transition-all hover:scale-110" asChild>
                                            <Link href="#"><Icon className="h-5 w-5" /></Link>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Form Placeholder */}
                    <Card className="p-6 md:p-8 text-left bg-neutral-50 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 h-full">
                        <form className="space-y-4 h-full flex flex-col justify-center">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <Input placeholder="John Doe" className="bg-background/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input placeholder="john@example.com" type="email" className="bg-background/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <Textarea placeholder="Your message..." className="min-h-[120px] bg-background/50" />
                            </div>
                            <Button className="w-full gap-2">Send Message <Send className="w-4 h-4" /></Button>
                        </form>
                    </Card>
                </div>

            </div>
        </SectionWrapper>
    )
}
