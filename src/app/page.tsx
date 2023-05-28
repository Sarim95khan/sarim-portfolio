import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="h-screen bg-[rgba(36,36,36)] snap-y snap-mandatory overflow-scroll z-0 ">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        {/* about */}
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skill" className="snap-start">
        <Skills />
      </section>
    </main>
  );
}
