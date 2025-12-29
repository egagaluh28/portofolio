"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/section-wrapper"
import { Award, Trophy } from "lucide-react"

const certificates = [
    { name: "Certified Software Engineer", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)" },
    { name: "2nd Runner Up, Innovation Competition", issuer: "West Java Provincial 2023" },
    { name: "1st Place, Logo Competition", issuer: "MicroIT Cabinet 2024" },
    { name: "2nd Place, Business Plan", issuer: "Halal and Digital Trends" },
    { name: "Certificate of Attendance", issuer: "Google Webinar" },
    { name: "Complete UI Designer Bootcamp", issuer: "BuildWithAngga" }
]

export function Certificates() {
    return (
        <SectionWrapper id="certificates" className="py-20 lg:py-32">
            <div className="container px-4 mx-auto md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-100 dark:to-neutral-500">
                    Certifications & Achievements
                </h2>
                <div className="flex justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl"
                    >
                        <CarouselContent>
                            {certificates.map((cert, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className="p-1 h-full">
                                        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 backdrop-blur-sm hover:border-primary/50 transition-colors cursor-grab active:cursor-grabbing">
                                            <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center h-[220px]">
                                                <div className="p-3 bg-primary/10 rounded-full">
                                                    {index < 4 ? (
                                                        <Trophy className="h-8 w-8 text-primary" />
                                                    ) : (
                                                        <Award className="h-8 w-8 text-primary" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg leading-tight mb-2">{cert.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </div>
            </div>
        </SectionWrapper>
    )
}
