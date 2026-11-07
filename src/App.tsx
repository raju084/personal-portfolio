import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Experience, Projects } from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
