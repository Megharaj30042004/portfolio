import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'ShopNest',
      description: 'A full-stack MERN e-commerce platform featuring real-time product filtering, JWT authentication, Nodemailer email notifications, and admin/buyer role workflows.',
      tags: ['MERN Stack', 'React.js', 'MongoDB', 'JWT'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
      live: 'https://shopnest-nine-mu.vercel.app/',
      github: 'https://github.com/Megharaj30042004/ShopNest',
    },
    {
      title: 'Dairy Farm & Livestock Manager',
      description: 'Pioneered a responsive MERN farm management app for digitizing livestock tracking, health records, and daily milk yield monitoring with a Chart.js analytics dashboard.',
      tags: ['MERN Stack', 'React.js', 'Node/Express', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800&auto=format&fit=crop',
      live: 'https://dairy-farm-sigma.vercel.app/',
      github: 'https://github.com/Megharaj30042004/DairyFarm',
    },
    {
      title: 'CryptoPulse',
      description: 'A real-time cryptocurrency tracking application integrating a REST API to fetch live market data with automatic refresh functionality and optimized DOM updates.',
      tags: ['HTML/CSS', 'JavaScript', 'REST API'],
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop',
      live: 'https://megharaj30042004.github.io/CryptoDash/',
      github: 'https://github.com/Megharaj30042004/CryptoDash',
    },
    {
      title: 'JyotirMarga Explorer',
      description: 'Interactive web application helping devotees seamlessly plan journeys across all 12 Jyotirlingas. Features geolocation routing and immersive Kannada TTS devotional stories.',
      tags: ['JavaScript', 'Tailwind', 'Maps API'],
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
      live: 'https://megharaj30042004.github.io/jothirpath/',
      github: 'https://github.com/Megharaj30042004/jothirpath',
    },
    {
      title: 'NestFinder',
      description: 'Comprehensive accommodation management system for handling 20+ room entries and tenant records with dynamic DOM manipulation and modular JSON data handling.',
      tags: ['JavaScript', 'JSON', 'DOM Mod'],
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop',
      live: 'https://megharaj30042004.github.io/NestFinder/',
      github: 'https://github.com/Megharaj30042004/NestFinder',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-wider mb-4">
            Featured <span className="text-rose-500">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating expertise in full-stack development, modern frameworks, and creative problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group border border-rose-500/20 hover:border-rose-500/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] flex flex-col"
            >
              <div className="h-48 overflow-hidden relative border-b border-rose-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2 py-1 rounded bg-rose-950/50 border border-rose-800 text-rose-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded bg-rose-600 hover:bg-rose-500 text-white transition-colors text-sm font-semibold"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded glass-card border border-rose-500/30 hover:bg-rose-500/10 text-white transition-colors text-sm font-semibold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
