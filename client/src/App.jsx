import Header from './components/Header';
import Hero from './components/Hero';
import CareerPath from './components/CareerPath';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CareerPath />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
