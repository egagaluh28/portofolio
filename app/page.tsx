import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Certificates } from "@/components/sections/certificates";
import { Education } from "@/components/sections/education";

import { Contact } from "@/components/sections/contact";
import { Background } from "@/components/layout/background";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />

      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />

      <Footer />
    </main>
  );
}
