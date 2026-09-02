import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: 'fa-house' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fa-briefcase' },
    { id: 'achievements', label: 'Milestones', icon: 'fa-trophy' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'hero';
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card rounded-full px-2 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-6 border border-rose-500/20 shadow-lg shadow-rose-950/50 w-[95%] md:w-auto justify-center overflow-x-auto">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => scrollToSection(e, item.id)}
          className={`nav-link px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
            activeSection === item.id
              ? 'active text-rose-300 bg-rose-500/20 border border-rose-500/30'
              : 'text-slate-300 hover:text-rose-300 hover:bg-rose-500/20'
          }`}
        >
          <i className={`fa-solid ${item.icon}`}></i>
          <span className="hidden sm:inline">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
