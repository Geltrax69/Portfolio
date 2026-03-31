
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResumeViewer from '../components/ResumeViewer';

const ContactStitch = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  return (
    <> 
      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} /> 
      


<main className="pt-32">

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="px-8 max-w-screen-2xl mx-auto mb-24 md:mb-48">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-8">
<span className="font-label text-primary font-bold tracking-widest uppercase mb-6 block">BTech Computer Science</span>
<h1 className="font-headline font-black text-huge tracking-tighter text-on-surface">
                        Designing <br/>
<span className="text-primary italic">Logic</span> with <br/>
                        Empathy.
                    </h1>
</div>
<div className="lg:col-span-4 pb-4">
<p className="text-secondary text-xl leading-relaxed max-w-md">
                        I bridge the gap between complex algorithmic structures and human-centric digital experiences. A curator of clean code and editorial aesthetics.
                    </p>
</div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="mb-48 px-8 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 items-start">
<div className="md:col-span-5 sticky top-32">
<motion.div 
  initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
  whileHover={{ scale: 1.02, rotate: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
>
<img alt="Student portrait" className="w-full h-full object-contain bg-white p-4 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" data-alt="Modern professional portrait of a young male computer scientist in a minimalist studio setting with soft natural window lighting and warm tones." src="/front.png"/>
</motion.div>
<div className="mt-8 flex gap-4">
<div className="bg-surface-container-low p-6 rounded-xl flex-1 border border-outline-variant/10">
<p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Location</p>
<p className="font-headline font-bold text-lg">Bangalore, IN</p>
</div>
<div className="bg-surface-container-low p-6 rounded-xl flex-1 border border-outline-variant/10">
<p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Focus</p>
<p className="font-headline font-bold text-lg">Full-Stack Craft</p>
</div>
</div>
</div>
<div className="md:col-span-7 pt-12 md:pt-24">
<div className="space-y-12">
<div className="max-w-xl">
<h2 className="font-headline font-bold text-4xl mb-8 tracking-tight">The Origin Story & Achievements</h2>
<p className="text-lg text-secondary leading-relaxed mb-6">
    My journey into Computer Science is deeply rooted in systems scale and architecture. Pursuing a B.Tech in CSE at Lovely Professional University (GPA: 6.5), with prior academic excellence in intermediate school (GPA: 7.6) and matriculation (GPA: 8.5).
</p>
<p className="text-lg text-secondary leading-relaxed mb-6">
    I have consistently showcased technical rigour: securing the 15th rank in Code-A-thon (Dec '23) and 12th rank in the Binary-Bits Hackathon (Oct '24). To further solidify my expertise, I have attained certifications in MERN Stack Development from CipherSchools (Jul '25) and completed the Core Java Bootcamp on Udemy (Feb '24).
</p>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container p-8 rounded-xl hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-primary mb-4" style={{fontVariationSettings: `'FILL' 1`}}>terminal</span>
<h3 className="font-headline font-bold text-xl mb-2">Engineering</h3>
<p className="text-secondary font-label text-sm">C++, Java, Python, Go, Node.js</p>
</div>
<div className="bg-surface-container-highest p-8 rounded-xl hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-primary mb-4" style={{fontVariationSettings: `'FILL' 1`}}>palette</span>
<h3 className="font-headline font-bold text-xl mb-2">Systems & Architectures</h3>
<h4 className="text-secondary font-label text-sm">Next.js, Flutter, AWS, Postgres</h4>
</div>
<div className="bg-primary text-on-primary p-8 rounded-xl col-span-2 flex items-center justify-between cursor-pointer" onClick={() => window.open('/resume_lalit_singh.pdf', '_blank')}>
<div>
<h3 className="font-headline font-bold text-2xl mb-1">View Full Resume</h3>
<p className="font-label text-sm opacity-80 uppercase tracking-widest">PDF Viewer</p>
</div>
<span className="material-symbols-outlined text-4xl">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</motion.section>


<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }} className="px-8 max-w-screen-2xl mx-auto mb-24 md:mb-48">
    <div className="mb-12">
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter text-on-surface">
            Resume & <span className="text-primary italic">Credentials</span>
        </h2>
        <p className="text-xl text-secondary mt-4">Verified certificates and full curriculum vitae details directly accessible.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 h-[80vh]">
            <iframe src="/resume_lalit_singh.pdf" className="w-full h-full border-none" title="Resume"></iframe>
        </div>
        <div className="flex flex-col gap-8 h-[80vh]">
            <div className="bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 flex-1 relative">
               <iframe src="https://drive.google.com/file/d/1k4QCRI3jZECrOQmCstJc6YiEjvPNYhIt/preview" className="w-full h-full border-none" title="Certificate 1"></iframe>
            </div>
            <div className="bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 flex-1 relative">
               <iframe src="https://drive.google.com/file/d/1uRLO1jRIhToFPJJT-L_GR6HsSybYGrO2/preview" className="w-full h-full border-none" title="Certificate 2"></iframe>
            </div>
        </div>
    </div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="bg-on-surface text-background py-32 md:py-48 px-8 overflow-hidden relative" id="contact">

<div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
<svg height="600" viewBox="0 0 200 200" width="600" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.4,87.1,-15.7,86.2,-0.5C85.3,14.7,80.1,29.4,72,42.4C63.9,55.4,52.9,66.6,39.6,73.6C26.3,80.6,10.7,83.4,-4.4,81.1C-19.5,78.8,-34,71.4,-46.8,61.8C-59.5,52.2,-70.5,40.3,-77.1,26.4C-83.7,12.5,-85.9,-3.4,-82.4,-18.2C-78.9,-33,-69.7,-46.7,-57.4,-54.5C-45.1,-62.3,-29.7,-64.2,-15.5,-70.6C-1.3,-77,14.1,-87.9,44.7,-76.4Z" fill="#BD4F48" transform="translate(100 100)" />
</svg>
</div>
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
<div>
<h2 className="font-headline font-black text-6xl md:text-8xl tracking-tighter mb-12">
                        Let’s start <br/> the <span className="text-primary-container">dialogue.</span>
</h2>
<p className="text-xl text-surface-variant/70 leading-relaxed mb-12 max-w-lg">
                        I am currently seeking opportunities to join forward-thinking engineering teams. If you have a project or a role that demands a blend of technical rigor and design intent, let's talk.
                    </p>
<div className="space-y-6">
<a className="group flex items-center gap-6 text-2xl md:text-3xl font-headline font-bold hover:text-primary-container transition-colors" href="mailto:hello@craftandcode.com">
<span className="p-4 rounded-full bg-surface-container-highest/10 group-hover:bg-primary-container/20 transition-all">
<span className="material-symbols-outlined text-primary-container">alternate_email</span>
</span>
                            lalit.builds@gmail.com
                        </a>
<div className="flex gap-4 pt-8">
<a className="font-label uppercase tracking-widest text-sm border-b border-surface-variant/30 pb-1 hover:border-primary-container transition-all" href="https://linkedin.com/in/lalitsingh69" target="_blank" rel="noreferrer">LinkedIn</a>
<a className="font-label uppercase tracking-widest text-sm border-b border-surface-variant/30 pb-1 hover:border-primary-container transition-all" href="https://github.com/Geltrax69" target="_blank" rel="noreferrer">Github</a>
<a className="font-label uppercase tracking-widest text-sm border-b border-surface-variant/30 pb-1 hover:border-primary-container transition-all" href="#">Twitter</a>
</div>
</div>
</div>
<div className="bg-surface-container-lowest/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-surface-variant/10">
<form className="space-y-8">
<div>
<label className="font-label text-xs uppercase tracking-[0.2em] text-surface-variant/50 block mb-4">Your Identity</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary transition-all py-4 px-0 text-xl font-headline placeholder:text-surface-variant/30" placeholder="Name or Company" type="text"/>
</div>
<div>
<label className="font-label text-xs uppercase tracking-[0.2em] text-surface-variant/50 block mb-4">The Subject</label>
<input className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary transition-all py-4 px-0 text-xl font-headline placeholder:text-surface-variant/30" placeholder="Email address" type="email"/>
</div>
<div>
<label className="font-label text-xs uppercase tracking-[0.2em] text-surface-variant/50 block mb-4">The Brief</label>
<textarea className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary transition-all py-4 px-0 text-xl font-headline placeholder:text-surface-variant/30 resize-none" placeholder="Tell me about your project or vision..." rows="4"></textarea>
</div>
<button className="w-full bg-primary py-6 rounded-full font-headline font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-4" type="submit">
                            Send Message
                            <span className="material-symbols-outlined">send</span>
</button>
</form>
</div>
</div>
</motion.section>
</main>

<footer className="bg-stone-100 dark:bg-stone-900 w-full rounded-t-none border-t border-[#ddc0bd]/15">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12 py-24 w-full max-w-screen-2xl mx-auto">
<div>
<div className="font-epilogue font-bold text-lg text-[#1c1c16] dark:text-white mb-6">LALIT SINGH</div>
<p className="font-plus-jakarta text-sm leading-relaxed text-[#5f5e5e] dark:text-stone-400 max-w-xs">
                    © 2024 Digital Curator. Built with Intent. Focusing on the intersection of human design and robust engineering.
                </p>
</div>
<div className="flex flex-col md:items-end justify-center space-y-4">
<div className="flex gap-8">
<a className="text-[#5f5e5e] dark:text-stone-400 hover:text-[#9d3732] font-plus-jakarta text-sm transition-opacity hover:opacity-80" href="https://github.com/Geltrax69" target="_blank" rel="noreferrer">Github</a>
<a className="text-[#5f5e5e] dark:text-stone-400 hover:text-[#9d3732] font-plus-jakarta text-sm transition-opacity hover:opacity-80" href="https://linkedin.com/in/lalitsingh69" target="_blank" rel="noreferrer">LinkedIn</a>
<a className="text-[#5f5e5e] dark:text-stone-400 hover:text-[#9d3732] font-plus-jakarta text-sm transition-opacity hover:opacity-80" href="#">Twitter</a>
<a className="text-[#5f5e5e] dark:text-stone-400 hover:text-[#9d3732] font-plus-jakarta text-sm transition-opacity hover:opacity-80" href="#" onClick={() => window.open('/resume_lalit_singh.pdf', '_blank')}>Resume</a>
</div>
<p className="font-label text-xs uppercase tracking-widest text-secondary/40">Handcrafted in VS Code</p>
</div>
</div>
</footer>

    </>
  );
};

export default ContactStitch;
