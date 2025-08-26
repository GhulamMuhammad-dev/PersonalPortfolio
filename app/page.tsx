import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
    </main>
  );
}
