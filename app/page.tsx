import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { ScrollToTop } from '@/components/ui';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <AnimatedSection animation="fade" duration={0.8}>
          <Hero />
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.1}>
          <About />
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection animation="slideUp" delay={0.1}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

