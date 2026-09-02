import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      access_key: 'b3707974-f5ac-41b6-b134-76c1aca18c39',
      ...formData,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        console.error('Error sending message');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto reveal glass-card rounded-3xl p-8 md:p-12 border border-rose-500/20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white uppercase tracking-wider">
          Get In <span className="text-rose-500">Touch</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg text-slate-300 mb-8">
              Let's collaborate! I am always open to discussing exciting projects, full-stack development roles, and new engineering opportunities. Drop me a line.
            </p>
            
            <a
              href="mailto:megharajpmeghu@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-900/20 border border-transparent hover:border-rose-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                <i className="fa-regular fa-envelope text-xl"></i>
              </div>
              <div>
                <span className="text-white font-medium block">megharajpmeghu@gmail.com</span>
                <span className="text-sm text-slate-400">Email Me</span>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.2)]">
                <i className="fa-solid fa-location-dot text-xl"></i>
              </div>
              <div>
                <span className="text-white font-medium block">Shivamogga, Karnataka</span>
                <span className="text-sm text-slate-400">Location</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative" id="form-wrapper">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-6 transition-all duration-500">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-slate-400 left-4 top-3.5 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-slate-900 peer-focus:px-1 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-slate-900 peer-valid:px-1 transition-all"
                  >
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-slate-400 left-4 top-3.5 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-slate-900 peer-focus:px-1 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-slate-900 peer-valid:px-1 transition-all"
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all peer resize-none"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-slate-400 left-4 top-3.5 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-slate-900 peer-focus:px-1 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-slate-900 peer-valid:px-1 transition-all"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="w-full glass-card p-12 rounded-2xl flex flex-col items-center justify-center text-center gap-4 border border-cyan-500/50 fade-in-up">
                <i className="fa-solid fa-circle-check text-5xl text-cyan-400 mb-2"></i>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-300">
                  Thank you for reaching out. I've received your message and will get back to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
