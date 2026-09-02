import React, { useEffect } from 'react';
import BackgroundBlobs from './components/BackgroundBlobs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    reveals.forEach((reveal) => {
      revealOnScroll.observe(reveal);
    });

    return () => revealOnScroll.disconnect();
  }, []);

  return (
    <div className="bg-[#0f0406] text-slate-200 font-sans antialiased overflow-x-hidden selection:bg-rose-600 selection:text-white relative">
      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
