import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'text-yellow-400', level: '95%' },
    { name: 'React.js', icon: 'fa-brands fa-react', color: 'text-cyan-400', spin: true, level: '90%' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-green-500', level: '85%' },
    { name: 'Express.js', icon: 'fa-solid fa-server', color: 'text-emerald-400', level: '85%' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: 'text-green-400', level: '80%' },
    { name: 'Python', icon: 'fa-brands fa-python', color: 'text-blue-400', level: '85%' },
    { name: 'Core Java', icon: 'fa-brands fa-java', color: 'text-red-500', level: '85%' },
    { name: 'Gen AI & RAG', icon: 'fa-solid fa-brain', color: 'text-purple-400', level: '80%' },
    { name: 'Pytest & QA', icon: 'fa-solid fa-vial', color: 'text-rose-400', level: '85%' },
    { name: 'Tailwind CSS', isSvg: true, color: 'text-cyan-400', level: '90%' },
    { name: 'HTML5 / CSS3', icon: 'fa-brands fa-html5', color: 'text-orange-500', level: '95%' },
    { name: 'MySQL / SQL', icon: 'fa-solid fa-database', color: 'text-slate-300', level: '80%' },
    { name: 'REST API & JWT', icon: 'fa-solid fa-network-wired', color: 'text-amber-400', level: '90%' },
    { name: 'Git & GitHub', icon: 'fa-brands fa-github', color: 'text-slate-100', level: '90%' },
    { name: 'C Language', icon: 'fa-solid fa-c', color: 'text-blue-400', level: '70%' },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-wider mb-4">
            Technical <span className="text-rose-500">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Languages, frameworks, databases, and QA automation tools I use to build robust applications.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-all duration-300 group border border-rose-500/10 hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(225,29,72,0.15)]"
            >
              {skill.isSvg ? (
                <svg
                  className={`w-10 h-10 ${skill.color} group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.036c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.327c-4.598 0-8.327-3.729-8.327-8.327s3.729-8.327 8.327-8.327 8.327 3.729 8.327 8.327-3.729 8.327-8.327 8.327zm4.243-11.414l-1.414-1.414-3.535 3.535-3.535-3.535-1.414 1.414 4.95 4.95 4.95-4.95z"/>
                </svg>
              ) : (
                <i
                  className={`${skill.icon} text-4xl ${skill.color} ${
                    skill.spin ? 'group-hover:animate-spin-slow' : ''
                  } group-hover:drop-shadow-[0_0_10px_rgba(225,29,72,0.6)] transition-all`}
                ></i>
              )}
              <span className="font-medium text-slate-200 text-center">{skill.name}</span>
              <div className="w-full bg-[#2a0a10] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-rose-600 to-red-500 h-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
