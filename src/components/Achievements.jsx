import React from 'react';

export default function Achievements() {
  const milestones = [
    {
      title: 'Vstand4U Internship Certificate',
      description: 'Successfully completed 15 weeks of Fullstack Development Internship (Java & Python Powered by AI) at Vstand4U Technologies.',
      icon: 'fa-certificate',
      link: '/vstand4u_completion.png',
      linkText: 'View Certificate',
    },
    {
      title: 'Mekhos AI Labs Experience',
      description: 'Software Evaluation Internship at Mekhos AI Labs Private Ltd., carrying out comprehensive software testing and system evaluations.',
      icon: 'fa-file-contract',
      link: '/mekhos_experience.pdf',
      linkText: 'View Experience Letter',
    },
    {
      title: 'Generative AI Certification',
      description: 'Specialized certification in Generative AI, covering AI model fundamentals, prompt engineering, and LLM application development.',
      icon: 'fa-brain',
      link: '/Gen_ai.pdf',
      linkText: 'View Certificate',
    },
    {
      title: 'DRISTI-2025 Conference',
      description: 'Attended the 3rd International Conference, DRISTI-2025, where I successfully presented and published my major project.',
      icon: 'fa-book-open-reader',
      link: '/drisht.pdf',
      linkText: 'View Certificate',
    },
    {
      title: 'Cognifyz Internship',
      description: 'Successfully completed a Frontend Developer Internship at Cognifyz Technologies between October and November 2025.',
      icon: 'fa-laptop-code',
      link: '/cognifyz.pdf',
      linkText: 'View Certificate',
    },
    {
      title: 'Hack for Hire Hackathon',
      description: 'Participated in the intensive 36-hour "Hack for Hire" hackathon, demonstrating rapid problem-solving and prototyping skills.',
      icon: 'fa-stopwatch',
      link: '/hackathon.pdf',
      linkText: 'View Certificate',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative bg-gradient-to-b from-transparent to-[#1a0508]/50">
      <div className="max-w-6xl mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-wider mb-4">
            Milestones & <span className="text-rose-500">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Highlighting key certificates, professional experiences, and competitive engineering events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 border-t-4 border-rose-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(225,29,72,0.15)] flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 mb-6 border border-rose-500/30">
                <i className={`fa-solid ${item.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-rose-400 text-sm font-bold hover:text-rose-300 transition-colors group mt-auto"
              >
                {item.linkText}{' '}
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
