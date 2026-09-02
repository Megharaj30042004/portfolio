import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Frontend Developer',
    'Full Stack MERN Developer',
    'QA & API Automation Engineer',
    'Problem Solver',
  ];

  useEffect(() => {
    if (subIndex === texts[textIndex].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, textIndex, texts]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-24 md:pt-32 pb-12">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 fade-in-up">
        
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-600">Megharaj P</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6 h-12">
            <span id="typewriter" className="border-r-2 border-rose-500 pr-1">
              {texts[textIndex].substring(0, subIndex)}
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build modern, reliable, and fast digital experiences with a focus on clean code and thoughtful design. With expertise in MERN stack web development and API automation engineering, I bring scalable ideas to life on the web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-rose-600 to-red-700 text-white font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-paper-plane"></i> Hire Me
            </a>
            <a
              href="/Megharaj P.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass-card text-white font-semibold hover:bg-rose-500/10 hover:scale-105 transition-all duration-300 border border-rose-500/30 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-download"></i> Download CV
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start items-center">
            <span className="text-slate-500 mr-2">Follow me:</span>
            <a
              href="https://github.com/Megharaj30042004"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:bg-rose-600 transition-all border border-rose-500/20"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/megharaj-p-/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:bg-rose-600 transition-all border border-rose-500/20"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-rose-500/30 rounded-3xl rotate-6 hover:rotate-12 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-red-900/40 rounded-3xl backdrop-blur-sm flex items-center justify-center overflow-hidden border border-rose-500/50 shadow-[0_0_30px_rgba(225,29,72,0.2)]">
              <img src="/meghu professional.jpeg" alt="Megharaj P" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
