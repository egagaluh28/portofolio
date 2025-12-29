"use client"

import { Aurora } from "@/components/ui/aurora"

export function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-black" />

            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />

            {/* Radial Gradient for vignette effect - consistent with Hero design */}
            <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <Aurora
                colorStops={["#00F3FF", "#FF00FF", "#00F3FF"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
        </div>
    )
}
