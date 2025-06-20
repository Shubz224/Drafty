
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-space">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
