import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Career from "@/components/sections/Career";
import Skills from "@/components/sections/Skills";
import Values from "@/components/sections/Values";
import Certifications from "@/components/sections/Certifications";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Career />
        <Skills />
        <Certifications />
        <Values />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}
