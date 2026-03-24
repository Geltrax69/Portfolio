import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9ef]/80 backdrop-blur-xl border-b border-outline-variant/15">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-8 py-6">
        <a className="text-2xl font-black text-[#1c1c16] tracking-tighter uppercase font-headline hover:scale-105 transition-transform" href="/">
          LALIT.DEV
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a
            className={"font-headline tracking-tighter font-bold uppercase transition-all " + (location.pathname === '/' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-[#1c1c16]')}
            href="/"
          >
            Home
          </a>
          <a
            className={"font-headline tracking-tighter font-bold uppercase transition-all " + (location.pathname === '/work' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-[#1c1c16]')}
            href="/work"
          >
            Work
          </a>
          <a
            className={"font-headline tracking-tighter font-bold uppercase transition-all " + (location.pathname === '/skills' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-[#1c1c16]')}
            href="/skills"
          >
            Skills
          </a>
          <a
            className={"font-headline tracking-tighter font-bold uppercase transition-all " + (location.pathname === '/about' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-[#1c1c16]')}
            href="/about"
          >
            About
          </a>
        </div>
        <a
          href="/contact"
          className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-label text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
