export function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-muted-foreground bg-background/50 backdrop-blur-md border-t border-border/40">
            <div className="container px-4">
                <p>&copy; {new Date().getFullYear()} Modern Portfolio. Crafted with attention to detail.</p>
            </div>
        </footer>
    )
}
