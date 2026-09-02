import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-rose-900/50 text-center bg-[#0a0203]">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Megharaj P. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
