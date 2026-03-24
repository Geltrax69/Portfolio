
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SkillsStitch = () => {
  return (
    <>
      


<main className="pt-32 pb-24">

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="max-w-7xl mx-auto px-8 mb-32">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-3/5">
<span className="font-label text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Genesis</span>
<h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface mb-8">
                        Coding with <br/> <span className="text-primary italic">Editorial</span> Intent.
                    </h1>
<p className="text-xl md:text-2xl text-secondary max-w-xl leading-relaxed">
                        I bridge the gap between complex engineering and human-centric design, curating digital experiences that feel as tactile as a well-printed journal.
                    </p>
</div>
<div className="md:w-2/5 relative">
<div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-xl shadow-sm">
<img alt="Portrait of a creator" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Monochromatic portrait of a focused professional in a modern studio setting with soft natural light hitting the side of their face" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZRS4Mhm3dYtoXZYCLofH-ftpn4_LIrOg4uPb49OJi6tkyoeI2B5FCNbO6BNoVKK2mMldw815sl-0f6fIdmVVCMaRANO8fx9ZxoVf2em10y9cODYxLUaRuqR56N0v55_7T9FJZ2SnTv5d3tf_ttDloJIF7O9hC2Zm48lXAILpYyHkehgMVRZRlJqTbGTALTLRczp2u4b44snnBwdsMFvkd7-lRn3e_7GvchLSmOwkNNFDoAUfDUpSOHoemWwf9YnBku86CLgC_f1Iz"/>
</div>

<div className="absolute -bottom-6 -left-6 w-32 h-32 text-primary opacity-20">
<svg className="w-full h-full fill-current" viewBox="0 0 100 100">
<path d="M10,50 Q25,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="4 2" strokeWidth="0.5"></circle>
</svg>
</div>
</div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="bg-surface-container-low py-32">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-headline text-5xl font-black tracking-tighter text-on-surface">Tech Stack &amp; Engineering</h2>
<p className="font-label text-secondary mt-2 tracking-widest uppercase">The Toolkit of a Digital Artisan</p>
</div>
<div className="text-right hidden md:block">
<span className="font-headline text-primary font-black text-7xl opacity-10">01</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">

<div className="md:col-span-2 md:row-span-2 bg-surface p-8 rounded-xl group hover:shadow-[0_40px_60px_rgba(28,28,22,0.04)] transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">terminal</span>
<h3 className="font-headline text-3xl font-bold tracking-tight mb-4">Core Architecture</h3>
<p className="text-secondary mb-8 leading-relaxed">Developing scalable systems with a focus on performance, clean abstractions, and maintainable patterns.</p>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label font-bold uppercase">React / Next.js</span>
<span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label font-bold uppercase">TypeScript</span>
<span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label font-bold uppercase">Node.js</span>
<span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label font-bold uppercase">PostgreSQL</span>
<span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label font-bold uppercase">GraphQL</span>
</div>
</div>

<div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl hover:bg-surface-container-highest transition-colors duration-300">
<div className="flex justify-between items-start mb-4">
<h3 className="font-headline text-2xl font-bold tracking-tight">Cloud Infrastructure</h3>
<span className="material-symbols-outlined text-secondary">cloud_done</span>
</div>
<div className="space-y-4">
<div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs font-label uppercase tracking-tighter font-bold">
<span>AWS / Vercel Deployment</span>
<span>85% Mastery</span>
</div>
</div>
</div>

<div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
<span className="material-symbols-outlined text-4xl" style={{fontVariationSettings: `'FILL' 1`}}>palette</span>
<div>
<h3 className="font-headline text-2xl font-bold tracking-tight mb-2">UI Mastery</h3>
<p className="text-on-primary/80 text-sm font-label uppercase tracking-widest">Figma / Tailwind</p>
</div>
</div>

<div className="bg-on-surface text-surface p-8 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
<span className="material-symbols-outlined text-4xl">functions</span>
<div>
<h3 className="font-headline text-2xl font-bold tracking-tight mb-2">Logics</h3>
<p className="text-surface/60 text-sm font-label uppercase tracking-widest">DSA / Optimization</p>
</div>
</div>
</div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="py-32 bg-background">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4 sticky top-32 h-fit">
<h2 className="font-headline text-5xl font-black tracking-tighter text-on-surface mb-6">Professional Journey</h2>
<p className="text-secondary leading-relaxed mb-8">A linear progression through technical challenges, academic rigor, and creative breakthroughs.</p>
<div className="p-8 border border-outline-variant/30 rounded-xl relative overflow-hidden bg-surface-container-low">
<div className="relative z-10">
<p className="font-label text-xs uppercase font-bold tracking-[0.2em] mb-4 text-primary">Current Focus</p>
<p className="font-body text-lg font-semibold italic text-on-surface">"Refining the intersection of high-performance backend systems and editorial frontend aesthetics."</p>
</div>

<div className="absolute -right-4 -bottom-4 w-24 h-24 text-primary opacity-10 rotate-12">
<svg className="fill-current" viewBox="0 0 100 100"><path d="M20,20 C40,10 60,90 80,80" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
</div>
</div>
</div>
<div className="md:col-span-8 space-y-12">

<div className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-primary before:rounded-full before:z-10 after:content-[''] after:absolute after:left-[7px] after:top-6 after:bottom-[-48px] after:w-[2px] after:bg-outline-variant/30">
<span className="font-label text-xs font-bold tracking-widest text-primary uppercase">2022 — Present</span>
<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">B.Tech Computer Science</h3>
<p className="font-body text-secondary mb-4 italic">Lovely Professional University</p>
<p className="text-on-surface-variant leading-relaxed max-w-2xl">Currently pursuing my undergraduate degree with a strong focus on core architecture and scalable software systems.</p>
</div>

<div className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-outline before:rounded-full before:z-10 after:content-[''] after:absolute after:left-[7px] after:top-6 after:bottom-[-48px] after:w-[2px] after:bg-outline-variant/30">
<span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">2023 — 2025</span>
<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">Specializations &amp; Certifications</h3>
<p className="font-body text-secondary mb-4 italic">MERN Stack &amp; Core Java</p>
<p className="text-on-surface-variant leading-relaxed max-w-2xl">Achieved advanced certification in MERN Stack Development from CipherSchools and completed the rigorous Core Java Bootcamp on Udemy.</p>
</div>

<div className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-outline before:rounded-full before:z-10">
<span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">2023 — 2024</span>
<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">Competitive Programming / Hackathons</h3>
<p className="font-body text-secondary mb-4 italic">Code-A-thon &amp; Binary-Bits</p>
<p className="text-on-surface-variant leading-relaxed max-w-2xl">Demonstrated strong technical rigour by securing the 15th rank in Code-A-thon (Dec '23) and 12th rank in the Binary-Bits Hackathon (Oct '24).</p>
</div>
</div>
</div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="bg-surface-container py-32">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="font-headline text-5xl font-black tracking-tighter text-on-surface mb-6">Why Initiate Collaboration?</h2>
<p className="text-secondary text-lg">I don't just write code; I curate solutions. My approach is rooted in three core values that define every project I touch.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center p-8 bg-surface rounded-xl hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
<span className="material-symbols-outlined text-primary text-3xl">psychology_alt</span>
</div>
<h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tighter">Intentional UX</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Every pixel is placed with purpose. I prioritize clarity and accessibility without sacrificing high-end aesthetic appeal.</p>
</div>
<div className="text-center p-8 bg-surface rounded-xl hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
<span className="material-symbols-outlined text-tertiary text-3xl">precision_manufacturing</span>
</div>
<h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tighter">Robust Engineering</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Beneath the surface lies rigorous code. I build for longevity, scale, and performance across all devices.</p>
</div>
<div className="text-center p-8 bg-surface rounded-xl hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center mx-auto mb-6">
<span className="material-symbols-outlined text-secondary text-3xl">handshake</span>
</div>
<h3 className="font-headline text-xl font-bold mb-4 uppercase tracking-tighter">Radical Transparency</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Communication is as important as the code. I keep partners in the loop at every milestone with clear, jargon-free updates.</p>
</div>
</div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="py-32">
<div className="max-w-7xl mx-auto px-8 text-center">
<div className="bg-on-surface text-surface py-24 px-8 rounded-2xl relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-64 h-64 border-2 border-surface/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-surface/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
</div>
<div className="relative z-10">
<h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">Ready to start the <br/> next <span className="text-primary italic">Chapter</span>?</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<Link to="/contact" className="inline-block bg-primary hover:bg-primary-container text-on-primary px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_40px_60px_rgba(0,0,0,0.2)]">
                                Initiate Collaboration
                            </Link>
<Link to="/work" className="inline-block bg-transparent border border-surface-variant/30 text-surface/80 hover:text-surface px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight transition-all duration-300">
                                View My Work
                            </Link>
</div>
</div>
</div>
</div>
</motion.section>
</main>

<footer className="bg-[#fcf9ef] dark:bg-[#1c1c16] w-full border-t border-[#ddc0bd]/15">
<div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-6">
<div className="flex items-center gap-4">
<span className="font-epilogue font-bold text-[#1c1c16] text-xl tracking-tighter">LALIT.DEV</span>
<span className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e]">© 2024 Crafted with Intent.</span>
</div>
<div className="flex gap-8">
<a className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e] hover:text-[#9d3732] transition-colors duration-300" href="https://github.com/Geltrax69" target="_blank" rel="noreferrer">Github</a>
<a className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e] hover:text-[#9d3732] transition-colors duration-300" href="https://linkedin.com/in/lalitsingh69" target="_blank" rel="noreferrer">LinkedIn</a>
<a className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e] hover:text-[#9d3732] transition-colors duration-300" href="https://github.com/Geltrax69/Portfolio" target="_blank" rel="noreferrer">Source Code</a>
</div>
</div>
</footer>

    </>
  );
};

export default SkillsStitch;
