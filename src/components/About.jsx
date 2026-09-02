import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-rose-500/20 reveal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-extrabold mb-6 text-white uppercase tracking-wider">
              About <span className="text-rose-500">Me</span>
            </h2>
            <img
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=400&auto=format&fit=crop"
              alt="Developer Life"
              className="w-full max-w-[250px] mx-auto rounded-xl border border-rose-500/30 filter drop-shadow-[0_0_15px_rgba(225,29,72,0.3)]"
            />
          </div>
          <div className="w-full md:w-2/3 text-lg text-slate-300 leading-relaxed border-l border-rose-500/30 pl-0 md:pl-10">
            <p className="mb-4">
              I am an Information Science Engineering Graduate, Full-Stack MERN Developer, and QA Automation Engineer with hands-on experience in building scalable web applications, RESTful microservices, and automated testing pipelines. Having completed software engineering internships at <span className="text-rose-400 font-semibold">Vstand4U Technologies</span> and <span className="text-rose-400 font-semibold">Mekhos AI Labs</span>, I specialize in architecting robust digital platforms with clean code and modern security practices.
            </p>
            <p>
              From engineering dynamic React.js interfaces and Node.js backend services to authoring Python API automation suites and building Generative AI solutions, I apply a meticulous problem-solving mindset to every project. I am passionate about crafting accessible, high-performance web applications that combine technical precision with exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
